//window.onload = function() {
//};
var b = document.createElement("button");
document.body.appendChild(b);
b.setAttribute("enabled","true");
b.innerText="eta knopka dolzhna byut ";
b.setAttribute("style", "width:200px; height:100px; border-radius:20px;");
b.style.borderRadius = '20px';
b.onclick = function(hui) {
    alert('matrix has you. knok knok Neo');
    console.log(hui);
    };
let d = document.getElementById("kartinka");
d.parentElement.removeChild(d);
console.log ("tekst iz consoli");
//window.onload = function () {setTimeout(onLoadScript, "500")}
//let garbage = f.removeChild(d);
//let throwawayNode = f.removeChild(d);
//document.addEventListener("load", ready);
 //   this.msContentScript;
//};
//function ready() {
//    load;
//    };