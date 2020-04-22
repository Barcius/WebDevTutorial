function j(event){
    let gettingNum = document.getElementById('factor');
    let outputRes = document.getElementById('areaRes2');
    if (event.keyCode === 13) {
        let res = 1;
        for (let i = 2; i <= +gettingNum.value; i++) {
            res = res * i;
        }
    
        console.log(res);
        outputRes.innerText = res;
     }
}
gettingNum.addEventListener('keydown' , j)
 
