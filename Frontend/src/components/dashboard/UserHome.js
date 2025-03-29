
import { Outlet, Link } from "react-router-dom";
import React from 'react'
import Dashboard from "./Dashboard";
import "./dashboard.css";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
import Logo from "../../img/Logo.png"
import { useHistory } from "react-router-dom";
import { useState } from "react";
import getUser from "../../plugins/user";
import ChatHome from "../chatsystem/ChatHome";

import {io} from 'socket.io-client'
import Search from './Search';

let UserHome = (props) => {


  function handleSubmit(e) {
    e.preventDefault();
    navigate.push("/search/" + search);

  }


  const navigate = useHistory();
  console.log(getUser());
  if (!localStorage.getItem("uid")) navigate.push("/");
  function signout() {
    localStorage.removeItem("uid");
    navigate.push("/");
  }

  let [user, setUser] = useState(false);
  let [search, setSearch] = useState("");

  if (!user) {
    getUser().then((data) => {
      setUser(data);
      processFurther(data);
    });
  }

  function processFurther(user) {
    if (user.isCollegeAdmin) navigate.push("/admin");
    localStorage.setItem('user', JSON.stringify(user)); 
      const socket = io('http://localhost:8080')
      socket.on('connect', ()=>console.log(socket.id))
      socket.on('connect_error', ()=>{
        setTimeout(()=>socket.connect(),5000)
      })
      socket.emit("test");
     socket.on('time', (data)=>console.log(data))
     socket.on('disconnect',()=>console.log('server disconnected'))
   
   

  }

  const onChange = (e)=>{
    setSearch(e.target.value)
}




    return     (<> <header id="header" className="header fixed-top d-flex align-items-center" style={{background:"#fedf8f"}}>
    <div className="d-flex align-items-center justify-content-between">
      <a href="index.html" className="d-logo d-flex align-items-center">
        <img src="assets/img/d-logo.png" alt="" />
        <a href="/admin" className="d-logo d-flex align-items-center">
        <img src="assets/img/d-logo.png" alt="" />
        <a href="index.html" className="logo d-flex align-items-right">
            <img className="d-flex align-items-right logo" src={Logo} />
          </a>
          <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
      </a>
      </a>
      <i className="bi bi-list toggle-sidebar-btn" />
    </div>{/* End d-logo */}


        {/* End d-logo */}
        <div className="search-bar">
          <form onSubmit={handleSubmit}
            className="search-form d-flex align-items-center"
           
          >
            <input
              type="text"
              value={search}
              onChange={onChange}
              placeholder="Find Connections"
              title="Enter search keyword"
              style = {{background : "#fff7e4"}}
            />
            <button title="Search" >
              <i className="bi bi-search" />
            </button>
          </form>
        </div>
        {/* End Search Bar */}
        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item d-block d-lg-none">
              <a className="nav-link nav-icon search-bar-toggle " href="#">
                <i className="bi bi-search" />
              </a>
            </li>
            {/* End Search Icon*/}
            <li className="nav-item dropdown">
              <a
                className="nav-link nav-icon"
                href="#"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-bell" />
                <span className="badge bg-primary badge-number">4</span>
              </a>
              {/* End Notification Icon */}
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <li className="dropdown-header">
                  You have 4 new notifications
                  <a href="#">
                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                      View all
                    </span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                  <i className="bi bi-exclamation-circle text-warning" />
                  <div>
                    <h4>Lorem Ipsum</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>30 min. ago</p>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                  <i className="bi bi-x-circle text-danger" />
                  <div>
                    <h4>Atque rerum nesciunt</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>1 hr. ago</p>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                  <i className="bi bi-check-circle text-success" />
                  <div>
                    <h4>Sit rerum fuga</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>2 hrs. ago</p>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                  <i className="bi bi-info-circle text-primary" />
                  <div>
                    <h4>Dicta reprehenderit</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>4 hrs. ago</p>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="dropdown-footer">
                  <a href="#">Show all notifications</a>
                </li>
              </ul>
              {/* End Notification Dropdown Items */}
            </li>
            {/* End Notification Nav */}
            <li className="nav-item dropdown">
              <a
                className="nav-link nav-icon"
                href="#"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-chat-left-text" />
                <span className="badge bg-success badge-number">3</span>
              </a>
              {/* End Messages Icon */}
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                <li className="dropdown-header">
                  You have 3 new messages
                  <a href="#">
                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                      View all
                    </span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="message-item">
                  <a href="#">
                    <img
                      src="assets/img/messages-1.jpg"
                      alt=""
                      className="rounded-circle"
                    />
                    <div>
                      <h4>Maria Hudson</h4>
                      <p>
                        Velit asperiores et ducimus soluta repudiandae labore
                        officia est ut...
                      </p>
                      <p>4 hrs. ago</p>
                    </div>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="message-item">
                  <a href="#">
                    <img
                      src="assets/img/messages-2.jpg"
                      alt=""
                      className="rounded-circle"
                    />
                    <div>
                      <h4>Anna Nelson</h4>
                      <p>
                        Velit asperiores et ducimus soluta repudiandae labore
                        officia est ut...
                      </p>
                      <p>6 hrs. ago</p>
                    </div>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="message-item">
                  <a href="#">
                    <img
                      src="assets/img/messages-3.jpg"
                      alt=""
                      className="rounded-circle"
                    />
                    <div>
                      <h4>David Muldon</h4>
                      <p>
                        Velit asperiores et ducimus soluta repudiandae labore
                        officia est ut...
                      </p>
                      <p>8 hrs. ago</p>
                    </div>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="dropdown-footer">
                  <a href="#">Show all messages</a>
                </li>
              </ul>
              {/* End Messages Dropdown Items */}
            </li>
            {/* End Messages Nav */}
            <li className="nav-item dropdown pe-3">
              <a
                className="nav-link nav-profile d-flex align-items-center pe-0"
                href="#"
                data-bs-toggle="dropdown"
              >
                <img
                  src="assets/img/profile-img.jpg"
                  alt="Profile"
                  className="rounded-circle"
                />
                <span className="d-none d-md-block dropdown-toggle ps-2">
                  {user.fname}
                </span>
              </a>
              {/* End Profile Iamge Icon */}
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                  <h6>{user.fname + " " + user.lname}</h6>
                  <span></span>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    className="dropdown-item d-flex align-items-center"
                    to="/profile"
                  >
                    <i className="bi bi-person" />
                    <span>My Profile</span>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="pages-faq.html"
                  >
                    <i className="bi bi-question-circle" />
                    <span>Need Help?</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    onClick={signout}
                    href="#"
                  >
                    <i className="bi bi-box-arrow-right" />
                    <span>Sign Out</span>
                  </a>
                </li>
              </ul>
              {/* End Profile Dropdown Items */}
            </li>
            {/* End Profile Nav */}
          </ul>
        </nav>
        {/* End Icons Navigation */}

        <div>
        
        <div className="modal fade" id="basicModal" tabIndex={-1}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Basic Modal</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos.
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      </header>

      <Sidebar />
      {props.tab === "profile" ? (
        <Profile />
      ) : props.tab === "dashboard" ? (
        <Dashboard />
      ) : props.tab === "chats" ? (
        <ChatHome />
      ) : props.tab === "search" ? (
        <Search />
      ) : (
        ""
      )}
    </>
  );
};

export default UserHome;
