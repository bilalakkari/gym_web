import { useState } from "react";
import { generatePortalLink } from "./proxy";
import { Toaster, toast } from "react-hot-toast";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const send = async () => {
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    setLoading(true);

    try {
      await generatePortalLink(email);
      toast.success("Check your inbox!");
      setSent(true);
      setEmail("");
    } catch (err) {
      toast.error(err.message || "Something went wrong");
    }

    setLoading(false);
  };

  const reset = () => {
    setSent(false);
    setEmail("");
  };

  return (
    <div className="container">
      <Toaster position="top-right" />

      <h1>Gym Subscription Portal</h1>
      <p>Enter your email to manage your subscription</p>

      <input
        type="email"
        className="input-field"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading || sent}
      />

      <div className="button-group">
        {!sent && (
          <button
            onClick={send}
            className={`btn submit-btn ${loading ? "disabled" : ""}`}
            disabled={loading}
          >
            {loading ? "Sending link via email..." : "Send Link"}
          </button>
        )}

        {sent && (
          <button onClick={reset} className="btn reset-btn">
            Send Another
          </button>
        )}
      </div>
    </div>
  );
}

export default App;