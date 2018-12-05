let eventType= prompt("What type of event are you going to?");
console.log(eventType);

let tempFahr= prompt("What is the temperature outside?");
console.log(tempFahr);

let result;
 
  if (eventType === "Casual" && tempFahr < 54){
   result = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event, you should wear something comfy and a coat.`;
   console.log(result);
  } else if (eventType === "Casual" && tempFahr >= 54 && eventType === "Casual" && tempFahr <= 70){
   result = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event, you should wear something comfy and a jacket.`;
   console.log(result);
  } else if (eventType === "Casual" && tempFahr > 70) {
   result = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event,You should wear something comfy and no jacket.`;
   console.log(result);
  }
  
  if (eventType === "Semi-Formal" && tempFahr < 54){
   result = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event,You should wear a polo and a coat.`;
   console.log(result);
  } else if (eventType === "Semi-Formal" && tempFahr >= 54 && eventType === "Semi-Formal" && tempFahr <= 70){
   result = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event,You should wear a polo and a jacket.`;
   console.log(result);
  } else if (eventType === "Semi-Formal" && tempFahr > 70) {
   result = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event,You should wear a polo comfy and no jacket.`;
   console.log(result);
  }

if (eventType === "Formal" && tempFahr < 54){
   result = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event,You should wear a suit and a coat.`;
   console.log(result);
  } else if (eventType === "Formal" && tempFahr >= 54 && eventType === "Formal" && tempFahr <= 70){
   result = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event,You should wear a suit and a jacket.`;
   console.log(result);
  } else if (eventType === "Formal" && tempFahr > 70) {
   result = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event,You should wear a suit and no jacket.`;
   console.log(result);
  }
  
  
  