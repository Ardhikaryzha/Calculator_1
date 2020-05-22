// untuk menampilkan angka di screen ketika kita click
const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
  calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value)
    updateScreen(currentNumber)
  })
})


// menyimpan angka angka utk melakukan kalkulasi
let prevNumber = '';
let calculatorOperator = '';
let currentNumber = '';

const inputNumber = (number) => {
  if (currentNumber === '0') {
    currentNumber = number
  } else {
    currentNumber += number
  }
}

const operators = document.querySelectorAll('.operator')

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  })
})

const inputOperator = (operator) => {
  if (calculatorOperator === '') {
    prevNumber = currentNumber;
  }
  calculatorOperator = operator;
  currentNumber = '';
}

// fungsi sama dengan (=)
const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', () => {
  calculate();
  updateScreen(currentNumber);
})

const calculate = () => {
  let result = '';
  switch (calculatorOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber)
      break
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber)
      break
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber)
      break
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber)
      break
    default:
      break
  }
  currentNumber = result;
  calculatorOperator = '';
}

// membuat tombol AC berfungsi
const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
})

const clearAll = () => {
  prevNumber = '';
  calculatorOperator = '';
  currentNumber = '0';
}

// membuat aplikasi dpt mengkalkulasi angka desimal
const decimal = document.querySelector('.decimal');
decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
})

inputDecimal = (dot) => {
  if (currentNumber.includes('.')) {
    return
  }
  currentNumber += dot
}

// membuat tombol % berfungsi 
const percentage = document.querySelector('.percentage');
percentage.addEventListener("click", () => {
  calculatorScreen.value = currentNumber / 100;
})