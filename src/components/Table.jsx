import React, { useEffect, useState } from 'react'
import Row from './Row'
import { getVerbsList } from '../services'
import data from '../data/data.json'
import Search from './Search'


const Table = () => {
    const [verbs, setVerbs] = useState([])

    /* 
    const loadVerbsList = () => {
        getVerbsList().then( data => console.log(data))
                    .catch(e => console.log(e.message))
    }
    */

    const getVerbsFiltered = (listFiltered) => {
        setVerbs(listFiltered)
    }

    useEffect(()=>{
        setVerbs(data.verbs)
    },[])

  return (
    <div className='container'>
        <Search 
            verbsList={data.verbs}
            getVerbsFiltered={getVerbsFiltered}
        />
        <div className='table-responsive'>
        <table className='table'>
                <caption>Irregular verbs</caption>
                <thead>
                    <tr>
                        <th>Infinitive</th>
                        <th>Past Simple</th>
                        <th>Past Participle</th>
                        <th>Español</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        verbs.map((v) => (
                            <Row 
                                key={v.inf}
                                inf={v.inf}
                                ps={v.ps}
                                pp={v.pp}
                                es={v.es}
                            />
                        ))
                    }
                </tbody>
            </table>
        {
            verbs.length === 0 || verbs === null ? 
            <span className='msg'>Ups! No results 😢</span> : null
        }
        </div>
    </div>
  )
}

export default Table