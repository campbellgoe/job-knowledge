'use client'
import {  useEffect, useMemo, useState } from 'react'
import jobList from '@/data/jobList'
import Fuse from 'fuse.js'
import Link from 'next/link'
import {/* useRouter, */useParams } from "next/navigation";
import { slugify } from '@/utils'

export default function Home() {
  const fuse = useMemo(() => new Fuse(jobList, {
    keys: ['Profession', 'Description']
  }), [])
  const [search, setSearch] = useState('')
  const results = useMemo(() => fuse.search(search), [search, fuse]);

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
    return <div key={refIndex}><Link href={`/${slugify(item.Profession)}`}>{item.Profession}</Link></div>
  })}
    {jobList.map(({Category, Profession}) => <div className="ml-4 my-2" key={Profession}>
        <h1>Go to <Link href={`/${slugify(Profession)}`}>{Profession}</Link></h1>

        <p>
          Category: <strong>{Category}</strong>
        </p>

        {/* <pre className="whitespace-pre-wrap max-w-full mb-2">
          {Description.split(Profession).map((item, index, array) => (
            <span key={index}>
              {item}
              {index !== array.length - 1 && (
                <strong>{Profession}</strong>
              )}
            </span>
          ))}
        </pre> */}
{/* 
        <pre className="whitespace-pre-wrap max-w-full mb-4">
          {salaryDescription.split(estAvgValue).map((item, index, array) => (
            <span key={index}>
              {item}
              {index !== array.length - 1 && (
                <strong>{estAvgValue}</strong>
              )}
            </span>
          ))}
        </pre> */}
      
  </div>)}
  <div className="mt-4">Made by <Link href="https://georgecampbell.co.uk" target="_blank">George Campbell</Link></div>
  </main>
}
