function j(event){
var a = document.getElementById('palOrNot');
var b = document.getElementById('areaRes3');
var frstLtr =a[0];
var lstLtr =a[a.length - 1];
var scndLtr =a[1];
var preLstLtr =a[a.length - 2];
    if (event.keyCode === 13) {
        if (typeof('palOrNot') === "string") {
        console.log("true");
        return "true";   
        }
        //else {
        //onsole.log("false");
        return "false";
        }
    if (frstLtr === lstLtr){
            if (scndLtr === preLstLtr)
            return "it is a palendrome, not a trahodrome!"
        }

        }
        
        outputRes = "see";
    }
gettingNum.addEventListener('keydown' , j)