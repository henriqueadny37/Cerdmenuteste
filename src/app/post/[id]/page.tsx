import PostInfo from "./components/posts";
import { Suspense } from "react";

export default async function DetailPosts({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  await new Promise((resolve) => setTimeout(resolve, 4000));

  return (
    <div>
      <h1 className="font-bold text-center">Detalhes dos Posts: {id}</h1>
      <Suspense fallback={<h1>Carregando...</h1>}>
        <PostInfo id={id} />
      </Suspense>
    </div>
  );
}
