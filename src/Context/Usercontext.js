import { createContext, useState } from "react";
import mydata from '../data/celebrities.json'

export const Usercontextapi = createContext()

export const Usercontext = (props)=>{
    const [data,setdata] = useState(mydata)

    return(
        <Usercontextapi.Provider value={[data,setdata]}>
            {props.children}
        </Usercontextapi.Provider>
    )
}

