import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './NavBar';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="support-page">
      <NavBar />
      <div className="background-image">
        {/* Image source can be replaced with your stock image */}
        <img src="/src/assets/supportbackgroundimage.jpg.webp" alt="Background" />
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search help articles" />
      </div>
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>Question 1?</h3>
          <p>Answer to question 1.</p>
        </div>
        <div className="faq-item">
          <h3>Question 2?</h3>
          <p>Answer to question 2.</p>
        </div>
        <div className="faq-item">
          <h3>Question 3?</h3>
          <p>Answer to question 3.</p>
        </div>
        <div className="faq-item">
          <h3>Question 4?</h3>
          <p>Answer to question 4.</p>
        </div>
        <div className="faq-item">
          <h3>Question 5?</h3>
          <p>Answer to question 5.</p>
        </div>
      </div>
    </div>
  )
}

export default App



