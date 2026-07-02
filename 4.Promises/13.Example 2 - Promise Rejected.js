let promise = new Promise(function(resolve, reject){

    reject("Task Failed");

});

promise
.catch(function(error){

    console.log(error);

})
.finally(function(){

    console.log("Promise Finished");

});

// Even though the Promise failed,

// .finally() still executes.