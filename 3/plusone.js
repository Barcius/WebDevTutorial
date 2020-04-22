function z(event){
let c = document.getElementById('taskn');
let g = document.getElementById('areaRes');
    if (event.keyCode === 13)
    {
        
        res = +c.value + 1;
        console.log(res);
        g.innerText = res.value;

    }
}
c.addEventListener('keydown' , z)