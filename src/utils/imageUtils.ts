import { db, storage } from '@/firebase/clientApp';
import { CarouselImage } from '@/lib/fetchCarouselImages';
import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query } from 'firebase/firestore';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';

export const handleUpload = async (file: File): Promise<CarouselImage[]> => {
  const storageRef = ref(storage, `carousel/${file.name}`);
  
  try {
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    await addDoc(collection(db, 'carouselImages'), {
      name: file.name,
      url: downloadURL,
      createdAt: new Date()
    });

    return await fetchUpdatedImages();
  } catch (error) {
    console.error('Error uploading image: ', error);
    throw new Error('Failed to upload image.');
  }
};

export const handleDelete = async (image: CarouselImage): Promise<CarouselImage[]> => {
  try {
    const storageRef = ref(storage, `carousel/${image.name}`);
    await deleteObject(storageRef);
    await deleteDoc(doc(db, 'carouselImages', image.id));

    return await fetchUpdatedImages();
  } catch (error) {
    console.error('Error deleting image: ', error);
    throw new Error('Failed to delete image.');
  }
};

async function fetchUpdatedImages(): Promise<CarouselImage[]> {
  const q = query(collection(db, 'carouselImages'), orderBy('createdAt', 'desc'));
  const querySnapshot = await getDocs(q);
  const images: CarouselImage[] = [];
  querySnapshot.forEach((doc) => {
    images.push({ id: doc.id, ...doc.data() } as CarouselImage);
  });
  return images;
}