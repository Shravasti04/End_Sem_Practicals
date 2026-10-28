function Display(props) {
    if (props.data == null) {
        return null;
    }

    return (
        <div>
            <h2>Student Details</h2>
            <p>Name: {props.data.name}</p>
            <p>Course: {props.data.course}</p>
        </div>
    );
}

export default Display;
