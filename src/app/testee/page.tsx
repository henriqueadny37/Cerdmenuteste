"use client";

import { useEffect, useState } from "react";

export default function ClientPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, []);

  return (
    <div>
      <div className="text-center mt-5 mb-2 text-3xl">
        <h1>Página Client</h1>
      </div>
      <button
        className="cursor-pointer bg-orange-500 rounded-md p-2"
        onClick={() => alert("Teste!")}>
        Voltar
      </button>
      <div>
        {posts.map((post: any) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
