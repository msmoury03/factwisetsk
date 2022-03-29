
export const deletitem = (id)=>{
    return{
        type:"DELETEITEM",
        payload:id
    }
}

export const updatedata = (data)=>{
    return{
        type:"UPDATEDATA",
        payload:data
    }
}