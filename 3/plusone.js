var c = document.getElementById('taskn');
var g = document.getElementById('areaRes');
function z(event){
    if (event.keyCode === 13)
    {
        //let d = Number(c.value);
        res = +c.value + 1;
        console.log(res);
        g.innerText = +res;

    }
}
c.addEventListener('keydown' , z)