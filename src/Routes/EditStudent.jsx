import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";
import { Input, Button } from "@chakra-ui/react";
import Footer from "../components/Footer";

const EditStudent = (props) => {
  const { editStudent } = props;
  const { id } = useParams();
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [programStudy, setProgramStudy] = useState("");
  const [loading, setLoading] = useState(false);

  const getStudentById = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/student/${id}`);
      const data = await response.json();
      setFullname(data.fullname);
      setProfilePicture(data.profilePicture);
      setAddress(data.address);
      setPhoneNumber(data.phoneNumber);
      setBirthDate(data.birthDate);
      setGender(data.gender);
      setProgramStudy(data.programStudy);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    getStudentById(id);
  }, [id]);

  const edithand = (e) => {
    e.preventDefault();
    const getFacultyByProgramStudy = (programStudy) => {
      switch (programStudy) {
        case "Ekonomi":
        case "Manajemen":
        case "Akuntansi":
          return "Fakultas Ekonomi";
        case "Administrasi Publik":
        case "Administrasi Bisnis":
        case "Hubungan Internasional":
          return "Fakultas Ilmu Sosial dan Politik";
        case "Teknik Sipil":
        case "Arsitektur":
          return "Fakultas Teknik";
        case "Matematika":
        case "Fisika":
        case "Informatika":
          return "Fakultas Teknologi Informasi dan Sains";
        default:
          return "";
      }
    };

    const faculty = getFacultyByProgramStudy(programStudy);
    const newStudent = {
      fullname,
      profilePicture,
      address,
      phoneNumber,
      birthDate,
      gender,
      faculty,
      programStudy,
    };

    editStudent(newStudent, id);

    // After successful edit, navigate to /students
    navigate("/students");
  };

  return (
    <>
      <NavBar />
      <div className="container">
        {loading === true ? (
          <p>Loading ...</p>
        ) : (
          <div className="card-form" id="form-student">
            <form onSubmit={edithand}>
              <div className="label-input">
                <div className="row">
                  <img
                    src={profilePicture}
                    alt={fullname}
                    style={{ width: "200px" }}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="fullname">Fullname:</label>
                <Input
                  type="text"
                  id="fullname"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  data-testid="name"
                />
              </div>
              <div>
                <label htmlFor="profilePicture">Profile Picture:</label>
                <Input
                  type="text"
                  id="profilePicture"
                  value={profilePicture}
                  onChange={(e) => setProfilePicture(e.target.value)}
                  data-testid="profilePicture"
                />
              </div>
              <div>
                <label htmlFor="address">Address:</label>
                <Input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  data-testid="address"
                />
              </div>
              <div>
                <label htmlFor="phoneNumber">Phone Number:</label>
                <Input
                  type="text"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  data-testid="phoneNumber"
                />
              </div>
              <div id="grid-student">
                <div id="grid-item">
                  <label htmlFor="birthDate">Birth Date:</label>
                  <Input
                    type="date"
                    id="birthDate"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    data-testid="date"
                  />
                </div>
                <div id="grid-item">
                  <label htmlFor="gender">Gender:</label>
                  <Input
                    type="text"
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    data-testid="gender"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="programStudy">Program Study:</label>
                <Input
                  type="text"
                  id="programStudy"
                  value={programStudy}
                  onChange={(e) => setProgramStudy(e.target.value)}
                  data-testid="prody"
                />
              </div>
              <div className="label-input">
                <Button
                  type="submit"
                  data-testid="edit-btn"
                  id="edit-btn"
                  colorScheme="blue"
                >
                  Edit student
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default EditStudent;
