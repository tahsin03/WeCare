import React from "react";
import Header from "../components/Header";

const ProfileScreen = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Header />
      <div align= "center">
        <h1>Telemedicine</h1>
      <div className="container-form-tele">
                <form className="form">
                  
                  <h4>Post Your Problems</h4>
                    <textarea className="form-control rounded search" id="message" cols="60" rows="12" placeholder="Write Something........"></textarea>
                    <button type="submit">Post</button>
                </form>
            <div className="list">
                <h2>Available Doctor</h2>
              <div className="list-tele">
                <ul>
                  <li>Dr. A</li>
                  <li>Dr. B</li>
                  <li>Dr. C</li>
                  <li>Dr. D</li>
                </ul>
              </div> 
            </div>    
        </div>
        
      </div>
    </>
  );
};

export default ProfileScreen;
