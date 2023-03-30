function convert() {
    const miles = parseFloat(document.getElementById("miles-input").value);
    const kilometers = miles * 1.609344;
    document.getElementById("result").textContent = `${miles} Meilen sind ${kilometers.toFixed(2)} Kilometer.`;