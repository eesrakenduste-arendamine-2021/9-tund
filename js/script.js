$(document).ready(function(){
    $('#contact input[type="text"]').blur(function(){
        if(!$(this).val()){
            $(this).addClass("error");
        } else{
            $(this).removeClass("error");
        }
    });
});


function myMap() {
let mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
let map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

function updateResult(age){
    
var gender = document.getElementById('maleGender').checked;

if(gender == true){
	
    if(age >= 65){ 
        
        document.getElementById("result").innerHTML = "Olete pensioniealine";
        
		} else {
			document.getElementById("result").innerHTML = "Te ei ole veel pensioniealine";
            
		}
		
	} else {
        
		if(age >= 63){
			document.getElementById("result").innerHTML = "Olete pensioniealine"; 
            
		} else {
			document.getElementById("result").innerHTML = "Te ei ole veel pensioniealine";
            
		}
	}

}
