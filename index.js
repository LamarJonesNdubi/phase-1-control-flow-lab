// index.js <by: Lamar Jones Ndubi>

function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
    return 'This one is on me!';
  } else if (someValue > 400 && someValue <= 2000) {
    return 'That will be twenty bucks.';
  } else if (someValue > 2000 && someValue <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}

// Alright lets execute
console.log(scuberGreetingForFeet(199)); 
console.log(scuberGreetingForFeet(1500)); 
console.log(scuberGreetingForFeet(2100)); 
console.log(scuberGreetingForFeet(2501)); 

console.log(ternaryCheckCity('NYC')); 
console.log(ternaryCheckCity('Los Angeles')); 

console.log(switchOnCharmFromTip('generous')); 
console.log(switchOnCharmFromTip('not as generous')); 
console.log(switchOnCharmFromTip('thanks for everything')); 
