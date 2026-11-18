import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Student1() {
  const [students, setStudents] = useState([]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  
  const [showForm, setShowForm] = useState(false);
   let count = 0;
  useEffect(() => {
    getdata(); 
  }, []);

  async function getdata() {
    try {
      const response = await fetch(
        "https://mymeeshoweb.onrender.com/getdatastudent"
      );

      const result = await response.json();

      console.log(result);
      setStudents(result);
    } catch (error) {
      console.log("Error:", error);
    }
  }

 const handleSave = async (e) => {
  e.preventDefault();

  if (
    name === "" ||
    age === "" ||
    course === "" ||
    city === "" ||
    email === ""
  ) {
    alert("Please fill all fields");
    return;
  }

  const newStudent = {
    name: name,
    age: age,
    course: course,
    city: city,
    email: email
  };

  try {
    const apioption={
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newStudent)
      }
    const response = await fetch("https://mymeeshoweb.onrender.com/insertdatastudent",apioption)

    const data = await response.json();

    if (response.ok) {
      console.log("status is:", data);
      getdata();
      alert("Student added successfully");

      setName("");
      setAge("");
      setCourse("");
      setCity("");
      setEmail("");

      setShowForm(false);
      
    } else {
      alert("Failed to add student");
      console.log("API Error:", data);
    }
  } catch (error) {
    console.log("Error:", error);
    alert("Something went wrong");
  }
};

  return (
    <div className="student-container">

      <div className="student-heading">

        <h2>Student Management</h2>

        <Button
          variant="success"
          onClick={() => setShowForm(true)}
        >
          Add Student
        </Button>

      </div>

      {showForm && (
        <div className="mt-4 p-4 border rounded">

          <h4>Add Student</h4>

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
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </Form.Group>
            <Button
              variant="success"
              type="submit"
            >
              Save
            </Button>

            {" "}
            <Button
              variant="secondary"
              type="button"
              onClick={() => setShowForm(false)}
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
              <th>City</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {students.map((student, index) => {
              if (student.name != null) {
                count++;
                return (
                  <tr key={student.key}>
                
                    <td>{count}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.course}</td>
                    <td>{student.city}</td>
                    <td>{student.email}</td>
                    <td>
                      <Button
                        variant="warning"
                        size="sm">
                        Edit
                      </Button>
                      {" "}
                      <Button
                        variant="danger"
                        size="sm"
                       >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              }})}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
export default Student1;