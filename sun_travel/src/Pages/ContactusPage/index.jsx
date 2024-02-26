import React, { useState } from "react";
import styled from "styled-components";

function ContactUsPage({ modal, setModal }) {
  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    const { name, email, phoneNumber, message } = formData;
  
    // Construct the WhatsApp URL with the form data
    const whatsappURL = `https://web.whatsapp.com/8075529059?text=Name:%20${name}%0AEmail:%20${email}%0APhone%20Number:%20${phoneNumber}%0AMessage:%20${message}`;
  
    // Open the WhatsApp URL in a new tab
    window.open(whatsappURL);
  
    // Close the modal
    setModal(false);
  };
  return (
    <Wrapper>
      {modal && (
        <ModalWrapper>
          <ModalOverlay onClick={toggleModal} />
          <ModalContent>
            <ModalHeader>Contact Us</ModalHeader>
            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              <Textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              ></Textarea>
              <SubmitButton type="submit">Submit</SubmitButton>
            </Form>
            <CloseButton onClick={toggleModal}>Close</CloseButton>
          </ModalContent>
        </ModalWrapper>
      )}
    </Wrapper>
  );
}

export default ContactUsPage;

const Wrapper = styled.div``;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  width: 400px;
  max-width: 90%;
  z-index: 11;
`;

const ModalHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form``;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: #666;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
`;

