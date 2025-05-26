import React from 'react'

export default function Loading() {
  return (
    <div>Loading.....
      <div className="d-flex justify-content-center">
  <div className="spinner-border s" role="status" style={{width:'5rem' , height:'5rem'}}>
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
    </div>
  )
}
