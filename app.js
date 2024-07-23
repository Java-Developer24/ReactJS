// const promiseone= new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("chai");
//         resolve();
//     },1000)
// })
// promiseone.then(function(){
//     console.log("promise consumed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Promise two");
//         resolve({username:"chai"})
//     },1000)
// }).then(function(username){
//     console.log(username);
// })

// const promisetwo=new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("PromiseTwo");
//         resolve(["username",1])
//     }, 1000);
// })
// promisetwo.then(function(username){
// console.log(username);
// return username[0];
// }).then(function(user){
// console.log(user);
// })

// const promisethree=new Promise(function(resolve, reject){
//     let error=false;
//     if(!error){
//         resolve({username:"Chai", Id:"guru"})
//     }else{
//         reject("something went wrong")
//     }
// })
// promisethree.then(function(user){
//     console.log(user);
//     return user.username;
// }).then(function(username){
//     console.log(username);
// }).catch(function (error) {
//     console.log(error);
    
// })

const promiseFour=new Promise(function(resolve, reject){
    let error=false;
    if(!error){
        resolve({username:"Chai", Id:"guru"})
    }else{
        reject("something went wrong")
    }
})

async function promiseFourdata(){
     try {
        const response=await promiseFour;
        
       console.log(response.username);
        
     } catch (error) {
        console.log(error);
     }
}

// promiseFourdata();

async function getData() {
   const response=await fetch('https://randomuser.me/api')
   const data=await response.json();
   console.log(data)

    
}

getData();