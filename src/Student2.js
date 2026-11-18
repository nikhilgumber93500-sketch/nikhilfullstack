import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function Student2() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [oldname, setOldName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [id, setId] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  useEffect(() => {
    getdata();
  }, []);
  async function getdata() {
    try {
      const response = await fetch(
        "http://localhost:3001/getstudent"
      );
      const result = await response.json();
      console.log(result);
      setStudents(result.message || []);
    } catch (error) {
      console.log("Error:", error);
    }
  }
 function handleEdit(student) {
    setName(student.name || "");
    setAge(student.age || "");
    setCourse(student.course || "");
    setId(student.id || "");
    setOldName(student.name);
    setEditMode(true);
    setShowForm(true);
  }
  const handleSave = async (e) => {
    e.preventDefault();

    if (
      name === "" ||
      age === "" ||
      course === "" ||
      id === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    const studentData = {
      name,
      age,
      course,
      id,
    };
    try {
      let response;
      if (editMode) {
        response = await fetch(
          `http://localhost:3001/updatestudent?name=${encodeURIComponent(oldname)}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(studentData),
          }
        );
      } else {

        response = await fetch(
          "http://localhost:3001/insertstudent",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(studentData),
          }
        );
      }
      const data = await response.json();
      console.log("API Response:", data);
      if (data.status == 200) {
        alert(
          editMode
            ? "Student updated successfully"
            : "Student added successfully"
        );
        await getdata();
        setName("");
        setAge("");
        setCourse("");
        setId("");
        setOldName("");
        setShowForm(false);
        setEditMode(false);
      } else {
        console.log("API Error:", data);
        alert(data.message || "Failed to save student");
      }

    } catch (error) {
      console.log("Error:", error);
      alert("Something went wrong");
    }
  };
  async function deletedata(item) {
    try {
      const response = await fetch(
        `http://localhost:3001/deletestudent/${encodeURIComponent(item.name)}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      if (response.ok) {
        await getdata();
        alert("Student deleted successfully");
      } else {
        alert(data.message || "Failed to delete student");
        console.log("API Error:", data);
      }
    } catch (error) {
      console.log("Error:", error);
      alert("Something went wrong");
    }
  }
  return (
    <div className="student-container">
      <div className="student-heading">
        <h2>Student Management</h2>
        <Button
          variant="danger"
          onClick={() => {
            setName("");
            setAge("");
            setCourse("");
            setId("");
            setEditMode(false);
            setShowForm(true);
          }}
        >
          Add Student
        </Button>
      </div>
      {showForm && (
        <div className="mt-4 p-4 border rounded">
          <h4>
            {editMode ? "Update Student" : "Add Student"}
          </h4>
          <Form onSubmit={handleSave}>
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
                placeholder="Enter age"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Course</Form.Label>

              <Form.Control
                type="text"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                placeholder="Enter course"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>ID</Form.Label>

              <Form.Control
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="Enter ID"
              />
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
                setCourse("");
                setId("");
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
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
              <th>Id</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {students.map((student, index) => {

              if (student.name != null) {
                return (
                  <tr key={student.id || index}>

                    <td>{index + 1}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.course}</td>
                    <td>{student.id}</td>

                    <td>
                      <div className="d-flex gap-2">

                        <Button
                          variant="warning"
                          size="sm"
                          onClick={() => handleEdit(student)}
                        >
                          Edit
                        </Button>

                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => deletedata(student)}
                        >
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
export default Student2;
