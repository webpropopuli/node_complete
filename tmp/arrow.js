var square = x => x * x;
console.log(square(9));

var user = {													// <-- this is an object
  name: 'David',											// <----a property of the object
  sayHi: () => {												// <----a method of the object
    console.log(arguments);							// ...but we don't get an arguments object...
	
    console.log(`Hi. I'm ${this.name}`);			// 'this' is not available in the fat arrow
  },
  sayHiAlt () {
	 console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
    console.log(arguments);							// an array-like object of args to work with- '{ '0': 1, '1': 2, '2': 3 }
    console.log(`Hi. I'm ${this.name}`);			// this fn def is a much simpler object - look at the output
  }
};

user.sayHi(1, 2, 3);
user.sayHiAlt(1, 2, 3);
