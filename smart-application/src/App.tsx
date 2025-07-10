import data from './data.json';
import './App.css'

function App() {
 

  return (
    <>
     {
      data.users.map((user=>(
       <h1>{user.name}</h1>
      )))
     }
    </>
  )
}

export default App
