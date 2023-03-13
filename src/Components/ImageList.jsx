import React from 'react'
import ImageShow from './ImageShow'

export default function ImageList({images}) {
    const imagesList = images.map((image) => {
        return <ImageShow key={image.id} image={image}/>
    });

  return (
    <div>{imagesList}</div>
  )
}
