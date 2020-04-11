function z(event){
var c = document.getElementById('taskn');
var g = document.getElementById('areaRes');
    if (event.keyCode === 13)
    {
        
        res = +c.value + 1;
        console.log(res);
        g.innerText = res.value;

    }
}
c.addEventListener('keydown' , z)