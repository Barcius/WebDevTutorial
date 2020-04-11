const name="Вячеслав"
const middlename="Андреевич"
function greet() {
    return 'здрасьте' + name + middlename + ' ,ужасного вам дня!'
}

// document.onload = function() {
    const div = document.getElementById('greet-field')
    div.innerText = greet()
// };