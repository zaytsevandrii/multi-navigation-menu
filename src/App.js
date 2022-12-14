import { useState } from "react"
import "./App.scss"
import Navigation from "./Navigation"

function App() {
  const [visibility,setVisibility] = useState(false)

    return (
        <div className="App">
            <button className="nav-btn open-btn" onClick={()=>setVisibility(!visibility)}>
                <i className="fas fa-bars"></i>
            </button>

            <img
                src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
                alt="Logo"
                className="logo"
            />
            <p className="text">Mobile Navigation</p>
            {/* --------Nav Menu------ */}
            <Navigation visibility={visibility} setVisibility={setVisibility}/>
            {/* <div className="nav nav-black">
        <div className="nav nav-red">
          <div className="nav nav-white">
            <button className="nav-btn close-btn"><i className="fas fa-times"></i></button>
            <img src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456" alt="Logo" className='logo'/>
            <ul className="list">
              <li><a href="#">Teams</a></li>
              <li><a href="#">Locations</a></li>
              <li><a href="#">Life at Netflix</a></li>
              <li>
                <ul>
                <li><a href="#">Netflix culture memo</a></li>
                <li><a href="#">Work life balance</a></li>
                <li><a href="#">Inclusion & diversity</a></li>
                <li><a href="#">Blog</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
        </div>
    )
}

export default App
