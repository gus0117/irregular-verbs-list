import React, { useEffect, useState } from 'react'

const Search = ({ verbsList, getVerbsFiltered }) => {
    const [filter, setFilter] = useState("")
    
    const filterList = () => (
        verbsList.filter( v => (
            v.inf.toLowerCase().includes(filter.toLowerCase()) ||
            v.ps.toLowerCase().includes(filter.toLowerCase()) ||
            v.pp.toLowerCase().includes(filter.toLowerCase()) ||
            v.es.toLowerCase().includes(filter.toLowerCase()) 
        ))
    )

    useEffect(()=>{
        getVerbsFiltered(filterList())
    },[filter])

    const handleFilter = (event) => {
        setFilter(event.target.value)
    }

  return (
    <div className='search'>
        <label>Search</label>
        <input className='input-search' type="text" name="verb" value={filter} onChange={handleFilter} />
        <button className='btn-search' onClick={() => setFilter("")}>Clear</button>
    </div>
  )
}

export default Search