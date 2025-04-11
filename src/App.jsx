import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayOut from './Components/LayOut/LayOut'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import NotFound from './Components/NotFound/NotFound'


function App() {
 
const routes = createBrowserRouter([
{path:"",element:<LayOut/>,children:[
{index:true,element:<Home/>},
{path:"home",element:<Home/>},
{path:"about-us",element:<About/>},
{path:"portfolio", element:<Portfolio/>},
{path:"contact", element:<Contact/>},
{path:"*",element:<NotFound/>},


]}


])
  return (
    <RouterProvider router={ routes }>
     


    </RouterProvider>
  )
}

export default App
