
function scuberGreetingForFeet(someValue){
  if (someValue < 400){
    someValue = "This one is on me!";
  }
  else if ((someValue > 400) && (someValue < 2000)){
    someValue = "That will be twenty bucks.";
  }
  else if ((someValue > 2000) && (someValue < 2500)){
    someValue = "I will gladly take your thirty bucks.";
  }
  else if (someValue > 2500){
    someValue = "No can do.";
  }
  return someValue;
}

function ternaryCheckCity(city){
  let result = (city === "NYC") ? "Ok, sounds good." : "No go.";
  return result;
}

function switchOnCharmFromTip(tip){
  if (tip === "generous"){
    tip = "Thank you so much.";
  }
  else if (tip === "not as generous" ){
    tip = "Thank you.";
  }
  else if (tip !== "generous"){
    tip = "Bye.";
  }
  return tip;
}