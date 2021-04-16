
class index {
    constructor() {
        this.slider;
        this.age;
        this.gender;
        this.pensionage;
        this.init();
    }

 
    init() {
        this.slider = document.getElementById('ageslider').value;
        console.log(document.getElementById('ageslider').value );
        $("#agevalue").html(this.slider);
        this.startCalk();
    }

    calkPension(){
        if(document.getElementById('male').checked){
            this.gender = 1;
        } else {
            this.gender = 2;
        }
        this.age = this.slider;
        if(this.gender == 1){
            if(this.age >= 65){
                $("#pension").html("Olete juba pensioni eas");
            } else {
                this.pensionage = 65 - this.age;
                $("#pension").html("Pensionini on aega " + this.pensionage + " aastat.");
            }
        } else {
            if(this.age >= 63){
                $("#pension").html("Olete juba pensioni eas");
            } else {
                this.pensionage = 63 - this.age;
                $("#pension").html("Pensionini on aega " + this.pensionage + " aastat.");
            }
        }
    }

    startCalk(){ 
        $(document).on("change", event => {
            this.slider = document.getElementById('ageslider').value;
            $("#agevalue").html(this.slider);
        this.calkPension();
    })
    }

}

let indexsite = new index;
