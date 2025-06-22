import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lista Maná",
  description: "menu",
};

export default function Lista() {
  return (
    <div>
      <div className="flex bg-black text-green-500 h-28 p-2 text-3xl font-semibold gap-4 justify-center items-center">
        Maná <span className="text-orange-500">Poke</span> Delivery
      </div>
    </div>
  );
}
