import { BlogPost } from '@/types/BlogPost';
import BlogPostItem from './BlogPostItem';

export default async function BlogPosts({ postsPromise }: { postsPromise: Promise<BlogPost[]> }) {
  const posts = await postsPromise;

  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <BlogPostItem key={post.id} post={post} />
      ))}
    </div>
  );
}