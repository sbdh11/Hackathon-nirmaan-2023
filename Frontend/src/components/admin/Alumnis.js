import { useState } from "react";
import React from "react";
let Alumnis = () => {
  let serverAdd = "http://127.0.0.1:8080";
  //const params = useParams()

  let [users, setUsers] = useState([]);
  //let [id, setId] = useState("");

  let cname = JSON.parse(localStorage.getItem("user")).cname;
  const handleSearch = async (e) => {
    //e.preventDefault();
    //  setId(params.id);
    const response = await fetch(serverAdd + "/usersbyclg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ clg: cname }),
    });
    const json = await response.json();
    console.log(json);
    if (json.users) {
      setUsers(json.users);
    } else {
      console.log("SMHHH");
    }
  };
  // if(id !== params.id) handleSearch();
  React.useEffect(() => {
    handleSearch();
  }, []);


  async function verifyAlum(uid) {
    const response = await fetch(serverAdd + "/verifyalumni", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uid: uid }),
    });
    const json = await response.json();
    console.log(json);
    if (json.users) {
      setUsers(json.users);
    } else {
      console.log("SMHHH");
    }
  };

  async function declineAlum(uid) {
    const response = await fetch(serverAdd + "/declinealumni", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uid: uid }),
    });
    const json = await response.json();
    console.log(json);
    if (json.users) {
      handleSearch()
    } else {
      console.log("SMHHH");
    }
  };
  


  // yuo can find all params from here
  //console.log("ssssss" + JSON.stringify(params))

  return (
    <main id="main" className="main" style = {{background:"#fff0ce", minHeight:"91.5vh"}}>
      <section class="section">
        <div class="row">
          <div class="col-lg-6"></div>

          <div className="card" style = {{background : "#fff7e4"}}>
            <div className="card-body">
              <h5 className="card-title">Alumnis at {cname} </h5>

              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">College</th>

                    <th scope="col">Branch</th>
                    <th scope="col">Year Of Graduation</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, i) => {
                    console.log(user);
                    return (
                      <tr>
                        <th scope="row">{i + 1}</th>
                        <td>{user.fname + " " + user.lname}</td>
                        <td>{user.cname}</td>
                        <td>{user.branch}</td>
                        <td>{user.yog}</td>
                        <td>
                          {user.isVerifiedAlumni ? (
                            <button
                              className="btn btn-success"
                              data-aria-label="verify"
                              disabled
                            >
                              {" "}
                              Verified{" "}
                            </button>
                          ) : (
                            <button
                              className="btn btn-warning"
                              data-aria-label="verify"
                            >
                              {" "}
                             Pending
                            </button>
                          )}
                        </td>
                        <td>
                          {user.isVerifiedAlumni ? (
                            <button
                              className="btn btn-success"
                              data-aria-label="verify"
                              
                              onClick={() => { verifyAlum(user.uid) }}
                            >
                              {" "}
                              Connect{" "}
                            </button>
                          ) : (<>
                            <button
                              className="btn btn-success"
                              data-aria-label="verify"
                              onClick={() => { verifyAlum(user.uid) }}
                            >
                              {" "}
                              Verify
                            </button> <button className='btn btn-danger' onClick={() => { declineAlum(user.uid) }} data-aria-label="verify">Decline</button>
                            </>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {/* End Tables without borders */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Alumnis;
