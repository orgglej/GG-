function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult(carregando...) {
    let result = eval(document.getElementById('result').value);
    document.getElementById('result').value = result;
}
