'use client';
import ProjectItem from '@/app/components/admin/recent-projects/ProjectItem';
import { db } from '@/firebase/clientApp';
import { RecentProject } from '@/types/RecentProject';
import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from 'react';

export default function RecentProjects() {
  const [allProjects, setAllProjects] = useState<RecentProject[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(3); // Adjust this number as needed
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecentProjects = async () => {
      try {
        setLoading(true);
        const q = query(collection(db, "recentProjects"));
        const querySnapshot = await getDocs(q);
        
        const projects: RecentProject[] = [];
        querySnapshot.forEach((doc) => {
          const projectData = doc.data();
          projects.push({ id: doc.id, ...projectData } as RecentProject);
        });
        
        setAllProjects(projects);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Failed to fetch projects. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    
    fetchRecentProjects();
  }, []);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = allProjects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="py-4 sm:py-6">
      <h1 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-4 sm:mb-6">Recently Completed Projects</h1>
      {allProjects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {currentProjects.map((project) => (
              <ProjectItem key={project.id} project={project} onProjectUpdate={(updatedProject) => {
                setAllProjects(allProjects.map(p => p.id === updatedProject.id ? updatedProject : p));
              }} />
            ))}
          </ul>
          <div className="mt-4 flex justify-center">
            {Array.from({ length: Math.ceil(allProjects.length / projectsPerPage) }, (_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={`neu-button mx-1 ${currentPage === i + 1 ? 'neu-button-green' : ''}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}