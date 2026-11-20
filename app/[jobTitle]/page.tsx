
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import jobList from '@/data/jobList'
import { slugify } from '@/utils'

type Job = (typeof jobList)[number]

type PageProps = {
  params: Promise<{ jobTitle: string }>
}

// Find a profession by its URL slug
function getJobBySlug(slug: string): Job | undefined {
  return jobList.find(
    ({ Profession }) => slugify(Profession) === slug
  )
}

// Pre-generate a route for every profession
export function generateStaticParams() {
  return jobList.map(({ Profession }) => ({
    jobTitle: slugify(Profession),
  }))
}

// SEO metadata
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { jobTitle } = await params
  const job = getJobBySlug(jobTitle)

  if (!job) {
    return { title: 'Profession not found' }
  }

  return {
    title: `${job.Profession} | Career Guide`,
    description: job.Description.slice(0, 160),
  }
}

export default async function JobUniquePage({
  params,
}: PageProps) {
  const { jobTitle } = await params

  const jobData = getJobBySlug(jobTitle)

  if (!jobData) notFound()

  const {
    Profession,
    Category,
    Description,
    Salary: {
      EstimatedValue,
      Description: salaryDescription,
      Location,
    },
  } = jobData

  // Find other professions in the same category
  const relatedJobs = jobList
    .filter(
      job =>
        job.Category === Category &&
        job.Profession !== Profession
    )

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-4 py-10 md:py-16">

        {/* Breadcrumb navigation */}
        <nav
          aria-label="Breadcrumb"
          className="mb-8 text-sm text-amber-800"
        >
          <Link href="/" className="hover:underline">
            Careers
          </Link>

          <span className="mx-2">/</span>

          <span>{Category}</span>

          <span className="mx-2">/</span>

          <span className="text-amber-900 dark:text-amber-100">
            {Profession}
          </span>
        </nav>

        {/* Profession header */}
        <header className="mb-10">
          <span className="inline-block rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs font-medium mb-4">
            {Category}
          </span>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            {Profession}
          </h1>

          <p className="mt-4 text-lg text-amber-600 dark:text-amber-800 max-w-2xl leading-relaxed">
            Explore what it means to work as a {Profession},
            including salary expectations and career opportunities.
          </p>
        </header>

        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Main article */}
          <article className="md:col-span-2 space-y-10">

            <section>
              <h2 className="text-xl font-semibold mb-4">
                About this profession
              </h2>

              <div className="whitespace-pre-line leading-8 text-amber-700 dark:text-amber-300">
                {Description}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                Salary expectations
              </h2>

              <div className="whitespace-pre-line leading-8 text-amber-700 dark:text-amber-300">
                {salaryDescription}
              </div>
            </section>

          </article>

          {/* Sidebar */}
          <aside className="space-y-6">

            {/* Salary card */}
            <section className="rounded-xl border p-5">
              <div className="flex items-center gap-2 text-sm text-amber-800 mb-3">
                <span>Estimated salary</span>
              </div>

              <p className="text-2xl font-bold">
                {EstimatedValue}
              </p>

              {Location && (
                <p className="text-sm text-amber-800 mt-2">
                  {Location}
                </p>
              )}

              <p className="text-xs text-amber-800 mt-4">
                Estimates may vary depending on experience,
                location and industry.
              </p>
            </section>

            {/* Category card */}
            <section className="rounded-xl border p-5">
              <h2 className="font-semibold mb-2">
                Career category
              </h2>

              <p className="text-amber-600 dark:text-amber-800">
                {Category}
              </p>

              <Link
                href="/"
                className="inline-block mt-3 text-sm underline"
              >
                Explore all professions
              </Link>
            </section>

          </aside>
        </div>

        {/* Related professions */}
        {relatedJobs.length > 0 && (
          <section className="mt-16 pt-10 border-t">
            <h2 className="text-2xl font-bold mb-2">
              Related professions
            </h2>

            <p className="text-amber-800 mb-6">
              Explore other opportunities within {Category}.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {relatedJobs.map(job => (
                <Link
                  key={job.Profession}
                  href={`/${slugify(job.Profession)}`}
                  className="group rounded-xl border p-4 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">
                      {job.Profession}
                    </h3>

                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>

                  <p className="text-sm text-amber-800 mt-2 line-clamp-2">
                    {job.Description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Footer navigation */}
        <footer className="mt-16 pt-6 border-t">
          <Link
            href="/"
            className="text-sm text-amber-800 hover:underline"
          >
            ← Back to all professions
          </Link>
        </footer>

      </div>
    </main>
  )
}
