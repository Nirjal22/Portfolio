"use client"
import React, { memo, useEffect, useState } from 'react'

function Cont({ name, context, url }: { name: string, context: string, url: string }) {
  return (
    <li className='m-2'>
      <div className="max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow-sm dark:bg-white dark:border-gray-200">
        <div className="p-5">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-gray-900">{name}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-400 dark:text-gray-700">{context}</p>
          <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center
           text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none
            focus:ring-blue-800 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-300">
            Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>
    </li>
  )
}

const Page = () => {
  const [repos, setRepos] = useState<any[]>([]);
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("http://localhost:8081/api/github-repos");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setRepos(data);
      } catch (err: any) {
        setErrors(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  if (loading) return <p className="text-xl m-4">Loading...</p>;
  if (errors) return <p className="text-xl text-red-500 m-4">Error: {errors}</p>;

  return (
    <div>
      <h1 className='text-4xl m-2'>Portfolio</h1>
      <ul className='grid grid-cols-3'>
        {repos.map((repo) => (
          <Cont
            key={repo.id}
            name={repo.name}
            context={repo.description || "No description provided."}
            url={repo.html_url || "#"}
          />
        ))}
      </ul>
    </div>
  );
};

export default memo(Page);
