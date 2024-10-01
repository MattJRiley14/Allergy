let heading = document.querySelector("#heading");
let list = document.querySelector("#list");

const symptoms = {
  topic: `Symptoms`,
  items: [`Fever`, `Coughing`]
}

const treatment = {
  topic: `Treatment`,
  items: [`Shots`, `Meds`]
}

document.querySelector("#btn-symptoms").addEventListener("click", displaySymptomsContent);

function displaySymptomsContent(){
  heading.innerHTML = symptoms.topic;

  list.innerHTML = ""

  // for (i = 0; i < symptoms.items.length; i++){
  //   list.innerHTML += "<li>" + symptoms.items[i] + "</li>"
  // }

  // OR

  for (i of symptoms.items){
    list.innerHTML += "<li>" + i + "</li>"
  }
}


document.querySelector("#btn-treatment").addEventListener("click", displayTreatmentContent);

function displayTreatmentContent(){
  heading.innerHTML = treatment.topic;

  list.innerHTML = ""

  // for (i = 0; i < symptoms.items.length; i++){
  //   list.innerHTML += "<li>" + symptoms.items[i] + "</li>"
  // }

  // OR

  for (i of treatment.items){
    list.innerHTML += "<li>" + i + "</li>"
  }
}