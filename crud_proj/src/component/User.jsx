
import React from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'
import style from "./home.module.css"
import {Link} from "react-router-dom"

const User = () => {
  let [content,setContent]=useState([])
  let user=JSON.parse(localStorage.getItem('user'))

  useEffect(()=>
  {
    axios.get("http://localhost:3000/users")
    .then((response)=>
    {
      console.log("data is fetced");
      console.log(response.data);
      setContent(response.data)
    })
    .catch(()=>
    {
      console.log("data is not fetced");
    })
  },[])

  let deleteData=(value)=>
  {
    axios.delete(`http://localhost:3000/users/${value}`)
    window.location.assign("/user")
  }
  return (
    <div id={style.userHome}>
   {
    content.map((x)=>
    {
      return(
        <div id={style.cards}>
          <table>
            <tr>
              <th colSpan="2">USER ID:{user.id}</th>
            </tr>
            <tr>
              <td>Name</td>
              <td>:{user.name}</td>
            </tr>
            <tr>
              <td>Salary</td>
              <td>:{user.salary}</td>
              </tr>
            <tr>
            <td>Company</td>
              <td>:{user.company}</td>
            </tr>
            <tr>
              <td><Link to={`/edit/${x.id}`}>Edit</Link></td>
              <td><button onClick={()=>{deleteData(x.id)}}>DELETE</button></td>
            </tr>
          </table>
        </div>
      )
    })
   }
    </div>
  )
}

export default User