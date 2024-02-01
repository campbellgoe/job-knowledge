'use client'
import { useEffect, useMemo, useState } from 'react'
import jobList from '@/data/jobList'
import Fuse from 'fuse.js'
import Link from 'next/link'
import {/* useRouter, */useParams } from "next/navigation";

export default function Home() {
  const obj = jobList.reduce((acc: any[], {Profession, Category, Description}) => {
    const catIndex = acc.findIndex(([cat]) => cat === Category)
    if(catIndex != -1){
      // category found
      return acc.map(([cat, professions]) => cat === Category ? [cat, [...professions, { Profession, Category, Description}]] : [cat, professions])
    }
    // new category
    return [...acc, [Category, [{Profession, Category, Description}]]]
  }, []).sort((a: any, b: any) => {
    const nameA = a[0].toUpperCase(); // ignore upper and lowercase
    const nameB = b[0].toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  })

  const fuse = useMemo(() => new Fuse(jobList, {
    keys: ['Profession']
  }), [])
  const [search, setSearch] = useState('')
  const results = useMemo(() => fuse.search(search).slice(0, 5), [search, fuse]);

  // const router = useRouter();
  const params = useParams();
  
  useEffect(() => {
    if(typeof window != 'undefined'){
      const hash = decodeURIComponent(window.location.hash.slice(1))
      const el = document.getElementById(hash)
      if(el){
        el.setAttribute('open', 'true')
        el.parentElement?.setAttribute('open', 'true')
        el.scrollIntoView({ behavior: 'smooth', block: 'start'})
      }
    }
  }, [params]);
  
  return <main className="p-2 m-auto w-full md:w-96 pb-64">
    <h1>What jobs are there?</h1>
    <div className="flex my-4"><label className="mr-2" htmlFor='search-input'>Search</label><input id="search-input" type="text" value={search} onChange={(e: any) => setSearch(e.target.value)} /></div>
  <h2>Search results ({results.length})</h2>{results.map(({ refIndex, item }: any) => {
    return <div key={refIndex}><Link href={`/#${item.Profession}`}>{item.Profession}</Link></div>
  })}
    {obj.map(([Category, professions]) => <details key={Category}>
    <summary>{Category}</summary>
    {professions.map(({Profession, Description}: any) => {
      return <details key={Profession} id={Profession} className="ml-4 mb-2">
        <summary>{Profession}</summary>
        <pre className="whitespace-pre-wrap max-w-full">{Description.split('**').map((item: any, index: number) => index %2 == 1 ? <strong key={item}>{item}</strong> : item)}</pre>
        </details>
    })}
  </details>)}
  <div className="mt-4">Made by <Link href="https://georgecampbell.co.uk" target="_blank">George Campbell</Link></div>
  </main>
}
