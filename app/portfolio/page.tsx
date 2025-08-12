import React, { memo } from 'react'

function Cont({ name, context }: { name: string, context: string }) {
  return (
      <li className='m-2'>
        <div className="max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow-sm dark:bg-white dark:border-gray-200">
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-gray-900">{name}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-400 dark:text-gray-700">{context}</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center
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

const page = () => {
  const content = [
    { name: 'CoolCarters', context: 'PHP full stack project. Oracle apex as database. Team Project.' },
    { name: 'Blog', context: 'Django full stack project. Mainly focused on backend. CRUD and authentication.' },
    { name: 'APIs_JWTAuth', context: 'Django backend. JWT Authentication and CRUD operation. API checked using postman.' },
    { name: 'Weather_Webapp', context: 'Learned to use API and get the current weather condition of particular place.' },
    { name: 'Turtle Graphics Program', context: 'Java Swing is used. Understanding of OOP and GUI' },
    { name: 'Bank Management System', context: 'C++ project. Banking system. Understanding core of C++.' },
  ]
  return (
    <div>
      <h1 className='text-4xl m-2'>Portfolio</h1>
      {/* cards */}
      <ul className='grid grid-cols-3'>
        {content.map((conte, index) => (
          <Cont key={index} context={conte.context} name={conte.name} />
        ))}
      </ul>
    </div>
  )
}

export default memo(page);
