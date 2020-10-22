import React from 'react'
import './Contact.css'

 function Contact() {
    return (
        <div>
          <div className="container">
<div className="contact">
  <div className="first-contact">
    <div className="image-2">
      <img className="top-image" src="/image/name.jpg" alt=""/>
    </div>
    <h3 className="nev"><i className="fas fa-user"></i> Nevious <span>Ndlovu</span></h3>
      <h2 className="label"><i className="fab fa-github-square"></i> Web Development</h2> 
     
<div className="mail">
<ul className="icons">
<li><i className="fab fa-facebook-square"></i></li>
<li><i className="fab fa-twitter-square"></i></li>
<li><i className="fab fa-instagram-square"></i></li>
</ul>
      <h4>Address</h4>
      <h3><i className="fas fa-map-marker"></i> JHB Midrand</h3>
      <h3><i className="fas fa-envelope"></i> neviousndlovu@gmail.com</h3>
      </div>
      <button className="btn"><i className="fas fa-envelope"></i> Email Me</button>
  </div>

      <div className="second-contact">
  <h1>Web Design</h1>
     </div>
          </div>
      </div>
      </div>

    )
}

export default Contact