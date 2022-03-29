import React, { useState } from 'react'
import Carditem from './Carditem'
import Deletecard from './Deletecard'


const Newlist = ({filldata}) => {

    const [delt,setdelt] = useState(false)

    
    
    


    return (
        <div>

            { filldata.map((x,index)=>{
                return (
                    <Carditem data={x} key={index}/>
                )
            })}

            


        </div>
    )
}

export default Newlist