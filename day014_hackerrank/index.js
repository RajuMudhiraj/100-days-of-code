const btn = document.getElementById("btn");
btn.addEventListener("click", main);

function main() {
  const input = document.getElementById("num").value;
  const displayBValue = document.getElementById("displayBValue");
  const displayRes = document.getElementById("displayRes");

  const binary = Number(input).toString(2);

  let max = 0;
  let tempMax = 0;

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] == 1) {
      tempMax++;
      if (tempMax > max) {
        max = tempMax;
      }
    } else {
      if (tempMax > max) {
        max = tempMax;
      }
      tempMax = 0;
    }
  }

  displayBValue.textContent = Number(binary);
  displayRes.textContent = max;
}
