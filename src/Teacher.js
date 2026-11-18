
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function Teacher2() {
  const [teachers, setTeachers] = useState([]);
  const [name, setName] = useState("");
  const [oldname, setOldName] = useState("");
  const [age, setAge] = useState("");
  const [subject, setSubject] = useState("");
  const [teacherId, setTeacherId] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  useEffect(() => {
    getdata();
  }, []);
  async function getdata() {
    try {
      const response = await fetch(
        "http://localhost:3001/getteacher"
      );
      const result = await response.json();
      console.log(result);
      setTeachers(result.message || []);
    } catch (error) {
      console.log("Error:", error);
    }
  }
  function handleEdit(teacher) {
    setName(teacher.name || "");
    setAge(teacher.age || "");
    setSubject(teacher.subject || "");
    setTeacherId(teacher.teacherId ?? "");
    setOldName(teacher.name);
   setEditMode(true);
    setShowForm(true);
  }
  const handleSave = async (e) => {
    e.preventDefault();
    if (
      name === "" ||
      age === "" ||
      subject === "" ||
      teacherId === ""
    ) {
      alert("Please fill all fields");
      return;
    }
    const teacherData = {
      name,
      age: Number(age),
      subject,
      teacherId: Number(teacherId)
    };
    try {
      let response;
      if (editMode) {
        response = await fetch(
          `http://localhost:3001/updateteacher?name=${encodeURIComponent(oldname)}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(teacherData)
          }
        );
      } else {
        response = await fetch(
          "http://localhost:3001/insertteacher",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(teacherData)
          }
        );
      }
      const data = await response.json();
      console.log("API Response:", data);
      if (data.status === 200) {
        alert(
          editMode
            ? "Teacher updated successfully"
            : "Teacher added successfully"
        );
        await getdata();
        setName("");
        setAge("");
        setSubject("");
        setTeacherId("");
        setOldName("");
        setShowForm(false);
        setEditMode(false);
      } else {
        alert(data.message || "Failed to save teacher");
      }
    } catch (error) {
      console.log("Error:", error);
      alert("Something went wrong");
    }
  };
  async function deletedata(item) {
    try {
      const response = await fetch(
        `http://localhost:3001/deleteteacher/${encodeURIComponent(item.name)}`,
        {
          method: "DELETE"
        }
      );
      const data = await response.json();
      if (data.status === 200) {
        await getdata();
        alert("Teacher deleted successfully");
      } else {
        alert(data.message || "Failed to delete teacher");
      }
    } catch (error) {
   console.log("Error:", error);
      alert("Something went wrong");
    }
  }
  return (
    <div className="student-container">
      <div className="student-heading">
        <h2>Teacher Management</h2>
        <Button
          variant="danger"
          onClick={() => {
            setName("");
            setAge("");
            setSubject("");
            setTeacherId("");
            setOldName("");
            setEditMode(false);
            setShowForm(true);
          }} >
          Add Teacher
        </Button>
      </div>
      {showForm && (
        <div className="mt-4 p-4 border rounded">
          <h4>
            {editMode ? "Update Teacher" : "Add Teacher"}
          </h4>
          <Form onSubmit={handleSave}>
            <Form.Group className="mb-3">
              <Form.Label>Teacher ID</Form.Label>
              <Form.Control
                type="number"
                value={teacherId}
                onChange={(e) => setTeacherId(e.target.value)}
                placeholder="Enter Teacher ID" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter age" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter subject" />
            </Form.Group>
            <Button
              variant="success"
              type="submit"
            >
              {editMode ? "Update" : "Save"}
            </Button>
            {" "}
            <Button
              variant="secondary"
              type="button"
              onClick={() => {
                setShowForm(false);
                setEditMode(false);
                setName("");
                setAge("");
                setSubject("");
                setTeacherId("");
                setOldName("");
              }}
            >
              Cancel
            </Button>
          </Form>
        </div>
      )}
      <div className="student-table mt-4">
        <Table bordered hover>
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Teacher ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Subject</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher, index) => {
              if (teacher.name != null) {
                return (
                  <tr key={teacher._id || index}>
                    <td>{index + 1}</td>
                    <td>{teacher.teacherId}</td>
                    <td>{teacher.name}</td>
                    <td>{teacher.age}</td>
                    <td>{teacher.subject}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <Button
                          variant="warning"
                          size="sm"
                          onClick={() => handleEdit(teacher)} >  Edit
                        </Button>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => deletedata(teacher)} >
                          Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
export default Teacher2;
