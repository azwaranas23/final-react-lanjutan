import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Routes/Home";
import AddStudent from "./Routes/AddStudent";
import EditStudent from "./Routes/EditStudent";
import NotFound from "./Routes/NotFound";
import Student from "./Routes/Student";

const App = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const renderStudents = async () => {
    try {
      const respone = await fetch("http://localhost:3001/student");
      const result = await respone.json();
      setStudents(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const createStudent = async (student) => {
    try {
      await fetch("http://localhost:3001/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      });
      setLoading(true);
      renderStudents();
      navigate("/student");
    } catch (error) {}
  };

  const editStudent = async (student, id) => {
    try {
      await fetch(`http://localhost:3001/student/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      });
      setLoading(true);
      renderStudents();
      navigate("/student");
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="add"
          element={<AddStudent createStudent={createStudent} />}
        />
        <Route
          path="student"
          element={
            <Student
              students={students}
              setStudents={setStudents}
              loading={loading}
              setLoading={setLoading}
              renderStudents={renderStudents}
            />
          }
        />
        <Route
          path="student/:id"
          element={<EditStudent editStudent={editStudent} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;