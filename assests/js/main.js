function enableButton()
{
var Where  = document.getElementById("Where_To").value;
var How  = document.getElementById("How_Many").value;
var Arrivals = document.getElementById("Arrivals").value;
var Leaving = document.getElementById("Leaving").value;
var Enter  = document.getElementById("Enter").value;
document.getElementById("Book_Now").disabled = (Where  === "" || How ==="" || Arrivals === "" || Leaving ==="" || Enter ==="" );

}

  document.getElementById("Where_To").addEventListener('input',enableButton);
  document.getElementById("How_Many").addEventListener('input',enableButton);
  document.getElementById("Arrivals").addEventListener('input',enableButton);
  document.getElementById("Leaving").addEventListener('input',enableButton);
  document.getElementById("Enter").addEventListener('input',enableButton);
  
