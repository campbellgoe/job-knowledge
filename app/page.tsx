'use client'

import { useMemo, useState } from 'react'
import Fuse from 'fuse.js'
import Link from 'next/link'

import jobList from '@/data/jobList'
import { slugify } from '@/utils'

export default function Home() {
  const [search, setSearch] = useState('')

  const fuse = useMemo(() => {
    return new Fuse(jobList, {
      keys: [
        { name: 'Profession', weight: 2 },
        { name: 'Category', weight: 1.5 },
        { name: 'Description', weight: 1 },
      ],
      threshold: 0.35,
      ignoreLocation: true,
      includeScore: true,
    })
  }, [])

  const results = useMemo(() => {
    if (!search.trim()) return []

    return fuse.search(search.trim())
  }, [search, fuse])

  const isSearching = search.trim().length > 0

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-12 pb-64">

      <header className="mb-10">
        <p className="text-sm text-amber-800 mb-2">
          Career exploration
        </p>

        <h1 className="text-3xl font-bold tracking-tight">
          Explore job possibilities
        </h1>

        <p className="mt-3 text-amber-800 max-w-xl">
          Discover professions, explore different industries
          and find opportunities you might not have considered.
        </p>
      </header>

      <section className="mb-10">
        <label
          htmlFor="search-input"
          className="block text-sm font-medium mb-2"
        >
          What would you like to explore?
        </label>

        <input
          id="search-input"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search professions, categories..."
          className="w-full rounded-lg border p-3 outline-none focus:ring-2"
        />
      </section>

      {isSearching ? (
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">
              Search results
            </h2>

            <span className="text-sm text-amber-800">
              {results.length} found
            </span>
          </div>

          {results.length > 0 ? (
            <div className="divide-y">
              {results.map(({ item }) => (
                <Link
                  key={item.Profession}
                  href={`/${slugify(item.Profession)}`}
                  className="block py-4 hover:pl-2 transition-all"
                >
                  <h3 className="font-medium">
                    {item.Profession}
                  </h3>

                  <p className="text-sm text-amber-800 mt-1">
                    {item.Category}
                  </p>

                  <p className="text-sm mt-2 line-clamp-2">
                    {item.Description}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-amber-800 py-8">
              No professions found. Try another search.
            </p>
          )}
        </section>
      ) : (
        <section>
          <h2 className="text-lg font-semibold mb-4">
            Browse {jobList.length} professions in this database
          </h2>

          <div className="grid sm:grid-cols-2 gap-3">
            {jobList.map(({ Category, Profession }) => (
              <Link
                key={Profession}
                href={`/${slugify(Profession)}`}
                className="rounded-lg border p-4 hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-medium">
                  {Profession}
                </h3>

                <p className="text-sm text-amber-800 mt-1">
                  {Category}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <footer className="mt-16 text-sm text-amber-800">
        Made by{' '}
        <Link
          href="https://massless.ltd"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          George O. E. Campbell
        </Link>
      </footer>
    </main>
  )
}