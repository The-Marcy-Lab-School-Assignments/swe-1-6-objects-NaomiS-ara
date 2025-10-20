const coolGreeting = () => {
};
function coolGreeting(person) {
  if (person.isCool) {
    return `What is UP ${person.name.toUpperCase()}? How you been doin'?`
    // do something if true
  } else {
    return 'Greetings ${person.name.}, how have you been lately?';

  }
}


const haveBirthday = () => {
};
function haveBirthday(person) {
  person.age += 1;
}


const becomeSecretAgent = () => {
};
function becomeSecretAgent(person, spyHandle) {
  delete person.name;
  person.name = spyHandle;
}



const carMaker = () => {
};
function carMaker(name, maker, year) {
  return {
    name,
    maker,
    year,
    needsOilChange: false
  };
}



const weAreNotFriends = () => {
};
function weAreNotFriends(person) {
  return person.friends.pop();
}



const listHobbies = () => {
};
function listHobbies(person) {
  for (let hobby of person.hobbies) {
    console.log(`${person.name} likes ${hobby}.`);
  }
}



const getNextOpponent = () => {
};
function getNextOpponent(team) {
  if (team.matches.length === 0) {
    return null;
  }
  return team.matches[0].teamName;
}
// This function:
//Checks if there’s at least one match.
//Returns the name of the first opponent.
//Returns null if the list is empty.
 //Leaves the original array untouched.




const listAllKeys = () => {
};
function listAllKeys(obj) {
  return Object.keys(obj);
}


const listAllValues = () => {
};
function listAllValues(obj) {
  return Object.values(obj);
}


const convertToMatrix = () => {
};
function convertToMatrix(arr) {
  if (arr.length === 0) {
    return [];
  }

  const keys = Object.keys(arr[0]);
  const result = [keys];

  for (let obj of arr) {
    const values = keys.map(key => obj[key]);
    result.push(values);
  }

  return result;
}


module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};
