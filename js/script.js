$(function() { 
    let error_name, error_email, error_info, error_pnumber = false;
 
    $("#name").focusout(function(){
       check_name();
    });
    $("#email").focusout(function() {
       check_email();
    });
    $("#info").focusout(function() {
       check_info();
    });
    $("#pnumber").focusout(function() {
       check_pnumber();
    });
 
    function check_name() {
       let name = $("#name").val();
       if (name !== '') {
          $("#name_error_message").hide();
       } else {
          $("#name_error_message").html("Nimi sisestamata!");
          $("#name_error_message").show();
          error_name = true;
       }
    }
 
    function check_info() {
       let info = $("#info").val();
       if (info !== '') {
          $("#info_error_message").hide();
       } else {
          $("#info_error_message").html("Lisainfo sisestamata!");
          $("#info_error_message").show();
          error_info = true;
       }
    }
    
    function check_pnumber() {
       let pattern =  /^[0-9-+]+$/;
       let pnumber = $("#pnumber").val();
       if (pattern.test(pnumber) && pnumber !== '') {
          $("#pnumber_error_message").hide();
       } else if (pnumber == ''){
          $("#pnumber_error_message").html("Telefoninumber sisestamata!");
          $("#pnumber_error_message").show();
          error_pnumber = true;
       } else {
          $("#pnumber_error_message").html("Telefoninumbris viga sees!");
          $("#pnumber_error_message").show();
          error_pnumber = true;
       }
    }
 
    function check_email() {
       let pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
       let email = $("#email").val();
       if (pattern.test(email) && email !== '') {
          $("#email_error_message").hide();
       } else if (email == ''){
          $("#email_error_message").html("E-mail sisestamata!");
          $("#email_error_message").show();
          error_email = true;
       } else {
          $("#email_error_message").html("E-mail valesti sisestatud!");
          $("#email_error_message").show();
          error_email = true;
       }
    }
 
    $("#contact").submit(function() {
       error_name = false;
       error_email = false;
       error_info = false;
       error_pnumber = false;
 
       check_name();
       check_email();
       check_info();
       check_pnumber();
 
       if (error_name === false && error_email === false && error_info === false && error_pnumber === false) {
        alert("Kõik OK!");
        return true;
       } else {
          return false;
     }
    });
 });

function updateResult(age){
    
var gender = document.getElementById('maleGender').checked;

if(gender == true){
	
    if(age >= 65){ 
        
        document.getElementById("result").innerHTML = "Olete pensioniealine";
        
		} else if (age == 64) {
         document.getElementById("result").innerHTML = "Teil on pensionini aega " + (65 - age) + " aasta";
      } else {
         document.getElementById("result").innerHTML = "Teil on pensionini aega " + (65 - age) + " aastat";
      }
		
	} else {
        
		if(age >= 63){
			document.getElementById("result").innerHTML = "Olete pensioniealine"; 
            
		} else if (age == 62) {
         document.getElementById("result").innerHTML = "Teil on pensionini aega " + (63 - age) + " aasta";
      } else {
			document.getElementById("result").innerHTML = "Teil on pensionini aega " + (63 - age) + " aastat";
            
		}
	}

}
