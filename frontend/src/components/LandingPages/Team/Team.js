import React, { useState } from 'react';
import styles from './Team.module.css';
import Carousel from '../Home/Carousel/Carouselhp';
import { data, scopes } from './TeamData';
import Member from "./Member/Member.js"


function Team() {
  console.log(data)
  const [cardData, setCardData] = useState(data["All"]);
  const [activeTab, setActiveTab] = useState("All");

  return (

    <>
      <Carousel />
      <section id="team" className={styles['ftco-section']}>
        <div className={styles.container}>
          <h3><u>Our Team</u></h3>
          <div className={styles.buttons}>
            {
              scopes.map(scope => {
                return <button className={styles.click} key={scope} style={{ color: activeTab === scope ? 'white' : null, backgroundColor: activeTab === scope ? '#760e53' : null }} onClick={() => {
                  setCardData(data[scope])
                  setActiveTab(scope);
                }}>{scope}</button>
              })
            }
          </div>
          <div className={styles.cards}>
            {
              cardData.map(personInfo => {
                return <Member memberData={personInfo}></Member>
              })
            }
          </div>
        </div>
      </section>
    </>
  );
}
export default Team;
