import React from 'react'
import "./rightbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";

export default function Rightbar() {
  return (
    <div className='rightbar'>
        <div className="sidebarWrapper">
        <div className="addContainer">
          <div className="card card-shadow" style={{"width": "18rem"}}>
            <img src="https://images.pexels.com/photos/684318/pexels-photo-684318.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..." height="200px" />
              <div className="card-body">
                <FontAwesomeIcon icon={faShareNodes}/>
                <span style={{"marginLeft":"5px"}}>Share</span>
                <button type="button" className="shopbtn">Shop Now</button>
              </div>
          </div>
          <div className="card card-shadow add2" style={{"width": "18rem"}}>
            <img src="https://images.pexels.com/photos/684363/pexels-photo-684363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." height="200px" />
              <div className="card-body">
                <FontAwesomeIcon icon={faShareNodes}/>
                <span style={{"marginLeft":"5px"}}>Share</span>
                <button type="button" className="shopbtn">Shop Now</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
