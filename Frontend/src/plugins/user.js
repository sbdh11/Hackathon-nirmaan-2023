
let serverAdd = "http://127.0.0.1:8080";

let getUser = async () => {
    if(!localStorage.getItem("uid")) return false;
    let uid = localStorage.getItem("uid");
console.log(uid);
        const response = await fetch(serverAdd + "/getuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({uid : uid})
        });
        const json = await response.json()

        if (json.status && json.status.email){
            console.log(json);
           return json.status;
        }
        else{
         return false;
        }

}

export default getUser;