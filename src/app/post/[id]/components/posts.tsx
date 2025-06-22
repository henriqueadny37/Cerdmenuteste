import { PostProps } from "../../page";

export default async function PostInfo({ id }: { id: string }) {
  new Promise((resolve) => setTimeout(resolve, 4000));

  const response = await fetch(`https://dummyjson.com/post/${id}`);
  const data: PostProps = await response.json();

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}
