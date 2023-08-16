'use client'
import { useSearchParams } from "next/navigation"
import { useState } from "react"

export default function FormParamsPage() {
    const params = useSearchParams()
    const [page, setPage] = useState(params.get('page') ?? 1)
    const [pageSize, setPageSize] = useState(params.get('pageSize') ?? 20)
    return (
        <form className="border py-2 px-5 mt-5 flex" method="get">
            <input className="border-b border-black grow" type="number" name="pageSize" value={pageSize} onChange={e => setPageSize(e.target.value)} />
            <input className="border-b" type="number" name="page" value={page} onChange={e => setPage(e.target.value)} hidden />
            <button type="submit" className="bg-blue-700 text-white my-2 rounded-full px-3 py-2 text-xl">Refrescar</button>
        </form>
    )
}