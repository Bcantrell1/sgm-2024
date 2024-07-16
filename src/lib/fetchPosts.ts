import { db } from '@/firebase/clientApp';
import { BlogPost } from '@/types/BlogPost';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';

export async function fetchPosts() {
  const q = query(collection(db, 'blogPosts'), orderBy('createdAt', 'desc'));
  const querySnapshot = await getDocs(q);
  const posts: BlogPost[] = [];
  querySnapshot.forEach((doc) => {
    posts.push({ id: doc.id, ...doc.data() } as BlogPost);
  });
  return posts;
}