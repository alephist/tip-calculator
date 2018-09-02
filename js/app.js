// Variables
let billAmt = document.querySelector('.tip-calc__bill-amt');
let numOfPerson = document.querySelector('.tip-calc__num-person');
let tipPercent = document.querySelectorAll('.tip-calc__tip-percent');
let prompt = document.querySelector('.tip-calc__prompt');
let tipAmt = document.querySelector('.tip-calc__tip-amt');
let total = document.querySelector('.tip-calc__total');
let totalTip = document.querySelector('.tip-calc__total-tip');
let totalAmt = document.querySelector('.tip-calc__total-amt');
let each = document.querySelector('.tip-calc__each');

// Tip Button Event
tipPercent.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // Number of person validation
    if (numOfPerson.value === '') {
      numOfPerson.value = 1;
    }

    // Bill amount validation
    if (billAmt.value === '' || Number(billAmt.value) === 0) {
      // No logic added
    } else {
      // Compute for total tip and total bill
      totalTip.textContent = ((Number(billAmt.value) / numOfPerson.value) * e.target.value).toFixed(2);
      totalAmt.textContent = ((billAmt.value * e.target.value + Number(billAmt.value)) / numOfPerson.value).toFixed(2);

      // Tip and total bill per person display validation
      if (Number(numOfPerson.value) === 1 || numOfPerson.value === '') {
        each.style.display = 'none';
      } else {
        each.style.display = 'unset';
      }

      // Display values
      tipAmt.classList.add('tip-calc__tip-amt--abled');
      total.classList.add('tip-calc__total--abled');

      // Remove prompt message
      prompt.classList.add('tip-calc__prompt--disabled');
    }
  });
});

// Bill amount input event
billAmt.addEventListener('input', (e) => {
  if (e.target.value === '' || Number(e.target.value) === 0) {
    prompt.classList.remove('tip-calc__prompt--disabled');
    tipAmt.classList.remove('tip-calc__tip-amt--abled');
    total.classList.remove('tip-calc__total--abled');
  }
});

// Reset all inputs
window.addEventListener('beforeunload', () => {
  billAmt.value = '';
  numOfPerson.value = '';
});
