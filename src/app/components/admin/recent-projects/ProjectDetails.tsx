import { RecentProject } from '@/types/RecentProject';
import ProjectThumbnail from './ProjectThumbnail';

interface ProjectDetailsProps {
  project: RecentProject;
  onEdit: () => void;
  onProjectUpdate: (updatedProject: RecentProject) => void;
}

export default function ProjectDetails({ project, onEdit, onProjectUpdate }: ProjectDetailsProps) {
  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='flex-1'>
        <div className="font-medium text-lg text-neu-green">{project.title}</div>
        <div className="text-gray-300">Client: {project.client}</div>
        <div className="text-gray-300">Work Type: {project.workType}</div>
        <div className="text-gray-300">Completion Date: {new Date(project.completionDate).toLocaleDateString()}</div>
        <div className="text-gray-300">Description: {project.description}</div>
        <div className="my-2 space-x-2">
          <button onClick={onEdit} className="neu-button">Edit</button>
        </div>
      </div>
      <div className='flex flex-1'>
        <ProjectThumbnail project={project} onProjectUpdate={onProjectUpdate} />
      </div>
    </div>
  );
}