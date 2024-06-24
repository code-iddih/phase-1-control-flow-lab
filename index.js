function scuberGreetingForFeet(feet){
  // Write your code here!

  let result;

  if (feet >= 2500) {
    result = "No can do.";

  } else if (feet >=2000) {
    result = "I will gladly take your thirty bucks.";

  } else if (feet >= 400) {
    result = "That will be twenty bucks.";

  } else {
    result = "This one is on me!";
  }

  return result;

}

function ternaryCheckCity(city){
  // Write your code here!

  const cityDes = city === "NYC" ? "Ok, sounds good." : "No go.";

  return cityDes;

}

function switchOnCharmFromTip(tip){
  // Write your code here!

  let tipReponse;

  switch (tip) {
    case "generous":
      tipReponse = "Thank you so much.";
      break;

    case "not as generous":
      tipReponse = "Thank you.";
      break;

    default:
      tipReponse = "Bye.";
      break;
  }

  return tipReponse;

}