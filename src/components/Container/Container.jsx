import React from 'react'

export const Container = ({children}) => {
  return (
    <div className='inline-block bg-gray-200'>
      {
        children
      }
    </div>
  )
}