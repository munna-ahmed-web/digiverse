import { useState } from "react";
import Modal from "react-bootstrap/Modal";
const testSymptom = [
  "I have Headache",
  "I have Footache",
  "I have Cold",
  "I have High fever",
  "I have Stomach ache",
  "I have Sore throat",
  "I have Cough",
  "I have Fatigue",
  "I have Nausea",
  "I have Dizziness",
  "I have Back pain",
  "I have Muscle pain",
  "I have Joint pain",
  "I have Difficulty breathing",
  "I have Chest pain",
  "I have Vomiting",
  "I have Diarrhea",
];
const SymptomHistory = () => {
    const [isSymptomModalOpen, setIsSymptomModalOpen] = useState(false);
    const handleModal = () =>{
        setIsSymptomModalOpen((prev)=>!prev)
    }
  return (
    <div>
      <div className="main_content">
        <div className="main">
          <div className="symtomp_main">
            <div className="symtomp_content">
              <div className="hospital_content_header symtomp_header">
                <button
                  className="offcanvas_toggle_btn d-lg-none"
                  data-bs-target="#myoffcanvas"
                  data-bs-toggle="offcanvas"
                >
                  <i className="fa-solid fa-bars"></i>
                </button>
                <div className="hospital_search symtomp_h_form_div">
                  <form action="#">
                    <input
                      className="symptom_search"
                      type="search"
                      placeholder="search"
                    />
                    <button className="symptom_search_btn">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </form>
                </div>
                <div className="hospital_profile">
                  <button className="symptom_search_btn_profile">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                  <p>
                    <i className="fa-sharp fa-solid fa-bell"></i>
                  </p>
                  <a className="user_pannel" href="#">
                    <img
                      src="../../../../src/assets/predictionAssets/images/profile/profile1(1).png"
                      alt=""
                    />
                  </a>
                  <div className="user_account">
                    <a className="dahsboard btn_blue" href="#">
                      User Name
                    </a>
                    <a className="user_logout btn_blue" href="#">
                      Log Out
                    </a>
                  </div>
                </div>
              </div>

              <div className="symtomp_body symtomp_history_body">
                <div className="symtomp_body_inner">
                  <div className="symtomp_body_title">
                    <h1 className="title_main">Department Suggestion Portal</h1>
                    <div className="share_get_div">
                      <p>Share Symptoms | Get Suggestions</p>
                    </div>
                    <p className="minimum_share minimum_share_history">
                      Symtomp History
                    </p>
                  </div>
                  {/* <!------ History Table -------> */}
                  <div className="s_history_table">
                    <table className="history_table">
                      <thead className="h_table_head">
                        <tr>
                          <th>
                            <input className="history_check" type="checkbox" />
                          </th>
                          <th>SYMPTOMS ID</th>
                          <th>SYMPTOMS</th>
                          <th>PREDICTION</th>
                          <th>DATE</th>
                        </tr>
                      </thead>
                      <tbody className="h_table_body">
                        <tr>
                          <td>
                            <input className="history_check" type="checkbox" />
                          </td>
                          <td>#1231231231241</td>
                          <td>
                            <a
                              className="popup_open_symptom"
                              id="popup1"
                              href="#"
                              onClick={handleModal}
                            >
                              <span>I have headache</span>, <span>eyeache</span>{" "}
                              , <span>High fever</span>...
                            </a>
                          </td>
                          <td>Infectious Disease Department</td>
                          <td>12 Aug 2022 - 12:25 am</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* symptom pop up model */}
                  {/* {isSymptomModalOpen && (
                    <div
                      className="history_popup symtomp_popup_open"
                      id="popup1"
                    >
                      <div className="history_popup_inner symtomp_popup_inner">
                        <div className="popup_header">
                          <h3 className="popup_depertment">My Symptoms</h3>
                          <button
                            className="dep_popup_close symp_pop_close"
                            onClick={handleModal}
                          >
                            <i className="fa-solid fa-xmark"></i>
                          </button>
                        </div>
                        <div className="history_popup_body">
                          <p>I have headache</p>
                          <p>eyeache</p>
                          <p>High fever</p>
                          <p>More</p>
                          <p>More</p>
                          <p>More</p>
                        </div>
                        <div className="history_popup_btn">
                          <button className="popup_ok">Ok</button>
                        </div>
                      </div>
                    </div>
                  )} */}
                  <Modal show={isSymptomModalOpen} onHide={isSymptomModalOpen} centered>
                    <div
                      className="history_popup symtomp_popup_open"
                      id="popup1"
                    >
                      <div className="history_popup_inner symtomp_popup_inner">
                        <div className="popup_header">
                          <h3 className="popup_depertment">My Symptoms</h3>
                          <button
                            className="dep_popup_close symp_pop_close"
                            onClick={handleModal}
                          >
                            <i className="fa-solid fa-xmark"></i>
                          </button>
                        </div>
                        <div className="history_popup_body">
                          {testSymptom.map((singleSymp , index)=>{
                            return <p key={index+10}>{singleSymp}</p>
                          })}

                        </div>
                        <div className="history_popup_btn">
                          <button onClick={handleModal} className="popup_ok">Ok</button>
                        </div>
                      </div>
                    </div>
                  </Modal>

                  {/* <!------ footer section -------> */}
                  <div className="table_more_info">
                    <form action="#">
                      <div className="t_more_left">
                        <select className="left_select" name="#" id="#">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="10" selected>
                            10
                          </option>
                        </select>
                        <span className="left_item">Items per page</span>
                        <span className="left_count">1-10</span>
                        <span className="left_total"> of 200 items</span>
                      </div>
                      <div className="t_more_right">
                        <select className="right_select" name="#" id="#">
                          <option value="1" selected>
                            1
                          </option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                        <span>of 44 pages</span>
                        <button className="btn_prev" type="submit">
                          <i className="fa-solid fa-angle-left"></i>
                        </button>
                        <button className="btn_next" type="submit">
                          <i className="fa-solid fa-angle-right"></i>
                        </button>
                      </div>
                    </form>
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

export default SymptomHistory;
