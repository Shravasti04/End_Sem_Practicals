function App() {
    return (
        <div>
            <h2>Simple Calculator</h2>

            <input type="number" id="a" placeholder="First number" />
            <br /><br />

            <input type="number" id="b" placeholder="Second number" />
            <br /><br />

            <button onClick={() => calculate("+")}>+</button>{" "}
            <button onClick={() => calculate("-")}>-</button>{" "}
            <button onClick={() => calculate("*")}>×</button>{" "}
            <button onClick={() => calculate("/")}>÷</button>

            <h3 id="result">Result: </h3>
        </div>
    );
}

function calculate(op) {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let r;

    if (op == "+") r = a + b;
    else if (op == "-") r = a - b;
    else if (op == "*") r = a * b;
    else if (op == "/") {
        if (b == 0) {
            document.getElementById("result").innerHTML = "Cannot divide by zero";
            return;
        }
        r = a / b;
    }

    document.getElementById("result").innerHTML = "Result: " + r;
}

export default App;
