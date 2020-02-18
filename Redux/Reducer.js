import {FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS
    ,FETCH_USERS_FAILURE} from './Types'
const initialState={
    loading:false,
    users:'',
    error:''

}
const Reducer=(state=initialState,action)=>{
    
    switch(action.type){
        case FETCH_USERS_REQUEST:return{
            loading:true
        }
        case FETCH_USERS_SUCCESS:
        return{

            loading:true,
            users:action.payload,
            //Counter:action.payloadCount
        }
        case FETCH_USERS_FAILURE:return{
            loading:true,
            error:action.payload
        }
        default :return state
    }

}
export default Reducer
