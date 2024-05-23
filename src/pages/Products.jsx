import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../lib/helpers'
import { getOrders } from '../Common'
import { products } from '../lib/constants'

export default function RecentOrders() {
    const [orders, setOrders] = useState()

    useEffect(() => {
        let neworders = []
        getOrders()
            .then((res) => {
                if (res.success === 1) {
                    neworders = res.data
                    setOrders(neworders)
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
            <strong className="text-gray-700 font-medium">Recent Orders</strong>
            <div className="border-x border-gray-200 rounded-sm mt-3">
                <table className="w-full text-gray-700">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Variations</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.length > 0
                            ? products.map((prod) => (
                                  <tr key={prod.title}>
                                      <td>
                                          {prod.title}
                                      </td>
                                      <td>
										{prod.variations}
                                          </td>

                                      <td>{prod.price}</td>
                                      
                                  </tr>
                              ))
                            : 'No Orders yet'}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
