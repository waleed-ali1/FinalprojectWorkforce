 
$(document).ready(function(){
    $("#instagram").hover(function(){
        $(this).css("width", "150px");
    }, function(){ 
         $(this).css("width", "100px");
   
    });
});


$(document).ready(function(){
    $("#instagram").hover(function(){
        $(this).css("height", "150px");
    }, function(){ 
         $(this).css("height", "100px");
   
    });
});



$(document).ready(function(){
    $("#github").hover(function(){
        $(this).css("width", "150px");
    }, function(){ 
         $(this).css("width", "100px");
   
    });
});


$(document).ready(function(){
    $("#github").hover(function(){
        $(this).css("height", "150px");
    }, function(){ 
         $(this).css("height", "100px");
   
    });
});



$(document).ready(function(){
    $("#linkedin").hover(function(){
        $(this).css("width", "150px");
    }, function(){ 
         $(this).css("width", "100px");
   
    });
});


$(document).ready(function(){
    $("#linkedin").hover(function(){
        $(this).css("height", "150px");
    }, function(){ 
         $(this).css("height", "100px");
   
    });
});


function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("requestDate").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "https://api.github.com/users/waleed-ali1/repos", true);
    xhttp.send();
  }
