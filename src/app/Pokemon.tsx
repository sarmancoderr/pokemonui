import Link from "next/link";
import { PokemonItem } from "../../responses/PokemonListResponse";
import Image from 'next/image'

export default function Pokemon(props: { pokemon: PokemonItem }) {
    const url = props.pokemon.url.split('/')
    const id = url[url.length - 2]
    const img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png"
    console.log(id)
    return (
        <Link href={`/pokemon/${id}`}>
            <div className="bg-slate-200 rounded text-xl px-5 py-2 rounded flex justify-center flex-col">
                <p className="capitalize text-center">
                    {props.pokemon.name}
                </p>
                <Image src={img} alt={props.pokemon.name + ' image'} width={100} height={100} />
            </div>
        </Link>
    )
}