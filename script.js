function calculateExponential() {
    var base = parseFloat(document.getElementById('base').value);
    var exponent = parseInt(document.getElementById('exponent').value);
  
    if (!isNaN(base) && !isNaN(exponent)) {
      var result = Math.pow(base, exponent);
      document.getElementById('result').innerHTML = `Sonuç: ${base}<sup>${exponent}</sup> = ${result}`;
    } else {
      document.getElementById('result').innerHTML = 'Lütfen geçerli sayılar girin.';
    }
  }
  