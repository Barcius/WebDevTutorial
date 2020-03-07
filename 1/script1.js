window.onload = function() {
    var b = document.createElement("button");
    document.body.appendChild(b);
    //b.setAttribute("disabled","true");
    b.innerText="eta knopka dolzhna byut ";
    b.setAttribute("style", "width:200px; height:100px; border-radius:20px;");
    b.style.borderRadius = '30px';
    b.onclick = function(hui) { 
    alert('matrix has you. knok knok Neo');
    console.log(hui);}
//var pic = document.body.querySelector("img");
//delete.pic;
console.log ("tekst iz consoli"); 
    };