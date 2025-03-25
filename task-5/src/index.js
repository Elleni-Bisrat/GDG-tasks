import React, { useMemo } from "react";
import ReactDOM from 'react-dom/client';
import useCharacterCount from "./customhook";

function App() {
  return <CharacterCounter />;
}

const CharacterCounter = () => {
    const { text, charCount, updateText, resetText, char_limit } = useCharacterCount();

    const progress = useMemo(() => (charCount / char_limit) * 100, [charCount, char_limit]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text);
        alert("Text copied to clipboard!");
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
            <h2 style={{color:"blueviolet"}}>Character Counter</h2>
            <textarea
                value={text}
                onChange={(e) => updateText(e.target.value)}
                placeholder="Type here..."
                rows="5"
                style={{ width: "100%", padding: "10px", fontSize: "16px" }}
            />

            <div style={{ height: "10px", width: "100%", backgroundColor: "#eee", borderRadius: "5px", margin: "10px 0" }}>
                <div
                    style={{
                        width:` ${progress}%`,
                        height: "100%",
                        backgroundColor: progress >= 90 ? "red" : "blue", 
                        borderRadius: "5px",
                        transition: "width 0.3s ease",
                    }}
                />
            </div>

            <p style={{ color: progress >= 90 ? "red" : "black" }}>
                {charCount}/{char_limit} {progress >= 90 && "⚠️ Almost at limit!"}
            </p>

            <button onClick={copyToClipboard} style={{ marginRight: "20px",  background:'lightblue' , border:'none', width:'5rem'}}>📋 Copy</button>
            <button onClick={resetText} style={{ background:'lightblue' , border:'none', width:'5rem'}} >🔄 Reset</button>
        </div>
    );
};



export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
