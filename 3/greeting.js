//const name="Вячеслав"
//const middlename="Андреевич"
function greet(gname, gmname) {
    return 'здрасьте' + ' ' + name + ' ' + middlename + ', ужасного вам дня!'
   
    return `Здравствуйте, ${gname} ${gmname}, хоршего вам дня!!`
}
window.onload = function getwords () {
    const name = document.getElementById('gname')
    const midname = document.getElementById('gmname')
    const btn = document.getElementById('pullname')
    const fld = document.getElementById('greet-field')
    btn.onclick = function() {
        fld.innerText = greet(name.value, midname.value)
    }
    
}