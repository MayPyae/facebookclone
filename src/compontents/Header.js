import React, { Component } from "react";
import logo from "./../logo.svg";
class Header extends Component {
  render() {
    return (
      <div className="grid grid-cols-3 menu-dark">
        <div className="flex items-center">
          <img src={logo} className="w-20" />
          <div className=" px-4 py-2 rounded-full bg-input">
            <i class="fas fa-search text-gray-500 mr-2"></i>
            <input
              type="text"
              className="outline-none text-white bg-input "
              placeholder="Search Facebook"
            />
          </div>
        </div>
        <div>
          <div className="grid grid-cols-4 gap-2  h-full w-4/5 mx-auto">
            <a href="#" className="menu-btn">
              <i class="fas fa-home  text-2xl"></i>
            </a>
            <a href="#" className="menu-btn">
              <i class="fas fa-video  text-2xl"></i>
            </a>
            <a href="#" className="menu-btn">
              <i class="fas fa-users  text-2xl"></i>
            </a>
            <a href="#" className="menu-btn">
              <i class="fas fa-gamepad text-2xl"></i>
            </a>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-end h-full">
            <a href="#" className="action-btn ">
              <i class="fas fa-plus  text-xl"></i>
            </a>
            <a href="#" className="action-btn">
              <i class="fab fa-facebook-messenger  text-xl"></i>
            </a>
            <a href="#" className="action-btn">
              <i class="fas fa-bell  text-xl"></i>
            </a>
            <a href="#" className="action-btn">
              <i class="fas fa-caret-down text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
