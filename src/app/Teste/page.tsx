"use server";

interface DadosProps {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface ResponseProps {
  posts: DadosProps[];
}

export default async function TestPage() {
  const response = await fetch("https://dummyjson.com/posts"); //Aguarda a resposta da requisição
  const data: ResponseProps = await response.json(); //recebe a resposta da requisição

  console.log(data);

  return (
    <div>
      <h1 className="text-green-500">Todos os Posts</h1>
      <div className="text-green-500">
        {data.posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
