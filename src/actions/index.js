import axios from 'axios'

const fetchApi = () => {
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

export default fetchApi
