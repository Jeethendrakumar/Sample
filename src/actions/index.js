import axios from 'axios'

const fetchApi = () => {
  return async (dispatch) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const data = response.data
    dispatch({type : 'FETCH_API',payload : data})
}
}

export default fetchApi
