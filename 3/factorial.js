var gettingNum = document.getElementById('factor');
var outputRes = document.getElementById('areaRes2');
function j(event){
    if (event.keyCode === 13) {
        let res = 1;
        for (let i = 1; i <= +gettingNum.value; i++) {
            res = res * i;
        }
        
        console.log(res);
        outputRes.innerText = +res;
    }
}
gettingNum.addEventListener('keydown' , j)
 
