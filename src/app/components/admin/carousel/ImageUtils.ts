'use client';
import { db, storage } from '@/firebase/clientApp';
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';

interface CarouselImage {
  id: string;
  url: string;
  name: string;
}

export const handleUpload = async (file: File, onClose: () => void) => {
  const storageRef = ref(storage, `carousel/${file.name}`);
  
  try {
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    await addDoc(collection(db, 'carouselImages'), {
      name: file.name,
      url: downloadURL,
      createdAt: new Date()
    });

    onClose();
    alert('Image uploaded successfully!');
  } catch (error) {
    console.error('Error uploading image: ', error);
    alert('Failed to upload image.');
  }
};

export const handleDelete = async (image: CarouselImage, onClose: () => void) => {
  try {
    const storageRef = ref(storage, `carousel/${image.name}`);
    await deleteObject(storageRef);
    await deleteDoc(doc(db, 'carouselImages', image.id));
    onClose();
    alert('Image deleted successfully!');
  } catch (error) {
    console.error('Error deleting image: ', error);
    alert('Failed to delete image.');
  }
};