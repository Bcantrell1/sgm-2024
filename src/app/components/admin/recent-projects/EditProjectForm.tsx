import InputField from '@/app/components/global/InputField';
import { db } from '@/firebase/clientApp';
import { RecentProject } from '@/types/RecentProject';
import { doc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';
import TextareaField from '../../global/TextareaField';

interface EditProjectFormProps {
  project: RecentProject;
  onSave: (updatedProject: RecentProject) => void;
  onCancel: () => void;
}

export default function EditProjectForm({ project, onSave, onCancel }: EditProjectFormProps) {
  const [editingProject, setEditingProject] = useState(project);

  const updateProjectDetails = async () => {
    const projectRef = doc(db, "recentProjects", project.id);
    
    const updateData = {
      title: editingProject.title,
      client: editingProject.client,
      description: editingProject.description,
      workType: editingProject.workType,
      completionDate: editingProject.completionDate,
    };

    await updateDoc(projectRef, updateData);
    onSave(editingProject);
  };

  return (
    <div>
      <InputField
        id='title'
        label='Title'
        type="text"
        value={editingProject.title}
        onChange={(e: any) => setEditingProject({...editingProject, title: e})}
        placeholder='Title'
      />
      <InputField
        id='client'
        label='Client'
        type="text"
        value={editingProject.client}
        onChange={(e: any) => setEditingProject({...editingProject, client: e})}
        placeholder='Client'
      />
      <TextareaField
        id='description'
        label='Description'
        placeholder='Message'
        value={editingProject.description}
        onChange={(e: any) => setEditingProject({...editingProject, description: e})}
      />
      <div className="flex justify-end mt-2 space-x-2">
        <button onClick={updateProjectDetails} className="neu-button-green">Save</button>
        <button onClick={onCancel} className="neu-button-error">Cancel</button>
      </div>
    </div>
  );
}