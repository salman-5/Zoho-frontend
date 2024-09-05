import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

function SignUp() {
    const inputCss = 'outline outline-1 rounded-sm outline-slate-400 bg-slate-200 px-2 py-1'
    const labelCss = 'w-full h-full flex flex-col space-y-1'

    {/*useEffect(() => {
        axios.post('http://localhost:4000/login', {
            username: "Ajnas",
            pass: "sas"
        }).then((res) => {
            console.log(res)
        }).catch((e) => {
            console.log(e);
        })
    }, [])*/}

    const [data, setData] = useState({})
    const [secret, setSecret] = useState('')
    const [number, setPassword] = useState(null)
    const [email, setEmail] = useState('')

    useEffect(() => {
        setData({
            secret: secret,
            pass: number,
            username: email
        })
    }, [secret, number, email])


    const submitHandler = (e) => {
        e.preventDefault()
        // setToggle(!toggle)

        // console.log(secret);
        // console.log(number);
        console.log(data);
        axios.post('http://localhost:4000/login', data).then((res) => {
            console.log(res)
        }).catch((e) => {
            console.log(e);
        })
    }
    return (
        <div className='flex justify-center items-center h-full w-full shadow-lg '>
            <div className='flex flex-col space-y-4 border-2 p-8 shadow-lg rounded-md bg-slate-200' >
                <div className='flex flex-col items-center justify-center space-y-4'>
                    <h1 className=' text-2xl font-extrabold'>Sign Up</h1>
                    <p className=' text-sm text-gray-500'>Already have an account? <Link className=' text-blue-500' to='/SignIn'>Sign In</Link>
                    </p>
                </div>
                <div className='flex flex-col text-slate-600'>
                    <form className='flex flex-col space-y-2' action="submit">
                        <div className='w-full h-full flex flex-col space-y-1'>
                            <label>Email</label>
                            <input onChange={(e) => {
                                setEmail(e.target.value)
                            }} className={inputCss} type="text" required={true} />
                        </div>
                        <div className={labelCss}> <label >Password</label>
                            <input onChange={(e) => {
                                setPassword(e.target.value)
                            }} className={inputCss} type="password" />
                        </div>
                        <div className={labelCss}>   <label>Secret</label>
                            <input onChange={(e) => {
                                setSecret(e.target.value)
                            }} className={inputCss} type="text" />
                        </div>
                        <div className='my-2 flex justify-center items-center bg-sky-600 rounded p-2 relative'>
                            <div>
                                <img className='w-5 h-5 absolute top-3 left-4' src="https://img.icons8.com/ios-glyphs/30/ffffff/lock--v1.png" /></div>
                            <button onClick={submitHandler} type='submit' className='text-white w-full'>Sign Up</button>
                        </div>
                        <div className='flex flex-col justify-center items-center p-1 text-xs my-2'>
                            <p className='' >By clicking the "Sign Up" button, you are creating</p>
                            <p>an account and you agree to the Terms of use</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp