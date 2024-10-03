document.addEventListener('DOMContentLoaded', function() {
    const inputElement = document.getElementById('initial-value');
    const resultElement = document.getElementById('result-value');
  
    inputElement.addEventListener('input', calculateResult);
  
    function calculateResult() {
      const initialValue = parseFloat(inputElement.value);
      const result = initialValue * 1.1; // Augmentation de 10%
      resultElement.textContent = result.toFixed(1);
    }
  });