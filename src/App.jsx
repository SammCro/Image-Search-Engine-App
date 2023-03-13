import React from 'react'
import { useState } from 'react';

import searchImages from './Utilities/imageApi'
import SearchBar from './Components/SearchBar'
import ImageList from './Components/ImageList'

export default function App() {
  const [images, setImages] = useState([]);

  const onSubmit = async (word) => {
    const result = await searchImages(word);
    setImages(result);
  }

  return (
    <div>
      <SearchBar onSubmit={onSubmit}/>
      <ImageList images={images}/>
    </div>
  )
}
