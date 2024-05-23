import React, { useEffect, useState } from 'react'
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5'
import { getClients, getOrders } from '../Common'

export default function DashboardStatsGrid() {
    const [orders, setOrders] = useState([])
    const [clients, setClients] = useState([])
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

        getClients()
            .then((res) => {
                console.log(res)
                if (res.success === 1) {
                    setClients(res.data)
                } else {
                    alert(res.message)
                }
            })
            .catch((err) => {
                alert(err)
            })
    }, [])
    return (
        <div className="flex gap-4">
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
                    <IoBagHandle className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Total Sales</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">
                            {orders?.length > 0
                                ? orders.map((ord, orindx) => {
                                      if (orindx === 0) {
                                          let Totalorders = 0,
                                              i = -1
                                          while (++i < orders.length) {
                                              Totalorders += parseInt(orders[i].order_price)
                                          }

                                          // setOrdersum(Totalorders);
                                          return <span className="text-blue-700">{Totalorders}</span>
                                      }
                                  })
                                : '0'}
                        </strong>
                        <span className="text-sm text-green-500 pl-2">+343</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
                    <IoPieChart className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Total Stock</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">kes 342500</strong>
                        {/* <span className="text-sm text-green-500 pl-2">-343</span> */}
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
                    <IoPeople className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Total Customers</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">
                            {clients?.length > 0 ? clients.length : 0}
                        </strong>
                        {/* <span className="text-sm text-red-500 pl-2"></span> */}
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
                    <IoCart className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Total Orders</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">
                            kes {orders?.length > 0 ? orders.length : 0}
                        </strong>
                        <span className="text-sm text-red-500 pl-2">-43</span>
                    </div>
                </div>
            </BoxWrapper>
        </div>
    )
}

function BoxWrapper({ children }) {
    return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}
