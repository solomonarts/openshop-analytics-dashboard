import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getclientstatus } from '../lib/helpers'
import { getClients } from '../Common'
import { products } from '../lib/constants'

export default function Customers() {
    const [clients, setClients] = useState()

    useEffect(() => {
        let newclients = []
        getClients()
            .then((res) => {
                if (res.success === 1) {
                    newclients = res.data
                    setClients(newclients)
                    console.log(res)
                } else {
                    alert(res.message)
                }
            })
            .catch((err) => {
                alert(err)
            })
    }, [])

    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-700 font-medium">Recent clients</strong>
            <div className="border-x border-gray-200 rounded-sm mt-3">
                <table className="w-full text-gray-700">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Full Name</th>
                            <th>Csutomer Email</th>
                            <th>Phone no.</th>
                            <th>Customer Type</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients?.length > 0
                            ? clients.map((client) => (
                                  <tr key={client.id}>
                                      <td>
                                          <Link to={`/client/${client.id}`}>#{client.client_id}</Link>
                                      </td>
                                      <td>
                                       {client.fullname}
                                      </td>

                                      <td>
                                    {client.client_email}
                                      </td>
                                      <td>{client.client_phone}</td>
                                      <td>
                                          <Link to={`/customer/${client.client_id}`}>{client.customertype}</Link>
                                      </td>
                                      
                                      <td>{client.location}</td>
                            
                                  </tr>
                              ))
                            : 'No clients yet'}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
