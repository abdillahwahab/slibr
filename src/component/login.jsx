import React, { useState } from 'react';
import icon_email from '../icons/icon_email.svg';

export class SLibr_login extends React.Component {

  render(){
    return (
     <div className="container popup_login">
        <form className="flex">
            <div className="container input row">
                <div className="col-2">
                    <img src={icon_email} className="icon" alt="icon" />
                </div>
                <div className="col-10">
                    <input className="form-control me-2" type="email" placeholder="Email" aria-label="email"/>
                </div>
            </div>
            <input className="form-control me-2 " type="password" placeholder="Password" aria-label="password"/>
            <button className="btn btn-outline-success" type="submit"><span>Sign In</span></button>
            <button className="btn btn-outline-success" type="submit"><span>Sign Up</span></button>
        </form>             
     </div>
      );
  }
}
