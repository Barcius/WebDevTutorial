const name="Вячеслав"
const middlename="Андреевич"
function greet() {
    return 'здрасьте' + name + middlename + ' ,ужасного вам дня!'
}

window.onload = function() {
    const div = document.getElementById('greet-field')
    div.innerText = greet()
};