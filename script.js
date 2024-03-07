function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    if (!isNaN(weight) && !isNaN(height) && height > 0) {
        const bmi = weight / (height * height);
        document.getElementById('result').textContent = `Seu IMC é: ${bmi.toFixed(2)}`;
    } else {
        document.getElementById('result').textContent = 'Por favor, insira valores válidos.';
    }
}
