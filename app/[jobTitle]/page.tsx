
import jobList from '@/data/jobList';
import { slugify } from '@/utils';
import { notFound } from 'next/navigation';

type Job = (typeof jobList)[number];



// Pre-generate a route for every profession
export function generateStaticParams() {
  return jobList.map(({ Profession }) => ({
    jobTitle: slugify(Profession),
  }));
}

// Render the individual profession page
export default async function JobUniquePage({
  params,
}: {
  params: Promise<{ jobTitle: string }>;
}) {
  const { jobTitle } = await params;

  const jobData: Job | undefined = jobList.find(
    ({ Profession }) => slugify(Profession) === jobTitle
  );

  if (!jobData) {
    notFound();
  }

  const {
    Profession,
    Category,
    Description,
    Salary: {
      EstimatedValue: estAvgValue,
      Description: salaryDescription,
    },
  } = jobData;

  return (
    <main className='min-h-[95vh]'>
      <div id={Profession} className="ml-4 my-2">
        <h1>{Profession}</h1>

        <p>
          Category: <strong>{Category}</strong>
        </p>

        <pre className="whitespace-pre-wrap max-w-full mb-2">
          {Description.split(Profession).map((item, index, array) => (
            <span key={index}>
              {item}
              {index !== array.length - 1 && (
                <strong>{Profession}</strong>
              )}
            </span>
          ))}
        </pre>

        <pre className="whitespace-pre-wrap max-w-full mb-4">
          {salaryDescription.split(estAvgValue).map((item, index, array) => (
            <span key={index}>
              {item}
              {index !== array.length - 1 && (
                <strong>{estAvgValue}</strong>
              )}
            </span>
          ))}
        </pre>
      </div>
    </main>
  );
}
