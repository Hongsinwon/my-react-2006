import { useFetchPosts } from '../api/data';

function PostList() {
  const { posts, loading, error } = useFetchPosts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error occurred.</p>;

  return (
    <ul>
      {posts.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  );
}

export default PostList;
