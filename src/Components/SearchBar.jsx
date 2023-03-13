import React from 'react'
import { useState } from 'react';

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
        <form onSubmit={onEnter}>
            <input value={term} onChange={handleChange}></input>
        </form>
    </div>
  )
}
