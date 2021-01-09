import React from 'react'
import TopContacts from "./TopContacts";
import NavBar from "./NavBar";

export default class Header extends React.Component{
   render(){
       return(
           <header>
               <TopContacts/>
               <NavBar/>
           </header>

       )
   }
}