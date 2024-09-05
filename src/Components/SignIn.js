import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

function SignIn() {

    const inputCss = 'outline outline-1 rounded-sm outline-slate-400 bg-slate-200 px-2 py-1'
    const labelCss = 'w-full h-full flex flex-col space-y-1'
    const history = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState(null)
    const [data, setData] = useState({})

    useEffect(() => {
        setData({
            pass: password,
            username: email
        })
    }, [password, email])

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('sendings');
        axios.post('http://localhost:4000/users', data).then((res) => {
            if (res.data === 'success') {
                history('/Contacts')
            } else {
                alert('Failed')
                history('/')
            }
        }).catch(err => console.log(err))
    }
    return (
        <div className='flex justify-center items-center h-full w-full shadow-lg '>
            <div className='flex flex-col space-y-4 border-2 p-8 shadow-lg rounded-md bg-slate-200'>
                <div className='flex flex-col items-center justify-center space-y-4'>
                    <h1 className=' text-2xl font-extrabold'>Sign In</h1>
                    <p className=' text-sm text-gray-500'>Don't have an account? <Link className=' text-blue-500' to='/'>Sign Up</Link></p>
                </div>

                <div className='flex flex-col text-slate-600'>
                    <form className='flex flex-col space-y-2' action="submit">
                        <div className='w-full h-full flex flex-col space-y-1'>
                            <label>Email</label>
                            <input onChange={(e) => {
                                setEmail(e.target.value)
                            }} className={inputCss} type="email" />
                        </div>
                        <div className={labelCss}> <label >Password</label>
                            <input onChange={(e) => {
                                setPassword(e.target.value)
                            }} className={inputCss} type="password" />
                        </div>
                        <div className=' text-blue-500 flex justify-end items-center text-xs'>Forgot your password?</div>
                        <div className='my-2 flex justify-center items-center bg-sky-600 rounded p-2 relative'>
                            <img className='w-5 h-5 absolute top-3 left-4' src="https://img.icons8.com/ios-glyphs/30/ffffff/lock--v1.png" />
                            <button onClick={submitHandler} className='text-white w-full'>Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn