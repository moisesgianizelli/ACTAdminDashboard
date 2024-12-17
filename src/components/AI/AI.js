import React, { useState } from "react";
import "./style/AI.css";
import Nav from "../../Nav";

function AI({ Toggle }) {
  const [result, setResult] = useState(
    "No analysis yet. Click a button to see the results here."
  );
  const [isLoading, setIsLoading] = useState(false);

  const analyze = async (symbol) => {
    setResult("Loading..."); // Show a loading message
    setIsLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:5000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer <YOUR_API_TOKEN>", // Replace with your token if required
        },
        body: JSON.stringify({ symbol }),
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data); // Update with the API response
      } else {
        const error = await response.json();
        setResult(`<p style="color: red;">Error: ${error.error}</p>`);
      }
    } catch (error) {
      setResult(`<p style="color: red;">Request failed: ${error.message}</p>`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="ai-assist-container">
      <Nav Toggle={Toggle} />
      <h1>AI-Assist: Test API Integration</h1>
      <p>Click a button to analyze a symbol:</p>

      <div className="button-container">
        <button onClick={() => analyze("AAPL")} disabled={isLoading}>
          Analyze Apple (AAPL)
        </button>
        <button onClick={() => analyze("GOOGL")} disabled={isLoading}>
          Analyze Google (GOOGL)
        </button>
        <button onClick={() => analyze("BTC")} disabled={isLoading}>
          Analyze Bitcoin (BTC)
        </button>
        <button onClick={() => analyze("ETH")} disabled={isLoading}>
          Analyze Ethereum (ETH)
        </button>
      </div>

      <hr />

      <div className="result-container">
        <div id="result" dangerouslySetInnerHTML={{ __html: result }}></div>
      </div>
    </div>
  );
}

export default AI;
