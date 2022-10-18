import axios from 'axios'

export const fetchApi = () => {
  return async (dispatch) => {
    dispatch({type:'PATCH_API',payload : {requested: true}})
    try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
      const data = response.data
      dispatch({type : 'FETCH_API',payload : data})
    }
    catch(error){
      dispatch({type:'PATCH_API',
                payload:{error : error.toString()}})
    }
}
}

export const changePage = (current_page) => {
  return {type : 'PATCH_API', payload : {current_page}}
}


