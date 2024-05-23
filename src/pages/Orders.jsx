import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../lib/helpers'
import { getOrders } from '../Common'
import { products } from '../lib/constants'

export default function Orders() {
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
                            <th>ID</th>
                            <th>Products</th>
                            <th>Order Qty</th>
                            <th>Order Price</th>
                            <th>Contact</th>
                            <th>Order Date</th>
                            <th>Shipping Address</th>
                            <th>Order Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders?.length > 0
                            ? orders.map((order) => (
                                  <tr key={order.id}>
                                      <td>
                                          <Link to={`/order/${order.id}`}>#{order.order_id}</Link>
                                      </td>
                                      <td>
                                          {products?.length > 0 &&
                                              products.map((prod, pidx) => {
                                                  return (
                                                      <span className="text-[13px] font-medium text-gray-400 grid">
                                                          {Object.keys(JSON.parse(order.order_qty)).map((i) => {
                                                              let porder = JSON.parse(order.order_qty)[i]

                                                              if (
                                                                  prod.title
                                                                      .toLocaleLowerCase()
                                                                      .includes(i.split('-')[0].toLocaleLowerCase())
                                                              ) {
                                                                  return <>{prod.title}</>
                                                              }
                                                          })}
                                                      </span>
                                                  )
                                              })}
                                      </td>

                                      <td>
                                          {' '}
                                          {products?.length > 0 &&
                                              products.map((prod, pidx) => {
                                                  return (
                                                      <span className="text-[13px] font-medium text-gray-400 grid">
                                                          {Object.keys(JSON.parse(order.order_qty)).map((i) => {
                                                              let porder = JSON.parse(order.order_qty)[i]

                                                              if (
                                                                  prod.title
                                                                      .toLocaleLowerCase()
                                                                      .includes(i.split('-')[0].toLocaleLowerCase())
                                                              ) {
                                                                  return <>{porder}</>
                                                              }
                                                          })}
                                                      </span>
                                                  )
                                              })}
                                      </td>
                                      <td>{order.order_price}</td>
                                      <td>
                                          <Link to={`/customer/${order.client_id}`}>{order.contact_no}</Link>
                                      </td>
                                      <td>{format(new Date(JSON.parse(order.order_date)[0]), 'dd MMM yyyy')}</td>
                                      <td>{order.location}</td>
                                      <td>{getOrderStatus(order.order_status)}</td>
                                  </tr>
                              ))
                            : 'No Orders yet'}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
