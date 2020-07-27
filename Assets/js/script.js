
var letters = /^[A-Za-z]+$/;

$("#hide").hide();



$(document).ready(function(){
  $("button").on("click", function(){


      var myString = $("#unformatted-locations").val().replace(/\s+/g, '');

      var res = myString.split("");

      for(let i = 0; i < res.length; i++) {
        if(res[i].match(letters) && i !=0)
          {
            res.splice(i++,0,',');
          }
      }
      $("#formatted-locations").val(res.join(''));

      $("#hide").show();

      console.log(res.join(''));
  })

});

  