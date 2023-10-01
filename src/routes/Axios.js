import axios from 'axios';
import TodoList from './todos'
const getData = () => {
  axios.get('http://localhost:5000/api').then(respones=> {
    console.log(respones)
  })
};

const sendData = () => {
  axios.post('http://localhost:5000/api',{
    return{
      <>
      <TodoList/>
      </>
    }
  })
}


module export axios
