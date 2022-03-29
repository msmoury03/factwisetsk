
import data from '../../data/celebrities.json'

const mymainredu = (state=data,action)=>{
    switch (action.type) {
        case "DELETEITEM":
            const filldata = state.filter((myfil)=>myfil.id != action.payload)
            return filldata;
        
            case "UPDATEDATA":
                const myfill = state.map((myf)=> myf.id==action.payload.id ? action.payload: myf)
                return myfill;

    
        default:
            return state;
    }
}

export default mymainredu
