import React from 'react'

/* inf, ps, pp, Español */
const Row = ({ inf, ps, pp, es}) => {
  return (
    <tr>
        <td>{inf}</td>
        <td>{ps}</td>
        <td>{pp}</td>
        <td>{es}</td>
    </tr>
  )
}

export default Row