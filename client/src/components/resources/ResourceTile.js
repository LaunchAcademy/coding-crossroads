import React from "react"
import { Link } from "react-router-dom"

const ResourceTile = ({ id, title }) => {
  return (
    <Link to={`/resources/${id}`}> {title} </Link>
  )
};

export default ResourceTile;