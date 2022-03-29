import React, { useContext } from 'react'
import { Usercontextapi } from '../Context/Usercontext'
import Deletecard from './Deletecard'

import Listview from './Listview'


const Home = () => {

    const [data, setdata] = useContext(Usercontextapi)

    
  return (
    <div>
        <Listview/>
        
        
    </div>
  )
}

export default Home