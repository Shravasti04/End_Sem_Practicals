import { useState } from "react";
import Display from "./Display";

function App() {
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [data, setData] = useState(null);

    function submit(e) {
        e.preventDefault();
        setData({ name, course });
    }

    return (
        <div>
            <h2>Student Form</h2>

            <form onSubmit={submit}>
                <input
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <br /><br />

                <input
                    placeholder="Enter Course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    required
                />
                <br /><br />

                <button type="submit">Submit</button>
            </form>

            <Display data={data} />
        </div>
    );
}

export default App;
