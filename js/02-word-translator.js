
let en = "Hello World";
let de = "Hallo welt";
let fr = "Bonjour le monde";
let es =  "Hola mundo";
var trans = prompt("Which languages you want to choose?\n en, de, fr, es " );

switch (trans) {
    case "es" :
      window.console.log("Hello World translated in Spanish is:" + es);
      break;
    case "de" :
      window.console.log("Hello World translated in Spanish is:" + de);
      break;
    case "fr" :
      window.console.log("Hello World translated in Spanish is:" + fr);
      break;
    case "en" :
      window.console.log("Hello World translated in Spanish is:" + en);
      break;
    default :
      window.console.log("Hello World translated in English is:" + en);
}