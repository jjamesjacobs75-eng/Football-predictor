
const predictBtn = document.getElementById("predictBtn");

if (predictBtn) {
  predictBtn.addEventListener("click", generatePrediction);
}

function generatePrediction() {
  const home = document.getElementById("homeTeam").value.trim();
  const away = document.getElementById("awayTeam").value.trim();
  const result = document.getElementById("result");

  if (!home || !away) {
    result.innerHTML = "Please enter both team names.";
    return;
  }

  const homeGoals = Math.floor(Math.random() * 4);
  const awayGoals = Math.floor(Math.random() * 4);

  let outcome;

  if (homeGoals > awayGoals) {
    outcome = "Home Win (1)";
  } else if (homeGoals < awayGoals) {
    outcome = "Away Win (2)";
  } else {
    outcome = "Draw (X)";
  }

  const btts = homeGoals > 0 && awayGoals > 0 ? "Yes" : "No";

  result.innerHTML = `
    <h3>Match Analysis</h3>
    <p>${home} vs ${away}</p>
    <p>Predicted score: ${homeGoals} - ${awayGoals}</p>
    <p>Full-time 1X2: ${outcome}</p>
    <p>BTTS: ${btts}</p>
    <p>Prediction type: Demo simulation</p>
  `;
}
