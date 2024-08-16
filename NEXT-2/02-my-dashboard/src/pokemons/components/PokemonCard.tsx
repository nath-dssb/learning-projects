import Link from "next/link";
import { SimplePokemon } from '../interfaces/simple-pokemon';
import Image from "next/image";
import { IoHeartDislikeCircleOutline } from "react-icons/io5";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {

  const {id, name} = pokemon;

  return (
    <div>
      <div className=" flex flex-col bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            width={100}
            height={100}
            alt={name}
            priority={false}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
          <div className="mt-5">
            <a href={`pokemon/${name}`} className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
              More info
            </a>
          </div>
        </div>
        <div className="border-b">
          <Link href={''}>
            <div className="px-4 py-2 hover:bg-gray-100 flex items-center">
              <div className="text-red-600">
               <IoHeartDislikeCircleOutline />
              </div>
              <div className="pl-3">
                <p className="text-sm font-medium text-gray-800 leading-none">
                  Favourite
                </p>
                <p className="text-xs text-gray-500">View your campaigns</p>
              </div>
            </div>
          </Link>     
        </div>
      </div>
    </div>
  );
};