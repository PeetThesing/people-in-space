console.clear();
// GET STUFF
const peopleInSpace = document.querySelector("[data-js='people-in-space']");
const issButton = document.querySelector("[data-js='iss-button']");
const tiangongButton = document.querySelector("[data-js='tiangong-button']");
const allButton = document.querySelector("[data-js='all-button']");
//CREATE LIST
const ul = document.createElement("ul");
document.body.append(ul);
//CALL FUNCTION AND CREATE GLOBAL VARIABLE WITH ARRAY
getPeopleInSpace();
let peopleInSpaceArray = [];

async function getPeopleInSpace() {
  const respons = await fetch("http://api.open-notify.org/astros.json");
  const data = await respons.json();
  console.log("data: ", data.people);
  // GETTING NUMBER OF PEOPLE IN SPACE
  peopleInSpace.textContent = data.number;
  // ARRAY AND CALLING FUNCTION
  peopleInSpaceArray = data.people;
  //   createPeopleList(peopleInSpaceArray);
}

function createPeopleList(peopleArray) {
  // CREATING LIST ITEMS
  peopleArray.forEach((person) => {
    const li = document.createElement("li");
    ul.append(li);
    li.append(person.name);
  });
}
//BUTTONS
allButton.addEventListener("click", () => {
  const allPeople = peopleInSpaceArray.map((person) => person);
  ul.innerHTML = "";
  createPeopleList(allPeople);
});

issButton.addEventListener("click", () => {
  const issPeople = peopleInSpaceArray.filter(
    (person) => person.craft === "ISS"
  );
  ul.innerHTML = "";
  createPeopleList(issPeople);
});

tiangongButton.addEventListener("click", () => {
  const tiangongPeople = peopleInSpaceArray.filter(
    (person) => person.craft === "Tiangong"
  );
  ul.innerHTML = "";
  createPeopleList(tiangongPeople);
});
