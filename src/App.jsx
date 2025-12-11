import { Outlet, useRoutes } from 'react-router-dom'
import routeConfig from './routes'
import './App.css'
import "./output.css"

function App() {
  const element = useRoutes(routeConfig)

  return (
    <div className='w-full h-screen flex justify-center items-center p-5'>
      {element} 
    </div>
  )
}

export default App
