import React from 'react';
import styles from './Events.module.css';
// import rules from './rules.jpg';
// import trophy from './trophy.jpg';
// import contacts from './contacts.jpg';
import { FaTimes } from 'react-icons/fa';
import athletics from './image/athletics.png';
// import athleticshover from './image/athleticshover.png';
import basketball from './image/basketball.png';
// import basketballhover from './image/basketballhover.png';
import badminton from './image/badminton.png';
// import badmintonhover from './image/badmintonhover.png';
import boxing from './image/boxing.png';
// import boxinghover from './image/boxinghover.png';
// import carrom from './carrom.png'
import chess from './image/chess.png';
// import chesshover from './image/chesshover.png';
import cricket from './image/cricket.png';
// import crickethover from './image/crickethover.png';
import football from './image/football.png';
// import footballhover from './image/footballhover.png';
import handball from './image/handball.png';
// import handballhover from './image/handballhover.png';
// import question from './question.png';
import hockey from './image/hockey.png';
// import hockeyhover from './image/hockeyhover.png';
import kabaddi from './image/kabaddi.png';
// import kabaddihover from './image/kabaddihover.png';
import khokho from './image/kho-kho.png';
// import khokhohover from './image/kho-khohover.png';
import cycling from './image/cycling.png';
// import cyclinghover from './image/cyclinghover.png';
import squash from './image/squash.png';
// import squashhover from './image/squashhover.png';
import powerlifting from './image/powerlifting.png';
// import powerliftinghover from './image/powerliftinghover.png';
import tabletennis from './image/table-tennis.png';
// import tabletennishover from './image/tabletennishover.png';
import taekwondo from './image/taekwondo.png';
// import taekwondohover from './image/taekwondohover.png';
import tennis from './image/tennis.png';
// import tennishover from './image/tennishover.png';
import volleyball from './image/volleyball.png';
// import volleyballhover from './image/volleyballhover.png';
import weightlifting from './image/weightlifting.png';
// import weightliftinghover from './image/weightliftinghover.png';
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
// import { Link } from 'react-router-dom';

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
    <div className={`${styles.main_event_div}`}>
      {/* <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}> */}
      <div className={`${styles.events_main_block}`}>
        <div className={`${styles.events_main_block_div1}`} >
          <div
            style={{
              right: "5%",
              top: "5%",
              position: "absolute"
            }}
          >
            <button
              className={`${styles.fa} ${styles.fa_times}`}
              id="0x"
              onClick={() => props.changeState(false)}
            >
              <FaTimes />
            </button>
          </div>
          <div className={`${styles.event_white_block}`} />
          <div className={`${styles.event_line_right}`} />
          <div className={`${styles.event_line_left}`} />

          <div className={`${styles.evnet_content_box}`}>
            <div className={`${styles.event_show_block1}`}>
              <div className={`${styles.main_header}`}>
                CAPTAIN
              </div>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  left: 0,
                  top: "20%",
                  position: "absolute"
                }}
              >
                <span className={`${styles.content_header}`}>
                  Tagaram Kiran Kumar
                  <br />
                </span>
                <span className={`${styles.content}`}>
                  7396797341
                  <br />
                  tagaram.kirankumar.cer20@itbhu.ac.in
                  <br />
                  <br />
                </span>
                <span className={`${styles.content_header}`}
                >
                  Anchal Dhar (W)
                  <br />
                </span>
                <span className={`${styles.content}`}>
                  8955357448
                  <br />
                  anchal.dhar.mec21@itbhu.ac.in
                </span>
              </div>

              {/* <div
        style={{
          width: "761.62px",
          height: "72.82px",
          left: 0,
          top: "127.18px",
          position: "absolute"
        }}
      >
        
      </div> */}
            </div>
            <div className={`${styles.event_show_block2}`}>
              {/* <div
        style={{
          width: 430,
          height: "124.87px",
          left: 0,
          top: 0,
          position: "absolute"
        }}
      > */}
              <div className={`${styles.main_header}`}>
                VICE-CAPTAIN
              </div>
              <div
                style={{
                  width: "50%",
                  height: "100%",
                  left: 0,
                  top: "20%",
                  position: "absolute"
                }}
              >
                <span className={`${styles.content_header}`}
                >
                  Gurjot
                  <br />
                </span>
                <span className={`${styles.content}`}>
                  7528980380
                  <br />
                  gurjot.student.ece19@itbhu.ac.in<br /><br />
                </span>

                <span className={`${styles.content_header}`}
                >
                  Shivanjali Verma(W)
                  <br />
                </span>
                <span className={`${styles.content}`}>
                  8869038250
                  <br />
                  shivanjali.verma.mec19@itbhu.ac.in
                </span>
                {/* </div> */}
              </div>
              {/* <div
        style={{
          width: 376,
          height: "72.08px",
          left: 0,
          top: "127.92px",
          position: "absolute"
        }}
      >
        
      </div> */}
            </div></div>
          <div className={`${styles.event_box_header}`}
          >
            Contacts:
          </div>
          <img className={`${styles.event_image}`} alt=" "
            // style={{ width: 90, height: 90, left: 48, top: 28, position: "absolute" }}
            src={athletics}
          />
          <div className={`${styles.event_box_name}`}
          >
            Athletics
          </div>
          <div className={`${styles.rule_book_box}`}
          >
            <div
              style={{
                color: "#760E53",
                fontSize: 18,
                fontFamily: "Poppins",
                fontWeight: 600,
                wordWrap: "break-word"
              }}
            >
              <a href={AthleticsPDF}
                target="_blank"
                rel="noreferrer"
                className={`${styles.rulebook}`}
              >
                View Rulebook
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <div
          className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
        >
          <button
            className={`${styles.fa} ${styles.fa_times}`}
            id="0x"
            onClick={() => props.changeState(false)}
          >
            <FaTimes />
          </button>
          <div className={`${styles.click_block}`} style={{height:"40%", width:"100%"}}>
          <div
        style={{
          width: "500.32px",
          height: "28.72px",
          left: 0,
          top: 0,
          position: "absolute",
          color: "black",
          fontSize: 18,
          fontFamily: "Poppins",
          fontWeight: 700,
          lineHeight: 25,
          wordWrap: "break-word"
        }}
      >
        CAPTAIN
      </div>



          </div> */}
      {/* <div
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

      {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
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
          </div> */}
      {/* </div>
      </div> */}
    </div>
    //     <div
    //   style={{
    //     width: "100%",
    //     height: "100%",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     display: "inline-flex"
    //   }}
    // >
    // <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
    // <div
    //         className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
    //       >
    //   <div className={`${styles.fa} ${styles.fa_times}`}>
    //             <button
    //               className={`${styles.fa} ${styles.fa_times}`}
    //               id="0x"
    //               onClick={() => props.changeState(false)}
    //             >
    //               <FaTimes />
    //             </button>
    //             <div
    //           className="row"
    //           style={{ marginLeft: 'auto', marginRight: 'auto' }}
    //         ></div>
    //   </div></div></div>

    // </div>

  );
};

const Badminton = (props) => {
  return (
    <div className={`${styles.main_event_div}`}>
      {/* <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}> */}
      <div className={`${styles.events_main_block}`}>
        <div className={`${styles.events_main_block_div1}`} >
          <div
            style={{
              right: "5%",
              top: "5%",
              position: "absolute"
            }}
          >
            <button
              className={`${styles.fa} ${styles.fa_times}`}
              id="0x"
              onClick={() => props.changeState(false)}
            >
              <FaTimes />
            </button>
          </div>
          <div className={`${styles.event_white_block}`} />
          <div className={`${styles.event_line_right}`} />
          <div className={`${styles.event_line_left}`} />

          <div className={`${styles.evnet_content_box}`}>
            <div className={`${styles.event_show_block1}`}>
              <div className={`${styles.main_header}`}>
                CAPTAIN
              </div>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  left: 0,
                  top: "20%",
                  position: "absolute"
                }}
              >
                <span className={`${styles.content_header}`}>
                  Rishi Kaushik <br />

                </span>
                <span className={`${styles.content}`}>
                  8005983306
                  <br />
                  rishi.kaushik.eee21@itbhu.ac.in
                  <br />
                  <br />
                </span>
                <span className={`${styles.content_header}`}
                >
                  Manisha Bishnoi (W)
                  <br />
                </span>
                <span className={`${styles.content}`}>
                  8290451829
                  <br />
                  manisha.bishnoi.mec21@itbhu.ac.in

                </span>
              </div>

              {/* <div
        style={{
          width: "761.62px",
          height: "72.82px",
          left: 0,
          top: "127.18px",
          position: "absolute"
        }}
      >
        
      </div> */}
            </div>
            <div className={`${styles.event_show_block2}`}>
              {/* <div
        style={{
          width: 430,
          height: "124.87px",
          left: 0,
          top: 0,
          position: "absolute"
        }}
      > */}
              <div className={`${styles.main_header}`}>
                VICE-CAPTAIN
              </div>
              <div
                style={{
                  width: "50%",
                  height: "100%",
                  left: 0,
                  top: "20%",
                  position: "absolute"
                }}
              >
                <span className={`${styles.content_header}`}
                >
                  Kushagra Yadav
                  <br />
                </span>
                <span className={`${styles.content}`}>
                  8285600365
                  <br />
                  kushagra.yadav.ece19@itbhu.ac.in<br /><br />
                </span>


                {/* </div> */}
              </div>
              {/* <div
        style={{
          width: 376,
          height: "72.08px",
          left: 0,
          top: "127.92px",
          position: "absolute"
        }}
      >
        
      </div> */}
            </div></div>
          <div className={`${styles.event_box_header}`}
          >
            Contacts:
          </div>
          <img className={`${styles.event_image}`} alt=" "
            // style={{ width: 90, height: 90, left: 48, top: 28, position: "absolute" }}
            src={badminton}
          />
          <div className={`${styles.event_box_name}`}
          >
            Badminton
          </div>
          <div className={`${styles.rule_book_box}`}
          >
            <div
              style={{
                color: "#760E53",
                fontSize: 18,
                fontFamily: "Poppins",
                fontWeight: 600,
                wordWrap: "break-word"
              }}
            >
              <a href={BadmintonPDF}
                target="_blank"
                rel="noreferrer"
                className={`${styles.rulebook}`}
              >
                View Rulebook
              </a>
            </div>
          </div>
        </div>
      </div></div>



    // <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
    //   <div
    //     className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
    //   >
    //     <button
    //       className={`${styles.fa} ${styles.fa_times}`}
    //       id="0x"
    //       onClick={() => props.changeState(false)}
    //     >
    //       <FaTimes />
    //     </button>
    //     <div
    //       className="row"
    //       style={{ marginLeft: 'auto', marginRight: 'auto' }}
    //     >
    //       <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.rule_box}`}>
    //             <div className={`${styles.a_rule}`}>
    //               {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
    //               <div className={`${styles.image}`}>
    //                 <img
    //                   className={`${styles.img_responsive}`}
    //                   src={rules}
    //                   alt="img"
    //                 />
    //               </div>
    //               <div className={`${styles.info} ${styles.rule}`}>
    //                 <h4> Rules </h4>
    //                 <a
    //                   href={BadmintonPDF}
    //                   target="_blank"
    //                   rel="noreferrer"
    //                   className={`${styles.rulebook}`}
    //                 >
    //                   CLICK HERE FOR RULES
    //                 </a>
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.winner_box} ${styles.info}`}>
    //             <div className={`${styles.image}`}>
    //               <img
    //                 className={`${styles.img_responsive}`}
    //                 src={trophy}
    //                 alt="img"
    //               />
    //             </div>
    //             <div className={`${styles.info}`}>
    //               <h4>Badminton</h4>
    //               <p>
    //                 Coming Soon
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div> */}

    //       <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.contact_box}`}>
    //             <div className={`${styles.image}`}>
    //               <img
    //                 className={`${styles.img_responsive}`}
    //                 src={contacts}
    //                 alt="img"
    //               />
    //             </div>
    //             <div className={`${styles.info}`}>
    //               <h4>Contacts</h4>
    //               <p
    //                 className={`${styles.paragraph}`}
    //                 style={{ paddingBottom: '20px' }}
    //               >
    //                 <b>CAPTAIN</b>
    //                 <br />
    //                 Sayan Ghosh <br />
    //                 7602961003
    //                 <br />
    //                 sayan.ghosh.cd.mat19@itbhu.ac.in
    //                 <br />
    //                 <br />
    //                 Anshul Sahai <b>(W)</b>
    //                 <br />
    //                 91668498500
    //                 <br />
    //                 anshul.sahai.che19@itbhu.ac.in
    //                 <br />
    //                 <br />
    //                 <b>VICE-CAPTAIN</b>
    //                 <br />
    //                 Kushagra Yadav
    //                 <br />
    //                 8285600365
    //                 <br />
    //                 kushagra.yadav.ece19@itbhu.ac.in
    //                 <br />
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

const Basketball = (props) => {
  return (
    <div className={`${styles.main_event_div}`}>
      {/* <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}> */}
      <div className={`${styles.events_main_block}`}>
        <div className={`${styles.events_main_block_div1}`} >
          <div
            style={{
              right: "5%",
              top: "5%",
              position: "absolute"
            }}
          >
            <button
              className={`${styles.fa} ${styles.fa_times}`}
              id="0x"
              onClick={() => props.changeState(false)}
            >
              <FaTimes />
            </button>
          </div>
          <div className={`${styles.event_white_block}`} />
          <div className={`${styles.event_line_right}`} />
          <div className={`${styles.event_line_left}`} />

          <div className={`${styles.evnet_content_box}`}>
            <div className={`${styles.event_show_block1}`}>
              <div className={`${styles.main_header}`}>
                CAPTAIN
              </div>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  left: 0,
                  top: "20%",
                  position: "absolute"
                }}
              >
                <span className={`${styles.content_header}`}>
                  Pratyaksh Sharma <br />

                </span>
                <span className={`${styles.content}`}>
                  7725911213
                  <br />
                  pratyaksh.sharma.civ21@itbhu.ac.in
                  <br />
                  <br />
                </span>
                <span className={`${styles.content_header}`}
                >
                  Chhaya umbarkar (W)
                  <br />
                </span>
                <span className={`${styles.content}`}>
                  7249784702
                  <br />
                  chhaya.umbarkar.mst20@itbhu.ac.in
                </span>
              </div>

              {/* <div
        style={{
          width: "761.62px",
          height: "72.82px",
          left: 0,
          top: "127.18px",
          position: "absolute"
        }}
      >
        
      </div> */}
            </div>
            <div className={`${styles.event_show_block2}`}>
              {/* <div
        style={{
          width: 430,
          height: "124.87px",
          left: 0,
          top: 0,
          position: "absolute"
        }}
      > */}
              <div className={`${styles.main_header}`}>
                VICE-CAPTAIN
              </div>
              <div
                style={{
                  width: "50%",
                  height: "100%",
                  left: 0,
                  top: "20%",
                  position: "absolute"
                }}
              >
                <span className={`${styles.content_header}`}
                >
                  Kinshuk Dwivedi
                  <br />
                </span>
                <span className={`${styles.content}`}>
                  9425183369
                  <br />
                  kinshuk.dwivedi.phy19@itbhu.ac.in<br /><br />
                </span>


                {/* </div> */}
              </div>
              {/* <div
        style={{
          width: 376,
          height: "72.08px",
          left: 0,
          top: "127.92px",
          position: "absolute"
        }}
      >
        
      </div> */}
            </div></div>
          <div className={`${styles.event_box_header}`}
          >
            Contacts:
          </div>
          <img className={`${styles.event_image}`} alt=" "
            // style={{ width: 90, height: 90, left: 48, top: 28, position: "absolute" }}
            src={basketball}
          />
          <div className={`${styles.event_box_name}`}
          >
            Basketball
          </div>
          <div className={`${styles.rule_book_box}`}
          >
            <div
              style={{
                color: "#760E53",
                fontSize: 18,
                fontFamily: "Poppins",
                fontWeight: 600,
                wordWrap: "break-word"
              }}
            >
              <a href={BasketballPDF}
                target="_blank"
                rel="noreferrer"
                className={`${styles.rulebook}`}
              >
                View Rulebook
              </a>
            </div>
          </div>
        </div>
      </div></div>



    // <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
    //   <div
    //     className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
    //   >
    //     <button
    //       className={`${styles.fa} ${styles.fa_times}`}
    //       id="0x"
    //       onClick={() => props.changeState(false)}
    //     >
    //       <FaTimes />
    //     </button>
    //     <div
    //       className="row"
    //       style={{ marginLeft: 'auto', marginRight: 'auto' }}
    //     >
    //       <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.rule_box}`}>
    //             <div className={`${styles.a_rule}`}>
    //               {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
    //               <div className={`${styles.image}`}>
    //                 <img
    //                   className={`${styles.img_responsive}`}
    //                   src={rules}
    //                   alt="img"
    //                 />
    //               </div>
    //               <div className={`${styles.info} ${styles.rule}`}>
    //                 <h4> Rules </h4>
    //                 <a
    //                   href={BasketballPDF}
    //                   target="_blank"
    //                   rel="noreferrer"
    //                   className={`${styles.rulebook}`}
    //                 >
    //                   CLICK HERE FOR RULES
    //                 </a>
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.winner_box} ${styles.info}`}>
    //             <div className={`${styles.image}`}>
    //               <img
    //                 className={`${styles.img_responsive}`}
    //                 src={trophy}
    //                 alt="img"
    //               />
    //             </div>
    //             <div className={`${styles.info}`}>
    //               <h4>Basketball</h4>
    //               <p>
    //                 Coming Soon
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div> */}

    //       <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.contact_box}`}>
    //             <div className={`${styles.image}`}>
    //               <img
    //                 className={`${styles.img_responsive}`}
    //                 src={contacts}
    //                 alt="img"
    //               />
    //             </div>
    //             <div className={`${styles.info}`}>
    //               <h4>Contacts</h4>
    //               <p
    //                 className={`${styles.paragraph}`}
    //                 style={{ paddingBottom: '20px' }}
    //               >
    //                 <b>CAPTAIN</b>
    //                 <br />
    //                 Aryan Shukla <br />
    //                 8171354203
    //                 <br />
    //                 aryanshukla.mat18@itbhu.ac.in
    //                 <br />
    //                 <br />
    //                 Arya Kumari <b>(W)</b>
    //                 <br />
    //                 8409372829
    //                 <br />
    //                 aryakumari.mst18@itbhu.ac.in
    //                 <br />
    //                 <br />
    //                 <b>VICE-CAPTAIN</b>
    //                 <br />
    //                 Kinshuk Dwivedi
    //                 <br />
    //                 9425183369
    //                 <br />
    //                 kinshuk.dwivedi.phy19@itbhu.ac.in
    //                 <br />
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

const Boxing = (props) => {
  return (
    <div className={`${styles.main_event_div}`}>
      {/* <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}> */}
      <div className={`${styles.events_main_block}`}>
        <div className={`${styles.events_main_block_div1}`} >
          <div
            style={{
              right: "5%",
              top: "5%",
              position: "absolute"
            }}
          >
            <button
              className={`${styles.fa} ${styles.fa_times}`}
              id="0x"
              onClick={() => props.changeState(false)}
            >
              <FaTimes />
            </button>
          </div>
          <div className={`${styles.event_white_block}`} />
          <div className={`${styles.event_line_right}`} />
          <div className={`${styles.event_line_left}`} />

          <div className={`${styles.evnet_content_box}`}>
            <div className={`${styles.event_show_block1}`}>
              <div className={`${styles.main_header}`}>
                CAPTAIN
              </div>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  left: 0,
                  top: "20%",
                  position: "absolute"
                }}
              >
                <span className={`${styles.content_header}`}>
                  Suyash Baloni <br />

                </span>
                <span className={`${styles.content}`}>
                  N/A
                  <br />
                  suyash.baloni.bme20@itbhu.ac.in

                  <br />
                  <br />
                </span>
                <span className={`${styles.content_header}`}
                >
                  Saloni Agrawal (W)
                  <br />
                </span>
                <span className={`${styles.content}`}>
                  9928107374
                  <br />
                  saloni.agrawal.mat20@itbhu.ac.in


                </span>
              </div>

              {/* <div
        style={{
          width: "761.62px",
          height: "72.82px",
          left: 0,
          top: "127.18px",
          position: "absolute"
        }}
      >
        
      </div> */}
            </div>
            {/* <div
        style={{
          width: 430,
          height: "124.87px",
          left: 0,
          top: 0,
          position: "absolute"
        }}
      > */}

            {/* <div
        style={{
          width: 376,
          height: "72.08px",
          left: 0,
          top: "127.92px",
          position: "absolute"
        }}
      >
        
      </div> */}</div>
          <div className={`${styles.event_box_header}`}
          >
            Contacts:
          </div>
          <img className={`${styles.event_image}`} alt=" "
            // style={{ width: 90, height: 90, left: 48, top: 28, position: "absolute" }}
            src={boxing}
          />
          <div className={`${styles.event_box_name}`}
          >
            Boxing
          </div>
          <div className={`${styles.rule_book_box}`}
          >
            <div
              style={{
                color: "#760E53",
                fontSize: 18,
                fontFamily: "Poppins",
                fontWeight: 600,
                wordWrap: "break-word"
              }}
            >
              <a href={BoxingPDF}
                target="_blank"
                rel="noreferrer"
                className={`${styles.rulebook}`}
              >
                View Rulebook
              </a>
            </div>
          </div>
        </div>
      </div></div>


    // <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
    //   <div
    //     className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
    //   >
    //     <button
    //       className={`${styles.fa} ${styles.fa_times}`}
    //       id="0x"
    //       onClick={() => props.changeState(false)}
    //     >
    //       <FaTimes />
    //     </button>
    //     <div
    //       className="row"
    //       style={{ marginLeft: 'auto', marginRight: 'auto' }}
    //     >
    //       <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.rule_box}`}>
    //             <div className={`${styles.a_rule}`}>
    //               {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
    //               <div className={`${styles.image}`}>
    //                 <img
    //                   className={`${styles.img_responsive}`}
    //                   src={rules}
    //                   alt="img"
    //                 />
    //               </div>
    //               <div className={`${styles.info} ${styles.rule}`}>
    //                 <h4> Rules </h4>
    //                 <a
    //                   href={BoxingPDF}
    //                   target="_blank"
    //                   rel="noreferrer"
    //                   className={`${styles.rulebook}`}
    //                 >
    //                   CLICK HERE FOR RULES
    //                 </a>
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.winner_box} ${styles.info}`}>
    //             <div className={`${styles.image}`}>
    //               <img
    //                 className={`${styles.img_responsive}`}
    //                 src={trophy}
    //                 alt="img"
    //               />
    //             </div>
    //             <div className={`${styles.info}`}>
    //               <h4>Boxing</h4>
    //               <p>
    //                 Coming Soon
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div> */}

    //       <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.contact_box}`}>
    //             <div className={`${styles.image}`}>
    //               <img
    //                 className={`${styles.img_responsive}`}
    //                 src={contacts}
    //                 alt="img"
    //               />
    //             </div>
    //             <div className={`${styles.info}`}>
    //               <h4>Contacts</h4>
    //               <p
    //                 className={`${styles.paragraph}`}
    //                 style={{ paddingBottom: '12px' }}
    //               >
    //                 <b>CAPTAIN</b>
    //                 <br />
    //                 Ankur Minj <br />
    //                 9171946273
    //                 <br />
    //                 ankur.minj.min19@itbhu.ac.in
    //                 <br />
    //                 <br />
    //                 Smriti Sharma <b>(W)</b>
    //                 <br />
    //                 8303077445
    //                 <br />
    //                 smriti.sharma.ece19@itbhu.ac.in
    //                 <br />
    //                 <br />
    //                 <br />
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

const Chess = (props) => {
  return (
    <div className={`${styles.main_event_div}`}>
      {/* <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}> */}
      <div className={`${styles.events_main_block}`}>
        <div className={`${styles.events_main_block_div1}`} >
          <div
            style={{
              right: "5%",
              top: "5%",
              position: "absolute"
            }}
          >
            <button
              className={`${styles.fa} ${styles.fa_times}`}
              id="0x"
              onClick={() => props.changeState(false)}
            >
              <FaTimes />
            </button>
          </div>
          <div className={`${styles.event_white_block}`} />
          <div className={`${styles.event_line_right}`} />
          <div className={`${styles.event_line_left}`} />

          <div className={`${styles.evnet_content_box}`}>
            <div className={`${styles.event_show_block1}`}>
              <div className={`${styles.main_header}`}>
                CAPTAIN
              </div>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  left: 0,
                  top: "20%",
                  position: "absolute"
                }}
              >
                <span className={`${styles.content_header}`}>
                  Harshraj Joshi <br />

                </span>
                <span className={`${styles.content}`}>
                  N/A
                  <br />
                  harshraj.joshi.che21@itbhu.ac.in
                  <br />
                  <br />
                </span>

              </div>

              {/* <div
        style={{
          width: "761.62px",
          height: "72.82px",
          left: 0,
          top: "127.18px",
          position: "absolute"
        }}
      >
        
      </div> */}
            </div>
            <div className={`${styles.event_show_block2}`}>
              {/* <div
        style={{
          width: 430,
          height: "124.87px",
          left: 0,
          top: 0,
          position: "absolute"
        }}
      > */}
              <div className={`${styles.main_header}`}>
                VICE-CAPTAIN
              </div>
              <div
                style={{
                  width: "50%",
                  height: "100%",
                  left: 0,
                  top: "20%",
                  position: "absolute"
                }}
              >
                <span className={`${styles.content_header}`}
                >
                  Shaurya Panpalia
                  <br />
                </span>
                <span className={`${styles.content}`}>
                  7877860896
                  <br />
                  shaurya.panpalia.mst19@itbhu.ac.in<br /><br />
                </span>


                {/* </div> */}
              </div>
              {/* <div
        style={{
          width: 376,
          height: "72.08px",
          left: 0,
          top: "127.92px",
          position: "absolute"
        }}
      >
        
      </div> */}
            </div></div>
          <div className={`${styles.event_box_header}`}
          >
            Contacts:
          </div>
          <img className={`${styles.event_image}`} alt=" "
            // style={{ width: 90, height: 90, left: 48, top: 28, position: "absolute" }}
            src={chess}
          />
          <div className={`${styles.event_box_name}`}
          >
            Chess
          </div>
          <div className={`${styles.rule_book_box}`}
          >
            <div
              style={{
                color: "#760E53",
                fontSize: 18,
                fontFamily: "Poppins",
                fontWeight: 600,
                wordWrap: "break-word"
              }}
            >
              <a href={ChessPDF}
                target="_blank"
                rel="noreferrer"
                className={`${styles.rulebook}`}
              >
                View Rulebook
              </a>
            </div>
          </div>
        </div>
      </div></div>


    // <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
    //   <div
    //     className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
    //   >
    //     <button
    //       className={`${styles.fa} ${styles.fa_times}`}
    //       id="0x"
    //       onClick={() => props.changeState(false)}
    //     >
    //       <FaTimes />
    //     </button>
    //     <div
    //       className="row"
    //       style={{ marginLeft: 'auto', marginRight: 'auto' }}
    //     >
    //       <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.rule_box}`}>
    //             <div className={`${styles.a_rule}`}>
    //               {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
    //               <div className={`${styles.image}`}>
    //                 <img
    //                   className={`${styles.img_responsive}`}
    //                   src={rules}
    //                   alt="img"
    //                 />
    //               </div>
    //               <div className={`${styles.info} ${styles.rule}`}>
    //                 <h4> Rules </h4>
    //                 <a
    //                   href={ChessPDF}
    //                   target="_blank"
    //                   rel="noreferrer"
    //                   className={`${styles.rulebook}`}
    //                 >
    //                   CLICK HERE FOR RULES
    //                 </a>
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.winner_box} ${styles.info}`}>
    //             <div className={`${styles.image}`}>
    //               <img
    //                 className={`${styles.img_responsive}`}
    //                 src={trophy}
    //                 alt="img"
    //               />
    //             </div>
    //             <div className={`${styles.info}`}>
    //               <h4>Chess</h4>
    //               <p>
    //                 Coming Soon
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div> */}

    //       <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.contact_box}`}>
    //             <div className={`${styles.image}`}>
    //               <img
    //                 className={`${styles.img_responsive}`}
    //                 src={contacts}
    //                 alt="img"
    //               />
    //             </div>
    //             <div className={`${styles.info}`}>
    //               <h4>Contacts</h4>
    //               <p
    //                 className={`${styles.paragraph}`}
    //                 style={{ paddingBottom: '12px' }}
    //               >
    //                 <b>CAPTAIN</b>
    //                 <br />
    //                 Mack Mohan Verma <br />
    //                 9548338599
    //                 <br />
    //                 mack.mohanverma.mec19@itbhu.ac.in
    //                 <br />
    //                 <br />
    //                 <b>VICE-CAPTAIN</b>
    //                 <br />
    //                 Shaurya Panpalia <br />
    //                 7877860896
    //                 <br />
    //                 shaurya.panpalia.mst19@itbhu.ac.in
    //                 <br />
    //                 <br />
    //                 <br />
    //                 {/* <br /> */}
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

const Cricket = (props) => {
  return (
    <div className={`${styles.main_event_div}`}>
      {/* <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}> */}
      <div className={`${styles.events_main_block}`}>
        <div className={`${styles.events_main_block_div1}`} >
          <div
            style={{
              right: "5%",
              top: "5%",
              position: "absolute"
            }}
          >
            <button
              className={`${styles.fa} ${styles.fa_times}`}
              id="0x"
              onClick={() => props.changeState(false)}
            >
              <FaTimes />
            </button>
          </div>
          <div className={`${styles.event_white_block}`} />
          <div className={`${styles.event_line_right}`} />
          <div className={`${styles.event_line_left}`} />

          <div className={`${styles.evnet_content_box}`}>
            <div className={`${styles.event_show_block1}`}>
              <div className={`${styles.main_header}`}>
                CAPTAIN
              </div>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  left: 0,
                  top: "20%",
                  position: "absolute"
                }}
              >
                <span className={`${styles.content_header}`}>
                  Jai Patel <br />

                </span>
                <span className={`${styles.content}`}>
                  7023064941
                  <br />
                  shashanksp.met18@iitbhu.ac.in
                  <br />
                  <br />
                </span>

              </div>

              {/* <div
        style={{
          width: "761.62px",
          height: "72.82px",
          left: 0,
          top: "127.18px",
          position: "absolute"
        }}
      >
        
      </div> */}
            </div>
            <div className={`${styles.event_show_block2}`}>
              {/* <div
        style={{
          width: 430,
          height: "124.87px",
          left: 0,
          top: 0,
          position: "absolute"
        }}
      > */}
              <div className={`${styles.main_header}`}>
                VICE-CAPTAIN
              </div>
              <div
                style={{
                  width: "50%",
                  height: "100%",
                  left: 0,
                  top: "20%",
                  position: "absolute"
                }}
              >
                <span className={`${styles.content_header}`}
                >
                  Satyendra Kumar Satyarthi
                  <br />
                </span>
                <span className={`${styles.content}`}>
                  9877437762
                  <br />
                  satyendraks.rs.cer17@itbhu.ac.in<br /><br />
                </span>


                {/* </div> */}
              </div>
              {/* <div
        style={{
          width: 376,
          height: "72.08px",
          left: 0,
          top: "127.92px",
          position: "absolute"
        }}
      >
        
      </div> */}
            </div></div>
          <div className={`${styles.event_box_header}`}
          >
            Contacts:
          </div>
          <img className={`${styles.event_image}`} alt=" "
            // style={{ width: 90, height: 90, left: 48, top: 28, position: "absolute" }}
            src={cricket}
          />
          <div className={`${styles.event_box_name}`}
          >
            Cricket
          </div>
          <div className={`${styles.rule_book_box}`}
          >
            <div
              style={{
                color: "#760E53",
                fontSize: 18,
                fontFamily: "Poppins",
                fontWeight: 600,
                wordWrap: "break-word"
              }}
            >
              <a href={CricketPDF}
                target="_blank"
                rel="noreferrer"
                className={`${styles.rulebook}`}
              >
                View Rulebook
              </a>
            </div>
          </div>
        </div>
      </div></div>

    // <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
    //   <div
    //     className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
    //   >
    //     <button
    //       className={`${styles.fa} ${styles.fa_times}`}
    //       id="0x"
    //       onClick={() => props.changeState(false)}
    //     >
    //       <FaTimes />
    //     </button>
    //     <div
    //       className="row"
    //       style={{ marginLeft: 'auto', marginRight: 'auto' }}
    //     >
    //       <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.rule_box}`}>
    //             <div className={`${styles.a_rule}`}>
    //               {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
    //               <div className={`${styles.image}`}>
    //                 <img
    //                   className={`${styles.img_responsive}`}
    //                   src={rules}
    //                   alt="img"
    //                 />
    //               </div>
    //               <div className={`${styles.info} ${styles.rule}`}>
    //                 <h4> Rules </h4>
    //                 <a
    //                   href={CricketPDF}
    //                   target="_blank"
    //                   rel="noreferrer"
    //                   className={`${styles.rulebook}`}
    //                 >
    //                   CLICK HERE FOR RULES
    //                 </a>
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.winner_box} ${styles.info}`}>
    //             <div className={`${styles.image}`}>
    //               <img
    //                 className={`${styles.img_responsive}`}
    //                 src={trophy}
    //                 alt="img"
    //               />
    //             </div>
    //             <div className={`${styles.info}`}>
    //               <h4>Cricket</h4>
    //               <p>
    //                 Coming Soon
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div> */}

    //       <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.contact_box}`}>
    //             <div className={`${styles.image}`}>
    //               <img
    //                 className={`${styles.img_responsive}`}
    //                 src={contacts}
    //                 alt="img"
    //               />
    //             </div>
    //             <div className={`${styles.info}`}>
    //               <h4>Contacts</h4>
    //               <p
    //                 className={`${styles.paragraph}`}
    //                 style={{ paddingBottom: '15px' }}
    //               >
    //                 <b>CAPTAIN</b>
    //                 <br />
    //                 Shashank S Prakash <br />
    //                 8368920987
    //                 <br />
    //                 shashanksp.met18@iitbhu.ac.in
    //                 <br />
    //                 <br />
    //                 <b>VICE-CAPTAIN</b>
    //                 <br />
    //                 Satyendra Kumar Satyarthi <br />
    //                 9877437762
    //                 <br />
    //                 satyendraks.rs.cer17@itbhu.ac.in
    //                 <br />
    //                 <br />
    //                 <br />
    //                 {/* <br /> */}
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

const Cycling = (props) => {
  return (
    <div className={`${styles.main_event_div}`}>
      {/* <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}> */}
      <div className={`${styles.events_main_block}`}>
        <div className={`${styles.events_main_block_div1}`} >
          <div
            style={{
              right: "5%",
              top: "5%",
              position: "absolute"
            }}
          >
            <button
              className={`${styles.fa} ${styles.fa_times}`}
              id="0x"
              onClick={() => props.changeState(false)}
            >
              <FaTimes />
            </button>
          </div>
          <div className={`${styles.event_white_block}`} />
          <div className={`${styles.event_line_right}`} />
          <div className={`${styles.event_line_left}`} />

          <div className={`${styles.evnet_content_box}`}>
            <div className={`${styles.event_show_block1}`}>
              <div className={`${styles.main_header}`}>
                CAPTAIN
              </div>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  left: 0,
                  top: "20%",
                  position: "absolute"
                }}
              >
                <span className={`${styles.content_header}`}>
                  Abhishek  <br />

                </span>
                <span className={`${styles.content}`}>
                  9417044824
                  <br />
                  abhishek.student.cer20@iitbhu.ac.in
                  <br />
                  <br />
                </span>

              </div>

              {/* <div
        style={{
          width: "761.62px",
          height: "72.82px",
          left: 0,
          top: "127.18px",
          position: "absolute"
        }}
      >
        
      </div> */}
            </div>
            <div className={`${styles.event_show_block2}`}>
              {/* <div
        style={{
          width: 430,
          height: "124.87px",
          left: 0,
          top: 0,
          position: "absolute"
        }}
      > */}
              <div className={`${styles.main_header}`}>
                VICE-CAPTAIN
              </div>
              <div
                style={{
                  width: "50%",
                  height: "100%",
                  left: 0,
                  top: "20%",
                  position: "absolute"
                }}
              >
                <span className={`${styles.content_header}`}
                >
                  Aditya Kulkarni
                  <br />
                </span>
                <span className={`${styles.content}`}>
                  8669136556
                  <br />
                  aditya.kulkarni.cd.civ20@itbhu.ac.in<br /><br />
                </span>


                {/* </div> */}
              </div>
              {/* <div
        style={{
          width: 376,
          height: "72.08px",
          left: 0,
          top: "127.92px",
          position: "absolute"
        }}
      >
        
      </div> */}
            </div></div>
          <div className={`${styles.event_box_header}`}
          >
            Contacts:
          </div>
          <img className={`${styles.event_image}`} alt=" "
            // style={{ width: 90, height: 90, left: 48, top: 28, position: "absolute" }}
            src={cycling}
          />
          <div className={`${styles.event_box_name}`}
          >
            Cycling
          </div>
          <div className={`${styles.rule_book_box}`}
          >
            <div
              style={{
                color: "#760E53",
                fontSize: 18,
                fontFamily: "Poppins",
                fontWeight: 600,
                wordWrap: "break-word"
              }}
            >
              <a href={CyclingPDF}
                target="_blank"
                rel="noreferrer"
                className={`${styles.rulebook}`}
              >
                View Rulebook
              </a>
            </div>
          </div>
        </div>
      </div></div>


    // <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
    //   <div
    //     className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
    //   >
    //     <button
    //       className={`${styles.fa} ${styles.fa_times}`}
    //       id="0x"
    //       onClick={() => props.changeState(false)}
    //     >
    //       <FaTimes />
    //     </button>
    //     <div
    //       className="row"
    //       style={{ marginLeft: 'auto', marginRight: 'auto' }}
    //     >
    //       <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.rule_box}`}>
    //             <div className={`${styles.a_rule}`}>
    //               {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
    //               <div className={`${styles.image}`}>
    //                 <img
    //                   className={`${styles.img_responsive}`}
    //                   src={rules}
    //                   alt="img"
    //                 />
    //               </div>
    //               <div className={`${styles.info} ${styles.rule}`}>
    //                 <h4> Rules </h4>
    //                 <a
    //                   href={CyclingPDF}
    //                   target="_blank"
    //                   rel="noreferrer"
    //                   className={`${styles.rulebook}`}
    //                 >
    //                   CLICK HERE FOR RULES
    //                 </a>
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.winner_box} ${styles.info}`}>
    //             <div className={`${styles.image}`}>
    //               <img
    //                 className={`${styles.img_responsive}`}
    //                 src={trophy}
    //                 alt="img"
    //               />
    //             </div>
    //             <div className={`${styles.info}`}>
    //               <h4>Cycling</h4>
    //               <p>
    //                 Coming Soon
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div> */}

    //       <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.contact_box}`}>
    //             <div className={`${styles.image}`}>
    //               <img
    //                 className={`${styles.img_responsive}`}
    //                 src={contacts}
    //                 alt="img"
    //               />
    //             </div>
    //             <div className={`${styles.info}`}>
    //               <h4>Contacts</h4>
    //               <p className={`${styles.paragraph}`} style={{ paddingBottom: '15px' }}>
    //                 <b>CAPTAIN</b>
    //                 <br />
    //                 Abhishek 
    //                 <br />
    //                 9417044824
    //                 <br />
    //                 abhishek.student.cer20@iitbhu.ac.in
    //                 <br />
    //                 <br />
    //                 <b>VICE-CAPTAIN</b>
    //                 <br />
    //                 Aditya Kulkarni
    //                 <br />
    //                 8669136556
    //                 <br />
    //                 aditya.kulkarni.cd.civ20@itbhu.ac.in
    //                 <br />
    //                 <br />
    //                 <br />
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

const Football = (props) => {
  return (
    <div className={`${styles.main_event_div}`}>
      {/* <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}> */}
      <div className={`${styles.events_main_block}`}>
        <div className={`${styles.events_main_block_div1}`} >
          <div
            style={{
              right: "5%",
              top: "5%",
              position: "absolute"
            }}
          >
            <button
              className={`${styles.fa} ${styles.fa_times}`}
              id="0x"
              onClick={() => props.changeState(false)}
            >
              <FaTimes />
            </button>
          </div>
          <div className={`${styles.event_white_block}`} />
          <div className={`${styles.event_line_right}`} />
          <div className={`${styles.event_line_left}`} />

          <div className={`${styles.evnet_content_box}`}>
            <div className={`${styles.event_show_block1}`}>
              <div className={`${styles.main_header}`}>
                CAPTAIN
              </div>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  left: 0,
                  top: "20%",
                  position: "absolute"
                }}
              >
                <span className={`${styles.content_header}`}>
                  Soham Nandy <br />

                </span>
                <span className={`${styles.content}`}>
                  9549847995
                  <br />
                  soham.nandy.cd.mst21@itbhu.ac.in
                  <br />
                  <br />
                </span>

              </div>

              {/* <div
        style={{
          width: "761.62px",
          height: "72.82px",
          left: 0,
          top: "127.18px",
          position: "absolute"
        }}
      >
        
      </div> */}
            </div>
            <div className={`${styles.event_show_block2}`}>
              {/* <div
        style={{
          width: 430,
          height: "124.87px",
          left: 0,
          top: 0,
          position: "absolute"
        }}
      > */}
              <div className={`${styles.main_header}`}>
                VICE-CAPTAIN
              </div>
              <div
                style={{
                  width: "50%",
                  height: "100%",
                  left: 0,
                  top: "20%",
                  position: "absolute"
                }}
              >
                <span className={`${styles.content_header}`}
                >
                  Sachin Kumar
                  <br />
                </span>
                <span className={`${styles.content}`}>
                  6205237836
                  <br />
                  sachin.kumar.met19@itbhu.ac.in<br /><br />
                </span>


                {/* </div> */}
              </div>
              {/* <div
        style={{
          width: 376,
          height: "72.08px",
          left: 0,
          top: "127.92px",
          position: "absolute"
        }}
      >
        
      </div> */}
            </div></div>
          <div className={`${styles.event_box_header}`}
          >
            Contacts:
          </div>
          <img className={`${styles.event_image}`} alt=" "
            // style={{ width: 90, height: 90, left: 48, top: 28, position: "absolute" }}
            src={football}
          />
          <div className={`${styles.event_box_name}`}
          >
            Football
          </div>
          <div className={`${styles.rule_book_box}`}
          >
            <div
              style={{
                color: "#760E53",
                fontSize: 18,
                fontFamily: "Poppins",
                fontWeight: 600,
                wordWrap: "break-word"
              }}
            >
              <a href={FootballPDF}
                target="_blank"
                rel="noreferrer"
                className={`${styles.rulebook}`}
              >
                View Rulebook
              </a>
            </div>
          </div>
        </div>
      </div></div>

    // <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
    //   <div
    //     className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
    //   >
    //     <button
    //       className={`${styles.fa} ${styles.fa_times}`}
    //       id="0x"
    //       onClick={() => props.changeState(false)}
    //     >
    //       <FaTimes />
    //     </button>
    //     <div
    //       className="row"
    //       style={{ marginLeft: 'auto', marginRight: 'auto' }}
    //     >
    //       <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.rule_box}`}>
    //             <div className={`${styles.a_rule}`}>
    //               {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
    //               <div className={`${styles.image}`}>
    //                 <img
    //                   className={`${styles.img_responsive}`}
    //                   src={rules}
    //                   alt="img"
    //                 />
    //               </div>
    //               <div className={`${styles.info} ${styles.rule}`}>
    //                 <h4> Rules </h4>
    //                 <a
    //                   href={FootballPDF}
    //                   target="_blank"
    //                   rel="noreferrer"
    //                   className={`${styles.rulebook}`}
    //                 >
    //                   CLICK HERE FOR RULES
    //                 </a>
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.winner_box} ${styles.info}`}>
    //             <div className={`${styles.image}`}>
    //               <img
    //                 className={`${styles.img_responsive}`}
    //                 src={trophy}
    //                 alt="img"
    //               />
    //             </div>
    //             <div className={`${styles.info}`}>
    //               <h4>Football</h4>
    //               <p>
    //                 Coming Soon
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div> */}

    //       <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.contact_box}`}>
    //             <div className={`${styles.image}`}>
    //               <img
    //                 className={`${styles.img_responsive}`}
    //                 src={contacts}
    //                 alt="img"
    //               />
    //             </div>
    //             <div className={`${styles.info}`}>
    //               <h4>Contacts</h4>
    //               <p
    //                 className={`${styles.paragraph}`}
    //                 style={{ paddingBottom: '15px' }}
    //               >
    //                 <b>CAPTAIN</b>
    //                 <br />
    //                 Ritwik Singh <br />
    //                 9549847995
    //                 <br />
    //                 ritviksingh.phy18@itbhu.ac.in
    //                 <br />
    //                 <br />
    //                 <b>VICE-CAPTAIN</b>
    //                 <br />
    //                 Sachin Kumar <br />
    //                 6205237836
    //                 <br />
    //                 sachin.kumar.met19@itbhu.ac.in
    //                 <br />
    //                 <br />
    //                 <br />
    //                 {/* <br /> */}
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

const Handball = (props) => {
  return (
    <div className={`${styles.main_event_div}`}>
      {/* <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}> */}
      <div className={`${styles.events_main_block}`}>
        <div className={`${styles.events_main_block_div1}`} >
          <div
            style={{
              right: "5%",
              top: "5%",
              position: "absolute"
            }}
          >
            <button
              className={`${styles.fa} ${styles.fa_times}`}
              id="0x"
              onClick={() => props.changeState(false)}
            >
              <FaTimes />
            </button>
          </div>
          <div className={`${styles.event_white_block}`} />
          <div className={`${styles.event_line_right}`} />
          <div className={`${styles.event_line_left}`} />

          <div className={`${styles.evnet_content_box}`}>
            <div className={`${styles.event_show_block1}`}>
              <div className={`${styles.main_header}`}>
                CAPTAIN
              </div>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  left: 0,
                  top: "20%",
                  position: "absolute"
                }}
              >
                <span className={`${styles.content_header}`}>
                  Patel Avi <br />

                </span>
                <span className={`${styles.content}`}>
                  6352926616
                  <br />
                  patelavi.nihilkumar.mec21@itbhu.ac.in

                  <br />
                  <br />
                </span>

              </div>

              {/* <div
        style={{
          width: "761.62px",
          height: "72.82px",
          left: 0,
          top: "127.18px",
          position: "absolute"
        }}
      >
        
      </div> */}
            </div>
            <div className={`${styles.event_show_block2}`}>
              {/* <div
        style={{
          width: 430,
          height: "124.87px",
          left: 0,
          top: 0,
          position: "absolute"
        }}
      > */}
              <div className={`${styles.main_header}`}>
                VICE-CAPTAIN
              </div>
              <div
                style={{
                  width: "50%",
                  height: "100%",
                  left: 0,
                  top: "20%",
                  position: "absolute"
                }}
              >
                <span className={`${styles.content_header}`}
                >
                  Tarun Khandelwal
                  <br />
                </span>
                <span className={`${styles.content}`}>
                  8102029500
                  <br />
                  tarun.khandelwal.eee19@itbhu.ac.in<br /><br />
                </span>


                {/* </div> */}
              </div>
              {/* <div
        style={{
          width: 376,
          height: "72.08px",
          left: 0,
          top: "127.92px",
          position: "absolute"
        }}
      >
        
      </div> */}
            </div></div>
          <div className={`${styles.event_box_header}`}
          >
            Contacts:
          </div>
          <img className={`${styles.event_image}`} alt=" "
            // style={{ width: 90, height: 90, left: 48, top: 28, position: "absolute" }}
            src={handball}
          />
          <div className={`${styles.event_box_name}`}
          >
            Handball
          </div>
          <div className={`${styles.rule_book_box}`}
          >
            <div
              style={{
                color: "#760E53",
                fontSize: 18,
                fontFamily: "Poppins",
                fontWeight: 600,
                wordWrap: "break-word"
              }}
            >
              <a href={HandballPDF}
                target="_blank"
                rel="noreferrer"
                className={`${styles.rulebook}`}
              >
                View Rulebook
              </a>
            </div>
          </div>
        </div>
      </div></div>


    // <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
    //   <div
    //     className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
    //   >
    //     <button
    //       className={`${styles.fa} ${styles.fa_times}`}
    //       id="0x"
    //       onClick={() => props.changeState(false)}
    //     >
    //       <FaTimes />
    //     </button>
    //     <div
    //       className="row"
    //       style={{ marginLeft: 'auto', marginRight: 'auto' }}
    //     >
    //       <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.rule_box}`}>
    //             <div className={`${styles.a_rule}`}>
    //               {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
    //               <div className={`${styles.image}`}>
    //                 <img
    //                   className={`${styles.img_responsive}`}
    //                   src={rules}
    //                   alt="img"
    //                 />
    //               </div>
    //               <div className={`${styles.info} ${styles.rule}`}>
    //                 <h4> Rules </h4>
    //                 <a
    //                   href={HandballPDF}
    //                   target="_blank"
    //                   rel="noreferrer"
    //                   className={`${styles.rulebook}`}
    //                 >
    //                   CLICK HERE FOR RULES
    //                 </a>
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.winner_box} ${styles.info}`}>
    //             <div className={`${styles.image}`}>
    //               <img
    //                 className={`${styles.img_responsive}`}
    //                 src={trophy}
    //                 alt="img"
    //               />
    //             </div>
    //             <div className={`${styles.info}`}>
    //               <h4>Handball</h4>
    //               <p>
    //                 Coming Soon
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div> */}

    //       <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.contact_box}`}>
    //             <div className={`${styles.image}`}>
    //               <img
    //                 className={`${styles.img_responsive}`}
    //                 src={contacts}
    //                 alt="img"
    //               />
    //             </div>
    //             <div className={`${styles.info}`}>
    //               <h4>Contacts</h4>
    //               <p
    //                 className={`${styles.paragraph} ${styles.paragraph1}`}
    //                 style={{ paddingBottom: '15px' }}
    //               >
    //                 <b>CAPTAIN</b>
    //                 <br />
    //                 Sharath Ram <br />
    //                 8072714518
    //                 <br />
    //                 sharath.ramsb.mst19@itbhu.ac.in
    //                 <br />
    //                 <br />
    //                 <b>VICE-CAPTAIN</b>
    //                 <br />
    //                 Tarun Khandelwal <br />
    //                 8102029500
    //                 <br />
    //                 tarun.khandelwal.eee19@itbhu.ac.in
    //                 <br />
    //                 <br />
    //                 <br />
    //                 {/* <br /> */}
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

const Hockey = (props) => {
  return (
    <div className={`${styles.main_event_div}`}>
      {/* <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}> */}
      <div className={`${styles.events_main_block}`}>
        <div className={`${styles.events_main_block_div1}`} >
          <div
            style={{
              right: "5%",
              top: "5%",
              position: "absolute"
            }}
          >
            <button
              className={`${styles.fa} ${styles.fa_times}`}
              id="0x"
              onClick={() => props.changeState(false)}
            >
              <FaTimes />
            </button>
          </div>
          <div className={`${styles.event_white_block}`} />
          <div className={`${styles.event_line_right}`} />
          <div className={`${styles.event_line_left}`} />

          <div className={`${styles.evnet_content_box}`}>
            <div className={`${styles.event_show_block1}`}>
              <div className={`${styles.main_header}`}>
                CAPTAIN
              </div>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  left: 0,
                  top: "20%",
                  position: "absolute"
                }}
              >
                <span className={`${styles.content_header}`}>
                  Abhishek Meena <br />

                </span>
                <span className={`${styles.content}`}>
                  8840041931
                  <br />
                  abhishek.meena.mec19@itbhu.ac.in
                  <br />
                  <br />
                </span>

              </div>

              {/* <div
        style={{
          width: "761.62px",
          height: "72.82px",
          left: 0,
          top: "127.18px",
          position: "absolute"
        }}
      >
        
      </div> */}
            </div>
            <div className={`${styles.event_show_block2}`}>
              {/* <div
        style={{
          width: 430,
          height: "124.87px",
          left: 0,
          top: 0,
          position: "absolute"
        }}
      > */}
              <div className={`${styles.main_header}`}>
                VICE-CAPTAIN
              </div>
              <div
                style={{
                  width: "50%",
                  height: "100%",
                  left: 0,
                  top: "20%",
                  position: "absolute"
                }}
              >
                <span className={`${styles.content_header}`}
                >
                  Ashish Kumar
                  <br />
                </span>
                <span className={`${styles.content}`}>
                  9370766492
                  <br />
                  ashish.kumar.min19@itbhu.ac.in<br /><br />
                </span>


                {/* </div> */}
              </div>
              {/* <div
        style={{
          width: 376,
          height: "72.08px",
          left: 0,
          top: "127.92px",
          position: "absolute"
        }}
      >
        
      </div> */}
            </div></div>
          <div className={`${styles.event_box_header}`}
          >
            Contacts:
          </div>
          <img className={`${styles.event_image}`} alt=" "
            // style={{ width: 90, height: 90, left: 48, top: 28, position: "absolute" }}
            src={hockey}
          />
          <div className={`${styles.event_box_name}`}
          >
            Hockey
          </div>
          <div className={`${styles.rule_book_box}`}
          >
            <div
              style={{
                color: "#760E53",
                fontSize: 18,
                fontFamily: "Poppins",
                fontWeight: 600,
                wordWrap: "break-word"
              }}
            >
              <a href={HockeyPDF}
                target="_blank"
                rel="noreferrer"
                className={`${styles.rulebook}`}
              >
                View Rulebook
              </a>
            </div>
          </div>
        </div>
      </div></div>


    // <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
    //   <div
    //     className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
    //   >
    //     <button
    //       className={`${styles.fa} ${styles.fa_times}`}
    //       id="0x"
    //       onClick={() => props.changeState(false)}
    //     >
    //       <FaTimes />
    //     </button>
    //     <div
    //       className="row"
    //       style={{ marginLeft: 'auto', marginRight: 'auto' }}
    //     >
    //       <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.rule_box}`}>
    //             <div className={`${styles.a_rule}`}>
    //               {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
    //               <div className={`${styles.image}`}>
    //                 <img
    //                   className={`${styles.img_responsive}`}
    //                   src={rules}
    //                   alt="img"
    //                 />
    //               </div>
    //               <div className={`${styles.info} ${styles.rule}`}>
    //                 <h4> Rules </h4>
    //                 <a
    //                   href={HockeyPDF}
    //                   target="_blank"
    //                   rel="noreferrer"
    //                   className={`${styles.rulebook}`}
    //                 >
    //                   CLICK HERE FOR RULES
    //                 </a>
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.winner_box} ${styles.info}`}>
    //             <div className={`${styles.image}`}>
    //               <img
    //                 className={`${styles.img_responsive}`}
    //                 src={trophy}
    //                 alt="img"
    //               />
    //             </div>
    //             <div className={`${styles.info}`}>
    //               <h4>Hockey</h4>
    //               <p>
    //                 Coming Soon
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div> */}

    //       <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.contact_box}`}>
    //             <div className={`${styles.image}`}>
    //               <img
    //                 className={`${styles.img_responsive}`}
    //                 src={contacts}
    //                 alt="img"
    //               />
    //             </div>
    //             <div className={`${styles.info}`}>
    //               <h4>Contacts</h4>
    //               <p
    //                 className={`${styles.paragraph}`}
    //                 style={{ paddingBottom: '20px' }}
    //               >
    //                 <b>CAPTAIN</b>
    //                 <br />
    //                 Raghubir <br />
    //                 6265573271
    //                 <br />
    //                 raghubir.student.phe19@itbhu.ac.in
    //                 <br />
    //                 <br />
    //                 <b>VICE-CAPTAIN</b>
    //                 <br />
    //                 Ashish Kumar <br />
    //                 9370766492
    //                 <br />
    //                 ashish.kumar.min19@itbhu.ac.in
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

const Kabbadi = (props) => {
  return (
    <div className={`${styles.main_event_div}`}>
      {/* <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}> */}
      <div className={`${styles.events_main_block}`}>
        <div className={`${styles.events_main_block_div1}`} >
          <div
            style={{
              right: "5%",
              top: "5%",
              position: "absolute"
            }}
          >
            <button
              className={`${styles.fa} ${styles.fa_times}`}
              id="0x"
              onClick={() => props.changeState(false)}
            >
              <FaTimes />
            </button>
          </div>
          <div className={`${styles.event_white_block}`} />
          <div className={`${styles.event_line_right}`} />
          <div className={`${styles.event_line_left}`} />

          <div className={`${styles.evnet_content_box}`}>
            <div className={`${styles.event_show_block1}`}>
              <div className={`${styles.main_header}`}>
                CAPTAIN
              </div>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  left: 0,
                  top: "20%",
                  position: "absolute"
                }}
              >
                <span className={`${styles.content_header}`}>
                  Peddinti Sai siva kumar<br />

                </span>
                <span className={`${styles.content}`}>
                  7569965571
                  <br />
                  peddinti.saiskumar.cer19@itbhu.ac.in
                  <br />
                  <br />
                </span>
                <span className={`${styles.content_header}`}
                >
                  Kodurupaka Mallika (W)
                  <br />
                </span>
                <span className={`${styles.content}`}>
                  6302471817
                  <br />
                  kodurupaka.mallika.mec21@itbhu.ac.in
                </span>
              </div>

              {/* <div
        style={{
          width: "761.62px",
          height: "72.82px",
          left: 0,
          top: "127.18px",
          position: "absolute"
        }}
      >
        
      </div> */}
            </div>

            {/* <div
        style={{
          width: 376,
          height: "72.08px",
          left: 0,
          top: "127.92px",
          position: "absolute"
        }}
      >
        
      </div> */}
          </div>
          <div className={`${styles.event_box_header}`}
          >
            Contacts:
          </div>
          <img className={`${styles.event_image}`} alt=" "
            // style={{ width: 90, height: 90, left: 48, top: 28, position: "absolute" }}
            src={kabaddi}
          />
          <div className={`${styles.event_box_name}`}
          >
            Kabaddi
          </div>
          <div className={`${styles.rule_book_box}`}
          >
            <div
              style={{
                color: "#760E53",
                fontSize: 18,
                fontFamily: "Poppins",
                fontWeight: 600,
                wordWrap: "break-word"
              }}
            >
              <a href={KabbadiPDF}
                target="_blank"
                rel="noreferrer"
                className={`${styles.rulebook}`}
              >
                View Rulebook
              </a>
            </div>
          </div>
        </div>
      </div></div>


    // <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
    //   <div
    //     className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
    //   >
    //     <button
    //       className={`${styles.fa} ${styles.fa_times}`}
    //       id="0x"
    //       onClick={() => props.changeState(false)}
    //     >
    //       <FaTimes />
    //     </button>
    //     <div
    //       className="row"
    //       style={{ marginLeft: 'auto', marginRight: 'auto' }}
    //     >
    //       <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.rule_box}`}>
    //             <div className={`${styles.a_rule}`}>
    //               {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
    //               <div className={`${styles.image}`}>
    //                 <img
    //                   className={`${styles.img_responsive}`}
    //                   src={rules}
    //                   alt="img"
    //                 />
    //               </div>
    //               <div className={`${styles.info} ${styles.rule}`}>
    //                 <h4> Rules </h4>
    //                 <a
    //                   href={KabbadiPDF}
    //                   target="_blank"
    //                   rel="noreferrer"
    //                   className={`${styles.rulebook}`}
    //                 >
    //                   CLICK HERE FOR RULES
    //                 </a>
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.winner_box} ${styles.info}`}>
    //             <div className={`${styles.image}`}>
    //               <img
    //                 className={`${styles.img_responsive}`}
    //                 src={trophy}
    //                 alt="img"
    //               />
    //             </div>
    //             <div className={`${styles.info}`}>
    //               <h4>Kabaddi</h4>
    //               <p>
    //                 Coming Soon
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div> */}

    //       <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.contact_box}`}>
    //             <div className={`${styles.image}`}>
    //               <img
    //                 className={`${styles.img_responsive}`}
    //                 src={contacts}
    //                 alt="img"
    //               />
    //             </div>
    //             <div className={`${styles.info}`}>
    //               <h4>Contacts</h4>
    //               <p
    //                 className={`${styles.paragraph}`}
    //                 style={{ paddingBottom: '12px' }}
    //               >
    //                 <b>CAPTAIN</b>
    //                 <br />
    //                 Sateesh Kumar <br />
    //                 7354388062
    //                 <br />
    //                 sateesh.kumar.bme19@itbhu.ac.in
    //                 <br />
    //                 <br />
    //                 Keloth Tejaswini <b>(W)</b>
    //                 <br />
    //                 9177574613
    //                 <br />
    //                 keloth.tejaswini.min20@itbhu.ac.in
    //                 <br />
    //                 <br />
    //                 <br />
    //                 {/* <br /> */}
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

const Khokho = (props) => {
  return (
    <div className={`${styles.main_event_div}`}>
      {/* <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}> */}
      <div className={`${styles.events_main_block}`}>
        <div className={`${styles.events_main_block_div1}`} >
          <div
            style={{
              right: "5%",
              top: "5%",
              position: "absolute"
            }}
          >
            <button
              className={`${styles.fa} ${styles.fa_times}`}
              id="0x"
              onClick={() => props.changeState(false)}
            >
              <FaTimes />
            </button>
          </div>
          <div className={`${styles.event_white_block}`} />
          <div className={`${styles.event_line_right}`} />
          <div className={`${styles.event_line_left}`} />

          <div className={`${styles.evnet_content_box}`}>
            <div className={`${styles.event_show_block1}`}>
              <div className={`${styles.main_header}`}>
                CAPTAIN
              </div>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  left: 0,
                  top: "20%",
                  position: "absolute"
                }}
              >
                <span className={`${styles.content_header}`}>
                  yandapalli gireesh reddy
                  <br />

                </span>
                <span className={`${styles.content}`}>
                  6303606994
                  <br />
                  ygireesh.reddy.eee21@itbhu.ac.in
                  <br />
                  <br />
                </span>
                <span className={`${styles.content_header}`}
                >
                  Saloni Sharma (W)
                  <br />
                </span>
                <span className={`${styles.content}`}>
                  8392940227
                  <br />
                  saloni.sharma.civ22@itbhu.ac.in
                </span>
              </div>

              {/* <div
        style={{
          width: "761.62px",
          height: "72.82px",
          left: 0,
          top: "127.18px",
          position: "absolute"
        }}
      >
        
      </div> */}
            </div>
            <div className={`${styles.event_show_block2}`}>
              {/* <div
        style={{
          width: 430,
          height: "124.87px",
          left: 0,
          top: 0,
          position: "absolute"
        }}
      > */}
              <div className={`${styles.main_header}`}>
                VICE-CAPTAIN
              </div>
              <div
                style={{
                  width: "50%",
                  height: "100%",
                  left: 0,
                  top: "20%",
                  position: "absolute"
                }}
              >
                <span className={`${styles.content_header}`}
                >
                  Munavath Prashanth
                  <br />
                </span>
                <span className={`${styles.content}`}>
                  6301984558
                  <br />
                  munavath.prashanth.min19@itbhu.ac.in<br /><br />
                </span>

                <span className={`${styles.content_header}`}
                >
                  Jayshree Das(W)
                  <br />
                </span>
                <span className={`${styles.content}`}>
                  6000805732
                  <br />
                  jayshree.das.min19@itbhu.ac.in<br /><br />
                </span>


                {/* </div> */}
              </div>
              {/* <div
        style={{
          width: 376,
          height: "72.08px",
          left: 0,
          top: "127.92px",
          position: "absolute"
        }}
      >
        
      </div> */}
            </div></div>
          <div className={`${styles.event_box_header}`}
          >
            Contacts:
          </div>
          <img className={`${styles.event_image}`} alt=" "
            // style={{ width: 90, height: 90, left: 48, top: 28, position: "absolute" }}
            src={khokho}
          />
          <div className={`${styles.event_box_name}`}
          >
            KhoKho
          </div>
          <div className={`${styles.rule_book_box}`}
          >
            <div
              style={{
                color: "#760E53",
                fontSize: 18,
                fontFamily: "Poppins",
                fontWeight: 600,
                wordWrap: "break-word"
              }}
            >
              <a href={KhoKhoPDF}
                target="_blank"
                rel="noreferrer"
                className={`${styles.rulebook}`}
              >
                View Rulebook
              </a>
            </div>
          </div>
        </div>
      </div></div>


    // <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
    //   <div
    //     className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
    //   >
    //     <button
    //       className={`${styles.fa} ${styles.fa_times}`}
    //       id="0x"
    //       onClick={() => props.changeState(false)}
    //     >
    //       <FaTimes />
    //     </button>
    //     <div
    //       className="row"
    //       style={{ marginLeft: 'auto', marginRight: 'auto' }}
    //     >
    //       <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.rule_box}`}>
    //             <div className={`${styles.a_rule}`}>
    //               {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
    //               <div className={`${styles.image}`}>
    //                 <img
    //                   className={`${styles.img_responsive}`}
    //                   src={rules}
    //                   alt="img"
    //                 />
    //               </div>
    //               <div className={`${styles.info} ${styles.rule}`}>
    //                 <h4> Rules </h4>
    //                 <a
    //                   href={KhoKhoPDF}
    //                   target="_blank"
    //                   rel="noreferrer"
    //                   className={`${styles.rulebook}`}
    //                 >
    //                   CLICK HERE FOR RULES
    //                 </a>
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.winner_box} ${styles.info}`}>
    //             <div className={`${styles.image}`}>
    //               <img
    //                 className={`${styles.img_responsive}`}
    //                 src={trophy}
    //                 alt="img"
    //               />
    //             </div>
    //             <div className={`${styles.info}`}>
    //               <h4>Kho Kho</h4>
    //               <p>
    //                 Coming Soon
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div> */}

    //       <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.contact_box}`}>
    //             <div className={`${styles.image}`}>
    //               <img
    //                 className={`${styles.img_responsive}`}
    //                 src={contacts}
    //                 alt="img"
    //               />
    //             </div>
    //             <div className={`${styles.info}`}>
    //               <h4>Contacts</h4>
    //               <p
    //                 className={`${styles.paragraph}`}
    //                 style={{ paddingBottom: '10px' }}
    //               >
    //                 <b>CAPTAIN</b>
    //                 <br />
    //                 Rahul Lakra
    //                 <br />
    //                 8877441658
    //                 <br />
    //                 rahul.lakra.min19@itbhu.ac.in
    //                 <br />
    //                 <br />
    //                 Tejswinee Karwar <b>(W)</b>
    //                 <br />
    //                 7770880674
    //                 <br />
    //                 tejswinee.karwar.met19@itbhu.ac.in
    //                 <br />
    //                 <br />
    //                 <b>VICE-CAPTAIN</b>
    //                 <br />
    //                 Munavath Prashanth
    //                 <br />
    //                 6301984558
    //                 <br />
    //                 munavath.prashanth.min19@itbhu.ac.in
    //                 <br />
    //                 <br />
    //                 Jayshree Das <b>(W)</b>
    //                 <br />
    //                 6000805732
    //                 <br />
    //                 jayshree.das.min19@itbhu.ac.in
    //                 <br />
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

const Powerlifting = (props) => {
  return (
    <div className={`${styles.main_event_div}`}>
      {/* <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}> */}
      <div className={`${styles.events_main_block}`}>
        <div className={`${styles.events_main_block_div1}`} >
          <div
            style={{
              right: "5%",
              top: "5%",
              position: "absolute"
            }}
          >
            <button
              className={`${styles.fa} ${styles.fa_times}`}
              id="0x"
              onClick={() => props.changeState(false)}
            >
              <FaTimes />
            </button>
          </div>
          <div className={`${styles.event_white_block}`} />
          <div className={`${styles.event_line_right}`} />
          <div className={`${styles.event_line_left}`} />

          <div className={`${styles.evnet_content_box}`}>
            <div className={`${styles.event_show_block1}`}>
              <div className={`${styles.main_header}`}>
                CAPTAIN
              </div>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  left: 0,
                  top: "20%",
                  position: "absolute"
                }}
              >
                <span className={`${styles.content_header}`}>
                  Dhahal Brahma <br />

                </span>
                <span className={`${styles.content}`}>
                  9101401340
                  <br />
                  dhahal.brahma.cer19@itbhu.ac.in
                  <br />
                  <br />
                </span>

              </div>

              {/* <div
        style={{
          width: "761.62px",
          height: "72.82px",
          left: 0,
          top: "127.18px",
          position: "absolute"
        }}
      >
        
      </div> */}
            </div>
            <div className={`${styles.event_show_block2}`}>
              {/* <div
        style={{
          width: 430,
          height: "124.87px",
          left: 0,
          top: 0,
          position: "absolute"
        }}
      > */}
              <div className={`${styles.main_header}`}>
                VICE-CAPTAIN
              </div>
              <div
                style={{
                  width: "50%",
                  height: "100%",
                  left: 0,
                  top: "20%",
                  position: "absolute"
                }}
              >
                <span className={`${styles.content_header}`}
                >
                  Harsh Agrawal
                  <br />
                </span>
                <span className={`${styles.content}`}>
                  9759877847
                  <br />
                  harsh.agrawal.phe20@itbhu.ac.in<br /><br />
                </span>


                {/* </div> */}
              </div>
              {/* <div
        style={{
          width: 376,
          height: "72.08px",
          left: 0,
          top: "127.92px",
          position: "absolute"
        }}
      >
        
      </div> */}
            </div></div>
          <div className={`${styles.event_box_header}`}
          >
            Contacts:
          </div>
          <img className={`${styles.event_image}`} alt=" "
            // style={{ width: 90, height: 90, left: 48, top: 28, position: "absolute" }}
            src={powerlifting}
          />
          <div className={`${styles.event_box_name}`}
          >
            Powerlifting
          </div>
          <div className={`${styles.rule_book_box}`}
          >
            <div
              style={{
                color: "#760E53",
                fontSize: 18,
                fontFamily: "Poppins",
                fontWeight: 600,
                wordWrap: "break-word"
              }}
            >
              <a href={PowerliftingPDF}
                target="_blank"
                rel="noreferrer"
                className={`${styles.rulebook}`}
              >
                View Rulebook
              </a>
            </div>
          </div>
        </div>
      </div></div>


    // <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
    //   <div
    //     className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
    //   >
    //     <button
    //       className={`${styles.fa} ${styles.fa_times}`}
    //       id="0x"
    //       onClick={() => props.changeState(false)}
    //     >
    //       <FaTimes />
    //     </button>
    //     <div
    //       className="row"
    //       style={{ marginLeft: 'auto', marginRight: 'auto' }}
    //     >
    //       <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.rule_box}`}>
    //             <div className={`${styles.a_rule}`}>
    //               {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
    //               <div className={`${styles.image}`}>
    //                 <img
    //                   className={`${styles.img_responsive}`}
    //                   src={rules}
    //                   alt="img"
    //                 />
    //               </div>
    //               <div className={`${styles.info} ${styles.rule}`}>
    //                 <h4> Rules </h4>
    //                 <a
    //                   href={PowerliftingPDF}
    //                   target="_blank"
    //                   rel="noreferrer"
    //                   className={`${styles.rulebook}`}
    //                 >
    //                   CLICK HERE FOR RULES
    //                 </a>
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.winner_box} ${styles.info}`}>
    //             <div className={`${styles.image}`}>
    //               <img
    //                 className={`${styles.img_responsive}`}
    //                 src={trophy}
    //                 alt="img"
    //               />
    //             </div>
    //             <div className={`${styles.info}`}>
    //               <h4>Powerlifting</h4>
    //               <p>
    //                 Coming Soon
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div> */}

    //       <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.contact_box}`}>
    //             <div className={`${styles.image}`}>
    //               <img
    //                 className={`${styles.img_responsive}`}
    //                 src={contacts}
    //                 alt="img"
    //               />
    //             </div>
    //             <div className={`${styles.info}`}>
    //               <h4>Contacts</h4>
    //               <p
    //                 className={`${styles.paragraph}`}
    //                 style={{ paddingBottom: '12px' }}
    //               >
    //                 <b>CAPTAIN</b>
    //                 <br />
    //                 Dhahal Brahma
    //                 <br />
    //                 9101401340
    //                 <br />
    //                 dhahal.brahma.cer19@itbhu.ac.in
    //                 <br />
    //                 <br />
    //                 <b>VICE-CAPTAIN</b>
    //                 <br />
    //                 Harsh Agrawal <br />
    //                 9759877847
    //                 <br />
    //                 harsh.agrawal.phe20@itbhu.ac.in
    //                 <br />
    //                 <br />
    //                 <br />
    //                 {/* <br /> */}
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

const Squash = (props) => {
  return (
    <div className={`${styles.main_event_div}`}>
      {/* <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}> */}
      <div className={`${styles.events_main_block}`}>
        <div className={`${styles.events_main_block_div1}`} >
          <div
            style={{
              right: "5%",
              top: "5%",
              position: "absolute"
            }}
          >
            <button
              className={`${styles.fa} ${styles.fa_times}`}
              id="0x"
              onClick={() => props.changeState(false)}
            >
              <FaTimes />
            </button>
          </div>
          <div className={`${styles.event_white_block}`} />
          <div className={`${styles.event_line_right}`} />
          <div className={`${styles.event_line_left}`} />

          <div className={`${styles.evnet_content_box}`}>
            <div className={`${styles.event_show_block1}`}>
              <div className={`${styles.main_header}`}>
                CAPTAIN
              </div>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  left: 0,
                  top: "20%",
                  position: "absolute"
                }}
              >
                <span className={`${styles.content_header}`}>
                  Hemank Vats <br />

                </span>
                <span className={`${styles.content}`}>
                  N/A
                  <br />
                  hemank.vats.apd20@itbhu.ac.in
                  <br />
                  <br />
                </span>
                <span className={`${styles.content_header}`}>
                  Toko yanu (W) <br />

                </span>
                <span className={`${styles.content}`}>
                  8258872098
                  <br />
                  saloni.sharma.civ22@itbhu.ac.in

                  <br />
                  <br />
                </span>

              </div>

              {/* <div
        style={{
          width: "761.62px",
          height: "72.82px",
          left: 0,
          top: "127.18px",
          position: "absolute"
        }}
      >
        
      </div> */}
            </div>

            {/* <div
        style={{
          width: 376,
          height: "72.08px",
          left: 0,
          top: "127.92px",
          position: "absolute"
        }}
      >
        
      </div> */}
          </div>
          <div className={`${styles.event_box_header}`}
          >
            Contacts:
          </div>
          <img className={`${styles.event_image}`} alt=" "
            // style={{ width: 90, height: 90, left: 48, top: 28, position: "absolute" }}
            src={squash}
          />
          <div className={`${styles.event_box_name}`}
          >
            Squash
          </div>
          <div className={`${styles.rule_book_box}`}
          >
            <div
              style={{
                color: "#760E53",
                fontSize: 18,
                fontFamily: "Poppins",
                fontWeight: 600,
                wordWrap: "break-word"
              }}
            >
              <a href={SquashPDF}
                target="_blank"
                rel="noreferrer"
                className={`${styles.rulebook}`}
              >
                View Rulebook
              </a>
            </div>
          </div>
        </div>
      </div></div>


    // <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
    //   <div
    //     className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
    //   >
    //     <button
    //       className={`${styles.fa} ${styles.fa_times}`}
    //       id="0x"
    //       onClick={() => props.changeState(false)}
    //     >
    //       <FaTimes />
    //     </button>
    //     <div
    //       className="row"
    //       style={{ marginLeft: 'auto', marginRight: 'auto' }}
    //     >
    //       <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.rule_box}`}>
    //             <div className={`${styles.a_rule}`}>
    //               {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
    //               <div className={`${styles.image}`}>
    //                 <img
    //                   className={`${styles.img_responsive}`}
    //                   src={rules}
    //                   alt="img"
    //                 />
    //               </div>
    //               <div className={`${styles.info} ${styles.rule}`}>
    //                 <h4> Rules </h4>
    //                 <a
    //                   href={SquashPDF}
    //                   target="_blank"
    //                   rel="noreferrer"
    //                   className={`${styles.rulebook}`}
    //                 >
    //                   CLICK HERE FOR RULES
    //                 </a>
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.winner_box} ${styles.info}`}>
    //             <div className={`${styles.image}`}>
    //               <img
    //                 className={`${styles.img_responsive}`}
    //                 src={trophy}
    //                 alt="img"
    //               />
    //             </div>
    //             <div className={`${styles.info}`}>
    //               <h4>Squash</h4>
    //               <p>
    //                 Coming Soon
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div> */}

    //       <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.contact_box}`}>
    //             <div className={`${styles.image}`}>
    //               <img
    //                 className={`${styles.img_responsive}`}
    //                 src={contacts}
    //                 alt="img"
    //               />
    //             </div>
    //             <div className={`${styles.info}`}>
    //               <h4>Contacts</h4>
    //               <p
    //                 className={`${styles.paragraph}`}
    //                 style={{ paddingBottom: '12px' }}
    //               >
    //                 <b>CAPTAIN</b>
    //                 <br />
    //                 B Rohith Netha <br />
    //                 8331891203
    //                 <br />
    //                 brohith.netha.mec19@itbhu.ac.in
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 {/* <br /> */}
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

const TableTennis = (props) => {
  return (
    <div className={`${styles.main_event_div}`}>
      {/* <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}> */}
      <div className={`${styles.events_main_block}`}>
        <div className={`${styles.events_main_block_div1}`} >
          <div
            style={{
              right: "5%",
              top: "5%",
              position: "absolute"
            }}
          >
            <button
              className={`${styles.fa} ${styles.fa_times}`}
              id="0x"
              onClick={() => props.changeState(false)}
            >
              <FaTimes />
            </button>
          </div>
          <div className={`${styles.event_white_block}`} />
          <div className={`${styles.event_line_right}`} />
          <div className={`${styles.event_line_left}`} />

          <div className={`${styles.evnet_content_box}`}>
            <div className={`${styles.event_show_block1}`}>
              <div className={`${styles.main_header}`}>
                CAPTAIN
              </div>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  left: 0,
                  top: "20%",
                  position: "absolute"
                }}
              >
                <span className={`${styles.content_header}`}>
                  Yashwardhan Sable <br />

                </span>
                <span className={`${styles.content}`}>
                  8839679648
                  <br />
                  yashwardhan.sable.phy20@itbhu.ac.in

                  <br />
                  <br />
                </span>
                <span className={`${styles.content_header}`}
                >
                  Guddaji Sri Prada (W)
                  <br />
                </span>
                <span className={`${styles.content}`}>
                  N/A
                  <br />
                  guddaji.sriprada.cse20@itbhu.ac.in
                </span>
              </div>

              {/* <div
        style={{
          width: "761.62px",
          height: "72.82px",
          left: 0,
          top: "127.18px",
          position: "absolute"
        }}
      >
        
      </div> */}
            </div>
          </div>
          <div className={`${styles.event_box_header}`}
          >
            Contacts:
          </div>
          <img className={`${styles.event_image}`} alt=" "
            // style={{ width: 90, height: 90, left: 48, top: 28, position: "absolute" }}
            src={tabletennis}
          />
          <div className={`${styles.event_box_name}`}
          >
            TableTennis
          </div>
          <div className={`${styles.rule_book_box}`}
          >
            <div
              style={{
                color: "#760E53",
                fontSize: 18,
                fontFamily: "Poppins",
                fontWeight: 600,
                wordWrap: "break-word"
              }}
            >
              <a href={TableTennisPDF}
                target="_blank"
                rel="noreferrer"
                className={`${styles.rulebook}`}
              >
                View Rulebook
              </a>
            </div>
          </div>
        </div>
      </div></div>



    // <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
    //   <div
    //     className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
    //   >
    //     <button
    //       className={`${styles.fa} ${styles.fa_times}`}
    //       id="0x"
    //       onClick={() => props.changeState(false)}
    //     >
    //       <FaTimes />
    //     </button>
    //     <div
    //       className="row"
    //       style={{ marginLeft: 'auto', marginRight: 'auto' }}
    //     >
    //       <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.rule_box}`}>
    //             <div className={`${styles.a_rule}`}>
    //               {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
    //               <div className={`${styles.image}`}>
    //                 <img
    //                   className={`${styles.img_responsive}`}
    //                   src={rules}
    //                   alt="img"
    //                 />
    //               </div>
    //               <div className={`${styles.info} ${styles.rule}`}>
    //                 <h4> Rules </h4>
    //                 <a
    //                   href={TableTennisPDF}
    //                   target="_blank"
    //                   rel="noreferrer"
    //                   className={`${styles.rulebook}`}
    //                 >
    //                   CLICK HERE FOR RULES
    //                 </a>
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.winner_box} ${styles.info}`}>
    //             <div className={`${styles.image}`}>
    //               <img
    //                 className={`${styles.img_responsive}`}
    //                 src={trophy}
    //                 alt="img"
    //               />
    //             </div>
    //             <div className={`${styles.info}`}>
    //               <h4>Table Tennis</h4>
    //               <p>
    //                 Coming Soon
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div> */}

    //       <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.contact_box}`}>
    //             <div className={`${styles.image}`}>
    //               <img
    //                 className={`${styles.img_responsive}`}
    //                 src={contacts}
    //                 alt="img"
    //               />
    //             </div>
    //             <div className={`${styles.info}`}>
    //               <h4>Contacts</h4>
    //               <p
    //                 className={`${styles.paragraph}`}
    //                 style={{ paddingBottom: '12px' }}
    //               >
    //                 <b>CAPTAIN</b>
    //                 <br />
    //                 Sachin Arya <br />
    //                 7073524926
    //                 <br />
    //                 sachinarya.mec18@iitbhu.ac.in
    //                 <br />
    //                 <br />
    //                 Kajal Pathriyal <b>(W)</b>
    //                 <br />
    //                 8127141299
    //                 <br />
    //                 kajal.pathriyal.eee19@itbhu.ac.in
    //                 <br />
    //                 <br />
    //                 <br />
    //                 {/* <br /> */}
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

const Taekwondo = (props) => {
  return (
    <div className={`${styles.main_event_div}`}>
      {/* <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}> */}
      <div className={`${styles.events_main_block}`}>
        <div className={`${styles.events_main_block_div1}`} >
          <div
            style={{
              right: "5%",
              top: "5%",
              position: "absolute"
            }}
          >
            <button
              className={`${styles.fa} ${styles.fa_times}`}
              id="0x"
              onClick={() => props.changeState(false)}
            >
              <FaTimes />
            </button>
          </div>
          <div className={`${styles.event_white_block}`} />
          <div className={`${styles.event_line_right}`} />
          <div className={`${styles.event_line_left}`} />

          <div className={`${styles.evnet_content_box}`}>
            <div className={`${styles.event_show_block1}`}>
              <div className={`${styles.main_header}`}>
                CAPTAIN
              </div>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  left: 0,
                  top: "20%",
                  position: "absolute"
                }}
              >
                <span className={`${styles.content_header}`}>
                  Divyanshu Bharti <br />

                </span>
                <span className={`${styles.content}`}>
                  N/A
                  <br />
                  divyanshu.bharti.chy21@itbhu.ac.in
                  <br />
                  <br />
                </span>
                <span className={`${styles.content_header}`}
                >
                  Sameeksha Murdia (W)
                  <br />
                </span>
                <span className={`${styles.content}`}>
                  9660339180
                  <br />
                  sameeksha.murdia.phy20@itbhu.ac.in
                </span>
              </div>

              {/* <div
        style={{
          width: "761.62px",
          height: "72.82px",
          left: 0,
          top: "127.18px",
          position: "absolute"
        }}
      >
        
      </div> */}
            </div>
          </div>
          <div className={`${styles.event_box_header}`}
          >
            Contacts:
          </div>
          <img className={`${styles.event_image}`} alt=" "
            // style={{ width: 90, height: 90, left: 48, top: 28, position: "absolute" }}
            src={taekwondo}
          />
          <div className={`${styles.event_box_name}`}
          >
            Taekwondo
          </div>
          <div className={`${styles.rule_book_box}`}
          >
            <div
              style={{
                color: "#760E53",
                fontSize: 18,
                fontFamily: "Poppins",
                fontWeight: 600,
                wordWrap: "break-word"
              }}
            >
              <a href={TaekwondoPDF}
                target="_blank"
                rel="noreferrer"
                className={`${styles.rulebook}`}
              >
                View Rulebook
              </a>
            </div>
          </div>
        </div>
      </div></div>



    // <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
    //   <div
    //     className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
    //   >
    //     <button
    //       className={`${styles.fa} ${styles.fa_times}`}
    //       id="0x"
    //       onClick={() => props.changeState(false)}
    //     >
    //       <FaTimes />
    //     </button>
    //     <div
    //       className="row"
    //       style={{ marginLeft: 'auto', marginRight: 'auto' }}
    //     >
    //       <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.rule_box}`}>
    //             <div className={`${styles.a_rule}`}>
    //               {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
    //               <div className={`${styles.image}`}>
    //                 <img
    //                   className={`${styles.img_responsive}`}
    //                   src={rules}
    //                   alt="img"
    //                 />
    //               </div>
    //               <div className={`${styles.info} ${styles.rule}`}>
    //                 <h4> Rules </h4>
    //                 <a
    //                   href={TaekwondoPDF}
    //                   target="_blank"
    //                   rel="noreferrer"
    //                   className={`${styles.rulebook}`}
    //                 >
    //                   CLICK HERE FOR RULES
    //                 </a>
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.winner_box} ${styles.info}`}>
    //             <div className={`${styles.image}`}>
    //               <img
    //                 className={`${styles.img_responsive}`}
    //                 src={trophy}
    //                 alt="img"
    //               />
    //             </div>
    //             <div className={`${styles.info}`}>
    //               <h4>Taekwondo</h4>
    //               <p>
    //                 Coming Soon
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div> */}

    //       <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.contact_box}`}>
    //             <div className={`${styles.image}`}>
    //               <img
    //                 className={`${styles.img_responsive}`}
    //                 src={contacts}
    //                 alt="img"
    //               />
    //             </div>
    //             <div className={`${styles.info}`}>
    //               <h4>Contacts</h4>
    //               <p
    //                 className={`${styles.paragraph}`}
    //                 style={{ paddingBottom: '12px' }}
    //               >
    //                 <b>CAPTAIN</b>
    //                 <br />
    //                 Suraj Gupta <br />
    //                 7737877228
    //                 <br />
    //                 suraj.gupta.che19@itbhu.ac.in
    //                 <br />
    //                 <br />
    //                 Anjali. C <b>(W)</b>
    //                 <br />
    //                 9207970160
    //                 <br />
    //                 anjalic.civ18@itbhu.ac.in
    //                 <br />
    //                 <br />
    //                 <br />
    //                 {/* <br /> */}
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

const Tennis = (props) => {
  return (
    <div className={`${styles.main_event_div}`}>
      {/* <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}> */}
      <div className={`${styles.events_main_block}`}>
        <div className={`${styles.events_main_block_div1}`} >
          <div
            style={{
              right: "5%",
              top: "5%",
              position: "absolute"
            }}
          >
            <button
              className={`${styles.fa} ${styles.fa_times}`}
              id="0x"
              onClick={() => props.changeState(false)}
            >
              <FaTimes />
            </button>
          </div>
          <div className={`${styles.event_white_block}`} />
          <div className={`${styles.event_line_right}`} />
          <div className={`${styles.event_line_left}`} />

          <div className={`${styles.evnet_content_box}`}>
            <div className={`${styles.event_show_block1}`}>
              <div className={`${styles.main_header}`}>
                CAPTAIN
              </div>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  left: 0,
                  top: "20%",
                  position: "absolute"
                }}
              >
                <span className={`${styles.content_header}`}>
                  Trinabh Vashistha <br />

                </span>
                <span className={`${styles.content}`}>
                  8502959213
                  <br />
                  trinabh.vashistha.min21@itbhu.ac.in
                  <br />
                  <br />
                </span>
                <span className={`${styles.content_header}`}
                >
                  Pranjali Gupta (W)
                  <br />
                </span>
                <span className={`${styles.content}`}>
                  N/A
                  <br />
                  pranjali.gupta.mst19@itbhu.ac.in

                </span>
              </div>

              {/* <div
        style={{
          width: "761.62px",
          height: "72.82px",
          left: 0,
          top: "127.18px",
          position: "absolute"
        }}
      >
        
      </div> */}
            </div>
          </div>
          <div className={`${styles.event_box_header}`}
          >
            Contacts:
          </div>
          <img className={`${styles.event_image}`} alt=" "
            // style={{ width: 90, height: 90, left: 48, top: 28, position: "absolute" }}
            src={tennis}
          />
          <div className={`${styles.event_box_name}`}
          >
            Tennis
          </div>
          <div className={`${styles.rule_book_box}`}
          >
            <div
              style={{
                color: "#760E53",
                fontSize: 18,
                fontFamily: "Poppins",
                fontWeight: 600,
                wordWrap: "break-word"
              }}
            >
              <a href={TennisPDF}
                target="_blank"
                rel="noreferrer"
                className={`${styles.rulebook}`}
              >
                View Rulebook
              </a>
            </div>
          </div>
        </div>
      </div></div>


    // <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
    //   <div
    //     className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
    //   >
    //     <button
    //       className={`${styles.fa} ${styles.fa_times}`}
    //       id="0x"
    //       onClick={() => props.changeState(false)}
    //     >
    //       <FaTimes />
    //     </button>
    //     <div
    //       className="row"
    //       style={{ marginLeft: 'auto', marginRight: 'auto' }}
    //     >
    //       <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.rule_box}`}>
    //             <div className={`${styles.a_rule}`}>
    //               {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
    //               <div className={`${styles.image}`}>
    //                 <img
    //                   className={`${styles.img_responsive}`}
    //                   src={rules}
    //                   alt="img"
    //                 />
    //               </div>
    //               <div className={`${styles.info} ${styles.rule}`}>
    //                 <h4> Rules </h4>
    //                 <a
    //                   href={TennisPDF}
    //                   target="_blank"
    //                   rel="noreferrer"
    //                   className={`${styles.rulebook}`}
    //                 >
    //                   CLICK HERE FOR RULES
    //                 </a>
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.winner_box} ${styles.info}`}>
    //             <div className={`${styles.image}`}>
    //               <img
    //                 className={`${styles.img_responsive}`}
    //                 src={trophy}
    //                 alt="img"
    //               />
    //             </div>
    //             <div className={`${styles.info}`}>
    //               <h4>Tennis</h4>
    //               <p>
    //                 Coming Soon
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div> */}

    //       <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.contact_box}`}>
    //             <div className={`${styles.image}`}>
    //               <img
    //                 className={`${styles.img_responsive}`}
    //                 src={contacts}
    //                 alt="img"
    //               />
    //             </div>
    //             <div className={`${styles.info}`}>
    //               <h4>Contacts</h4>
    //               <p
    //                 className={`${styles.paragraph}`}
    //                 style={{ paddingBottom: '12px' }}
    //               >
    //                 <b>CAPTAIN</b>
    //                 <br />
    //                 Baidhar Soren <br />
    //                 6372843510
    //                 <br />
    //                 baidhar.srn@gmail.com
    //                 <br />
    //                 <br />
    //                 Charmitha <b>(W)</b>
    //                 <br />
    //                 9666165321
    //                 <br />
    //                 charmithakrishna2002@gmail.com
    //                 <br />
    //                 <br />
    //                 <br />
    //                 {/* <br /> */}
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

const Volleyball = (props) => {
  return (
    <div className={`${styles.main_event_div}`}>
      {/* <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}> */}
      <div className={`${styles.events_main_block}`}>
        <div className={`${styles.events_main_block_div1}`} >
          <div
            style={{
              right: "5%",
              top: "5%",
              position: "absolute"
            }}
          >
            <button
              className={`${styles.fa} ${styles.fa_times}`}
              id="0x"
              onClick={() => props.changeState(false)}
            >
              <FaTimes />
            </button>
          </div>
          <div className={`${styles.event_white_block}`} />
          <div className={`${styles.event_line_right}`} />
          <div className={`${styles.event_line_left}`} />

          <div className={`${styles.evnet_content_box}`}>
            <div className={`${styles.event_show_block1}`}>
              <div className={`${styles.main_header}`}>
                CAPTAIN
              </div>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  left: 0,
                  top: "20%",
                  position: "absolute"
                }}
              >
                <span className={`${styles.content_header}`}>
                  Pawan Kumar<br />

                </span>
                <span className={`${styles.content}`}>
                  9110142092
                  <br />
                  pawan.kumar.ece20@itbhu.ac.in
                  <br />
                  <br />
                </span>
                <span className={`${styles.content_header}`}
                >
                  Boddu Bhavana (W)
                  <br />
                </span>
                <span className={`${styles.content}`}>
                  9390085089
                  <br />
                  boddu.bhavana.mec20@itbhu.ac.in
                </span>
              </div>

              {/* <div
        style={{
          width: "761.62px",
          height: "72.82px",
          left: 0,
          top: "127.18px",
          position: "absolute"
        }}
      >
        
      </div> */}
            </div>
            <div className={`${styles.event_show_block2}`}>
              {/* <div
        style={{
          width: 430,
          height: "124.87px",
          left: 0,
          top: 0,
          position: "absolute"
        }}
      > */}
              <div className={`${styles.main_header}`}>
                VICE-CAPTAIN
              </div>
              <div
                style={{
                  width: "50%",
                  height: "100%",
                  left: 0,
                  top: "20%",
                  position: "absolute"
                }}
              >
                <span className={`${styles.content_header}`}
                >
                  Mukul jaiman
                  <br />
                </span>
                <span className={`${styles.content}`}>
                  8302122511
                  <br />
                  mukul.jaiman.civ19@itbhu.ac.in<br /><br />
                </span>
                <span className={`${styles.content_header}`}
                >
                  Priya Rathore(W)
                  <br />
                </span>
                <span className={`${styles.content}`}>
                  8225934951
                  <br />
                  priya.rathore.cer19@itbhu.ac.in<br /><br />
                </span>


                {/* </div> */}
              </div>
              {/* <div
        style={{
          width: 376,
          height: "72.08px",
          left: 0,
          top: "127.92px",
          position: "absolute"
        }}
      >
        
      </div> */}
            </div></div>
          <div className={`${styles.event_box_header}`}
          >
            Contacts:
          </div>
          <img className={`${styles.event_image}`} alt=" "
            // style={{ width: 90, height: 90, left: 48, top: 28, position: "absolute" }}
            src={volleyball}
          />
          <div className={`${styles.event_box_name}`}
          >
            Volleyball
          </div>
          <div className={`${styles.rule_book_box}`}
          >
            <div
              style={{
                color: "#760E53",
                fontSize: 18,
                fontFamily: "Poppins",
                fontWeight: 600,
                wordWrap: "break-word"
              }}
            >
              <a href={VolleyballPDF}
                target="_blank"
                rel="noreferrer"
                className={`${styles.rulebook}`}
              >
                View Rulebook
              </a>
            </div>
          </div>
        </div>
      </div></div>


    // <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
    //   <div
    //     className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
    //   >
    //     <button
    //       className={`${styles.fa} ${styles.fa_times}`}
    //       id="0x"
    //       onClick={() => props.changeState(false)}
    //     >
    //       <FaTimes />
    //     </button>
    //     <div
    //       className="row"
    //       style={{ marginLeft: 'auto', marginRight: 'auto' }}
    //     >
    //       <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.rule_box}`}>
    //             <div className={`${styles.a_rule}`}>
    //               {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
    //               <div className={`${styles.image}`}>
    //                 <img
    //                   className={`${styles.img_responsive}`}
    //                   src={rules}
    //                   alt="img"
    //                 />
    //               </div>
    //               <div className={`${styles.info} ${styles.rule}`}>
    //                 <h4> Rules </h4>
    //                 <a
    //                   href={VolleyballPDF}
    //                   target="_blank"
    //                   rel="noreferrer"
    //                   className={`${styles.rulebook}`}
    //                 >
    //                   CLICK HERE FOR RULES
    //                 </a>
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.winner_box} ${styles.info}`}>
    //             <div className={`${styles.image}`}>
    //               <img
    //                 className={`${styles.img_responsive}`}
    //                 src={trophy}
    //                 alt="img"
    //               />
    //             </div>
    //             <div className={`${styles.info}`}>
    //               <h4>Volleyball</h4>
    //               <p>
    //                 Coming Soon
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div> */}

    //       <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.contact_box}`}>
    //             <div className={`${styles.image}`}>
    //               <img
    //                 className={`${styles.img_responsive}`}
    //                 src={contacts}
    //                 alt="img"
    //               />
    //             </div>
    //             <div className={`${styles.info}`}>
    //               <h4>Contacts</h4>
    //               <p
    //                 className={`${styles.paragraph}`}
    //                 style={{ paddingBottom: '10px' }}
    //               >
    //                 <b>CAPTAIN</b>
    //                 <br />
    //                 Shivkaran Singh Ranawat <br />
    //                 8824018065
    //                 <br />
    //                 shivkarans.ranawat.phe19@itbhu.ac.in <br />
    //                 <br />
    //                 Yashika lamba <b>(W)</b>
    //                 <br />
    //                 8076365550
    //                 <br />
    //                 yashika.lamba.phe19@itbhu.ac.in
    //                 <br />
    //                 <br />
    //                 <b>VICE-CAPTAIN</b>
    //                 <br />
    //                 Mukul jaiman <br />
    //                 8302122511
    //                 <br />
    //                 mukul.jaiman.civ19@itbhu.ac.in
    //                 <br />
    //                 <br />
    //                 Priya Rathore <b>(W)</b>
    //                 <br />
    //                 8225934951
    //                 <br />
    //                 priya.rathore.cer19@itbhu.ac.in
    //                 <br />
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

const WeightLifting = (props) => {
  return (
    <div className={`${styles.main_event_div}`}>
      {/* <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}> */}
      <div className={`${styles.events_main_block}`}>
        <div className={`${styles.events_main_block_div1}`} >
          <div
            style={{
              right: "5%",
              top: "5%",
              position: "absolute"
            }}
          >
            <button
              className={`${styles.fa} ${styles.fa_times}`}
              id="0x"
              onClick={() => props.changeState(false)}
            >
              <FaTimes />
            </button>
          </div>
          <div className={`${styles.event_white_block}`} />
          <div className={`${styles.event_line_right}`} />
          <div className={`${styles.event_line_left}`} />

          <div className={`${styles.evnet_content_box}`}>
            <div className={`${styles.event_show_block1}`}>
              <div className={`${styles.main_header}`}>
                CAPTAIN
              </div>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  left: 0,
                  top: "20%",
                  position: "absolute"
                }}
              >
                <span className={`${styles.content_header}`}>
                  Harsh Agrawal <br />

                </span>
                <span className={`${styles.content}`}>
                  9759877847
                  <br />
                  harshagrawal789789@gmail.com
                  <br />
                  <br />
                </span>

              </div>

              {/* <div
        style={{
          width: "761.62px",
          height: "72.82px",
          left: 0,
          top: "127.18px",
          position: "absolute"
        }}
      >
        
      </div> */}
            </div>
            <div className={`${styles.event_show_block2}`}>
              {/* <div
        style={{
          width: 430,
          height: "124.87px",
          left: 0,
          top: 0,
          position: "absolute"
        }}
      > */}
              <div className={`${styles.main_header}`}>
                VICE-CAPTAIN
              </div>
              <div
                style={{
                  width: "50%",
                  height: "100%",
                  left: 0,
                  top: "20%",
                  position: "absolute"
                }}
              >
                <span className={`${styles.content_header}`}
                >
                  Uday Kiran
                  <br />
                </span>
                <span className={`${styles.content}`}>
                  78976 10891
                  <br />
                  moningi.udaykiran.mst19@itbhu.ac.in<br /><br />
                </span>


                {/* </div> */}
              </div>
              {/* <div
        style={{
          width: 376,
          height: "72.08px",
          left: 0,
          top: "127.92px",
          position: "absolute"
        }}
      >
        
      </div> */}
            </div></div>
          <div className={`${styles.event_box_header}`}
          >
            Contacts:
          </div>
          <img className={`${styles.event_image}`} alt=" "
            // style={{ width: 90, height: 90, left: 48, top: 28, position: "absolute" }}
            src={weightlifting}
          />
          <div className={`${styles.event_box_name}`}
          >
            WeightLifting
          </div>
          <div className={`${styles.rule_book_box}`}
          >
            <div
              style={{
                color: "#760E53",
                fontSize: 18,
                fontFamily: "Poppins",
                fontWeight: 600,
                wordWrap: "break-word"
              }}
            >
              <a href={WeightliftingPDF}
                target="_blank"
                rel="noreferrer"
                className={`${styles.rulebook}`}
              >
                View Rulebook
              </a>
            </div>
          </div>
        </div>
      </div></div>


    // <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
    //   <div
    //     className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
    //   >
    //     <button
    //       className={`${styles.fa} ${styles.fa_times}`}
    //       id="0x"
    //       onClick={() => props.changeState(false)}
    //     >
    //       <FaTimes />
    //     </button>
    //     <div
    //       className="row"
    //       style={{ marginLeft: 'auto', marginRight: 'auto' }}
    //     >
    //       <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.rule_box}`}>
    //             <div className={`${styles.a_rule}`}>
    //               {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
    //               <div className={`${styles.image}`}>
    //                 <img
    //                   className={`${styles.img_responsive}`}
    //                   src={rules}
    //                   alt="img"
    //                 />
    //               </div>
    //               <div className={`${styles.info} ${styles.rule}`}>
    //                 <h4> Rules </h4>
    //                 <a
    //                   href={WeightliftingPDF}
    //                   target="_blank"
    //                   rel="noreferrer"
    //                   className={`${styles.rulebook}`}
    //                 >
    //                   CLICK HERE FOR RULES
    //                 </a>
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.winner_box} ${styles.info}`}>
    //             <div className={`${styles.image}`}>
    //               <img
    //                 className={`${styles.img_responsive}`}
    //                 src={trophy}
    //                 alt="img"
    //               />
    //             </div>
    //             <div className={`${styles.info}`}>
    //               <h4>Weight Lifting</h4>
    //               <p>
    //                 Coming Soon
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div> */}

    //       <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
    //         <div className={`${styles.event_block}`}>
    //           <div className={`${styles.contact_box}`}>
    //             <div className={`${styles.image}`}>
    //               <img
    //                 className={`${styles.img_responsive}`}
    //                 src={contacts}
    //                 alt="img"
    //               />
    //             </div>
    //             <div className={`${styles.info}`}>
    //               <h4>Contacts</h4>
    //               <p
    //                 className={`${styles.paragraph} ${styles.paragraph1}`}
    //                 style={{ paddingBottom: '15px' }}
    //               >
    //                 <b>CAPTAIN</b>
    //                 <br />
    //                 Pulkit Khandelwal <br />
    //                 6350078788
    //                 <br />
    //                 pkhandelwal.civ18@itbhu.ac.in
    //                 <br />
    //                 <br />
    //                 <b>VICE-CAPTAIN</b>
    //                 <br />
    //                 Uday Kiran <br />
    //                 78976 10891
    //                 <br />
    //                 moningi.udaykiran.mst19@itbhu.ac.in
    //                 <br />
    //                 <br />
    //                 <br />
    //                 {/* <br /> */}
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
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