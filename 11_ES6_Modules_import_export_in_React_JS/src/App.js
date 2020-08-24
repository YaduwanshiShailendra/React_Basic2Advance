const youtuber = "techcapsule";

const favprog = "React js";

function myName() {
  let name = "Shailendra Yadav"; // defining a variable
  return name; // returning value of variable name
}

function myHobby() {
  let hobby = "Playing guitar"; // defining a variable
  return hobby;
}

export default youtuber; //  exporting default function or variable

export { favprog, myName, myHobby }; // way to export multiple functions
