import { handleThumbnailDelete, handleThumbnailUpload } from '@/lib/fetchRecentProjects';
import { RecentProject } from '@/types/RecentProject';
import NextImage from 'next/image';

interface ProjectThumbnailProps {
  project: RecentProject;
  onProjectUpdate: (updatedProject: RecentProject) => void;
}

export default function ProjectThumbnail({ project, onProjectUpdate }: ProjectThumbnailProps) {
  const handleThumbnailChange = async (file: File) => {
    try {
      const updatedProjects = await handleThumbnailUpload(file, project.id);
      const updatedProject = updatedProjects.find(p => p.id === project.id);
      if (updatedProject) {
        onProjectUpdate(updatedProject);
      }
    } catch (error) {
      console.error('Failed to update thumbnail:', error);
    }
  };

  const handleThumbnailRemove = async () => {
    try {
      const updatedProjects = await handleThumbnailDelete(project);
      const updatedProject = updatedProjects.find(p => p.id === project.id);
      if (updatedProject) {
        onProjectUpdate(updatedProject);
      }
    } catch (error) {
      console.error('Failed to remove thumbnail:', error);
    }
  };

  return (
    <div className='flex-1 flex flex-col'>
      {project.thumbnail ? (
        <>
          <div className='relative inline-block w-full h-full min-h-60'>
            <NextImage 
              src={project.thumbnail} 
              alt={project.title} 
              className="h-full w-full object-cover rounded" 
              fill
            />
          </div>
          <button className='neu-button-error mt-2' onClick={handleThumbnailRemove}>Delete</button>
        </>
      ) : (
        <input 
          type="file" 
          accept="image/*" 
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              handleThumbnailChange(e.target.files[0]);
            }
          }} 
        />
      )}
    </div>
  );
}