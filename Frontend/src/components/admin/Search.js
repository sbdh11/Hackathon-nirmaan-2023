import { useParams } from 'react-router-dom';
import React from "react";
import { useState } from "react";

let Search = () => {
    let serverAdd = "http://127.0.0.1:8080";
    const params = useParams()

    let [users, setUsers] = useState([]);
    let [id, setId] = useState("");

  
    const handleSearch = async (e) => {
        //e.preventDefault();
        setId(params.id);
        const response = await fetch(serverAdd + "/searchusers", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({query:params.id})
        });
        const json = await response.json()
        console.log(json);
        if (json.status){
          setUsers(json.status)
        }
        else {
          console.log("SMHHH")
        }
      }
      if(id !== params.id) handleSearch();
      React.useEffect(() => {
        handleSearch();
      }, []);
    
     
    

    // yuo can find all params from here
    console.log("ssssss" + JSON.stringify(params))

  

    return   <main id="main" className="main" style = {{background:"#fff0ce",minHeight:"91.5vh"}}>
   <section class="section">
      <div class="row">
        <div class="col-lg-6"></div>
    
    
    <div className="card">
      <div className="card-body" style = {{background : "#fff7e4"}}>
        <h5 className="card-title">Search results for {id} </h5>
      
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">College</th>
              <th scope="col">Age</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>


          {users.map((user,i) => {

                    console.log(user);
                    return (
                        <tr>
                        <th scope="row">{i +1}</th>
                        <td>{user.fname + " " + user.lname}</td>
                        <td>{user.cname}</td>
                        <td>28</td>
                        <td><button className='btn btn-success'> Connect</button></td>
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
}

export default Search;