/*
HW-5; Objects and Classes

Instructions: Please create solutions to the following problems.
You can include all of your answers in this single document.

In order to test your HW, I will simply copy and paste the
entirety of this document into a web console and check that
the correct output occurs.

 */





/**************************************************/
// PROBLEM 1 - Classes - Vec()
//


//this was my initial code:
// class Vec{
//     constructor(x, y) {
//         this.posX = x;
//         this.posY = y;
//     }
//
//     plus(newb) {
//         this.posX + this.newbX, this.posY + this.newbY;
//
//     }
//
//     minus(newb){
//         this.posX - this.newbX, this.posY - this.newbY;
//     }
//     get length() {
//         return Math.sqrt(this.posX * this.posX + this.posY * this.posY);
//     }
//
// }

/*I couldn't remember to use the "return" function. I initially started working off
of your example on the website, so I didn't think of changing 'posX' to just 'x'.
THUS, my answers weren't turning out correctly, so I worked off of the solution,
which thankfully this time, I wasn't too far, and I don't know how I got what I did.
Probably luck.

So, here is what I got after I looked at the solution:
*/

class Vec{
  constructor(x, y) {
      this.x = x;
      this.y = y;
  }

  plus(newb) {
      return new Vec(this.x + newb.x, this.y + newb.y);

  }

  minus(newb){
      return new Vec(this.x - newb.x, this.y - newb.y);
  }
  get length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
  }

}


// Function Calls - DO NOT ALTER
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5


/**************************************************/
// PROBLEM 2 - Groups
//
/* The standard JavaScript environment provides another data structure called Set.
Like an instance of Map, a set holds a collection of values. Unlike Map, it does
not associate other values with those—it just tracks which values are part of the
set. A value can only be part of a set once—adding it again doesn’t have any effect.

 Write a class called Group (since Set is already taken). Like Set, it has add,
delete, and has methods. Its constructor creates an empty group, add adds a value
to the group (but only if it isn’t already a member), delete removes its argument
from the group (it if was a member), and has returns a Boolean value indicating whether
its argument is a member of the group.

 Use the === operator, or something equivalent such as indexOf, to determine whether
 two values are the same.

 Give the class a static from method that takes an iteratable object as argument
and creates a group that contains all the values produced by iterating over it.
*/
class Group {
 constructor (){
    this.array = [];
  }
  //for add, delete and has, I didn't really know to put "value" in, so that I can't
  //claim. It came from the solution as well as the arrow function (still grasping
  // its concept).
  add(value){
    if (!this.array.includes(value)) {
      this.array.push(value);
    }
  }

  delete(value) {
    const result = this.array.filter(x => x !== value);
  }

  has(value){
  	return this.array.includes(value);
  }


//for the static part this is how far I got.
 //I'm a REALLY REALLY slow reader, so at this point I'm running out of time
  //trying to get through all the material. I'm pretty much giving up here, because
  //I can't really do it by myself. I'm drowning here. So much to read, but I don't
  //have the time to absorb it. I'm "Googling" my best as well, but...
static from(list){
let list = new Group;
for (let value of list);

    return new Group;}
  }


}

// Function Calls - DO NOT ALTER
let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false


/**************************************************/
// PROBLEM 3 - Retry
//
/* Say you have a function primitiveMultiply that, in 20 percent of cases,
multiplies two numbers, and in the other 80 percent, raises an exception of type
MultiplicatorUnitFailure. Write a function ( "reliableMultiply()" ) that wraps
this clunky function and just keeps trying until a call succeeds, after which it
 returns the result.
//
// Make sure you handle only the exceptions you are trying to handle.
*/


class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2)
    return a * b;
  else
    throw new MultiplicatorUnitFailure("Klunk");
}

function reliableMultiply(a, b) {
  /*My original code: (I WAS SOOO CLOSE)

//     for (;;){
//     try{
//       let dir = primitiveMultiply (a,b);
//     break;
//   } catch (e) {
//     if (e instanceof MultiplicatorUnitFailure)
//       throw e;
//     }
}
}
From here I couldn't figure out where to go, so I referred to the solution.
*/
for (;;) {
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure))
        throw e;
    }
  }
}

/* I tried to work from an example from the text, so its why I used "dir" instead
of return, and didn't put in the "!" and etc.*/



console.log(reliableMultiply(8, 8));





/**************************************************/
// SUBMISSION
//
// When you have finished with this weeks homework, please write a readme response to the week. You should then add this directory into your git repo, sync it, and provide a link to the repo directory (1 link only), to the HW-5 Submission Forum via Moodle.
/**************************************************/
