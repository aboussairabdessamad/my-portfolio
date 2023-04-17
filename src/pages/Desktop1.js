import React, { useState, useRef } from "react";
import styles from "./Desktop1.module.css";
import cvImage from "./cv.jpg";

const Desktop1 = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showCV, setShowCV] = useState(false);
  const helloThereRef = useRef(null);

  const ContactModal = () => {
    const closeModal = () => setModalIsOpen(false);

    const handleSubmit = async (event) => {
      event.preventDefault();

      const auth = new OAuth2(
        "507081452887-t31tq7onvupeoc6kdf03j22k7mdkg1q2.apps.googleusercontent.com",
        "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",
        "http://localhost:3000"
      );
      auth.setCredentials({
        access_token:
          "ya29.a0Ael9sCNrEN-lwlAO2P2ID8stE4k_JROlhUU3xdCDtj2XmPnJ5ca6-VPIVSIkjnfjsNvyf04jGyC04uvpuBu7S_UquUyZ-J4LkQe4MDE15UsZX03lS3iTKYpQjyonzXZSsUHEZL3rjmJncvP8snnCYTb5F_fxaCgYKAVISARISFQF4udJhbjUIZ5o9UtaMGZnaHMPvFA0163",
        refresh_token:
          "1//048Z0QOtQeomACgYIARAAGAQSNwF-L9Ir0Wbb6qDilYjyac_bOQNjJRFuyuIk1tgAwCZ-hz_DOUVHaCfKMC7s-7_8aoq-JGNT5No",
      });

      const gmail = google.gmail({ version: "v1", auth });
      const name = event.target.name.value;
      const email = event.target.email.value;
      const message = event.target.message.value;
      const content = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
      const messageParts = [
        "From: abdaboussir@gmail.com",
        "To: DESTINATION_EMAIL",
        "Content-Type: text/html; charset=utf-8",
        "MIME-Version: 1.0",
        `Subject: New message from ${name}`,
        "",
        content,
      ];
      const messageRaw = Buffer.from(messageParts.join("\n")).toString(
        "base64"
      );

      try {
        const res = await gmail.users.messages.send({
          userId: "me",
          requestBody: {
            raw: messageRaw,
          },
        });
        console.log(res.data);
        closeModal();
      } catch (error) {
        console.error(error);
      }
    };
    return (
      <div className={styles.modal} onClick={closeModal}>
        <div
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <span className={styles.close} onClick={closeModal}>
            &times;
          </span>
          <h2>Get in Touch</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input name="name" type="text" id="name" />

            <label htmlFor="email">Email:</label>
            <input name="email" type="email" id="email" />

            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  };
  const handleAboutMeClick = () => {
    window.scrollTo({
      top: helloThereRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/YOUR_INSTAGRAM_USERNAME/", "_blank");
  };
  const handleGithubClick = () => {
    window.open("https://www.instagram.com/YOUR_INSTAGRAM_USERNAME/", "_blank");
  };
  const handleFacebookClick = () => {
    window.open("https://www.instagram.com/YOUR_INSTAGRAM_USERNAME/", "_blank");
  };

  return (
    <div className={styles.desktop1}>
      <div className={styles.desktop1Child} />
      <img className={styles.copy11} alt="" src="/copy-1-1@2x.png" />
      <div className={styles.desktop1Item} />
      <div className={styles.desktop1Inner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.home} onClick={() => window.location.reload()}>
        Home
      </div>
      <div className={styles.aboutMe} onClick={handleAboutMeClick}>
        About Me
      </div>
      <div className={styles.eng}>ENG</div>
      <div className={styles.cv} onClick={() => setShowCV(true)}>
        CV
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <img
        className={styles.vectorIcon1}
        alt=""
        src="/vector1.svg"
        onClick={handleFacebookClick}
      />
      <img
        className={styles.vectorIcon2}
        alt=""
        src="/vector2.svg"
        onClick={handleGithubClick}
      />
      <div className={styles.hiImAbdessamadContainer}>
        <span className={styles.hiImAbdessamadContainer1}>
          <p className={styles.hi}>
            <span>Hi</span>
            <span className={styles.span}>,</span>
          </p>
          <p className={styles.imAbdessamadAboussair}>
            <span>
              <span className={styles.im}>{`I’m `}</span>
              <span>Abdessamad Aboussair</span>
            </span>
          </p>
        </span>
      </div>
      <div className={styles.aa}>AA</div>
      <img
        className={styles.vectorIcon3}
        alt=""
        src="/vector3.svg"
        onClick={handleInstagramClick}
      />
      <div className={styles.webDeveloper}>WEB DEVELOPER</div>
      <div className={styles.desktop1Child1} />
      <button onClick={() => setModalIsOpen(true)}>
        <div className={styles.getInTouch}>GET IN TOUCH</div>
      </button>
      <div ref={helloThereRef} className={styles.helloThereMy}>
        Hello there! My name is Abdessamad, and I am a beginner web developer
        currently studying computer science at EFET School. I am passionate
        about creating beautiful and functional websites and applications that
        provide a seamless user experience. Currently, I am interning at
        FikraLabs, where I am honing my skills and gaining valuable experience
        in the industry. I am always eager to learn and grow as a developer and
        look forward to what the future holds in this exciting field.
      </div>
      {modalIsOpen && <ContactModal />}
      {showCV && (
        <div className={styles.modal} onClick={() => setShowCV(false)}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={() => setShowCV(false)}>
              &times;
            </span>
            <img className={styles.cvImage} src={cvImage} alt="CV" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Desktop1;
