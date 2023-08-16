import { BASE_URL } from "@/vars"
import { PokemonInfo } from "../../../../responses/PokemonInfo"
import Image from 'next/image'

export default async function PokemonPage ({params}: any) {
    const pokemonResponse = await fetch(BASE_URL + '/pokemon/' + params.id)
    const data: PokemonInfo = await pokemonResponse.json()

    return (
        <>
            <h2 className="text-3xl capitalize">{data.name}</h2>
            <Image src={data.sprites.front_default} alt={data.name + ' image'} width={200} height={200} />
        </>
    )
}