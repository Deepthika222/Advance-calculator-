// Function to toggle dark mode
function toggleTheme() {
    // Toggle dark mode on body
    document.body.classList.toggle("dark-mode");

    // Change the button icon based on the current theme
    const button = document.getElementById("themeToggle");
    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "🌞";  // Sun icon for light mode
    } else {
        button.textContent = "🌙";  // Moon icon for dark mode
    }

    // Save the theme preference in localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Apply the saved theme on page load
window.onload = function() {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("themeToggle").textContent = "🌞";
    } else {
        document.getElementById("themeToggle").textContent = "🌙";
    }

    // Add event listener for theme toggle button
    document.getElementById("themeToggle").addEventListener("click", toggleTheme);
};

// Show the selected feature
function showFeature(feature) {
    const mainContent = document.getElementById("mainContent");

    switch (feature) {
        case 'Scientific Calculator':
            showScientificCalculator();
            break;
        case 'Currency Converter':
            showCurrencyConverter();
            break;
        case 'World Clock':
            showWorldClock();
            break;
        case 'EMI Calculator':
            showEMICalculator();
            break;
        case 'Discount Calculator':
            showDiscountCalculator();
            break;
        case 'Matrix Calculator':
            showMatrixCalculator();
            break;
        case 'Time at Different Places':
            showTimeAtDifferentPlaces();
            break;
        case 'Unit Converter':
            showUnitConverter();
            break;
        case 'Calculus Calculator':
            showCalculusCalculator();
            break;
        default:
            mainContent.innerHTML = `<h2>Coming Soon</h2>`;
    }
}

// Scientific Calculator Functions
let currentInput = "";
function appendToInput(value) {
    currentInput += value;
    document.getElementById("calcDisplay").value = currentInput;
}

function calculateResult() {
    try {
        currentInput = eval(currentInput);
        document.getElementById("calcDisplay").value = currentInput;
    } catch (e) {
        document.getElementById("calcDisplay").value = "Error";
    }
}

function clearInput() {
    currentInput = "";
    document.getElementById("calcDisplay").value = currentInput;
}

// Function to show the Scientific Calculator
function showScientificCalculator() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <h2>Scientific Calculator</h2>
        <div class="calculator">
            <input type="text" id="calcDisplay" disabled />

            <!-- Button Grid (Rows and Columns) -->
            <div class="calculator-buttons">
                <!-- Row 1 -->
                <button onclick="appendToInput('1')">1</button>
                <button onclick="appendToInput('2')">2</button>
                <button onclick="appendToInput('3')">3</button>
                <button onclick="appendToInput('+')">+</button>

                <!-- Row 2 -->
                <button onclick="appendToInput('4')">4</button>
                <button onclick="appendToInput('5')">5</button>
                <button onclick="appendToInput('6')">6</button>
                <button onclick="appendToInput('-')">-</button>

                <!-- Row 3 -->
                <button onclick="appendToInput('7')">7</button>
                <button onclick="appendToInput('8')">8</button>
                <button onclick="appendToInput('9')">9</button>
                <button onclick="appendToInput('*')">*</button>

                <!-- Row 4 -->
                <button onclick="appendToInput('0')">0</button>
                <button onclick="appendToInput('.')">.</button>
                <button onclick="appendToInput('sqrt(')">√</button>
                <button onclick="appendToInput('/')">/</button>

                <!-- Row 5 -->
                <button onclick="appendToInput('(')">(</button>
                <button onclick="appendToInput(')')">)</button>
                <button onclick="appendToInput('sin(')">sin</button>
                <button onclick="appendToInput('cos(')">cos</button>

                <!-- Row 6 -->
                <button onclick="appendToInput('tan(')">tan</button>
                <button onclick="appendToInput('e^')">e^x</button>
                <button onclick="appendToInput('x^x')">x^x</button>
                <button onclick="appendToInput('sinh(')">sinh</button>

                <!-- Row 7 -->
                <button onclick="calculateResult()">=</button>
                <button onclick="clearInput()">Clear</button>
            </div>
        </div>
    `;
}


// EMI Calculator Functions
function showEMICalculator() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <h2>EMI Calculator</h2>
        <label for="principal">Principal Amount: </label>
        <input type="number" id="principal" placeholder="Principal amount" />
        <label for="rate">Annual Interest Rate: </label>
        <input type="number" id="rate" placeholder="Annual Interest Rate (%)" />
        <label for="years">Loan Tenure (Years): </label>
        <input type="number" id="years" placeholder="Loan Tenure (Years)" />
        <button onclick="calculateEMI()">Calculate EMI</button>
        <p id="emiResult"></p>
    `;
}

function calculateEMI() {
    const principal = parseFloat(document.getElementById("principal").value);
    const annualRate = parseFloat(document.getElementById("rate").value);
    const years = parseFloat(document.getElementById("years").value);

    const rate = annualRate / 12 / 100;
    const months = years * 12;

    const emi = (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);

    document.getElementById("emiResult").textContent = `EMI: ₹${emi.toFixed(2)}`;
}

// Discount Calculator Functions
function showDiscountCalculator() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <h2>Discount Calculator</h2>
        <label for="originalPrice">Original Price: </label>
        <input type="number" id="originalPrice" placeholder="Original Price" />
        <label for="discount">Discount Percentage: </label>
        <input type="number" id="discount" placeholder="Discount (%)" />
        <button onclick="calculateDiscount()">Calculate Discount</button>
        <p id="discountResult"></p>
    `;
}

function calculateDiscount() {
    const originalPrice = parseFloat(document.getElementById("originalPrice").value);
    const discountPercentage = parseFloat(document.getElementById("discount").value);

    const finalPrice = originalPrice * (1 - (discountPercentage / 100));

    document.getElementById("discountResult").textContent = `Final Price after Discount: ₹${finalPrice.toFixed(2)}`;
}

// World Clock Function
function showWorldClock() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <h2>World Clock</h2>
        <label for="timezone">Select Timezone: </label>
        <select id="timezone">
            <option value="Asia/Kolkata">India (Asia/Kolkata)</option>
            <option value="America/New_York">New York (America/New_York)</option>
            <option value="Europe/London">London (Europe/London)</option>
            <option value="Australia/Sydney">Sydney (Australia/Sydney)</option>
        </select>
        <button onclick="showTimeInTimezone()">Show Time</button>
        <p id="worldClockResult"></p>
    `;
}

function showTimeInTimezone() {
    const timezone = document.getElementById("timezone").value;
    const date = new Date().toLocaleString("en-US", { timeZone: timezone });

    document.getElementById("worldClockResult").textContent = `Time in selected timezone: ${date}`;
}

// Time at Different Places Functions
function showTimeAtDifferentPlaces() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <h2>Time at Different Places</h2>
        <label for="timezone">Select Timezone: </label>
        <select id="timezone">
            <option value="Asia/Kolkata">India (Asia/Kolkata)</option>
            <option value="America/New_York">New York (America/New_York)</option>
            <option value="Europe/London">London (Europe/London)</option>
            <option value="Australia/Sydney">Sydney (Australia/Sydney)</option>
        </select>
        <button onclick="showTimeAtDifferent()">Show Time</button>
        <p id="timeResult"></p>
    `;
}

function showTimeAtDifferent() {
    const timezone = document.getElementById("timezone").value;
    const date = new Date().toLocaleString("en-US", { timeZone: timezone });

    document.getElementById("timeResult").textContent = `Time in selected timezone: ${date}`;
}

// Matrix Calculator Functions
// Matrix Calculator Functions
function showMatrixCalculator() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <h2>Matrix Calculator</h2>
        <div>
            <label for="matrixOperationType">Choose Operation:</label>
            <select id="matrixOperationType" onchange="renderMatrixOperationForm()">
                <option value="single">Single Matrix (Transpose, Inverse)</option>
                <option value="double">Two Matrices (Addition, Multiplication)</option>
            </select>
        </div>
        <div id="matrixOperationInputs"></div>
        <p id="matrixResult"></p>
    `;
    renderMatrixOperationForm();
}

function renderMatrixOperationForm() {
    const type = document.getElementById('matrixOperationType').value;
    const container = document.getElementById('matrixOperationInputs');

    if (type === 'single') {
        container.innerHTML = `
            <label>Rows:</label> <input type="number" id="rows" min="1" />
            <label>Cols:</label> <input type="number" id="cols" min="1" />
            <button onclick="generateSingleMatrixInputs()">Generate Matrix</button>
            <div id="matrixInputs"></div>
            <button onclick="calculateTranspose()">Transpose</button>
            <button onclick="calculateInverse()">Inverse</button>
        `;
    } else {
        container.innerHTML = `
            <label>Rows:</label> <input type="number" id="rows" min="1" />
            <label>Cols:</label> <input type="number" id="cols" min="1" />
            <button onclick="generateTwoMatrixInputs()">Generate Matrices</button>
            <div id="matrixInputs"></div>
            <button onclick="matrixAdd()">Add Matrices</button>
            <button onclick="matrixMultiply()">Multiply Matrices</button>
        `;
    }
}

function generateSingleMatrixInputs() {
    const rows = parseInt(document.getElementById("rows").value);
    const cols = parseInt(document.getElementById("cols").value);

    let html = '';
    for (let i = 0; i < rows; i++) {
        html += '<div>';
        for (let j = 0; j < cols; j++) {
            html += `<input type="number" id="matrix_${i}_${j}" placeholder="0" />`;
        }
        html += '</div>';
    }
    document.getElementById("matrixInputs").innerHTML = html;
}

function generateTwoMatrixInputs() {
    const rows = parseInt(document.getElementById("rows").value);
    const cols = parseInt(document.getElementById("cols").value);

    let html = '<h4>Matrix A</h4>';
    for (let i = 0; i < rows; i++) {
        html += '<div>';
        for (let j = 0; j < cols; j++) {
            html += `<input type="number" id="matrixA_${i}_${j}" placeholder="0" />`;
        }
        html += '</div>';
    }

    html += '<h4>Matrix B</h4>';
    for (let i = 0; i < rows; i++) {
        html += '<div>';
        for (let j = 0; j < cols; j++) {
            html += `<input type="number" id="matrixB_${i}_${j}" placeholder="0" />`;
        }
        html += '</div>';
    }

    document.getElementById("matrixInputs").innerHTML = html;
}

function matrixAdd() {
    const rows = parseInt(document.getElementById("rows").value);
    const cols = parseInt(document.getElementById("cols").value);
    let result = '';

    let resultMatrix = [];
    for (let i = 0; i < rows; i++) {
        resultMatrix[i] = [];
        for (let j = 0; j < cols; j++) {
            let a = parseFloat(document.getElementById(`matrixA_${i}_${j}`).value) || 0;
            let b = parseFloat(document.getElementById(`matrixB_${i}_${j}`).value) || 0;
            resultMatrix[i][j] = a + b;
        }
    }

    for (let i = 0; i < rows; i++) {
        result += resultMatrix[i].join(' ') + '<br>';
    }
    document.getElementById("matrixResult").innerHTML = "<strong>Matrix Addition Result:</strong><br>" + result;
}

function matrixMultiply() {
    const rows = parseInt(document.getElementById("rows").value);
    const cols = parseInt(document.getElementById("cols").value);
    let result = '';

    let A = [], B = [], resultMatrix = [];
    for (let i = 0; i < rows; i++) {
        A[i] = [];
        B[i] = [];
        resultMatrix[i] = [];
        for (let j = 0; j < cols; j++) {
            A[i][j] = parseFloat(document.getElementById(`matrixA_${i}_${j}`).value) || 0;
            B[i][j] = parseFloat(document.getElementById(`matrixB_${i}_${j}`).value) || 0;
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            resultMatrix[i][j] = 0;
            for (let k = 0; k < cols; k++) {
                resultMatrix[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    for (let i = 0; i < rows; i++) {
        result += resultMatrix[i].join(' ') + '<br>';
    }
    document.getElementById("matrixResult").innerHTML = "<strong>Matrix Multiplication Result:</strong><br>" + result;
}

function calculateTranspose() {
    const rows = parseInt(document.getElementById("rows").value);
    const cols = parseInt(document.getElementById("cols").value);
    let matrix = [], result = '';

    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = parseFloat(document.getElementById(`matrix_${i}_${j}`).value) || 0;
        }
    }

    for (let j = 0; j < cols; j++) {
        let row = [];
        for (let i = 0; i < rows; i++) {
            row.push(matrix[i][j]);
        }
        result += row.join(' ') + '<br>';
    }

    document.getElementById("matrixResult").innerHTML = "<strong>Transpose Result:</strong><br>" + result;
}

function calculateInverse() {
    try {
        const rows = parseInt(document.getElementById("rows").value);
        const cols = parseInt(document.getElementById("cols").value);
        if (rows !== cols) throw new Error("Matrix must be square to calculate inverse.");

        let matrix = [];
        for (let i = 0; i < rows; i++) {
            matrix[i] = [];
            for (let j = 0; j < cols; j++) {
                matrix[i][j] = parseFloat(document.getElementById(`matrix_${i}_${j}`).value) || 0;
            }
        }

        const inverse = math.inv(matrix);
        let result = inverse.map(row => row.join(' ')).join('<br>');
        document.getElementById("matrixResult").innerHTML = "<strong>Inverse Result:</strong><br>" + result;
    } catch (err) {
        document.getElementById("matrixResult").innerHTML = `<span style='color:red'>Error: ${err.message}</span>`;
    }
}

// Currency Converter Functions
function showCurrencyConverter() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <h2>Currency Converter</h2>
        <label for="fromCurrency">From: </label>
        <select id="fromCurrency">
            <option value="INR">Indian Rupee (INR)</option>
            <option value="USD">US Dollar (USD)</option>
            <option value="EUR">Euro (EUR)</option>
            <option value="GBP">British Pound (GBP)</option>
        </select>
        <label for="toCurrency">To: </label>
        <select id="toCurrency">
            <option value="INR">Indian Rupee (INR)</option>
            <option value="USD">US Dollar (USD)</option>
            <option value="EUR">Euro (EUR)</option>
            <option value="GBP">British Pound (GBP)</option>
        </select>
        <label for="amount">Amount: </label>
        <input type="number" id="amount" placeholder="Enter amount" />
        <button onclick="convertCurrency()">Convert</button>
        <p id="conversionResult"></p>
    `;
}

// Hardcoded Conversion Rates (for simplicity)
const exchangeRates = {
    INR: { USD: 0.012, EUR: 0.011, GBP: 0.0093 },
    USD: { INR: 83.28, EUR: 0.92, GBP: 0.76 },
    EUR: { INR: 90.48, USD: 1.09, GBP: 0.83 },
    GBP: { INR: 107.53, USD: 1.32, EUR: 1.20 }
};

function convertCurrency() {
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const amount = parseFloat(document.getElementById("amount").value);

    if (isNaN(amount) || amount <= 0) {
        document.getElementById("conversionResult").textContent = "Please enter a valid amount.";
        return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    const result = amount * rate;
    document.getElementById("conversionResult").textContent = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
}

function showCalculusCalculator() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <h2>Calculus Calculator</h2>
        <label for="functionInput">Function f(x): </label>
        <input type="text" id="functionInput" placeholder="e.g., x^2 + sin(x) + e^x" />
        <label for="operation">Choose Operation: </label>
        <select id="operation">
            <option value="differentiate">Differentiate</option>
            <option value="integrate">Integrate</option>
        </select>
        <button onclick="performCalculusOperation()">Calculate</button>
        <p id="calculusResult"></p>
    `;
}

function performCalculusOperation() {
    const func = document.getElementById("functionInput").value;
    const operation = document.getElementById("operation").value;

    if (!func) {
        document.getElementById("calculusResult").textContent = "Please enter a valid function.";
        return;
    }

    try {
        let result = '';
        if (operation === 'differentiate') {
            result = math.derivative(func, 'x').toString();
            document.getElementById("calculusResult").innerHTML = `<strong>Derivative:</strong> ${result}`;
        } else if (operation === 'integrate') {
            result = math.integrate(func, 'x').toString();  // Requires math.js ≥ 11.5
            document.getElementById("calculusResult").innerHTML = `<strong>Integral:</strong> ${result} + C`;
        }
    } catch (error) {
        document.getElementById("calculusResult").innerHTML = `<span style="color:red;">Error: ${error.message}</span>`;
    }
}

function showUnitConverter() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <h2>Unit Converter</h2>
        <label for="unitType">Choose Unit Type:</label>
        <select id="unitType" onchange="updateUnitConverter()">
            <option value="length">Length</option>
            <option value="weight">Weight</option>
            <option value="temperature">Temperature</option>
        </select>

        <!-- Length Conversion Section -->
        <div id="lengthConversion" class="conversionBox">
            <h3>Length Conversion</h3>
            <label for="lengthFromUnit">From: </label>
            <select id="lengthFromUnit" onchange="convertLength()">
                <option value="meters">Meters</option>
                <option value="kilometers">Kilometers</option>
                <option value="centimeters">Centimeters</option>
                <option value="millimeters">Millimeters</option>
            </select>

            <label for="lengthToUnit">To: </label>
            <select id="lengthToUnit" onchange="convertLength()">
                <option value="meters">Meters</option>
                <option value="kilometers">Kilometers</option>
                <option value="centimeters">Centimeters</option>
                <option value="millimeters">Millimeters</option>
            </select>

            <label for="lengthAmount">Amount: </label>
            <input type="number" id="lengthAmount" placeholder="Enter amount" oninput="convertLength()" />

            <p id="lengthConversionResult"></p>
        </div>

        <!-- Weight Conversion Section -->
        <div id="weightConversion" class="conversionBox" style="display: none;">
            <h3>Weight Conversion</h3>
            <label for="weightFromUnit">From: </label>
            <select id="weightFromUnit" onchange="convertWeight()">
                <option value="grams">Grams</option>
                <option value="kilograms">Kilograms</option>
                <option value="pounds">Pounds</option>
                <option value="ounces">Ounces</option>
            </select>

            <label for="weightToUnit">To: </label>
            <select id="weightToUnit" onchange="convertWeight()">
                <option value="grams">Grams</option>
                <option value="kilograms">Kilograms</option>
                <option value="pounds">Pounds</option>
                <option value="ounces">Ounces</option>
            </select>

            <label for="weightAmount">Amount: </label>
            <input type="number" id="weightAmount" placeholder="Enter amount" oninput="convertWeight()" />

            <p id="weightConversionResult"></p>
        </div>

        <!-- Temperature Conversion Section -->
        <div id="temperatureConversion" class="conversionBox" style="display: none;">
            <h3>Temperature Conversion</h3>
            <label for="tempFromUnit">From: </label>
            <select id="tempFromUnit" onchange="convertTemperature()">
                <option value="celsius">Celsius</option>
                <option value="fahrenheit">Fahrenheit</option>
                <option value="kelvin">Kelvin</option>
            </select>

            <label for="tempToUnit">To: </label>
            <select id="tempToUnit" onchange="convertTemperature()">
                <option value="celsius">Celsius</option>
                <option value="fahrenheit">Fahrenheit</option>
                <option value="kelvin">Kelvin</option>
            </select>

            <label for="tempAmount">Amount: </label>
            <input type="number" id="tempAmount" placeholder="Enter amount" oninput="convertTemperature()" />

            <p id="tempConversionResult"></p>
        </div>
    `;
    // Set default unit type to length
    updateUnitConverter();
}

// Function to update the UI based on selected unit type
function updateUnitConverter() {
    const unitType = document.getElementById("unitType").value;
    document.getElementById("lengthConversion").style.display = unitType === "length" ? "block" : "none";
    document.getElementById("weightConversion").style.display = unitType === "weight" ? "block" : "none";
    document.getElementById("temperatureConversion").style.display = unitType === "temperature" ? "block" : "none";
}

// Length Conversion Function
// Length Conversion Function
function convertLength() {
    const fromUnit = document.getElementById("lengthFromUnit").value;
    const toUnit = document.getElementById("lengthToUnit").value;
    const amount = parseFloat(document.getElementById("lengthAmount").value);

    if (isNaN(amount) || amount <= 0) {
        document.getElementById("lengthConversionResult").textContent = "Please enter a valid amount.";
        return;
    }

    const conversionRates = {
        meters: { kilometers: 0.001, centimeters: 100, millimeters: 1000 },
        kilometers: { meters: 1000, centimeters: 100000, millimeters: 1000000 },
        centimeters: { meters: 0.01, kilometers: 0.00001, millimeters: 10 },
        millimeters: { meters: 0.001, kilometers: 0.000001, centimeters: 0.1 }
    };

    const result = amount * conversionRates[fromUnit][toUnit];
    document.getElementById("lengthConversionResult").textContent = `${amount} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
}

// Weight Conversion Function
function convertWeight() {
    const fromUnit = document.getElementById("weightFromUnit").value;
    const toUnit = document.getElementById("weightToUnit").value;
    const amount = parseFloat(document.getElementById("weightAmount").value);

    if (isNaN(amount) || amount <= 0) {
        document.getElementById("weightConversionResult").textContent = "Please enter a valid amount.";
        return;
    }

    const conversionRates = {
        grams: { kilograms: 0.001, pounds: 0.00220462, ounces: 0.035274 },
        kilograms: { grams: 1000, pounds: 2.20462, ounces: 35.274 },
        pounds: { grams: 453.592, kilograms: 0.453592, ounces: 16 },
        ounces: { grams: 28.3495, kilograms: 0.0283495, pounds: 0.0625 }
    };

    const result = amount * conversionRates[fromUnit][toUnit];
    document.getElementById("weightConversionResult").textContent = `${amount} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
}

// Temperature Conversion Function
function convertTemperature() {
    const fromUnit = document.getElementById("tempFromUnit").value;
    const toUnit = document.getElementById("tempToUnit").value;
    const amount = parseFloat(document.getElementById("tempAmount").value);

    if (isNaN(amount)) {
        document.getElementById("tempConversionResult").textContent = "Please enter a valid amount.";
        return;
    }

    let result;

    if (fromUnit === "celsius") {
        if (toUnit === "fahrenheit") {
            result = (amount * 9 / 5) + 32;
        } else if (toUnit === "kelvin") {
            result = amount + 273.15;
        } else {
            result = amount;
        }
    } else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
            result = (amount - 32) * 5 / 9;
        } else if (toUnit === "kelvin") {
            result = (amount - 32) * 5 / 9 + 273.15;
        } else {
            result = amount;
        }
    } else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
            result = amount - 273.15;
        } else if (toUnit === "fahrenheit") {
            result = (amount - 273.15) * 9 / 5 + 32;
        } else {
            result = amount;
        }
    }

    document.getElementById("tempConversionResult").textContent = `${amount} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
}

// Add event listeners to ensure input from the keyboard triggers the conversion
document.getElementById("lengthAmount").addEventListener("input", convertLength);
document.getElementById("weightAmount").addEventListener("input", convertWeight);
document.getElementById("tempAmount").addEventListener("input", convertTemperature);
