
export const metadata = {
 title: 'Pokemons favoritos',
 description: 'Pokemons favoritos',
};

export default async function PokemonsPage() {
  
  return (
    <div className=" flex flex-col">

      <span className=" text-5xl my-2">Pokemons Favoritos <small className=" text-blue-600">estático</small> </span>
      
    </div>
  );
}