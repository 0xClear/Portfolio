document.addEventListener("DOMContentLoaded", function () {
  const calculateButton = document.getElementById("calculateButton");
  calculateButton.addEventListener("click", calculateMonthlyPayment);

  function calculateMonthlyPayment() {
    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
    const annualInterestRate = parseFloat(
      document.getElementById("annualInterestRate").value
    );
    const loanTermInYears = parseFloat(
      document.getElementById("loanTermInYears").value
    );

    const monthlyInterestRate = annualInterestRate / 100 / 12;
    const numberOfPayments = loanTermInYears * 12;

    const monthlyPayment =
      (loanAmount *
        (monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    const monthlyPaymentElement = document.getElementById("monthlyPayment");
    monthlyPaymentElement.textContent = monthlyPayment.toFixed(2) + " Euro";
  }
});
