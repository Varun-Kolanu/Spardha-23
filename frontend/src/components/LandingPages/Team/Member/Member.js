import React from 'react';
import styles from './Member.module.css';
import { FaEnvelope, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';

function Member({ memberData }) {
  const { name, post, phone, id, mail, image, linkedin } = memberData;
  return (
    <>
      <div
        className={`${styles.mobile} col-lg-3 col-md-3 col-sm-4 col-6 px-1 py-1`}
      >
        <div className={`${styles.staff} justify-content-center`}>
          <img
            src={`${image}`}
            alt={`${name}`}
            className={`${styles.img} mb-2 ms-auto`}
            width="200px"
          />
          <div className="info text-center">
            <h3 className={`p-0 m-0 text-uppercase ${styles.head}`}>

              <div>
                {name} <br />
              </div>
              <b>{post}</b>
            </h3>
            <span className="position p-0 m-0">
              <a href={`tel:${phone}`} className={styles.links}>
                {phone}
              </a>
            </span>
            <div style={{
              display: "inline"
            }}>
              <a
                href={id}
                className={styles.links}
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagramSquare />
              </a>
              <a
                href={`mailto:${mail}`}
                className={styles.links}
                target="_blank"
                rel="noreferrer"
              >
                <FaEnvelope />
              </a>
              <a
                href={linkedin}
                className={styles.links}
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Member;
