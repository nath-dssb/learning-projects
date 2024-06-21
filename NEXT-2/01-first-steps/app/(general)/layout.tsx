import { NavBar } from "@/components";

export default function NameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <main className=" flex flex-col items-center">
        <h3 className=" text-3xl">Bienvenid@</h3>
        {children}
      </main>
    </>
  );
}
