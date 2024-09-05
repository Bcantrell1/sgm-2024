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
    <div className="py-0 md:py-20">
			<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center md:text-left ">
          RECENT <span className="text-neu-green">PROJECTS</span>
        </h2>
      <ul className="space-4 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {recentProjects.map((project) => (
          <li key={project.id} className="bg-neu-light flex flex-col rounded-xl shadow-neumorphic">
						<div className='relative w-full inline-block min-h-80'>
							<NextImage 
								alt={project.title}
								src={project.thumbnail}
								className="object-cover rounded-t-xl rounded-tr-xl" 
								fill
							/>
						</div>
						<div className='flex flex-col flex-1 h-auto px-6 py-4'>
							<p className="text-lg font-medium text-neu-yellow">{project.title}</p>
							{/* <p className="text-md mb-2 text-gray-300">{project.description}</p> */}
							<p className="text-xs flex-grow flex items-end text-gray-400">Project Completed: {new Date(project.completionDate).toLocaleDateString()}</p>
						</div>
          </li>
        ))}
      </ul>
    </div>
  );
}