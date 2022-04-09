import styled from 'styled-components'

export const StyledH1=styled.h1`
  text-align: center;
  padding:50px;
  background-color: aliceblue;
  
`

export const StyledList=styled.li`
   list-style: none;
   font-size:25px;
   border:1px solid green;
   padding:5px 15px 5px 15px;
   
   background-color: aliceblue;
   position:relative;
   p{
       font-size:15px;
   }
   button{
       position:absolute;
       right:20px;
       top:24px;
       
   }

`
export const StyledUl=styled.ul`
  margin:0;
  margin-top:10px;
  padding:0;
  width:${props=>props.width};
  
`

export const StyledInput=styled.input`
   padding:4px;
`