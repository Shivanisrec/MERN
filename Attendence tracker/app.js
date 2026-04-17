import React, { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);

  
  const addStudent = () => {
    if (!name) return;

    setStudents([...students, { name: name, present: false }]);
    setName("");
  };

  const toggle = (index) => {
    const newList = [...students];
    newList[index].present = !newList[index].present;
    setStudents(newList);
  };

  return (
    <div>

      <h2>Attendance Tracker</h2>

      <input
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addStudent}>Add</button>

      <ul>
        {students.map((s, i) => (
          <li key={i}>
            {s.name} - {s.present ? "Present" : "Absent"}

            <button onClick={() => toggle(i)}>Toggle</button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
