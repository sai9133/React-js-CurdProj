import { useEffect, useState } from "react"
import React from 'react'
import style from "./home.module.css"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"



const Edituser = () => {
    let[name,setName]=useState("")
    let[salary,setSalary]=useState("")
    let[company,setCompany]=useState("")
     let navi=useNavigate()

let {index}=useParams()
console.log(index);

  useEffect(()=>
  {
    axios.get(`http://localhost:3000/users/${index}`)
    .then((responce)=>
    {
           console.log(responce.data);
          //  console.log("data is fetched");
          setName(responce.data.name)
          setSalary(responce.data.salary)
          setCompany(responce.data.company)
    })
    .catch(()=>
    {
      console.log("data is not fetched");
    })
  },[index])
  let namedata=(e)=>
  {
       setName(e.target.value)
  }
  let salarydata=(e)=>
  {
    setSalary(e.target.value)
  }
  let companydata=(e)=>
  {
    setCompany(e.target.value)
  }
  let updatee=()=>
  {
    let payload={name,salary,company}
      // console.log(name,salary,companydata);
      axios.put(`http://localhost:3000/users/${index}`,payload)
      .then(()=>
      {
        console.log("data is updated");
      })
      .catch(()=>
      {
        console.log("data is not updated");
      })
      navi("/user")

  }
  return (
    <section id={style.myForm}>
    <article>
        <h1>Update user</h1>
      <label htmlFor="">Name :</label>
      <input type="text"  value={name}  onChange={namedata}/> <br />
      <label htmlFor="">salary :</label>
      <input type="text"  value={salary} onChange={salarydata}/> <br />
      <label htmlFor="">Company :</label>
      <input type="text" value={company}  onChange={companydata}/> <br />
    <button onClick={updatee}>UPDATE</button>
    </article>
  </section>
  )
}

export default Edituser