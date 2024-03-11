import React, { useState } from 'react'

export default function Alert(props) {
  
  return (
    <div className="container" style={{height:"85px",opacity:"0.7"}}>
    {props.alert&&<div className="alert alert-warning alert-dismissible fade show" role="alert">
        <p><b>{props.alert.type+":"}</b>{" "+props.alert.msg}</p>
   </div>   }
   </div>
  )
}
