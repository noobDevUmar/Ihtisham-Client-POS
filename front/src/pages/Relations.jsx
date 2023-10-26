import React, { useState } from 'react'
import RelationTable from '../components/RelationsTable'
import { Link } from 'react-router-dom';
const Relations = () => {
  let Api = `http://localhost:3000/relations`;
  const [search, setSearch] = useState('')
 const [api,setApi] = useState(Api)


  const handleClick=(e)=>{
    e.preventDefault();
    if(search.length>0){
      
      setApi(`http://localhost:3000/relations?name=${search}`)
    }
   
  }
  

  const handlecancel = (e)=>{
    setApi(Api)
    setSearch('')
  }

  
  return (
    <div className='flex'>
      <div className='max-w-[70vw] bg-gray-300 w-full flex-2 overflow-scroll h-[100vh]'>
        <RelationTable API={api}/>
        
      </div>
      <div className='flex-1 mx-auto items-center flex justify-center'>
        <div class="mb-3">
          <h2 className='text-center text-black font-semibold  text-3xl mb-2'>Search </h2>
          <div class="relative mb-4 flex w-full flex-wrap items-stretch">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              class="relative m-0 w-full -mr-0.5 block  min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon1"
            />
            
            <button
              onClick={handleClick}
              className="relative rounded-full w-full bg-blue-500 mt-2   items-center  bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
              type="button"
              id="button-addon1"
              data-te-ripple-init
              data-te-ripple-color="light"
            > 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-full"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <button onClick={handlecancel}  className='w-full rounded-full h-8 bg-red-600 mt-2'>
     All Data
            </button>
          </div>

          <button onClick={''}  className='w-full mt-50 rounded-full text-sm h-8 bg-green-600 mt-2'>
            <Link to='/relationentry' className='text-lg'>

            Add New Product
            </Link>
            </button>


        </div>
      </div>
    </div>
  );
};
export default Relations