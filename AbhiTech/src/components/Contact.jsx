import React from 'react'
import styled from 'styled-components'

export default function Contact() {
  const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;

  .container {
    margin-top: 6rem;
    text-align: center;

    .contact-form {
      max-width: 50rem;
      margin:auto;

      .contacts-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({theme})=> theme.colors.white};
            border: ${({theme})=> theme.colors.btn};
            color: ${({theme})=> theme.colors.btn};
            transforn: scale(0.9);
          }
        }
      }
    }
  }
  `;


  return (
    <Wrapper >
      <h2 className="common-heading">Feel free to Contact us</h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224568.30237834237!2d76.84966000838759!3d28.422885860295864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1664723130022!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/moqbwewo" method='POST' className='contacts-inputs'>
            <input type="text" name="username" placeholder='username' autoComplete='off' required />
            <input type="email" name="email" placeholder='email' autoComplete='off' required />
            <textarea name='message' cols="30" rows="6" autoComplete='off' required></textarea>
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  )
}
