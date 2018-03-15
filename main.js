var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
}

var table = document.getElementById("reservationTable");


var addReservation = function(name)
{
   var row = table.insertRow();
  var nameCell = row.insertCell(0);
  var claimedCell = row.insertCell(1);
  nameCell.innerHTML = name;
  if(reservations[name].claimed)
   claimedCell.innerHTML = "yes";
  else 
   claimedCell.innerHTML = "no";
}

var claimReservation = function () {
  var name = document.getElementById("name").value;
  if(name === ""){
    alert("Please enter your name for reservation");
    return;
  }
    
  name = (name.toLowerCase());
  name = capitalizeFirstLetter(name);
  if(reservations[name]){
    if(reservations[name].claimed === false ){
      alert("Welcome " + name + " to our restaurant!");
      reservations[name].claimed = true;
      for(var i=0;i<table.rows.length; i++){
        if (table.rows[i].cells[0].innerHTML === name){
          table.rows[i].cells[1].innerHTML = "yes";
          break;
        }
      }

    }
    else
      alert ("The reservation under the name " + name + " has been claimed");
  }
  else{
    alert(name + ", we will make you a reservation. ");
    reservations[name]= {claimed: true};
    alert("Your reservation was made under the name " + name);
    addReservation(name);
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


function loadTable(){
  for(var name in reservations){
    addReservation(name);
  }
}