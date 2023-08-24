const convertButton = document.getElementById("convert-btn");
const amountInput = document.getElementById("amount");
const sourceCurrencySelect = document.getElementById("source-currency");
const targetCurrencySelect = document.getElementById("target-currency");
const resultDiv = document.getElementById("result");

// Exchange rates for demonstration purposes (replace with real rates)
const exchangeRates = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.75,
  JPY: 110,
  INR: 73.5,
  // Add more exchange rates here
};

convertButton.addEventListener("click", () => {
  const amount = parseFloat(amountInput.value);
  const sourceCurrency = sourceCurrencySelect.value;
  const targetCurrency = targetCurrencySelect.value;

  if (isNaN(amount)) {
    resultDiv.textContent = "Please enter a valid amount.";
    return;
  }

  if (exchangeRates[sourceCurrency] && exchangeRates[targetCurrency]) {
    const convertedAmount =
      (amount / exchangeRates[sourceCurrency]) * exchangeRates[targetCurrency];
    resultDiv.textContent = `${amount} ${sourceCurrency} is equal to ${convertedAmount.toFixed(
      2
    )} ${targetCurrency}`;
  } else {
    resultDiv.textContent = "Invalid currency selection.";
  }
});
