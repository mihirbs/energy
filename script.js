function calculateEnergy() {
  const mass = parseFloat(document.getElementById("mass").value);
  const unit = document.getElementById("unit").value;
  const rocket = document.getElementById("rocket");
  const sound = document.getElementById("boomSound");

  if (isNaN(mass) || mass <= 0) {
    document.getElementById("result").textContent = "Invalid mass. Enter a positive number.";
    return;
  }

  let massInKg = mass;
  if (unit === "g") massInKg = mass / 1000;
  if (unit === "ton") massInKg = mass * 1000;

  const c = 3e8;
  const energyJoules = massInKg * c * c;
  const energyKWh = energyJoules / 3.6e6;

  document.getElementById("result").innerHTML =
    "E = " + energyJoules.toExponential(2) + " J<br>" +
    "≈ " + energyKWh.toFixed(2) + " kWh";

  rocket.classList.add("launch");
  sound.play();

  setTimeout(() => {
    rocket.classList.remove("launch");
  }, 3000);
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}