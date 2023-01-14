function validateForm() {
    var namef = document.forms["myForm"]["fname"].value;
    var profession = document.forms["myForm"]["profession"].value;
    var age = document.forms["myForm"]["age"].value;
    if (namef == "" || namef == null || profession == "" || profession == null || age == "" || age == null) {
        document.getElementById("errorwarning").innerHTML = "Error : Please Make sure All the fields are filled before adding in an employee !";
        return false;
    }
    else{
        document.getElementById("success").innerHTML = "Success: Employee Added!";
        let newwarr = [
            { name: fname, profession: profession, age: age},
          ];
         
          return false;
    }
}

