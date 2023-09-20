import React from 'react';
import styles from './Events.module.css';
import rules from './rules.jpg';
// import trophy from './trophy.jpg';
import contacts from './contacts.jpg';
import { FaTimes } from 'react-icons/fa';
import AthleticsPDF from './athletics.pdf';
import BadmintonPDF from './badminton.pdf';
import BasketballPDF from './basketball.pdf';
import BoxingPDF from './boxing.pdf';
import CricketPDF from './cricket.pdf';
import ChessPDF from './chess.pdf';
import CyclingPDF from './CyclingPDF.pdf';
import FootballPDF from './football.pdf';
import HandballPDF from './handball.pdf';
import HockeyPDF from './hockey.pdf';
import KabbadiPDF from './kabbadi.pdf';
import KhoKhoPDF from './khokho.pdf';
import PowerliftingPDF from './powerlifting.pdf';
import SquashPDF from './squash.pdf';
import TableTennisPDF from './tabletennis.pdf';
import TennisPDF from './tennis.pdf';
import VolleyballPDF from './volleyball.pdf';
import WeightliftingPDF from './weightlifting.pdf';
import TaekwondoPDF from './taekwondo.pdf';

// const Aqautics = (props) => {
//   return (
//     <div>
//       <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
//         <div
//           className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
//         >
//           <button
//             className={`${styles.fa} ${styles.fa_times}`}
//             id="0x"
//             onClick={() => props.changeState(false)}
//           >
//             <FaTimes />
//           </button>
//           <div
//             className="row"
//             style={{ marginLeft: '15px', marginRight: '15px' }}
//           >
//             <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
//               <div className={`${styles.event_block}`}>
//                 <div className={`${styles.rule_box}`}>
//                   <div className={`${styles.a_rule}`}>
//                     <div className={`${styles.image}`}>
//                       <img
//                         className={`${styles.img_responsive}`}
//                         src={rules}
//                         alt="img"
//                       />
//                     </div>
//                     <div className={`${styles.info} ${styles.rule}`}>
//                       <h4> Rules </h4>
//                       {/* <a
//                      href={AthleticsPDF}//add aquatics rules pdf
//                         target="_blank"
//                         rel="noreferrer"
//                         className={`${styles.rulebook}`}
//                       >
//                         CLICK HERE FOR RULES
//                       </a>*/}
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
//               <div className={`${styles.event_block}`}>
//                 <div className={`${styles.winner_box} ${styles.info}`}>
//                   <div className={`${styles.image}`}>
//                     <img
//                       className={`${styles.img_responsive}`}
//                       src={trophy}
//                       alt="img"
//                     />
//                   </div>
//                   <div className={`${styles.info}`}>
//                     <h4>Aqautics</h4>
//                     <p>
//                       Coming Soon
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
//               <div className={`${styles.event_block}`}>
//                 <div className={`${styles.contact_box}`}>
//                   <div className={`${styles.image}`}>
//                     <img
//                       className={`${styles.img_responsive}`}
//                       src={contacts}
//                       alt="img"
//                     />
//                   </div>
//                   <div className={`${styles.info}`}>
//                     <h4>Contacts</h4>
//                     <p
//                       className={`${styles.paragraph}`}
//                       style={{ paddingBottom: '10px' }}
//                     >
//                       <b>CAPTAIN</b>
//                       <br />
//                       Rohit Diwakar
//                       <br />
//                       8827687934
//                       <br />
//                       rohit.diwakar.ece19@itbhu.ac.in
//                       <br />
//                       <br />
//                       Anshika Singh <b>(W)</b>
//                       <br />
//                       7985967630
//                       <br />
//                       anshika.singh.phy19@itbhu.ac.in
//                       <br />
//                       <br />
//                       <b>VICE-CAPTAIN</b>
//                       <br />
//                       Gurjot
//                       <br />
//                       7528980380
//                       <br />
//                       gurjot.student.ece19@itbhu.ac.in
//                       <br />
//                       <br />
//                       Shivanjali Verma <b>(W)</b>
//                       <br />
//                       8869038250
//                       <br />
//                       shivanjali.verma.mec19@itbhu.ac.in
//                       <br />
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const Athletics = (props) => {
  return (
    <div>
      <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
        <div
          className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
        >
          <button
            className={`${styles.fa} ${styles.fa_times}`}
            id="0x"
            onClick={() => props.changeState(false)}
          >
            <FaTimes />
          </button>
          <div
            className="row"
            style={{ marginLeft: '15px', marginRight: '15px' }}
          >
            <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
              <div className={`${styles.event_block}`}>
                <div className={`${styles.rule_box}`}>
                  <div className={`${styles.a_rule}`}>
                    <div className={`${styles.image}`}>
                      <img
                        className={`${styles.img_responsive}`}
                        src={rules}
                        alt="img"
                      />
                    </div>
                    <div className={`${styles.info} ${styles.rule}`}>
                      <h4> Rules </h4>
                      <a
                        href={AthleticsPDF}
                        target="_blank"
                        rel="noreferrer"
                        className={`${styles.rulebook}`}
                      >
                        CLICK HERE FOR RULES
                      </a>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
              <div className={`${styles.event_block}`}>
                <div className={`${styles.winner_box} ${styles.info}`}>
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={trophy}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info}`}>
                    <h4>Athletics</h4>
                    <p>
                      Coming Soon
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div> */}

            <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
              <div className={`${styles.event_block}`}>
                <div className={`${styles.contact_box}`}>
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={contacts}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info}`}>
                    <h4>Contacts</h4>
                    <p
                      className={`${styles.paragraph}`}
                      style={{ paddingBottom: '10px' }}
                    >
                      <b>CAPTAIN</b>
                      <br />
                      Tagaram Kiran Kumar
                      <br />
                      7396797341
                      <br />
                      tagaram.kirankumar.cer20@itbhu.ac.in
                      <br />
                      <br />
                      Anchal Dhar <b>(W)</b>
                      <br />
                      8955357448
                      <br />
                      anchal.dhar.mec21@itbhu.ac.in
                      <br />
                      <br />
                      
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Badminton = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={BadmintonPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Badminton</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '20px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Rishi Kaushik<br />
                    8005983306
                    <br />
                    rishi.kaushik.eee21@itbhu.ac.in
                    <br />
                    <br />
                    Manisha Bishnoi  <b>(W)</b>
                    <br />
                    8290451829
                    <br />
                    manisha.bishnoi.mec21@itbhu.ac.in
                    <br />
                    <br />
                    
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Basketball = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={BasketballPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Basketball</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '20px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Pratyaksh Sharma <br />
                    7725911213
                    <br />
                    pratyaksh.sharma.civ21@itbhu.ac.in
                    <br />
                    <br />
                    Chhaya umbarkar  <b>(W)</b>
                    <br />
                    7249784702
                    <br />
                    chhaya.umbarkar.mst20@itbhu.ac.in
                    <br />
                    <br />
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Boxing = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={BoxingPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Boxing</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '12px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Suyash Baloni <br />
                    
                    <br />
                    suyash.baloni.bme20@itbhu.ac.in
                    <br />
                    <br />
                    Saloni Agrawal  <b>(W)</b>
                    <br />
                    9928107374
                    <br />
                    saloni.agrawal.mat20@itbhu.ac.in
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Chess = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={ChessPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Chess</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '12px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Harshraj Joshi  <br />
                    
                    <br />
                    harshraj.joshi.che21@itbhu.ac.in
                    <br />
                    <br />
                    
                    {/* <br /> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cricket = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={CricketPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Cricket</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '15px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Jai Patel <br />
                    7023064941
                    <br />
                    
                    <br />
                    <br />
                    
                    <br />
                    {/* <br /> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cycling = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={CyclingPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Cycling</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p className={`${styles.paragraph}`} style={{ paddingBottom: '15px' }}>
                    <b>CAPTAIN</b>
                    <br />
                    Abhishek 
                    <br />
                    9417044824
                    <br />
                    abhishek.student.cer20@iitbhu.ac.in
                    <br />
                    <br />
                    
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Football = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={FootballPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Football</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '15px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Soham Nandy <br />
                    9549847995
                    <br />
                    soham.nandy.cd.mst21@itbhu.ac.in
                    <br />
                    <br />
                    
                    <br />
                    <br />
                    {/* <br /> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Handball = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={HandballPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Handball</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph} ${styles.paragraph1}`}
                    style={{ paddingBottom: '15px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Patel Avi  <br />
                    6352926616
                    <br />
                    patelavi.nihilkumar.mec21@itbhu.ac.in
                    <br />
                    <br />
                    
                    <br />
                    {/* <br /> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hockey = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={HockeyPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Hockey</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '20px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Abhishek Meena <br />
                    8840041931
                    <br />
                    abhishek.meena.mec19@itbhu.ac.in
                    <br />
                    <br />
                    
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Kabbadi = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={KabbadiPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Kabaddi</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '12px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Peddinti Sai siva kumar  <br />
                    7569965571
                    <br />
                    peddinti.saiskumar.cer19@itbhu.ac.in
                    <br />
                    <br />
                    Kodurupaka Mallika <b>(W)</b>
                    <br />
                    6302471817
                    <br />
                    kodurupaka.mallika.mec21@itbhu.ac.in
                    <br />
                    <br />
                    <br />
                    {/* <br /> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Khokho = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={KhoKhoPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Kho Kho</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '10px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    yandapalli gireesh reddy
                    <br />
                    6303606994
                    <br />
                    ygireesh.reddy.eee21@itbhu.ac.in
                    <br />
                    <br />
                    Saloni Sharma   <b>(W)</b>
                    <br />
                    8392940227
                    <br />
                    saloni.sharma.civ22@itbhu.ac.in
                    <br />
                    <br />
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Powerlifting = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={PowerliftingPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Powerlifting</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '12px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Dhahal Brahma
                    <br />
                    9101401340
                    <br />
                    dhahal.brahma.cer19@itbhu.ac.in
                    <br />
                    <br />
                    
                    <br />
                    <br />
                    {/* <br /> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Squash = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={SquashPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Squash</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '12px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Hemank Vats <br />
                    
                    <br />
                    hemank.vats.apd20@itbhu.ac.in
                    <br />
                    <br />
                    <br />
                    Toko yanu   <b>(W)</b>
                    <br />
                    8258872098
                    <br />
                    saloni.sharma.civ22@itbhu.ac.in
                    <br />
                    
                    <br />
                    {/* <br /> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TableTennis = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={TableTennisPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Table Tennis</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '12px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Yashwardhan Sable  <br />
                    8839679648
                    <br />
                    yashwardhan.sable.phy20@itbhu.ac.in
                    <br />
                    <br />
                    Guddaji Sri Prada <b>(W)</b>
                    
                    guddaji.sriprada.cse20@itbhu.ac.in
                    <br />
                    <br />
                    <br />
                    {/* <br /> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Taekwondo = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={TaekwondoPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Taekwondo</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '12px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Divyanshu Bharti <br />
                    
                    <br />
                    divyanshu.bharti.chy21@itbhu.ac.in
                    <br />
                    <br />
                    Sameeksha Murdia <b>(W)</b>
                    <br />
                    9660339180
                    <br />
                    sameeksha.murdia.phy20@itbhu.ac.in
                    <br />
                    <br />
                    <br />
                    {/* <br /> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Tennis = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={TennisPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Tennis</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '12px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Trinabh Vashistha  <br />
                    8502959213
                    <br />
                    trinabh.vashistha.min21@itbhu.ac.in
                    <br />
                    <br />
                    Pranjali Gupta <b>(W)</b>
                    <br />
                    
                    <br />
                    pranjali.gupta.mst19@itbhu.ac.in
                    <br />
                    <br />
                    <br />
                    {/* <br /> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Volleyball = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={VolleyballPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Volleyball</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '10px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Pawan Kumar <br />
                    9110142092
                    <br />
                    pawan.kumar.ece20@itbhu.ac.in <br />
                    <br />
                    Boddu Bhavana <b>(W)</b>
                    <br />
                    9390085089
                    <br />
                    boddu.bhavana.mec20@itbhu.ac.in
                    <br />
                    <br />
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WeightLifting = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={WeightliftingPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Weight Lifting</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph} ${styles.paragraph1}`}
                    style={{ paddingBottom: '15px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Harsh Agrawal <br />
                    9759877847
                    <br />
                    harshagrawal789789@gmail.com
                    <br />
                    <br />
                    
                    <br />
                    <br />
                    {/* <br /> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export {
  // Aqautics,
  Athletics,
  Badminton,
  Basketball,
  Boxing,
  // Carrom,
  Chess,
  Cricket,
  Cycling,
  Football,
  Handball,
  Hockey,
  Kabbadi,
  Khokho,
  Powerlifting,
  Squash,
  TableTennis,
  Taekwondo,
  Tennis,
  Volleyball,
  WeightLifting,
};
