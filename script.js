const poles = document.querySelectorAll("#pole");
const start = document.querySelector("#myButton");
const again = document.querySelectorAll(".again");
let table = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let player = true;
let click = true;

function game() {
  poles.forEach((div, index) => {
    div.addEventListener("click", () => {
      if (!click) {
        return; //If clicking is blocked, stop 
      }

      if (div.textContent !== "") {
        return; //If the div is already occupied, stop
      }

      console.log("Kliknięto div o indeksie:", index);
      if (player) {
        console.log(player, "indeks: ", index);
        table[index] = "X";
        div.textContent = table[index];
        player = false;
        result();
      } else {
        console.log(player, "indeks: ", index);
        table[index] = "O";
        div.textContent = table[index];
        player = true;
        result();
      }
    });
  });
  start.textContent = "RESTART";
  start.removeEventListener("click",start);
  start.addEventListener("click",restart);

}
function restart(){

    table = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    player = true;
    click = true;
    again.textContent = "";
   
    poles.forEach((div) => {
        div.textContent = "";
        
      });
    for (let i = 0; i < table.length; i++) {
      poles[i].style.backgroundColor = "black";
    }
    game();
}

function result() {
  //vertical
  if (table[0] == table[1] && table[1] == table[2]) {
    if (table[0] == "X") {
      console.log("Win X");
    } else {
      console.log("Win O");
    }
    for (let i = 0; i < 3; i++) {
      poles[i].style.backgroundColor = "green";
    }
    again.textContent = "Let's play again";
    click = false; //STOP
  } 
  else if (table[3] == table[4] && table[4] == table[5]) {
    if (table[3] == "X") {
      console.log("Win X");
    } else {
      console.log("Win O");
    }
    for (let i = 3; i < 6; i++) {
      poles[i].style.backgroundColor = "green";
    }
    again.textContent = "Let's play again";
    click = false; //STOP
  } 
  else if (table[6] == table[7] && table[7] == table[8]) {
    if (table[6] == "X") {
      console.log("Win X");
    } else {
      console.log("Win O");
    }
    for (let i = 6; i < 9; i++) {
      poles[i].style.backgroundColor = "green";
    }
    again.textContent = "Let's play again";
    click = false; //STOP
  }       

  //horizontal
  else if (table[0] == table[3] && table[3] == table[6]) {
    if (table[0] == "X") {
      console.log("Win X");
    } else {
      console.log("Win O");
    }
    for (let i = 0; i < 7; i=i+3) {
      poles[i].style.backgroundColor = "green";
    }
    again.textContent = "Let's play again";
    click = false; //STOP
  } 
  else if (table[1] == table[4] && table[4] == table[7]) {
    if (table[1] == "X") {
      console.log("Win X");
    } else {
      console.log("Win O");
    }
    for (let i = 1; i < 8; i=i+3) {
      poles[i].style.backgroundColor = "green";
    }
    again.textContent = "Let's play again";
    click = false; //STOP
  } 
  else if (table[2] == table[5] && table[5] == table[8]) {
    if (table[2] == "X") {
      console.log("Win X");
    } else {
      console.log("Win O");
    }
    for (let i = 2; i < 9; i=i+3) {
      poles[i].style.backgroundColor = "green";
    }
    again.textContent = "Let's play again";
    click = false; //STOP
  }

  //diagonal 
  else if (table[0] == table[4] && table[4] == table[8]) {
    if (table[0] == "X") {
      console.log("Win X");
    } else {
      console.log("Win O");
    }
    for (let i = 0; i < 9; i=i+4) {
      poles[i].style.backgroundColor = "green";
    }
    again.textContent = "Let's play again";
    click = false; //STOP
  } else if (table[2] == table[4] && table[4] == table[6]) {
    if (table[2] == "X") {
      console.log("Win X");
    } else {
      console.log("Win O");
    }
    for (let i = 2; i < 7; i=i+2) {
      poles[i].style.backgroundColor = "green";
    }
    again.textContent = "Let's play again";
    click = false; //STOP
  }
  //TIE
   else if (table.every((element) => element != "1" && element != "2" && element != "3" && 
                                      element != "4" && element != "5" && element != "6" && 
                                      element != "7" && element != "8" && element != "9")) 
                                      {
                                      console.log("Tie");
                                      for (let i = 0; i < 9; i++) {
                                        poles[i].style.backgroundColor = "red";
                                      }
                                      again.textContent = "Let's play again";
                                      click = false; //STOP
  }
}

start.addEventListener("click", game);

