
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Signup.css';
import React, { useState } from 'react';
import userService from './user-service-signup'; // Import the service

const Signup = ({ handleSignup }) => {
  const [email, setEmail] = useState('');
  const [username, SetUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const user = {
      email: email,
      password: password,
      username: username,
    };

    userService.signUp(user)
      .then((resp) => {
        console.log(resp);
        console.log("Success");
        // Optionally, you can call handleSignup here if needed
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div>
      <Navbar />
      <div class="SignupContainer">
        <div class="firstpart">
          <p class="heading">Register</p>
          <hr></hr><br></br>
          <form onSubmit={handleSubmit}>
            Name:<br></br>
            <input type="text" id="input" placeholder='Name'></input>
            <br></br><br></br>
            Email:<br></br>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              id="input" /><br></br><br></br>
            Password: <br></br>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required id="input"
            /><br></br><br></br>
            Confirm Password: <br></br>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required id="input"
            /><br></br><br></br>
            Role:
            <div class="domain">
              <div className="radio">
                <label>
                  <input type="radio" value="Broker" />
                  Broker
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="client" />
                  client
                </label>
              </div>
            </div><br></br>
            <button type="submit" id="submitbutton">Register</button>
            <p class="account">Already have an account? <Link class="clickhere" to="/Login">Click here</Link></p>
          </form>
          </div>
        <p class="heading">Register</p>
        <hr></hr><br></br>
        <form onSubmit={handleSubmit}>
          Email:<br></br>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
           id="input"/><br></br><br></br>
           Username:<br></br>
          <input
            type="username"
            placeholder="Username"
            value={username}
            onChange={(e) => SetUsername(e.target.value)}
            required
           id="input"/><br></br><br></br>
          Password: <br></br>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required id="input"
          /><br></br><br></br>
          Confirm Password: <br></br>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required id="input"
          /><br></br><br></br>
<br></br><br></br>
          <button type="submit" id="submitbutton">Register</button>
        </form>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600" alt="side iamge" id="secondpartimage"></img>
        </div>

      </div>
    </div>
  );
};

export default Signup;
