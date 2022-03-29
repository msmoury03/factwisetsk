import React from 'react'
import style from './Deletecard.module.css'
import {ImCross} from 'react-icons/im'
import { useDispatch } from 'react-redux'
import { deletitem } from '../redux/action'



const Deletecard = ({setdelt,id}) => {
    const dispatch = useDispatch()

    const deletitemm = (id)=>{
        dispatch(deletitem(id))
        setdelt(false)
    }

    
  return (
    <div className={style.maindiv}>
        <div>
            <div className={style.div1}>
                <p>Are you sure you want to delete? </p>
                <ImCross style={{cursor:'pointer'}} onClick={()=>setdelt(false)}/>
            </div>
            <div className={style.div2}>
                <button className={style.btn } onClick={()=>setdelt(false)}>Cancel</button>
                <button onClick={()=>deletitemm(id)} style={{backgroundColor:'#f04b26',border:'none',color:'white'}} className={style.btn}>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default Deletecard