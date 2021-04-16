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


