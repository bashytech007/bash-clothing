import {Routes,Route} from 'react-router-dom'
import Home from './routes/home/home.component'
import './categories.styles.scss'
import Navigation from './routes/navigation/navigation.component'
import Authentication from './routes/authentication/authentication.component'
// const Navigation=()=>{
//   return(
//     <div>
//       <div>
//         <h1>I am the navigation bar</h1>
//       </div>
//       <Outlet/>
//     </div>
//   )
// }
const Shop=()=>{

return <h1>Na shop Page you de</h1>
}


 const App = () => {
  return (

    <Routes>
       <Route path="/" element={<Navigation/>}>
       <Route index element={<Home/>} />
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/auth" element={<Authentication/>}/>
      </Route>
  </Routes>

  )
};

export default App;
