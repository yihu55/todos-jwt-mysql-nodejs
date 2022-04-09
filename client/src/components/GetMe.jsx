import React,{useContext, useEffect} from 'react'

import { Context } from '../App'
import Logout from './Logout'

export default function GetMe() {

const {getMe,username}=useContext(Context)
console.log(username)
useEffect(()=>{
 getMe()
},[])
    
  return (
   <p>inlogged : {username}  <Logout/></p>

  )
}
