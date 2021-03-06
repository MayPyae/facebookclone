import React, { Component } from "react";

class ProfileHeader extends Component {
  render() {
    return (
      <div>
        <div className="w-2/3 mx-auto ">
          <div
            style={{ backgroundImage: "url('img1.jpeg')" }}
            className="h-64 bg-cover flex items-end justify-center relative"
          >
            <div className="relative">
              <img src="img2.jpeg" className="profile-img" />
              <a href="#" className="absolute edit-profile-photo">
                <i class="fas fa-camera"></i>
              </a>
            </div>
            <div>
              <a href="#" className="edit-cover-photo">
                <i class="fas fa-camera"></i> Edit Cover Photo
              </a>
            </div>
          </div>
          <div className="text-center mt-5 text-white ">
            <h2 className="text-3xl font-bold">May Pyae Sone </h2>
            <p className="text-gray-500">Are You Sure?</p>
            <a href="#" className="text-blue-500 font-bold">
              Edit
            </a>
          </div>
          <div className="mt-2 w-4/5 mx-auto">
            <hr></hr>
            <div className="text-gray-500 font-bold">
              <ul className="">
                <li className="inline-block p-4 rounded hover:bg-gray-900">
                  <a href="#">Timeline</a>
                </li>
                <li className="inline-block p-4 rounded hover:bg-gray-900">
                  <a href="#">Friends</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProfileHeader;
