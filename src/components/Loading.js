import React, { Component } from 'react'
import loading from './loading.gif'
const Loading = () => {

  return (
    <div className='text-center'>
      <img className='my-3' src={loading} alt="loading" width="50" height="50" />
    </div>
  )
}
export default Loading
