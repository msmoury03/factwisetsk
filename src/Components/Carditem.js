import React, { useEffect, useState } from 'react'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import stylee from './Listitem.module.css'
import { MdEdit, MdDelete } from 'react-icons/md'
import { TiDeleteOutline, TiTick } from 'react-icons/ti'
import { useDispatch, useSelector } from 'react-redux'
import { deletitem, updatedata } from '../redux/action'
import Deletecard from './Deletecard'



const Carditem = ({data}) => {

    const [show, setshow] = useState(false)
    const [edit, setedit] = useState(true)
    const dispatch = useDispatch()
    const [delt,setdelt] = useState(false)
    const [id,setid] = useState(null)

    const [dattaa, setdattaa] = useState({

        first: "",
        last: "",
        dob: "",
        gender: "",
        country: "",
        description: ""
    })

    const loaduserdata = () => {
        setdattaa(data)
    }
    useEffect(() => {
        loaduserdata()
    },[data])


    const handlechnge = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setdattaa({ ...dattaa, [name]: value })
    }

   

    const date = new Date()
    const aggge = date.getFullYear() - dattaa.dob.substring(0, 4)


    const handleeditsave = ()=>{
        dispatch(updatedata(dattaa))
        setedit(true)
    }

    

    const showfull = ()=>{
        setshow(!show)
        setedit(true)
    }

  return (
    <div className={stylee.apndiv} >
        <div className={stylee.maindiv}>
            <div style={{display:'flex',justifyContent:'space-around'}}>
            <img style={{borderRadius:'50%'}} src={data.picture}/>
            <div className={stylee.name}>{edit?data.first+" "+data.last : <div style={{display:'flex'}}><input type="text" value={dattaa.first} name="first" onChange={handlechnge}/>  <input type="text" value={dattaa.last} name="last" onChange={handlechnge}/> </div> }</div>
            </div>
            <div onClick={()=>showfull()}>
            {show?<AiFillCaretUp/>:<AiFillCaretDown/>}
            </div>
            </div>

            {show?(
                <div>

                    <div className={stylee.namefile}>
                        <div className={stylee.coldiv}>
                            <p>Age</p>
                            {edit?aggge:<input type='date'   onChange={handlechnge} name="dob"  />}
                        </div>

                        <div className={stylee.coldiv}>
                            <p>Gender</p>
                           <select disabled={edit} name="gender" onChange={(handlechnge)}>
                               {edit?<option>{dattaa.gender}</option>:null}
                               <option value='female'>Female</option>
                               <option value='Male'>Male</option>
                               <option value='prefer not to say'>prefer not to say</option>
                           </select>
                        </div>

                        <div className={stylee.coldiv}>
                            <p>Country</p>
                            <input type='text' value={dattaa.country} onChange={handlechnge} name="country"  disabled={edit}/>
                        </div>


                    </div>

                    <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start' ,marginLeft:'10px'}}>
                        <p>Description</p>
                        <textarea disabled={edit}  cols={50} rows={8} value={dattaa.description} onChange={handlechnge} name="description" ></textarea>
                    </div>

                   {edit?( <div style={{fontSize:'25px',display:'flex',justifyContent:'end' ,padding:'5px 10px'}}>
                        <MdDelete style={{cursor:'pointer',margin:'5px',color:'#c7332e'}} onClick={()=>setdelt(true)}/>
                        <MdEdit style={{cursor:'pointer',margin:'5px',color:'#2e5eb8'}} onClick={()=>setedit(false)}/>
                    </div>):(<div style={{fontSize:'25px',display:'flex',justifyContent:'end' ,padding:'5px 10px'}}>
                        <TiDeleteOutline style={{cursor:'pointer',margin:'5px',color:'#c7332e'}} onClick={()=>setedit(true)}/>
                        <TiTick style={{cursor:'pointer',margin:'5px',color:'#2e5eb8'}} onClick={handleeditsave}/>
                    </div>)}

                   
                    
                
            </div>
            ):null}
   {delt?<Deletecard id={dattaa.id}   setdelt={setdelt}/>:null}
   </div>

  )
}

export default Carditem