import React, { useState } from 'react'
import { usrLogin } from '../Common'
import { useNavigate } from 'react-router-dom'
import { notification } from 'antd'
import { Spin } from 'antd'

function Login() {
    const [data, setData] = useState({})
    const [disabled, setDisabled] = useState(true)

    const typing = (e) => {
        data[e.target.name] = e.target.value
        setData({ ...data })
    }

    const navigate = useNavigate()
    const [loading, setloading] = useState(false)
    const signin = () => {
        setloading(true)
        usrLogin(data)
            .then((res) => {
                // console.log("resssss", res);
                if (res?.data?.success === 1) {
                    setloading(false)
                    notification['success']({
                        message: 'Login Status',
                        description: res.data?.message
                    })
                    localStorage.setItem('user', JSON.stringify(res.data.data))
                    navigate('/')
                } else {
                    setloading(false)
                    notification['warning']({
                        message: 'Login Status',
                        description: res.data?.message
                    })
                }
            })
            .catch((err) => {
                // console.log(err);
            })
    }
    return (
        <div className="h-[100dvh] w-[100vw] relative form__container">
            {loading && (
                <div className="fixed top-0 left-0 h-full w-full bg-black/50 z-50 flex flex-col justify-center">
                    <Spin size="large" />
                </div>
            )}
            <div className="h-2/3 w-2/3">
                <div className="form absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="row min-h-full w-full grid items-center">
                        <div className="col-lg-12 min-h-fit w-full m-auto flex flex-col justify-center gap-10">
                            <div className="w-full pl-4 relative">
                                <h3 className="text-[34px] font-bold text-white"> Admin Login</h3>
                            </div>
                            <div className="w-full pl-4">
                                <input
                                    className="w-full h-8 rounded-sm p-2 outline-none"
                                    type="email"
                                    placeholder="Enter Email"
                                    name="email"
                                    onChange={typing}
                                />
                            </div>
                            <div className="w-full pl-4">
                                <input
                                    className="w-full h-8 rounded-sm p-2 outline-none"
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    onChange={typing}
                                />
                            </div>

                            <div className="w-full grid grid-flow-col grid-cols-2 gap-2">
                                <div className="w-full flex justify-start gap-10 mt-2 pl-6">
                                    <button className="rounded-xl border-[0.5px] border-white  px-3 py-1 h-8 text-white min-w-fit">
                                        Cancel
                                    </button>
                                    <button
                                        onClick={signin}
                                        className={`rounded-xl ${
                                            disabled ? 'bg-[#122849] ' : 'bg-[#122849]'
                                        } px-3 py-1 h-8 text-white min-w-fit`}
                                    >
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
