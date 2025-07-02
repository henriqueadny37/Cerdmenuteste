import Link from "next/link";

export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface ResponseProps {
  posts: PostProps[];
}

export const revalidate = 60;

export default async function PostPage() {
  const response = await fetch("https://dummyjson.com/posts", {
    cache: "force-cache",
    next: {
      revalidate: 60,
    }, // a cada uma hora irá buscar dados na API (feita alteração recente para 60)
  }); //Aguarda a resposta da requisição
  const data: ResponseProps = await response.json(); //Aguarda a resposta ser convertida para JSON

  async function handleFetchPosts() {
    "use server";
    const response = await fetch("https://dummyjson.com/posts");
    const data: ResponseProps = await response.json();

    console.log(data.posts);
  }

  async function handleSearchUser(formData: FormData) {
    "use server";
    const userId = formData.get("userId");

    const response = await fetch(`https://dummyjson.com/posts/user/${userId}`);
    const data: ResponseProps = await response.json();

    console.log(data);
  }

  return (
    <div>
      <h1 className="text-center mt-5 mb-2 font-bold text-3xl">
        Todos os posts
      </h1>

      <button onClick={handleFetchPosts}>Buscar Posts</button>

      <form className="flex gap-2 my-4" action={handleSearchUser}>
        <input
          type="text"
          placeholder="ID user"
          className="border-gray-200 p-2"
          name="userId"
        />
        <button
          className="bg-blue-500 text-white rounded-md cursor-pointer p-2"
          type="submit">
          Buscar ID
        </button>
      </form>

      <div className="flex flex-col gap-4 mx-2">
        {data.posts.map((post) => (
          <div key={post.id} className="bg-gray-300 rounded-md p-4 text-black">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
            <Link href={`/post/${post.id}`} className="text-blue-500">
              Acessar posts
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
