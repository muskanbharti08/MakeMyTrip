import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component1/Header'
import Grid from './Component1/Grid'
import Card1 from './Component1/Card1'
import Card2 from './Component1/Card2'
import Card3 from './Component1/Card3'
import ImgCard from './Component1/ImgCard'
function App() {
  const [count, setCount] = useState(0)

  return (
  <>
 <div className="">
  <div className="space-y-5">
  <Header/>
  <Card1/>
  </div>
  <div className="mt-4"><Grid/></div>
 </div>
 <Card2/>

 <div className=""><Card3/></div>
 {/* <div className=""><ImgCard/></div> */}
  </>
  )
}

export default App
