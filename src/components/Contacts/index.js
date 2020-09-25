import React from 'react';
import { Link } from 'react-router-dom';
import { GrLinkedin, GrGithub } from 'react-icons/gr';
import { FaTwitch } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import Header from '../Header';
import Footer from '../Footer';
import './styles.scss';

const Contact = () => (

  <div className="contact-container">
    <Header />
    <div className="contact-container-body">
      <h1 className="contact-container-body-title">Contacts</h1>
      <div className="contact-container-body-card">
        <div className="card">
          <div className="photo">
            <img src="https://cdn.discordapp.com/attachments/712327067873837057/751092373605318776/pierre.jpg" alt="Pierre Cahuzac" />
          </div>
          <div className="text">
            <p className="name">Pierre Cahuzac</p>
            <p className="function"> Product Owner / Dev Front React</p>
            <div className="socials-networks">
              <div className="div-icon">
                <span className="icon">
                  <a href="https://www.linkedin.com/in/pierre-cahuzac-60b8491a4/">
                    <GrLinkedin />
                  </a>
                </span>
                <span className="icon">
                  <a href="https://github.com/inflames32">
                    <GrGithub />
                  </a>
                </span>
                <span className="icon">
                  <a href="https://www.twitch.tv/badtupeupastest">
                    <FaTwitch />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="photo">
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFRT4sAbp69FQ/profile-displayphoto-shrink_800_800/0?e=1604534400&v=beta&t=56OjFSttDcshjsjHUCCPlnfzkPh9dAYEdwA5aKrV3tI" alt="Jason Sejean" />
          </div>
          <div className="text">
            <p className="name">Jason Sejean</p>
            <p className="function">Git Master / Dev Front React</p>
            <div className="socials-networks">
              <div className="div-icon">
                <span className="icon">
                  <a href="https://www.linkedin.com/in/jason-sejean-b1b709169/">
                    <GrLinkedin />
                  </a>
                </span>
                <span className="icon">
                  <a href="https://github.com/BadTuxii">
                    <GrGithub />
                  </a>
                </span>
                <span className="icon">
                  <a href="">
                    <FaTwitch />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="photo">
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGVO0ocEN2GFw/profile-displayphoto-shrink_800_800/0?e=1604534400&v=beta&t=mGuqs_msprBYgys789Nr1mpBmjH8eRL0wabnVpS0GqI" alt="Quentin Tavernari" />
          </div>
          <div className="text">
            <p className="name">Quentin Tavernari</p>
            <p className="function">Lead Dev Front / Dev Front React</p>
            <div className="socials-networks">
              <div className="div-icon">
                <span className="icon">
                  <a href="https://www.linkedin.com/in/quentin-tavernari/">
                    <GrLinkedin />
                  </a>
                </span>
                <span className="icon">
                  <a href="https://github.com/QuentinTavernari">
                    <GrGithub />
                  </a>
                </span>
                <span className="icon">
                  <a href="">
                    <FaTwitch />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="photo">
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQHNB5SWhsvKxw/profile-displayphoto-shrink_800_800/0?e=1604534400&v=beta&t=Bth1wQZgCCIjZgYsSwfuwEFVLymybz1XKFEhoIR0O3A" alt="Romain Geneau" />
          </div>
          <div className="text">
            <p className="name">Romain Geneau</p>
            <p className="function">Lead Dev Back / Dev Back NodeJs</p>
            <div className="socials-networks">
              <div className="div-icon">
                <span className="icon">
                  <a href="https://www.linkedin.com/in/romain-geneau-4bb5a01a5/">
                    <GrLinkedin />
                  </a>
                </span>
                <span className="icon">
                  <a href="https://github.com/Birdy87">
                    <GrGithub />
                  </a>
                </span>
                <span className="icon">
                  <a href="https://www.twitch.tv/birdy_87">
                    <FaTwitch />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Contact;
