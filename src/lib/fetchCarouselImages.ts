import { db } from '@/firebase/clientApp';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';

export interface CarouselImage {
  id: string;
  url: string;
  name: string;
}

export async function fetchCarouselImages(): Promise<CarouselImage[]> {
  const q = query(collection(db, 'carouselImages'), orderBy('createdAt', 'desc'));
  const querySnapshot = await getDocs(q);
  const images: CarouselImage[] = [];
  querySnapshot.forEach((doc) => {
    images.push({ id: doc.id, ...doc.data() } as CarouselImage);
  });
  return images;
}