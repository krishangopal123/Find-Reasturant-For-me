import {FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE} 
from './Types'
import q from 'q'
export const fetchUsers=(name)=>{
    let deferred = q.defer()
    //var Deferred = require('promise-deferred');
 
   //var deferred = new Deferred();

    return (dispatch) => {
       
        dispatch(fetchUsersRequest())
        let completeUrl="http://localhost:8080/food?foodName="+name;
        
      
    
        fetch(completeUrl)
        .then((response) => response.json())
    .then((responseJson) => deferred.resolve(responseJson)
       
      
    )
    return deferred.promise


}
}
export const fetchUsersRequest=()=>{
    return{
        type:FETCH_USERS_REQUEST
    }

}
export const fetchUsersSuccess=(user,count)=>{
   
    return{
        type:FETCH_USERS_SUCCESS,
        payload:user
        
    }
}
export const fetchUsersFailure=error=>{
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}