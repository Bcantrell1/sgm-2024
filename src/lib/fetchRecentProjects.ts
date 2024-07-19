import { db, storage } from '@/firebase/clientApp';
import { RecentProject } from '@/types/RecentProject';
import { collection, doc, getDocs, limit, orderBy, query, updateDoc, where } from "firebase/firestore";
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';

export const handleThumbnailUpload = async (file: File, projectId: string): Promise<RecentProject[]> => {
  const storageRef = ref(storage, `recentProjects/${projectId}/${file.name}`);

  try {
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);

    // Update the recent project document with the new thumbnail URL
    await updateDoc(doc(db, 'recentProjects', projectId), {
      thumbnail: downloadURL
    });

    return await fetchRecentProjects();
  } catch (error) {
    console.error('Error uploading thumbnail: ', error);
    throw new Error('Failed to upload thumbnail.');
  }
};

export const handleThumbnailDelete = async (project: RecentProject): Promise<RecentProject[]> => {
  if (!project.thumbnail) {
    console.error('No thumbnail to delete');
    return await fetchRecentProjects();
  }

  try {
    const storageRef = ref(storage, project.thumbnail);
    await deleteObject(storageRef);

    // Update the recent project document to remove the thumbnail URL
    await updateDoc(doc(db, 'recentProjects', project.id), {
      thumbnail: ''
    });

    return await fetchRecentProjects();
  } catch (error) {
    console.error('Error deleting thumbnail: ', error);
    throw new Error('Failed to delete thumbnail.');
  }
};

async function fetchRecentProjects(): Promise<RecentProject[]> {
  const q = query(collection(db, 'recentProjects'), orderBy('completionDate', 'desc'));
  const querySnapshot = await getDocs(q);
  const projects: RecentProject[] = [];
  querySnapshot.forEach((doc) => {
    projects.push({ id: doc.id, ...doc.data() } as RecentProject);
  });
  return projects;
}

export async function fetchDisplayedRecentProjects(limitCount: number = 5): Promise<RecentProject[]> {
  const recentProjectsRef = collection(db, "recentProjects");
  let q;
  
  try {
    q = query(
      recentProjectsRef, 
      where("isDisplayed", "==", true),
      orderBy("completionDate", "desc"), 
      limit(limitCount)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as RecentProject));
  } catch (error) {
    console.error("Error fetching displayed projects with index:", error);
    
    console.log("Falling back to fetching all projects and filtering in memory");
    q = query(recentProjectsRef, orderBy("completionDate", "desc"));
    const querySnapshot = await getDocs(q);
    const allProjects = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as RecentProject));
    
    return allProjects
      .filter(project => project.isDisplayed)
      .slice(0, limitCount);
  }
}