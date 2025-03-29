import React from "react";
import "./chat.css";
import getUser from "../../plugins/user";
import { useState } from "react";
import { io } from "socket.io-client";
let ChatHome = (props) => {
  let serverAdd = "http://127.0.0.1:8080";
  const socket = io("http://localhost:8080");
  let [currentRoom, setCurrentRoom] = useState(false);
  let [rooms, setRooms] = useState([]);
  let [msg, setMsg] = useState("");

  const fetchUsers = async () => {
    const url = `${serverAdd}/users`;

    let data = await fetch(url);
    let parsedData = await data.json();
    setRooms(rooms.concat(parsedData.users));
    console.log(rooms);
  };

  const handleSubmit = async (e) => {
    //e.preventDefault();
    const response = await fetch(serverAdd + "/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log(json);
    if (json.users) {
      setRooms(rooms.concat(json.users));
    } else {
      console.log("SMHHH");
    }
  };

  React.useEffect(() => {
    socket.on("connect", () => console.log(socket.id));
    socket.on("connect_error", () => {
      setTimeout(() => socket.connect(), 8080);
    });
    let data = {
      uid: localStorage.getItem("uid"),
      email: localStorage.getItem("email"),
      id: socket.id,
      user: JSON.parse(localStorage.getItem("user")),
      event: "join",
    };
    socket.emit("join", data);
    socket.on("newuser", (data) =>
      console.log("SSSSS " + JSON.stringify(data))
    );

    socket.on("pm", (data) => {
      console.log(data.user.fname);
      document.getElementById("msgs").innerHTML += ` <div className="fromMsg" >
    <span className="op" style="font-size: 13px; font-weight: 700;">${
      data.user.fname + " " + data.user.lname
    } </span>
    <span className="time" style="font-style: italic;font-size: 10px;color:grey;"> 03:00PM</span>
   
    <p className="msg" style="padding:7px;border:1px solid black;border-radius: 12px;font-size: 13px;">
    
      <span>
        ${data.msg}
      </span>
    </p>
  </div>`;
      console.log("NEW PMMM : " + JSON.stringify(data));
    });
    socket.on("time", (data) => console.log(data));
    socket.on("disconnect", () => console.log("server disconnected"));
    handleSubmit();
  }, []);

  function sendMsg() {
    let data = {
      from: localStorage.getItem("user").email,
      to: currentRoom.email,
      msg: msg,
      date: new Date(),
      user: JSON.parse(localStorage.getItem("user")),
    };
    socket.emit("send_to", data);
    document.getElementById("msgs").innerHTML += ` <div className="fromMsg" >
    <span className="op" style="font-size: 13px; font-weight: 700;">${"You"} </span>
    <span className="time" style="font-style: italic;font-size: 10px;color:grey;"> 03:00PM</span>
   
    <p className="msg" style="padding:7px;border:1px solid black;border-radius: 12px;font-size: 13px;">
    
      <span>
        ${data.msg}
      </span>
    </p>
  </div>`;
  }

  function updateRoom(room) {
    console.log("ROom updated");
    document.getElementById("msgs").innerHTML = "";
    let room2 = {
      email: room.email,
      name: room.fname + " " + room.lname,
    };
    setCurrentRoom(room2);
  }

  const onChange = (e) => {
    setMsg(e.target.value);
  };

  return (
    <main id="main" className="main" style={{ marginTop: "0px", background:"#fff0ce" }}>
      <section className="section">
        <div className="row">
          <div className="col-lg-3">
            <div className="card" >
              <div className="card-body" style = {{background:"#fff7e4"}}>
                <h5 className="card-title">
                  Chats{" "}
                </h5>
                {/* List group with custom content */}
                <ul
                  className="list-group list-group-numbered"
                  style={{ overflow: "scroll", maxHeight: "60vh"}}
                >
                  {rooms.map((room) => {
                    console.log(room);
                    return (
                      <li style = {{background:"#fff7e4"}}
                        className="list-group-item d-flex justify-content-between align-items-start"
                        onClick={() => {
                          updateRoom(room);
                        }}
                      >
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">
                            {room.fname + " " + room.lname}
                          </div>
                          <small>
                            {" "}
                            from{" "}
                            <i>
                              <small>{room.cname}</small>
                            </i>
                          </small>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                {/* End with custom content */}
              </div>
            </div>
          </div>

          <div className="col-lg-8" style={{ marginRight: "0px" }}>
            <div className="card b-2" style = {{background:"#fff7e4"}}>
              <div className="card-body b-2" style={{ width: "100%" }}>
                <h5 className="card-title ">
                  <b> {currentRoom.name}</b>
                </h5>
                <div id="msgs" className="msg-wrap"></div>
                <div className="input-group mb-3 m-2" style={{ width: "99%" }}>
                  {" "}
                  <input
                    type="text"
                    value={msg}
                    onChange={onChange}
                    id="msg"
                    name="msg"
                    className="form-control"
                    placeholder="Send message "
                    aria-label="Send Message"
                    aria-describedby="basic-addon2"
                    style = {{background:"#fff7e4"}}
                  />{" "}
                  <span
                    className="input-group-text btn btn-success"
                    id="basic-addon2"
                    onClick={sendMsg}
                  >
                    Send
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </section>
    </main>
  );
};

export default ChatHome;
