

import React, { useState, useRef, useCallback } from 'react'


export default function ImageDragDrop() {
  const [images, setImages] = useState([])
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef(null)

  const handleDrag = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  const handleDragIn = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }, [])

  const handleDragOut = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    const files = Array.from(e.dataTransfer.files)
    handleFiles(files)
  }, [])

  const handleFiles = useCallback((files) => {
    files.forEach((file) => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onload = (e) => {
          setImages((prevImages) => [...prevImages, e.target.result])
        }
        reader.readAsDataURL(file)
      }
    })
  }, [])

  const handleFileInput = useCallback((e) => {
    const files = Array.from(e.target.files || [])
    handleFiles(files)
  }, [handleFiles])

  const handleDeleteImage = useCallback((index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index))
  }, [])

  return (
    <div>
       
      <div
        onDragEnter={handleDragIn}
        onDragLeave={handleDragOut}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            fileInputRef.current?.click()
          }
        }}
        className={`dropzone ${isDragging ? 'dragging' : ''}`}
      >
         <h2>Drag and Drop or choose files</h2>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileInput}
          accept="image/*"
          style={{ display: 'none' }}
          multiple
          aria-label="File input"
        />
        <p>{isDragging ? 'Drop the images here ...' : "Drag 'n' drop some images here, or click to select files"}</p>
      </div>

      <div role="list" aria-label="Uploaded images" className="image-list">
        {images.map((image, index) => (
          <div
            key={index}
            role="listitem"
            onClick={() => handleDeleteImage(index)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleDeleteImage(index)
              }
            }}
            tabIndex={0}
            aria-label={`Delete image ${index + 1}`}
            className="image-item"
          >
            <img src={image} alt={`Uploaded image ${index + 1}`} />
            <div className="overlay">Click to delete</div>
          </div>
        ))}
      </div>
    </div>
  )
}
