let output = document.getElementById('data-left');
let slider = (document.getElementById('range-slider').oninput = function () {
  let value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    'linear-gradient(to right, hsl(6, 100%, 80%) 0%, hsl(335, 100%, 65%) ' +
    value +
    '%,  hsl(229, 57%, 11%) 0%, hsl(229, 57%, 11%) 100%)';

  output.innerHTML = this.value;
});
