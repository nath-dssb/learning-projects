import { WidgetsGrid } from "@/components";


export const metadata = {
 title: 'Admin Dashboard',
 description: 'Admin Dashboard',
};

export default function NamePage() {
  return (
    <div className=" text-black p-2">
      <h1 className=" mt-2 text-3xl">Dashboard</h1> 
      <span className=" mt-2 text-3xl">Información General</span>
      
      <WidgetsGrid />
    </div>
  );
}