import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Maná Poke ",
  description: "Delivery Foods",
  openGraph: {
    title: "Aprendendo next.Js",
    description: "Aula Next.Js project test",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const revalidate = 60;

export default function Home() {
  const RandomNumber = Math.random() * 10;

  return (
    <div>
      <h1>CardMenu</h1>
      <p>Gerar código {RandomNumber}</p>
    </div>
  );
}
