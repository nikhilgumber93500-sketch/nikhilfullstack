import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function Student1() {

  const students = [
    {
      "key": 101,
      "rollNo": 101,
      "name": "Nikhil",
      "age": 20,
      "course": "B.Tech"
    },
    {
      "key": 102,
      "rollNo": 102,
      "name": "Rahul",
      "age": 21,
      "course": "BCA"
    },
    {
      "key": 103,
      "rollNo": 103,
      "name": "Amit",
      "age": 20,
      "course": "BBA"
    },
    {
      "key": 104,
      "rollNo": 104,
      "name": "Rohit",
      "age": 22,
      "course": "B.Tech"
    },
    {
      "key": 105,
      "rollNo": 105,
      "name": "Vikas",
      "age": 21,
      "course": "MCA"
    },
    {
      "key": 106,
      "rollNo": 106,
      "name": "Arjun",
      "age": 20,
      "course": "BCA"
    },
    {
      "key": 107,
      "rollNo": 107,
      "name": "Deepak",
      "age": 22,
      "course": "BBA"
    },
    {
      "key": 108,
      "rollNo": 108,
      "name": "Mohit",
      "age": 21,
      "course": "BCA"
    },
    {
      "key": 109,
      "rollNo": 109,
      "name": "Sumit",
      "age": 20,
      "course": "MCA"
    },
    {
      "key": 110,
      "rollNo": 110,
      "name": "Ajay",
      "age": 22,
      "course": "BBA"
    }
  ];

  return (
    <div className="student-container">

      <h2>Student Management</h2>

      <div className="student-table">

        <Table bordered hover>

          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Roll No</th>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {students.map((student, index) => (

              <tr key={student.key}>

                <td>{index + 1}</td>
                <td>{student.rollNo}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.course}</td>

                <td>
                  <Button variant="warning" size="sm">
                    Edit
                  </Button>{" "}

                  <Button variant="danger" size="sm">
                    Delete
                  </Button>
                </td>

              </tr>

            ))}

          </tbody>

        </Table>

      </div>

    </div>
  );
}

export default Student1;