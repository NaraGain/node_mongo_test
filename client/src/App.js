import { useEffect, useState } from 'react';
import './App.css';
import { Login } from './component/login';



function App() {
const [data, setData] = useState(null)

useEffect(()=>{
  fetch('http://localhost:4000/user').then((res)=> res.json()).then((data)=> setData(data.User))
}, [])




  return (
    <div className="App">
    <Login></Login>
    </div>
  );
}

export default App;
