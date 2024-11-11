import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';

export default function SearchBox() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();    
    {
      query
        ? navigate(
            query
              ? { pathname: '/search', search: `query=${query}` }
              : '/search'
          )
        : alert('No search value entered.');
    }
  };
  return (
    <form
      className="flex justify-center mx-auto relative  max-w-[80%] sm:max-w-[75%]  md:max-w-[60%] lg:max-w-[50%] my-2"
      onSubmit={submitHandler}
    >
      <div className="w-full mx-auto">
        <input
          type="search"
          name="query"
          value={query}
          placeholder='Search cars ...'
          id="query"
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search Car"
          aria-describedby="button-search"
          className=" text-[#000] rounded-2xl py-1 px-12 w-full shadow-sm bg-[#DCDCDC] hover:bg-[#b8c1ec]"
        />
      </div>
      <div className="rounded-r-full flex absolute h-full top-0 right-0 items-center bg-[#081e8a]">
        <button type="submit" id="button-search">        
          <CiSearch
            className="searchIcon"
            style={{
              color: '#fff',
              fontSize: '25px',
              background: 'transparent',
              width: '60px',
            }}
          />
        </button>
      </div>
    </form>
  );
}
