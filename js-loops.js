/*********let x = 1;
let y = 1;

myLoop: while (true) {
	console.log(`Outer loop ${x}.`);
	x++;

	while (true) {
		console.log(`Inner loop ${y}.` + " x : "+x);
		y++;
		if (x == 5 && y % 5 == 0) {
			break myLoop;
		} else if (y % 5 == 0) {
			break;
		}
	}
}

let a = 1;
let b = 1;

myLoop1: while (true) {
	console.log(`Outer loop ${a}.`);
	a++;

	while (true) {
		console.log(`Inner loop ${b}.` + "a : " + a);
		b++;

		if (a == 5 && b % 5 == 0) {
			break myLoop1;
		} else if (b % 5 == 0) {
			continue myLoop1;
		}
	}
} 

let myMovies = ['Batman', 'The Count of Monte Cristo', 'Shrek'];
myMovies.push('Trading Places', 'Antitrust');
console.log(myMovies)
myMovies.shift();
myMovies.unshift();
console.log(myMovies) *****/
/*const vehicle = {
	color: "blue",
	hp: 4000,
	year: 1989,
	"active registration": true
}
delete vehicle["active registration"]; // removing an existing property
for (const key in vehicle) {
	console.log(key);
}

// Assume these variables are reset for each of the examples below.
let numArray = [
    { value: 10 },
    { value: 20 },
    { value: 0 },
    { value: -10 }, 
    { value: 15 }, 
    { value: 28 }, 
    { value: -1000 },
    { value: 42 },
    { value: 7 }
];

function returnEven(array) {
    let newArray = [];

    array.forEach((element) => {
        if (element.value % 2 == 0) {
            newArray.push(element);
        }
    });

    return newArray;
}

let newArray = returnEven(numArray);

console.log(newArray)

newArray[0].value += 10;

numArray[3].value = 67;

let myEvenValue = newArray[1].value;
myEvenValue /= 2;

const person = {
	name: {
	  first: 'Elyan',
	  last: 'Kemble',
	},
	age: 32,
	location: {
	  city: 'Garland',
	  state: 'Texas',
	  zip: 75040
	},
	occupation: 'Front-End Developer',
	introduce() {
	  console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
	}
  }
  
  person.introduce();

setTimeout(function () {hello(wait, goodbye)}, 2000)


function hello(callback1, callback2){
	console.log("hello")
	callback1()
	callback2()
}

function wait(callback){
	console.log("wait")
}

function goodbye(){
	console.log("goodbye")
}*/

// function resolve(){
// 	console.log("resolve function was called")
// }

// function reject(){
// 	console.log("reject function was called")
// }

// new Promise((resolve, reject) => {
// 	console.log("Initial");
  
// 	resolve();
//   })
// 	.then(() => {
// 	  throw new Error("Something failed");
// 	  console.log("Do this");
// 	})
// 	.catch(() => {
// 	  console.error("Do that");
// 	})
// 	.then(() => {
// 	  console.log("Do this, no matter what happened before");
// 	});

// const promise1 = Promise.reject(0);
// const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

// const promises = [promise1, promise2, promise3];

// Promise.any(promises).then((value) => console.log(value));

// const wait = (ms) => new Promise((resolve, reject) => {
//     try {
// 		console.error("Do that correct");
//         setTimeout(resolve, ms);
//     } catch (e) {
// 		console.error("Do that error");
//         reject(e);
		
//     }
// });

// wait(10 * 1000)
//   .then(() => {console.error("Do this")})
//   .catch(console.error("Do that"));

// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// wait(0).then(() => console.log("Cat"));

// Promise.resolve()
//   .then(() => console.log("Dog"))
//   .then(() => console.log("Cow"));

// console.log("Bird");

function resolveAfterSeconds(t) {
    const myPromise = new Promise(resolve => {
        setTimeout(() => {
            resolve('Done!');
        }, t * 1000);
    });

    return myPromise;
}

async function testAwait() {
    console.log('Testing...');

    const result = resolveAfterSeconds(2);

    console.log(result);
}

testAwait();