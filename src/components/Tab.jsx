import React from 'react'
import { Link } from "react-router-dom";


const Tab = ({label, path}) => {
    console.log(label, path)
    return (
    <Link style={{margin: "0px"}} to={`/${path}`}>{label}</Link>
  )
}

export default Tab