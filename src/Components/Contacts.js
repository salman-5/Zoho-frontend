import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

function Contacts() {

    const history = useNavigate()
    const inputCss = 'outline outline-1 rounded-sm outline-slate-400 bg-slate-200 px-2 py-1 flex-grow'
    const labelCss = 'w-full h-full flex space-x-2 justify-start items-center p-2 grow'
    const tableBorderCSS = 'border border-collapse border-slate-600'
    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/newcontacts', data).then((res) => {
            console.log(res)
        }).then(() => {
            axios.get('http://localhost:4000/contactlist').then((res) => {
                console.log(res);
                setFinalData(res.data)
            })
        })

    }

    useEffect(() => {
        axios.get('http://localhost:4000/contactlist').then((res) => {
            console.log(res);
            setFinalData(res.data)
        })
    }, [])


    const [finalData, setFinalData] = useState([])
    const [data, setData] = useState({})
    const [name, setName] = useState('')
    const [number, setNumber] = useState(0)
    const [email, setEmail] = useState('')
    useEffect(() => {
        setData({
            name: name,
            number: number,
            email: email
        })
    }, [name, number, email])

    return (
        <div className='flex justify-center items-center h-full w-full shadow-lg'>
            <div className='flex flex-col space-y-4 border-2 p-8 shadow-lg rounded-md bg-slate-200'>
                <div className='flex flex-col items-center justify-center space-y-4 text-2xl font-extrabold'>
                    Contact Form and Contact List Page
                </div>
                <div>
                    <div className='flex flex-col items-center justify-center space-y-4 text-xl font-bold'>Add Contacts</div>
                    <form className='flex flex-col space-y-2' action="submit">
                        <div className={labelCss}>
                            <label className='w-12' >Name</label>
                            <input className={inputCss} onChange={(e) => {
                                const name1 = e.target.value
                                setName(name1)
                            }} type="text" name="" id="name" />
                        </div>
                        <div className={labelCss}>
                            <label className='w-12'>Ph.No</label>
                            <input className={inputCss}
                                onChange={(e) => {
                                    setNumber(e.target.value)
                                }} type="tel" />
                        </div>
                        <div className={labelCss}>
                            <label className='w-12'>Email</label>
                            <input className={inputCss}
                                onChange={e => {
                                    setEmail(e.target.value)
                                }} type="email" name="" id="email" />
                        </div>
                        <div className='flex justify-end items-center rounded  p-2'>
                            <button className=' p-2 bg-sky-500 rounded w-20' onClick={(e) => { submitHandler(e) }}>Save</button>
                        </div>
                    </form>
                </div>
                <div className='flex justify-center items-center '>
                    <table className='border border-collapse border-slate-600 w-full p-2'>
                        <tr className=' text-white text-center bg-gray-500'>
                            <th className={tableBorderCSS}>Name</th>
                            <th className={tableBorderCSS}>Ph. No</th>
                            <th className={tableBorderCSS}>Email</th>
                        </tr>
                        {finalData &&
                            finalData.map((e, key) => {
                                return (<tr key={key} className='p-2'>
                                    <td className={tableBorderCSS}>{e.name}</td>
                                    <td className={tableBorderCSS}>{e.number}</td>
                                    <td className={tableBorderCSS}>{e.email}</td>
                                </tr>)
                            })}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Contacts