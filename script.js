// Asynchronous JS, Promises, Async wait & Ajax //


// EXAMPLE OF SYNCHRONOUS CODE

/*const second = () => {
    console.log(`How are you doing ?`);
}

const first = () => {
  console.log(`Hey There !`);
  second();
  console.log('The end');
};


first();
*/

// Lets add some asynchronous in our function ( with settimeout)
// setTimeOut allow us to write code that should be executed later : Thats Asynchronous JS

/* So, setTimeout function is a function
that we can pass a callback and also the time.
So, first is the callback,
and again I'm going to use the arrow syntax.
So no arguments here.
And then the content of the function in here.
And then the second argument we pass
into the setTimeout function is for how long
we want the timer to run in milliseconds.*/

// All the code written in our previous lessons was Synchronous code which simply means that
// one statement is processed after the other, line by line.


// Example of Asynchronous Code

/*const second = () => {
  setTimeout(() => {
  console.log(`Async Hey There!`);
  }, 2000);
}

const first = () => {
  console.log('Hey There!');
  second();
  console.log('The end');
};

first();*/


// setTimeOut is like a timer which runs in the background of JS , and 
// which executes the callback function that we passed into it after 2 seconds
/* However this will not make the code stop for two seconds,
but instead the function returns,
goes back to the first function and logs "The end".
Then after the two seconds actually have passed,
Async "Hey There!" is logged to the console.*/


/*we can use callback functions
to defer actions into the future.
In order to make our code non-blocking.*/


/*function getRecipe() {
  setTimeout(() => {
  const recipeID = [578, 432, 978, 1008, 155, 555];
  console.log(recipeID);

  setTimeout(id => {
  const recipe = {title: 'Fresh Genovese Pesto Sauce', publisher: 'Nat'};
  console.log(`${id}: ${recipe.title}`);
  // only one parenthesis is needed when there is only one argument
  setTimeout(publisher => {
  const recipe = {title: 'Italian Pizza', publisher: 'Nat'};
  console.log(recipe);
  }, 1500, recipe.publisher);
  }, 1500, recipeID[1]);

  }, 1500);
}

getRecipe();
*/


/* So let's create a function here called "get recipe".
And then down here, we call that function.
Now the way this is gonna work is that we simulate
first that we get a bunch of recipe IDs from a server.
And then based on that, we select a recipe and then
get that recipe from a server after that.
So first, we get a couple of IDs, and then we get a recipe.
So again we're gonna use the set timeout function here, as I
mentioned before, basically to simulate the ajex call.
So the call to get the data from the server.
So our call back function here.
And then let's say this is going to take 1500 milliseconds.
So 1.5 seconds.
Then in here, let's simply create an array of recipe IDs.
And then some numbers.
And then let's just console log these.
And just to see if everything is working,
we are reloading it here.
And yeah.
So after one and a half second, then this code here
appears on the screen.
And again the set timeout here is just to
simulate that this data here comes back from a server.
Now once the data comes back from the server,
we then want to get the recipe for one of these IDs.

/* So basically after we receive this data here
from the server, then we need a new set timeout
where then the data comes from the server for the recipe.
And once more, this doesn't really come
from the server of course.
All of this is just to simulate the asynchronous behavior.
And don't worry, in one of the future lectures, of course,
we're going to use a real API and real ajax calls.
But for now, we don't want to mess with all that, and so
we just use the set timeouts to simulate that behavior.
Here let's just put one second.
And actually into the set timeout function,
we can pass a third argument.
Which can be an argument to the call back function.
So let's say we want an ID argument
in this call back function here.
So ID.
And then we can pass a value here as the third argument.
And that will then be passed into the call back function.
So let's then use the recipe IDs that we got from
the server in the beginning.
And so now, basically, this recipe ID too,
which will be 432, which will then be passed into
this call back function here as ID.
So let's create a fake recipe here
in this call back function.
And we're going to use an object.
So this recipe will be fresh tomato pasta.
And then let's also add a publisher.
And that will be Nat
So that's a fake recipe.
Now let's just log it to the console.
Console.log.*/

/*And so basically this now is like having
three chained ajax calls to get some data from the server.
But that this is getting here a bit out of hand.*/
// If we have 10 Level of nested calllbacks like this, its become unmanageable...
// Thats we call Callback Hell in JAVASCRIPT

// Thats why in ES6 , Promises have been released !
// And with promises, we can avoid Callback hell , and get a more manageable and readable code



// PROMISES - ES6

/*in simple terms a promise is an object
that keeps track about whether a certain event
has happened already or not, and if it did happen,
then the promise determines what happens next/*

/* So, before the event has happened the promise is pending.
Then after the event has happened the promise is called
settled or resolved which is the same thing
Now, when the promise was actually successful,
which means that a result is available,
then the promise is fulfilled, but if there was an error
then the promise is rejected, simple as that,
and this is actually important to know because we will
then be able to handle these two different situations
in our code.*/

/*So, with promises just like every other object type
we use the new keyword.
So we say new promise.
And then into that promise we pass in a function
called the executor which is a function that will
be immediately called once the promise is created.
Okay, so let's just add that here as well
without actually for now adding any code.
So again an arrow function and so that's our promise,
and of course let's also assign this promise here
to a variable.
So const get IDs, okay, and that's because we're recreating
the example that we had up here*/

/*  now getting back to our promise here
and this call back function that we passed into
the promise, remember that this one here is called
the executor function, and this function here itself
actually takes in two arguments which are
the call back function's resolve and reject.
So resolve and reject, and that's because this executor
function here is used to inform the promise
whether the event it is handling was successful or not.
And if it was successful we're gonna call the resolve
function and if not we call the reject function.
So remember that we had these two states here,
resolve if the promise was successful,
and reject if the promise was not successful.

So if you don't have any result,
and in that case we can call the reject function,
*/

const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([578, 432, 978, 1008, 155, 555]);
  }, 1500);
});

/* So we produced our very first very simple
promise here which is stored now in this get IDs variable.
So now it is actually time that we consume
this promise, and in order to do that we can use two methods
on all of the promise objects and these methods are
the then and the catch methods.
So all of the promise objects here inherit these two methods
and so we can now go ahead and use them.
So get IDs dot then and this then method allows us
to add an event handler for the case that the promise
is fulfilled.
So which means that there is a result.*/

const getRecipe = recID => {
  return new Promise((resolve, reject) => {
    setTimeout(ID => {
      const recipe = {title: 'Fresh Pesto Sauce', publisher: 'Nat'};
      resolve(`${ID}: ${recipe.title}`);
    }, 1500, recID);
  });
};

const getRelated = publisher => {
  return new Promise((resolve, reject) => {
    setTimeout(pub => {
      const recipe = {title: 'Italian Fresh Pizza', publisher: 'Nat'}; 
      resolve(`${pub}: ${recipe.title}`); 
    }, 1500, publisher)
  });
};


// Consumption of promises with then and catch methods 
/*getIDs
.then(IDs => {
  console.log(IDs);
  return getRecipe(IDs[2]);
})
.then(recipe => {
  console.log(recipe);
  return getRelated('Nat');
})
.then(recipe => {
  console.log(recipe);
})
.catch(error => {
  console.log('error');
});
*/

// IDs argument will be the result of the successfull promise


// Async/Await features - ES6 - Was designed only to Consume Promises 
// we have to still use the same way to produce promises

// WE START BY CREATING AN ASYNC FUNCTION with keyword async
/*So, this is a new special kind of function,
which simply means that this function
is an Asynchronous function.
So, one that basically keeps running in the background,
just the way that we learned before.
This Async function then returns a promise,
For now, what's important is that inside an Async function
we can have on or more Await expressions.
*/

// An Async function automatically returns a PROMISE
/*And, so if we return a value from the Async function,
using the return keyword,
then the promise
will automatically be resolved
with this returned value*/


// await expression will stop the code from executing , at this point,
// until the promise is fullfilled

async function getRecipesAW() {
  const IDs = await getIDs;
  console.log(IDs);
  const recipe = await getRecipe(IDs[2]); 
  console.log(recipe);
  const related = await getRelated('Nat');
  console.log(related);
  return recipe;
}
getRecipesAW().then(result => console.log(`${result} is the best ever!`));

// this function getRecipesAW will automatically return a promise
// with the resolved value of recipe, and so we can use now
// THEN method into which we pass a callback function. 



// Another example of promise 
/*
let promiseToCleanTheRoom = new Promise(function(resolve, reject) {

// cleaning the room 
let isClean = false;

  if (isClean) {
    resolve('Clean');
  } else {
    reject('not Clean');
  }


});
// fromresolve = 'clean'
promiseToCleanTheRoom.then(function(fromResolve) {
  console.log(`The room is ${fromResolve}`);
}).catch(function(fromReject) {
  console.log(`The room is ${fromReject}`);
});
*/
/*
let cleanRoom = function() {
  return new Promise(function(resolve, reject) {
  resolve('Cleaned the room');
  });
}

let removeGarbage = function(message) {
  return new Promise(function(resolve, reject) {
  resolve(message + 'Remove garbage');  
  });
}

let winIcecream = function(message) {
  return new Promise(function(resolve, reject) {
  resolve(message + ' won Icecream');
  });
}

/*cleanRoom().then(function(result) {
  return removeGarbage(result);
}).then(function(result) {
  return winIcecream(result);
}).then(function(result) {
  console.log('finished' + result);
})*/
/*
Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then(function() {
console.log('all finished');
});

Promise.race([cleanRoom(), removeGarbage(), winIcecream()]).then(function() {
  console.log('One of them is finished');
  });*/
