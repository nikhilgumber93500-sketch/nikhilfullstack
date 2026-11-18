
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Course3() {

    const [courses, setCourses] = useState([]);

    const [id, setId] = useState("");
    const [courseName, setCourseName] = useState("");
    const [duration, setDuration] = useState("");
    const [department, setDepartment] = useState("");

    const [oldid, setOldId] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        getdata();
    }, []);

    async function getdata() {
        try {
            let response = await fetch("http://localhost:3001/getcourse");
            let result = await response.json();

            setCourses(result.message || []);
        }
        catch (error) {
            console.log(error);
        }
    }

    function resetForm() {
        setId("");
        setCourseName("");
        setDuration("");
        setDepartment("");
        setOldId("");
        setShowForm(false);
        setEditMode(false);
    }

    function handleEdit(course) {
        setId(course.id);
        setCourseName(course.courseName);
        setDuration(course.duration);
        setDepartment(course.department);
        setOldId(course.id);

        setEditMode(true);
        setShowForm(true);
    }

    async function handleSave(e) {
        e.preventDefault();

        if (!id || !courseName || !duration || !department) {
            alert("Please fill all fields");
            return;
        }

        let courseData = {
            id: Number(id),
            courseName,
            duration,
            department
        };

        try {
            let response;

            if (editMode) {
                response = await fetch(
                    `http://localhost:3001/updatecourse?id=${oldid}`,
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(courseData)
                    }
                );
            }
            else {
                response = await fetch(
                    "http://localhost:3001/insertcourse",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(courseData)
                    }
                );
            }

            let data = await response.json();

            if (data.status == 200) {
                alert(editMode
                    ? "Course updated successfully"
                    : "Course inserted successfully"
                );

                await getdata();
                resetForm();
            }
            else {
                alert(data.message);
            }
        }
        catch (error) {
            console.log(error);
            alert("Something went wrong");
        }
    }

    async function deletedata(course) {
        if (!window.confirm("Are you sure you want to delete?")) {
            return;
        }

        try {
            let response = await fetch(
                `http://localhost:3001/deletecourse/${course.id}`,
                {
                    method: "DELETE"
                }
            );

            let data = await response.json();

            if (data.status == 200) {
                alert("Course deleted successfully");
                await getdata();
            }
            else {
                alert(data.message);
            }
        }
        catch (error) {
            console.log(error);
            alert("Something went wrong");
        }
    }

    return (
        <div className="container mt-4">

            <div className="d-flex justify-content-between mb-4">
                <h2>Course Management</h2>

                <Button
                    variant="danger"
                    onClick={() => {
                        resetForm();
                        setShowForm(true);
                    }}
                >
                    Add Course
                </Button>
            </div>

            {showForm && (
                <div className="border rounded p-4 mb-4">

                    <h4>
                        {editMode ? "Update Course" : "Add Course"}
                    </h4>

                    <Form onSubmit={handleSave}>

                        <Form.Group className="mb-3">
                            <Form.Label>Course ID</Form.Label>
                            <Form.Control
                                type="number"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                placeholder="Enter Course ID"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Course Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={courseName}
                                onChange={(e) => setCourseName(e.target.value)}
                                placeholder="Enter Course Name"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Duration</Form.Label>
                            <Form.Control
                                type="text"
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                                placeholder="Enter Duration"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Department</Form.Label>
                            <Form.Control
                                type="text"
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}
                                placeholder="Enter Department"
                            />
                        </Form.Group>

                        <Button variant="success" type="submit">
                            {editMode ? "Update" : "Save"}
                        </Button>

                        {" "}

                        <Button
                            variant="secondary"
                            type="button"
                            onClick={resetForm}
                        >
                            Cancel
                        </Button>

                    </Form>
                </div>
            )}

            <Table bordered hover responsive>

                <thead>
                    <tr>
                        <th>Sr. No</th>
                        <th>Course ID</th>
                        <th>Course Name</th>
                        <th>Duration</th>
                        <th>Department</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                    {courses.map((course, index) => (
                        <tr key={course._id || course.id}>
                            <td>{index + 1}</td>
                            <td>{course.id}</td>
                            <td>{course.courseName}</td>
                            <td>{course.duration}</td>
                            <td>{course.department}</td>

                            <td>
                                <div className="d-flex gap-2">

                                    <Button
                                        variant="warning"
                                        size="sm"
                                        onClick={() => handleEdit(course)}
                                    >
                                        Edit
                                    </Button>

                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={() => deletedata(course)}
                                    >
                                        Delete
                                    </Button>

                                </div>
                            </td>
                        </tr>
                    ))}

                </tbody>

            </Table>

        </div>
    );
}

export default Course3;
