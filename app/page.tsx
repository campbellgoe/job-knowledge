'use client'
import { Fragment, useEffect, useMemo, useState } from 'react'
import jobList from '@/data/jobList'
import Fuse from 'fuse.js'
import Link from 'next/link'
import {/* useRouter, */useParams } from "next/navigation";

export default function Home() {
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
    {jobList.map(({Category, Profession, Description}) => <Fragment key={Profession}>
    <details id={Profession} className="ml-4 my-2">
        <summary>{Profession}</summary>
        <p>Category: <span className="font-bold">{Category}</span></p>
        <pre className="whitespace-pre-wrap max-w-full">{Description.split(Profession).join(`**${Profession}**`).split('**').map((item: any, index: number) => index %2 == 1 ? <strong key={item}>{item}</strong> : item)}</pre>
        </details>
  </Fragment>)}
  <div className="mt-4">Made by <Link href="https://georgecampbell.co.uk" target="_blank">George Campbell</Link></div>
  </main>
}
