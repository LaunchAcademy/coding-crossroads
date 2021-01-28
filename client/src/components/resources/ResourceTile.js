import React from "react"
import { Link } from "react-router-dom"

const ResourceTile = ({ id, title }) => {
  return (
    <Link to={`/resources/${id}`}>
      <li>{title}</li>
    </Link>
  )
};

export default ResourceTile;