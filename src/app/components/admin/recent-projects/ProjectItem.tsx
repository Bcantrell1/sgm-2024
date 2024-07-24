import { db } from '@/firebase/clientApp';
import { RecentProject } from '@/types/RecentProject';
import { doc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';
import CheckboxField from '../../global/CheckboxField';
import EditProjectForm from './EditProjectForm';
import ProjectDetails from './ProjectDetails';

interface ProjectItemProps {
  project: RecentProject;
  onProjectUpdate: (updatedProject: RecentProject) => void;
}

export default function ProjectItem({ project, onProjectUpdate }: ProjectItemProps) {
  const [editingProject, setEditingProject] = useState<RecentProject | null>(null);

  const toggleProjectDisplay = async () => {
    const projectRef = doc(db, "recentProjects", project.id);
    const newIsDisplayed = !project.isDisplayed;
    await updateDoc(projectRef, { isDisplayed: newIsDisplayed });
    onProjectUpdate({ ...project, isDisplayed: newIsDisplayed });
  };

  return (
    <li className="bg-neu-base p-4 rounded-lg shadow-neumorphic">
      {editingProject ? (
        <EditProjectForm
          project={editingProject}
          onSave={(updatedProject) => {
            onProjectUpdate(updatedProject);
            setEditingProject(null);
          }}
          onCancel={() => setEditingProject(null)}
        />
      ) : (
        <ProjectDetails
          project={project}
          onEdit={() => setEditingProject(project)}
          onProjectUpdate={onProjectUpdate}
        />
      )}
      <div className="mt-2 flex items-center">
        <CheckboxField 
          id={project.id}
          checked={project.isDisplayed}
          label='Display on recent projects page'
          onChange={toggleProjectDisplay}
        />
      </div>
    </li>
  );
}