import React from 'react';
import './style/style.css';
import process from './images/analytics_process.svg';
import logo from './images/logo.png';

function App() {
  return (
    <div className="container">
    <div className="forms-container">
      <div className="signin-signup">
        <form action="#" className="sign-in-form">
          <h2 className="title">Login</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Email" />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Senha" />
          </div>
          <input type="submit" value="Login" className="btn solid" />
        </form>
      </div>
    </div>

    <div className="panels-container">
      <div className="panel left-panel">
        <div className="content">
        <img src={logo} className="image" alt="" style={{width:"50%", marginBottom:10}} />
          <h3>SINI</h3>
          <p>
            Sistema interno de notificação de incidente
          </p>
        </div>
        <img src={process} className="image" alt="" />
      </div>
    </div>
  </div>
  );
}

export default App;
