import React from "react";
import "./Style.css";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className='footerSec'>
      <footer
        className='footer'
        data-aos='slide-up'
        data-aos-delay='100'
        data-aos-duration='1200'
        data-aos-once='false'
        data-aos-mirror='true'
      >
        <span className='arrowTop' onClick={scrollTop}>
          <i className='fas fa-angle-double-up'></i>
        </span>
        <div className='row socialFooter'>
          <a
            className='icon'
            rel='noopener noreferrer'
            target='_blank'
            href='https://github.com/arifmohammedpf'
            style={{ margin: "0rem" }}
          >
            <i className='fab fa-github'></i>
          </a>
          <a
            className='icon'
            rel='noopener noreferrer'
            target='_blank'
            href='https://www.linkedin.com/in/arifmohammedpf'
          >
            <i className='fab fa-linkedin'></i>
          </a>
          <a
            className='icon'
            rel='noopener noreferrer'
            target='_blank'
            href='mailto:arifmohammedpf77@gmail.com'
          >
            <i className='fab fa-google'></i>
          </a>
          <a
            className='icon'
            rel='noopener noreferrer'
            target='_blank'
            href='https://www.instagram.com/arifmuhammad_0'
          >
            <i className='fab fa-instagram'></i>
          </a>
        </div>
        <hr width='30%' style={{ borderTop: "2px solid hsla(0,0%,100%,.1)" }} />
        <p className='footerText'>© 2020 - Developed by Arif Mohammed</p>
      </footer>
    </section>
  );
}
export default Footer;
