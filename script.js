function convertTemp() {
    let temp = document.getElementById('tempInput').value;
    let tempType = document.getElementById('tempType').value;
    let resultText = '';

    if (temp === '') {
        resultText = 'Please enter a temperature!';
    } else {
        temp = parseFloat(temp);
        if (tempType === 'C') {
            // Celsius to Fahrenheit
            let convertedTemp = (temp * 9/5) + 32;
            resultText = `${temp}°C is ${convertedTemp.toFixed(2)}°F`;
        } else if (tempType === 'F') {
            // Fahrenheit to Celsius
            let convertedTemp = (temp - 32) * 5/9;
            resultText = `${temp}°F is ${convertedTemp.toFixed(2)}°C`;
        }
    }

    document.getElementById('result').innerText = resultText;
}
