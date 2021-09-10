// Lorem Ipsum Squad Info
// Authors: Luke, Luuk, Noah, Patrick, Pieter, Moos
// Date: 10-09-2021

import { Luke, Luuk, Noah, Patrick, Pieter, Moos, Squad } from '@LoremIpsumHU/team';

// Luke Informatie
var name = "Luke ter Hark";
var age = 21;
var hobbies = ["Gaming", "Series kijken"];
var special = "Heeft als enige geen middelbare schooldiploma.";
var OICTReason = "Hou niet van normale schoolsystemen maar van creatieve vrijheid.";

var luke = new Luke(name, age, hobbies, special, OICTReason);


// Luuk Informatie
var name = "Luuk van Dijk";
var age = 17;
var hobbies = ["Gaming", "Zeilen", "Snowboarden en Skiën"];
var special = "Houdt als enige van koffie.";
var OICTReason = "Vanwege de praktijk.";

var luuk = new Luuk(name, age, hobbies, special, OICTReason);


// Noah
var name = "Noah Taheij";
var age = 17;
var hobbies = ["Gaming", "Coderen"];
var special = "Heeft als enige meer dan 25 landen bezocht.";
var OICTReason = "Het leren van het werken in het bedrijfsleven en zelfstandigheid.";

var noah = new Noah(name, age, hobbies, special, OICTReason);

// Patrick
var name = "Patrick Koster";
var age = 22;
var hobbies = ["Gaming", "Schrijven"];
var special = "Speelt als enige geen video games.";
var OICTReason = "Het zelf indelen van de studie en de vrijheid.";

var patrick = new Patrick(name, age, hobbies, special, OICTReason);


//Pieter
var name = "Pieter Kerff";
var age = 19;
var hobbies = ["Gaming", "Bordspellen"];
var special = "Houdt als enige niet van annanas op zijn pizza.";
var OICTReason = "Niet verder kunnen op de HvA en meer praktijkopdrachten willen.";

var pieter = new Pieter(name, age, hobbies, special, OICTReason);


// Moos
var name = "Moos Mostert";
var age = 20;
var hobbies = ["Gaming", "Gitaar Spelen"];
var special = "Is de enige zonder huisdier.";
var OICTReason = "Door de baan garantie.";

var moos = new Moos(name, age, hobbies, special, OICTReason);


// Squad Info
var name = "Lorem Ipsum";
var similarities = "We hebben allemaal geen rijbewijs."; 

var squad = new Squad(name, similarities);

console.log(luke, luuk, noah, patrick, pieter, moos, squad);