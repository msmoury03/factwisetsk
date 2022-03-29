import React, { useContext, useState } from 'react'
import Listitem from './Listitem'
import {Usercontextapi} from '../Context/Usercontext'
import { useSelector } from 'react-redux'
import Newlist from './Newlist'
import Deletecard from './Deletecard'
import style from './Listview.module.css'
import {BsSearch} from 'react-icons/bs'


const Listview = () => {

    const [text,settext] = useState('')
   

    const [data,setdata] = useContext(Usercontextapi)

    

    const myst = useSelector((state)=>state.mymainredu)

   const filldata = myst.filter((x)=>{
     return text!=""? x.first.toLowerCase().includes(text) ||x.last.toLowerCase().includes(text) :x
   })




  return (
    <div>

        <div className={style.searchdiv}>
          <BsSearch/>
            <input type='text' placeholder='Search User' value={text} onChange={(e)=>settext(e.target.value)}/>
        </div>

        

        {/* <Listitem/> */}

        <Newlist filldata={filldata}/>
        
        
    </div>
  )
}

export default Listview