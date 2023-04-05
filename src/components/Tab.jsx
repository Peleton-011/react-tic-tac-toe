import React from 'react'
import { Link } from "react-router-dom";


const Tab = ({label, path}) => {
    return (
    <Link style={{margin: "0px"}} to={`/${path}`}>{label}</Link>
  )
}

export default Tab