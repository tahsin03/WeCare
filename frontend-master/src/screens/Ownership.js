import React from "react";
import Header from "../components/Header";


const ProfileScreen = () => {
  window.scrollTo(0, 0);
  // fileSelectedHandler = event => {
  //   console.log(event);
  // }

  return (
    <>
      <Header />
        <div className="container-form">
          <form className="form">
            <h2>Transfer Ownership</h2>
              <textarea className="form-control rounded search" id="message" cols="60" rows="12" placeholder="Write Something........"></textarea>
              <input type="file"  />
              <button type="submit">Post</button>
          </form>
        </div>
    </>
  );
};

export default ProfileScreen;

