import React from 'react'
import ImageShow from './ImageShow'

import '../Styles/ImageList.css'

export default function ImageList({images}) {
    const imagesList = images.map((image) => {
        return <ImageShow key={image.id} image={image}/>
    });

  return (
    <div className='image-list'>{imagesList}</div>
  )
}
