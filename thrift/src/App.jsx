import { useState } from 'react'
import './App.css'
import ReactDOM from "react-dom/client" 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

//import About from "./pages/About";
function App() {
  const [count, setCount] = useState(0)

  return (
    <></>
    /*<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="blogs" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>*/
  )
}

export default App
