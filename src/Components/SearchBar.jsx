import React from 'react'
import { useState } from 'react';

import '../Styles/SearchBar.css' 

export default function SearchBar({onSubmit}) {
    const [term, setTerm] = useState('');

    const handleChange = (event) => {
        setTerm(event.target.value);
    }

    const onEnter = (event) => {
        event.preventDefault();
        onSubmit(term);
    }

  return (
    <div>
        <form className='search-bar-form' onSubmit={onEnter}>
            <label>Enter Search Term</label>
            <input className='search-bar' value={term} onChange={handleChange}></input>
        </form>
    </div>
  )
}
