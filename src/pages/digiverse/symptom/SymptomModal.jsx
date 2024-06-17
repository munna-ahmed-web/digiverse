import React from "react";
import Modal from "react-modal";

// Style for the modal content
const modalStyles = {
  content: {
    width: "500px",
    margin: "auto",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
};

const SymptomModal = ({ isOpen, handleModal, handleNearestHospital }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleModal}
      style={modalStyles}
      contentLabel="Recommended Department"
    >
      <div className="symptom-popup">
        <div className="symptom-popup-inner">
          <div className="popup-header">
            <h3 className="popup-department">Recommended Department</h3>
            <button className="popup-close" onClick={handleModal}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="popup-body">
            <p className="popup-label">Recommended Department is:</p>
            <input
              className="popup-input"
              type="text"
              placeholder="Infectious Disease Department"
              disabled
            />
            <p className="consult-with">
              Do you want to consult a <b>Doctor?</b>
            </p>
            <div className="inner-buttons">
              <button className="btn-no" onClick={handleModal}>
                No
              </button>
              <button className="btn-yes">Yes</button>
            </div>
          </div>
          <div className="popup-footer">
            <p className="footer-title">
              Visit your nearest <b>Hospital?</b>
            </p>
            <button className="footer-button" onClick={handleNearestHospital}>
              <i className="fa-regular fa-square-plus"></i>Nearest Hospital
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SymptomModal;
