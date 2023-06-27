import { Link } from "react-router-dom";
import {
  Select,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";


const Student = (props) => {
  const { students, setStudents, loading, setLoading, renderStudents } = props;
  const [faculty, setFaculty] = useState("All");

  useEffect(() => {
    setLoading(true);
    renderStudents();
  }, []);

  const deletestudent = (id) => {
    fetch(`http://localhost:3001/student/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setStudents((prevStudents) =>
          prevStudents.filter((student) => student.id !== id)
        );
      })
      .catch((error) => console.log(error));
  };

  const RenderjsonStudent = () => {
    return (
      students &&
      students.map((student, index) => {
        if (faculty === "All" || faculty === student.faculty) {
          return (
            <Tr key={student.id} className="student-data-row">
              <Td>{index + 1}</Td>
              <Td>
                <Link to={`${student.id}`}>{student.fullname}</Link>
              </Td>
              <Td>{student.faculty}</Td>
              <Td>{student.programStudy}</Td>
              <Td>
                <button
                  data-testid={`delete-${student.id}`}
                  onClick={() => deletestudent(student.id)}
                  className="delete-btn"
                  type="button"
                >
                  Delete
                </button>
              </Td>
            </Tr>
          );
        } else {
          return null;
        }
      })
    );
  };

  return (
    <>
      <Navbar />
      <Box className="container">
        {loading === true ? (
          <p>Loading ...</p>
        ) : (
          <Box className="col">
            <Box className="filter">
              <Select
                className="search"
                data-testid="filter"
                onChange={({ target }) => setFaculty(target.value)}
              >
                <option value="All">All</option>
                <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
                <option value="Fakultas Ilmu Sosial dan Politik">
                  Fakultas Ilmu Sosial dan Politik
                </option>
                <option value="Fakultas Teknik">Fakultas Teknik</option>
                <option value="Fakultas Teknologi Informasi dan Sains">
                  Fakultas Teknologi Informasi dan Sains
                </option>
              </Select>
            </Box>
            <Box className="row">
              <TableContainer>
                <Table id="table-student" className="test-table">
                  <TableCaption>isi dewe</TableCaption>
                  <Thead className="test-thead">
                    <Tr>
                      <Th>No</Th>
                      <Th>Full Name</Th>
                      <Th>Faculty</Th>
                      <Th>Program Study</Th>
                      <Th>Option</Th>
                    </Tr>
                  </Thead>
                  <Tbody className="test-tbody">{RenderjsonStudent()}</Tbody>
                  <Tfoot>
                    <Tr>
                      <Th>isi dewe</Th>
                    </Tr>
                  </Tfoot>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        )}
      </Box>
      <Footer />
    </>
  );
};

export default Student;
