" use strict ";

function PetChat(){
  var display = document.getElementById("display");
  var numPets = null;
  var voice = "Honeybadger doesn't care. "
  var petList = [];
  var output = "";

  function Pet (type, name, voice) {
    this.type = type;
    this.name = name;
    this.voice = voice;
  }

  var askHowMany = function(){
    return prompt("How many pets do you have?");
  };

  function speak(type) {
    if(type == "cat") {
      voice = "meow!";
    } else if (type == "dog") {
      voice = "woof!";
    } else if ( type == "bird") {
      voice = "tweet!";
    } else { voice = "Honeybadger don't care."}
  }

  var askPetInfo = function(){
    for(var i=0; i<numPets; i++){
      var type = prompt("What is pet #" + (i+1) + "? (cat, dog, bird)");
      var name = prompt("What is pet #" + (i+1) + "'s name'?");
      speak(type);
      //var textOut = type + " " + name + " " + voice + "<br />";
      var myPet = new Pet(type, name, voice);
      petList.push(myPet);
    }
    for(var i = 0; i < petList.length; i++) {
      output += petList[i].type + " " + petList[i].name +" "+ petList[i].voice + "<br>";
    }
      display.innerHTML += output;
  };

  this.init = function(){
    while(numPets === null){
      numPets = askHowMany();
    }
  askPetInfo();
  }
};



var chat = new PetChat();
chat.init();
