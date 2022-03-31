/*
function sum(x, y){
    //check data types first and throw error
    try{
        if (typeof x !== Number || typeof y !== Number) {
            throw new Error("One or more arguments NOT a number")
        }
    }
    catch(err){
        console.log(err)
    }
    return x + y;
  }

  //console.log(sum("1","2"))

  try {
      sum("1","2")
  }
  catch(err){
      console.log(err)
  }
  */

  var user = {username: "sam", password: "123abc"};
  function login(username, password){
    //check credentials
    try {
        if (username !== user.username || password !== user.password) {
            throw new Error("username or password does not match")
        }
    }
    catch(err){
        console.log(err)
    }

    if (username === user.username || password == user.passord) {
        console.log("login successful")
    }
  }  

  try {
      login("jack","123abc")
  }
  catch(err){
      console.log(err)
  }