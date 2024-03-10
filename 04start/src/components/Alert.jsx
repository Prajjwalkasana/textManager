import React, { useState } from 'react'

export default function Alert(props) {
  
  return (
    props.alert&&<div className="alert alert-warning alert-dismissible fade show" role="alert">
        <p><b>{props.alert.type+":"}</b>{" "+props.alert.msg}</p>
    {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
   </div>   
  )
}
