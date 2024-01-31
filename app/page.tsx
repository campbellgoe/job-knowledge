'use client'
import { useEffect, useMemo, useRef, useState } from 'react'
import jobList from '../data/jobList'
import Fuse from 'fuse.js'
import Link from 'next/link'
import {/* useRouter, */useParams } from "next/navigation";

export default function Home() {
  const obj = jobList.reduce((acc: any[], {Profession, Category, Description}) => {
    const catIndex = acc.findIndex(([cat]) => cat === Category)
    if(catIndex != -1){
      // category found
      return acc.map(([cat, professions]) => cat === Category ? [cat, [...professions, { Profession, Description}]] : [cat, professions])
    }
    // new category
    return [...acc, [Category, [{Profession, Description}]]]
  }, [])

  const fuse = useMemo(() => new Fuse(jobList, {
    keys: ['Profession']
  }), [jobList])
  const [search, setSearch] = useState('')
  const results = useMemo(() => fuse.search(search).slice(0, 10), [search, fuse]);

  // const router = useRouter();
  const params = useParams();
  
  useEffect(() => {
    if(typeof window != 'undefined'){
      console.log("Hash:", window.location.hash);
      const hash = decodeURIComponent(window.location.hash.slice(1))
      const el = document.getElementById(hash)
      if(el){
        el.setAttribute('open', 'true')
        el.parentElement?.setAttribute('open', 'true')
        window.scrollTo(0, el.scrollTop)
      }
    }
  }, [params]);
  
  return <main className="m-auto w-96">
    <h1>List of kinds of job</h1>
    {obj.map(([Category, professions]) => <details key={Category}>
    <summary>{Category}</summary>
    {professions.map(({Profession, Description}: any) => {
      return <details key={Profession} id={Profession} className="ml-4 mb-2">
        <summary>{Profession}</summary>
        <pre className="whitespace-pre-wrap">{Description.split('**').map((item: any, index: number) => index %2 == 1 ? <strong key={item}>{item}</strong> : item)}</pre>
        </details>
    })}
  </details>)}
  <div className="flex my-4"><label className="mr-2" htmlFor='search-input'>Search</label><input id="search-input" type="text" value={search} onChange={(e: any) => setSearch(e.target.value)} /></div>
  <h2>Search results ({results.length})</h2>{results.map(({ refIndex, item }: any) => {
    return <div key={refIndex}><Link href={`/#${item.Profession}`}>{item.Profession}</Link></div>
  })}</main>
}