import React from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import styled from 'styled-components';

const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_h10j54l',
        'template_3gl6dn3',
        form.current,
        'xilHi9DnybYOTEpAq'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('Message sent.');
          alert(`Thank you!  You have successfully submitted your message.`);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <StyledContactForm>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="rounded-lg shadow-sm p-10 bg-slate-50"
      >
        <h3 className="text-[#010c92]">Contact Us</h3>
        <label className="text-[#010c92]">Name :</label>
        <input
          type="text"
          name="user_name"
          placeholder="Enter Your Full name."
        />
        <label className="text-[#010c92]">Email :</label>
        <input
          type="email"
          name="user_email"
          placeholder="Enter Your E-mail."
        />
        <label className="text-[#010c92]">Telephone :</label>
        <input
          type="text"
          name="telephone"
          placeholder="Enter Your Telephone Number."
        />
        <label className="text-[#010c92]">Subject :</label>
        <input type="text" name="subject" placeholder="Enter Subject." />
        <label className="text-[#010c92]">Message :</label>
        <textarea name="message" placeholder="Leave a message." />
        <input type="submit" value="Send Message" />
      </form>
    </StyledContactForm>
  );
};

export default ContactUs;

//Styles  rgb(249, 185, 14);
const StyledContactForm = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 32px auto;
  border: 2px solid #dcdcdc;
  border-radius: 16px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    h3 {
      font-size: 1.5rem;
      font-weight: 300;
      margin: 0 auto;
    }

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      background: #f5f5f5;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 20, 158, 1);
        background: #fff;
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100px;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      background: #f5f5f5;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &: focus {
        border: 2px solid rgba(0, 20, 158, 1);
        background: #fff;
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type='submit'] {
      margin-top: 2rem;
      cursor: pointer;
      background: #000080;
      color: white;
      border: none;
      &: hover {
        background: rgba(00, 00, 180, 1);
      }
    }
  }
`;
