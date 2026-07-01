let username = "admin";
let password = "1234";

let login = new Promise(function(resolve,reject){

    if(username==="admin" && password==="1234"){

        resolve("Login Successful");

    }
    else{

        reject("Invalid Credentials");

    }

});

login
.then(function(result){

    console.log(result);

})
.catch(function(error){

    console.log(error);

});

