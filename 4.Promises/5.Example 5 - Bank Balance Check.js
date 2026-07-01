let balance = 5000;

let withdraw = new Promise(function(resolve,reject){

    if(balance >= 2000){

        resolve("Withdrawal Successful");

    }
    else{

        reject("Insufficient Balance");

    }

});

withdraw
.then(function(result){

    console.log(result);

})
.catch(function(error){

    console.log(error);

});

