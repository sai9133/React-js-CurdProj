import React, { useState } from 'react'
import style from "./home.module.css"
import axios from "axios"
import {useNavigate} from "react-router-dom"

const CreateUser = () => {
  let[name,setName]=useState("")
  let[salary,setSalary]=useState("")
  let[company,setCompany]=useState("")
  let navigate=useNavigate()

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


  function submithandler()
  {
    let payload={name,salary,company}

      
    axios.post("http://localhost:3000/users",payload)
    .then(()=>
    {
      console.log("DATA IS UPLOADED");
    })
    .catch(()=>
    {
      console.log("SOMETHING WENT WRONG");
    })
    navigate("/user")
  }

  return (
  <section id={style.myForm}>
    <article>
      <label htmlFor="">Name :</label>
      <input type="text"  value={name} onChange={namedata}/> <br />
      <label htmlFor="">salary :</label>
      <input type="text"  value={salary} onChange={salarydata}/> <br />
      <label htmlFor="">Company :</label>
      <input type="text" value={company} onChange={companydata}/> <br />

    <button onClick={submithandler}>submit</button>
    </article>
  </section>
  )
}

export default CreateUser