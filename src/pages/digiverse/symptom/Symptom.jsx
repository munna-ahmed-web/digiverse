import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import Modal from "react-bootstrap/Modal";
import { extractSymptomNumber } from "../../../utils/utils";
const options = [
  { value: "I have Headache", label: "I have Headache" },
  { value: "I have Footache", label: "I have Footache" },
  { value: "I have Cold", label: "I have Cold" },
  { value: "I have High fever", label: "I have High fever" },
  { value: "I have Chest Pain", label: "I have Chest Pain" },
];

const sympField = [
  { disable: false, name: "Symptom 1", selNo: 1 },
  { disable: true, name: "Symptom 2", selNo: 2 },
  { disable: true, name: "Symptom 3", selNo: 3 },
  { disable: true, name: "Symptom 4", selNo: 4 },
  { disable: true, name: "Symptom 5", selNo: 5 },
];
const initialSymptomInfo = {
  symptom1 : '',
  symptom2 : '',
  symptom3 : '',
  symptom4 : '',
  symptom5 : '',
  symptom6 : '',
  symptom7 : '',
  symptom8 : '',
  symptom9 : '',
  symptom10 : '',
  symptom11 : '',
  symptom12 : '',
  symptom13 : '',
  symptom14 : '',
  symptom15 : '',
  symptom16 : '',
  symptom17 : '',
}
const Symptom = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [symptomInfo, setSymptomInfo] = useState(initialSymptomInfo);
  const [initialSymptomField, setInitialSymptomField] = useState(sympField);
  const navigate = useNavigate();


  const handleModal = (event) => {
    event.preventDefault();
    console.log(symptomInfo)
    setIsModalOpen((prev) => !prev);
  }; 

  const handleChange = (val, { name }) => {
    setSymptomInfo((prev) => {
      return {
        ...prev,
        [name]: val.value,
      };
    });
    const sympNumber = extractSymptomNumber(name);

    if (initialSymptomField[sympNumber]){
            if (initialSymptomField[sympNumber].disable) {
              const updatedSymtomField = [...initialSymptomField];
              updatedSymtomField[sympNumber] = {
                ...updatedSymtomField[sympNumber],
                disable: false,
              };
              setInitialSymptomField(updatedSymtomField);
            }
    }

  };

  const handleAddMoreSymptom = (e) =>{
    e.preventDefault()
    const  lastProperty = `symptom${initialSymptomField.length}`;
    if (symptomInfo[lastProperty]) {
      if (initialSymptomField.length < 17) {
        setInitialSymptomField((prev) => {
          return [
            ...prev,
            {
              disable: false,
              name: `Symptom ${prev.length + 1}`,
              selNo: prev.length + 1,
            },
          ];
        });
      }
    }



  }


  const handleNearestHospital = () =>{
    navigate("/prediction/nearestHospital");
  }

  return (
    <div>
      {/* <!-- Symptom header --> */}
      <div className="hospital_content_header symtomp_header">
        <button
          className="offcanvas_toggle_btn d-lg-none"
          data-bs-target="#myoffcanvas"
          data-bs-toggle="offcanvas"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
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

      {/* <!-- Symptom body --> */}
      <div className="symtomp_body">
        <div className="symtomp_body_inner">
          <div className="symtomp_body_title">
            <h1 className="title_main">Department Suggestion Portal</h1>
            <div className="share_get_div">
              <p>Share symptoms | Get suggestions</p>
            </div>
          </div>
          {/* <!------ Select box -------> */}
          <div className="symtomp_body_content">
            <form className="symtomp_select_form" action="#">
              <div className="symtomp_select_group">
                {initialSymptomField.map((singleField) => {
                  return (
                    <div className="symtomp_select" key={singleField.selNo + 5}>
                      <h6 className="symtomp_number">{singleField.name}</h6>
                      <Select
                        options={options}
                        isDisabled={singleField.disable}
                        onChange={handleChange}
                        name={`symptom${singleField.selNo}`}
                        boxNo={singleField.selNo}
                        styles={{
                          control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: state.isFocused
                              ? "#182D5A"
                              : "#182D5A",
                          }),
                        }}
                      />
                    </div>
                  );
                })}
                {/* -----------single select symptom----------- */}
                {/* <div className="symtomp_select">
                  <h6 className="symtomp_number">Symptom 1:</h6>
                  <select
                    name="#"
                    id="selectBox1"
                    className="select_main"
                    data-live-search="true"
                  >
                    <option value="1" selected>
                      Select your Symptoms
                    </option>
                    <option value="2">I have Headache</option>
                    <option value="3">I have Footache</option>
                    <option value="4">I have Cold</option>
                    <option value="5">I have High fever</option>
                    <option value="6">I have Chest Pain</option>
                  </select>
                </div> */}
              </div>
              <p className="minimum_share">SHARE ATLEAST FIVE SYMPTOMS</p>
              {/* <!-- Predict btns --> */}
              <div className="symtomp_select_btns">
                <h3 className="select_confirm">
                  Do you want to add more symptoms?
                </h3>
                <div className="s_select_btns">
                  <button
                    onClick={handleAddMoreSymptom}
                    className="select_btn yes"
                  >
                    Yes
                  </button>
                  <button className="select_btn">No</button>
                  <button
                    className="select_btn predict_btn popup_open"
                    onClick={handleModal}
                  >
                    Predict
                  </button>
                </div>
              </div>

              {/* <!----------- Popup box ------------> */}
              {/* ------pop up without modal system-------- */}
              {/* {isModalOpen && (
                <div className="symtomp_popup">
                  <div className="symtomp_popup_inner">
                    <div className="popup_header">
                      <h3 className="popup_depertment">
                        Recommended Department
                      </h3>
                      <button className="dep_popup_close" onClick={handleModal}>
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                    <div className="popup_body">
                      <p className="popup_label">Recommended Department is:</p>
                      <input
                        className="popup_input"
                        type="text"
                        placeholder="Infectious Disease Department"
                        disabled
                      />
                      <p className="consult_with">
                        Do you want to consult a <b>Doctor?</b>
                      </p>
                      <div className="inner_btns">
                        <button className="btn_no" type="submit">
                          No
                        </button>
                        <button className="btn_yes" type="submit">
                          Yes
                        </button>
                      </div>
                      <div className="popup_footer">
                        <p className="p_footer_title">
                          Visit your nearest <b>Hospital?</b>
                        </p>
                        <a className="p_footer_btn" href="#">
                          <i className="fa-regular fa-square-plus"></i>
                          <a
                            onClick={handleNearestHospital}
                            className="footer_btn_text"
                          >
                            Nearest Hospital
                          </a>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )} */}
            </form>
            <Modal show={isModalOpen} onHide={isModalOpen} centered>
              <div className="symtomp_popup">
                <div className="symtomp_popup_inner">
                  <div className="popup_header">
                    <h3 className="popup_depertment">Recommended Department</h3>
                    <button className="dep_popup_close" onClick={handleModal}>
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                  <div className="popup_body">
                    <p className="popup_label">Recommended Department is:</p>
                    <input
                      className="popup_input"
                      type="text"
                      placeholder="Infectious Disease Department"
                      disabled
                    />
                    <p className="consult_with">
                      Do you want to consult a <b>Doctor?</b>
                    </p>
                    <div className="inner_btns">
                      <button className="btn_no" type="submit">
                        No
                      </button>
                      <button className="btn_yes" type="submit">
                        Yes
                      </button>
                    </div>
                    <div className="popup_footer">
                      <p className="p_footer_title">
                        Visit your nearest <b>Hospital?</b>
                      </p>
                      <a className="p_footer_btn" href="#">
                        <i className="fa-regular fa-square-plus"></i>
                        <a
                          onClick={handleNearestHospital}
                          className="footer_btn_text"
                        >
                          Nearest Hospital
                        </a>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Symptom;
