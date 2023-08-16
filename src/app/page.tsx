import { NextPage } from "next"
import { PokemonList } from "../../responses/PokemonListResponse"
import Link from 'next/link'
import FormParamsPage from "./FormParamsPage"
import Pokemon from "./Pokemon"
import { BASE_URL } from "@/vars"

export const Home: NextPage = async function Home({searchParams: {page = 1, pageSize = 20}}: any) {
  const params = new URLSearchParams({})
  params.append('limit', pageSize)
  params.append('offset', ((Number(page) - 1) * pageSize).toString())
  const pokemonResponse = await fetch(BASE_URL + '/pokemon?' + params.toString())
  const data: PokemonList = await pokemonResponse.json()

  const classNames = 'mx-5 px-5 py-2 text-xl bg-purple-800 text-white rounded-lg'

  return (
    <main>
      <div className="grid grid-cols-4 gap-x-4 gap-y-2">
        {data.results.map((pokemon) => (
          <Pokemon pokemon={pokemon} key={pokemon.name} />
        ))}
      </div>
      <div className="mt-5">
        <Link className={classNames} href={page == 1 ? '#' : `?pageSize=${pageSize}&page=${Number(page) - 1}`}>
          Anterior
        </Link>
        <Link className={classNames} href={`?pageSize=${pageSize}&page=${Number(page) + 1}`}>
          Siguiente
        </Link>
      </div>
      <FormParamsPage />
    </main>
  )
}

export default Home