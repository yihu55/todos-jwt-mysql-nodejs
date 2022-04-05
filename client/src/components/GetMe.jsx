import React,{useContext} from 'react'

import { Context } from '../App'

export default function GetMe() {

const {username}=useContext(Context)
    
  return (
   <p>username: {username}</p>

  )
}
