'use client';
import { fetchDisplayedRecentProjects } from '@/lib/fetchRecentProjects';
import { RecentProject } from '@/types/RecentProject';
import NextImage from 'next/image';
import { useEffect, useState } from 'react';

export default function RecentProjects() {
  const [recentProjects, setRecentProjects] = useState<RecentProject[]>([]);

  useEffect(() => {
    const loadDisplayedProjects = async () => {
      const projects = await fetchDisplayedRecentProjects(3);
      setRecentProjects(projects);
    };

    loadDisplayedProjects();
  }, []);

  return (
    <div className="bg-neu-base py-4">
      <h2 className="text-2xl font-semibold text-gray-300 mb-4">Recent Projects</h2>
      <ul className="space-4 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {recentProjects.map((project) => (
          <li key={project.id} className="bg-neu-light rounded-xl shadow-neumorphic">
						<div className='relative w-full inline-block min-h-80'>
							<NextImage 
								alt={project.title}
								src={project.thumbnail}
								className="object-cover rounded-t-xl rounded-tr-xl" 
								fill
							/>
						</div>
						<div className=' px-6 py-4'>
							<p className="text-sm font-medium text-neu-green">{project.title}</p>
							<p className="text-sm text-gray-300">{project.description}</p>
							<p className="text-xs text-gray-400">Completed: {new Date(project.completionDate).toLocaleDateString()}</p>
						</div>
          </li>
        ))}
      </ul>
    </div>
  );
}