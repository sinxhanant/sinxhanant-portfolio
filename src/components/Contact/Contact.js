import React, {useState} from "react";
import styled from "styled-components";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {ToastContainer,toast} from "react-toastify";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;


const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`;

export default function Contact() {
   //hooks

   const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
}


   const [open, setOpen] = React.useState(false);
   const form = useRef();
   const navigate = useNavigate()

   const [values, setValues ] = useState({
       email: "",
       name: "",
       message: "",
       subject: "",
   });

   const [error, setError ] = useState({
    email: "",
    name: "",
    message: "",
    subject: "",

});

const [ resultmsg, setResultmsg ] = useState({
result: "",

})

   
   const handleChange = (event) => {
    setValues({...values, [event.target.name]: event.target.value});
};
  
const handlenoError = (event) => {
  setError({...error, password: "", age: "", email: "", name: "", country: "", result: ""});
};

const handleValidations = (event) => {
  const { email, name, subject, message} = values;
  if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      setError({ ...error, email: "Email is in an invalid format" });
      console.log(error.email);
      return false;
  }
  else if (name == "") {
      setError({ ...error, name: "Enter Name" });
      console.log(error.name);
      return false;
  }
  else if (subject == "") {
      setError({ ...error, subject: "Enter Subject" });
      console.log(error.subject);
      return false;
  }
  else if (message == "") {
    setError({ ...error, message: "Enter Message" });
    console.log(error.message);
    return false;
}

 
  
 
 
 
 
  
  handlenoError()
  return true;
}

   const handleSubmit = async (e) => {
    e.preventDefault();
    if(handleValidations()){
   
     const {email, name, subject, message } = values;
     await axios.post("http://localhost:3001/sendMsg", {name, email, message, name, subject})
     .then(result => {
         navigate('/')
         console.log(result)})
     .catch(err => console.log(err))
     setResultmsg({ ...resultmsg, result: "Message Sent Succesfully" });
      console.log(error.subject);
      return false;
    
    }

   
   };

  return (
    <div>
      <Container>
        <Wrapper>
        <Title>Contact</Title>
    

        <ContactForm ref={form} onSubmit={(event) => handleSubmit(event)} >
            <ContactTitle>Send a Message</ContactTitle>

            <ContactInput placeholder="Your Email" name="email" onChange={(e) => handleChange(e)}/>
            <p style={{
              color: "red",
              margin: "0",
              fontSize: "14px",


            }}>{error.email}</p>
            <ContactInput placeholder="Your Name" name="name" onChange={(e) => handleChange(e)}/>
            <p style={{
              color: "red",
              margin: "0",
              fontSize: "14px",


            }}>{error.name}</p>
            <ContactInput placeholder="Subject" name="subject" onChange={(e) => handleChange(e)}/>
            <p style={{
              color: "red",
              margin: "0",
              fontSize: "14px",


            }}>{error.subject}</p>
            <ContactInputMessage placeholder="Message" name="message" onChange={(e) => handleChange(e)}/>
            <p style={{
              color: "red",
              margin: "0",
              fontSize: "14px",


            }}>{error.message}</p>
            <ContactButton type="submit" value="Send" />
            <p style={{
              color: "green",
              margin: "0",
              fontSize: "14px",


            }}>{resultmsg.result}</p>
            </ContactForm>

           
            </Wrapper>
      </Container>
    </div>
  )
}
