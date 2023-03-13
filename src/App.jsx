import React from 'react'
import searchImages from './Utilities/imageApi'

import SearchBar from './Components/SearchBar'

export default function App() {
  const onSubmit = async (word) => {
    const result = await searchImages(word);
    alert(result);
  }

  return (
    <div>
      <SearchBar onSubmit={onSubmit}/>
    </div>
  )
}
