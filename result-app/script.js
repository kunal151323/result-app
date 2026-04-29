document.querySelector("button").addEventListener("click", async () => {
  const name = document.querySelector("input").value;
  const studentClass = document.querySelector("select").value;

  const res = await fetch("http://localhost:3000/result", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      class: studentClass
    })
  });

  const data = await res.json();

  const box = document.getElementById("resultBox");

  if (data.message) {
    box.innerHTML = `<p style="color:red;">${data.message}</p>`;
    return;
  }

  box.innerHTML = `
    <hr>
    <h3>📊 Student Result</h3>

    <p><b>Father Name:</b> ${data.father_name}</p>
    <p><b>Mother Name:</b> ${data.mother_name}</p>

    <p><b>Math:</b> ${data.math}</p>
    <p><b>Science:</b> ${data.science}</p>
    <p><b>English:</b> ${data.english}</p>
    <p><b>Hindi:</b> ${data.hindi}</p>
    <p><b>Social Science:</b> ${data.social_science}</p>

    <h4>Total: ${data.total} / 500</h4>
    <h4>Percentage: ${data.percentage}%</h4>
    <h4>Rank: ${data.rank}</h4>
  `;
});