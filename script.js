document
  .getElementById("evaluateButton")
  .addEventListener("click", function () {
    const text = document.getElementById("userText").value;

    if (!text.trim()) {
      document.getElementById("result").textContent = "Please enter some text!";
      return;
    }

    try {
      const result = window.grade(text);
      displayResult(result);
      console.log(result);
    } catch (error) {
      document.getElementById("result").textContent =
        "Error processing the text!";
      console.error("Error evaluating vocabulary level:", error);
    }
  });

function displayResult(result) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<h3>Evaluation Result:</h3>
                             <p><strong>Mean Vocabulary Level:</strong> ${
                               result.meta.mean
                             }</p>
                             <p><strong>Highest Level:</strong> ${
                               result.meta.max
                             }</p>
                             <p><strong>Grade:</strong> ${result.meta.grade}</p>
                             <h4>Words Used:</h4>
                             <ul>${result.words
                               .map((word) => `<li>${word[0]}: ${word[1]}</li>`)
                               .join("")}</ul>`;
}
