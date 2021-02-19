import React, { useMemo, useState, useEffect } from 'react'

import Table from './Table'

const Exceptions = () => {

    function randomHour() { 
        let x = Math.floor(Math.random() * 23)
        return x.toString()
    }

    function randomMinute() { 
        let x = Math.floor(Math.random() * 59)
        return x.toString()
    }

    function randomSecound() { 
        let x = Math.floor(Math.random() * 59)
        return x.toString()
    }

    const messages = ["Bend overload", "Error in database", "Limit reached", "Timeout", "Lenght not matching"]
    const types = ["Warning", "Exception", "Error"]

    function generateData() {
        let data = []
        for (let i = 0; i < 13; i++) {
            data.push(
                {
                    "time": randomHour() + ":" + randomMinute() + ":" + randomSecound(),
                    "message": messages[Math.floor(Math.random() * 4)],
                    "type": types[Math.floor(Math.random() * 2)],
                }
            )
        }

        return data
    }

    const[data, setData] = useState(generateData())

    const columns = useMemo(
        () => [
          {
            Header: "Exceptions",
            columns: [
              {
                Header: "Time",
                accessor: "time"
              },
              {
                Header: "Message",
                accessor: "message"
              },
              {
                Header: "Type",
                accessor: "type"
              },
            ]
          }
        ]
    )

    return (
        <div className="container">
            <Table columns={columns} data={data} />
        </div>
    )
}

export default Exceptions