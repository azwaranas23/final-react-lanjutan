import React, { useState } from "react";
import NavBar from "../components/Navbar";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import Footer from "../components/Footer";

const AddStudent = (props) => {
  const [fullName, setFullName] = useState("");
  const [picture, setPicture] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [prody, setPrody] = useState("");

  const addStudent = (event) => {
    event.preventDefault();
    let faculty = "";

    switch (prody) {
      case "Ekonomi":
      case "Manajemen":
      case "Akuntansi":
        faculty = "Fakultas Ekonomi";
        break;
      case "Administrasi Publik":
      case "Administrasi Bisnis":
      case "Hubungan Internasional":
        faculty = "Fakultas Ilmu Sosial dan Politik";
        break;
      case "Teknik Sipil":
      case "Arsitektur":
        faculty = "Fakultas Teknik";
        break;
      case "Matematika":
      case "Fisika":
      case "Informatika":
        faculty = "Fakultas Teknologi Informasi dan Sains";
        break;
      default:
        break;
    }

    const studentdata = {
      fullname: fullName,
      profilePicture: picture,
      address: address,
      birthDate: date,
      gender: gender,
      phoneNumber: phone,
      faculty,
      programStudy: prody,
    };

    props.createStudent(studentdata);

    setFullName("");
    setDate("");
    setGender("");
    setPrody("");
    setAddress("");
    setPicture("");
    setPhone("");
  };

  return (
    <>
      <NavBar />
      <Box as="section" className="form" id="form">
        <form onSubmit={addStudent} id="form-student">
          <FormControl>
            <FormLabel htmlFor="input-name">Fullname</FormLabel>
            <Input
              type="text"
              data-testid="name"
              id="input-name"
              onChange={({ target }) => setFullName(target.value)}
              value={fullName}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="input-picture">Profile Picture</FormLabel>
            <Input
              type="text"
              id="input-picture"
              data-testid="profilePicture"
              onChange={({ target }) => setPicture(target.value)}
              value={picture}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="input-address">Address</FormLabel>
            <Input
              type="text"
              data-testid="address"
              onChange={({ target }) => setAddress(target.value)}
              value={address}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="input-phone">Phone Number</FormLabel>
            <Input
              type="text"
              id="input-phone"
              data-testid="phoneNumber"
              onChange={({ target }) => setPhone(target.value)}
              value={phone}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="input-date">Birth Date</FormLabel>
            <Input
              type="date"
              id="input-date"
              data-testid="date"
              onChange={({ target }) => setDate(target.value)}
              value={date}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="input-gender">Gender</FormLabel>
            <Select
              id="input-gender"
              data-testid="gender"
              onChange={({ target }) => setGender(target.value)}
              value={gender}
            >
              <option></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="input-prody">Program Study</FormLabel>
            <Select
              data-testid="prody"
              id="input-prody"
              onChange={({ target }) => setPrody(target.value)}
              value={prody}
            >
              <option></option>
              <option value="Ekonomi">Ekonomi</option>
              <option value="Manajemen">Manajemen</option>
              <option value="Akuntansi">Akuntansi</option>
              <option value="Administrasi Publik">Administrasi Publik</option>
              <option value="Administrasi Bisnis">Administrasi Bisnis</option>
              <option value="Hubungan Internasional">
                Hubungan Internasional
              </option>
              <option value="Teknik Sipil">Teknik Sipil</option>
              <option value="Arsitektur">Arsitektur</option>
              <option value="Matematika">Matematika</option>
              <option value="Fisika">Fisika</option>
              <option value="Informatika">Informatika</option>
            </Select>
          </FormControl>
          <Button
            type="submit"
            colorScheme="blue"
            mt={4}
            id="add-btn"
            className="btn-add"
            data-testid="add-btn"
          >
            Add student
          </Button>
        </form>
      </Box>
      <Footer />
    </>
  );
};

export default AddStudent;
