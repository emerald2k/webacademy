function add(text) {
  var inputValue = document.getElementById('input').value;
  // check if input value is another operation and overwritte last input
  if (
    ['+', '-', '/', '*'].includes(inputValue[input.value.length - 1]) &&
    ['+', '-', '/', '*'].includes(text)
  ) {
    input.value = input.value.slice(0, -1) + text;
  } else {
    input.value += text;
  }
}

function go() {
  var test = document.getElementById('test');
  var value = test.value;
  if (!isNaN(value)) {
    var result = document.getElementById('result');
    result.value = value * value;
  } else {
    alert('Nu ati introdus numar!');
  }
}

function calculeaza() {
  let input = document.getElementById('input');
  // eval input Math
  try {
    // evaluate expression
    let result = eval(input.value);

    // handle invalid results like Infinity or undefined
    if (!isFinite(result)) {
      throw new Error('Invalid calculation');
    }

    input.value = result;
  } catch (e) {
    alert('Expresie invalida!');
    input.value = '';
  }
}

function reset() {
  document.getElementById('input').value = '';
}
