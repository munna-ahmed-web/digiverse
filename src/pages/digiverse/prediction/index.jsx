import {Outlet, NavLink} from 'react-router-dom';
import '../../../../src/assets/predictionAssets/css/style.css'


const PredictionMain = () => {
  return (
    <div className="predictionMainBody">
      <section className="main_section">
        <div className="mycontainer">
          <div className="main_body">
            {/* !---------- Sidebar --------> */}
            <div className="sidebar d-none d-lg-block">
              <div className="sitebar_layer"></div>
              <div className="sidebar_inner_main">
                <div className="logo_div">
                  <NavLink to={"/"}>
                    <img
                      src="../../../../src/assets/predictionAssets/images/logo/White-DigiVerse-Logo1.png"
                      alt=""
                    />
                  </NavLink>
                </div>
                <ul
                  className="nav sidebar_inner mx-auto flex-column nav-pills mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  {/* <!-- symtomp --> */}
                  <li className="nav-item" role="presentation">
                    <NavLink
                      to="/prediction/symptom"
                      className="nav-link_aside "
                    >
                      <img
                        className="bg-white rounded-circle"
                        src="../../../../src/assets/predictionAssets/images/Icons/IconSetMain.png"
                        alt=""
                      />
                      Symptoms
                    </NavLink>
                  </li>
                  {/* <!-- Symtomp history --> */}
                  <li className="nav-item" role="presentation">
                    <NavLink
                      to="/prediction/symptomHistory"
                      className="nav-link_aside"
                    >
                      <img
                        src="../../../../src/assets/predictionAssets/images/Icons/Vector.png"
                        alt=""
                      />{" "}
                      Symptom History
                    </NavLink>
                  </li>

                  {/* <!---------- Hospitals -------> */}

                  <li className="nav-item" role="presentation">
                    <NavLink to="/prediction/nearestHospital" className="nav-link_aside">
                      <img
                        src="../../../../src/assets/predictionAssets/images/Icons/IconSet.png"
                        alt=""
                      />
                      Nearest Hospitals
                    </NavLink>
                  </li>

                  <li className="nav-item" role="presentation">
                    <NavLink to="/prediction/fdfdfd" className="nav-link_aside">
                      <img
                        src="../../../../src/assets/predictionAssets/images/Icons/IconSet.png"
                        alt=""
                      />
                      Patient Profile
                    </NavLink>
                  </li>

                  {/* <!-- doctor profile --> */}
                  <li className="nav-item" role="presentation">
                    <NavLink to="/prediction/dfdfd" className="nav-link_aside">
                      <img
                        src="../../../../src/assets/predictionAssets/images/Icons/IconSet.png"
                        alt=""
                      />
                      Doctor Profile
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            {/* <!----------- Mobile Sitebar -------------> */}
            <div className="mobile_sitebar row d-lg-none">
              <div className="sitebar_layer"></div>
              <div className="">
                <div className="offcanvas offcanvas-start" id="myoffcanvas">
                  <div className="logo_div offcanvas-header">
                    <a href="index.html">
                      <img
                        src="../../../../src/assets/predictionAssets/images/logo/White-DigiVerse-Logo1.png"
                        alt=""
                      />
                    </a>
                    <button
                      type="button"
                      className=""
                      data-bs-dismiss="offcanvas"
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                  <ul
                    className="offcanvas-body nav sidebar_inner mx-auto flex-column nav-pills mb-3"
                    id="pills-tab"
                    role="tablist"
                  >
                    {/* <!-- symtomp --> */}
                    <li className="nav-item" role="presentation">
                      <a href="index.html" className="nav-link_aside active">
                        <img
                          src="../../../../src/assets/predictionAssets/images/Icons/IconSetMain.png"
                          alt=""
                        />
                        Symptom
                      </a>
                    </li>
                    {/* <!-- Symtomp history --> */}
                    <li className="nav-item" role="presentation">
                      <a href="symtomp_history.html" className="nav-link_aside">
                        <img
                          src="../../../../src/assets/predictionAssets/images/Icons/Vector.png"
                          alt=""
                        />{" "}
                        Symptom History
                      </a>
                    </li>

                    {/* <!---------- Hospitals -------> */}
                    <li className="nav-item" role="presentation">
                      <a href="hospital.html" className="nav-link_aside">
                        <img
                          src="../../../../src/assets/predictionAssets/images/Icons/IconSet.png"
                          alt=""
                        />{" "}
                        Hospitals
                      </a>
                    </li>

                    <li className="nav-item" role="presentation">
                      <a href="patient_profile.html" className="nav-link_aside">
                        <img
                          src="../../../../src/assets/predictionAssets/images/Icons/IconSet.png"
                          alt=""
                        />
                        Patient Profile
                      </a>
                    </li>

                    {/* <!-- doctor profile --> */}
                    <li className="nav-item" role="presentation">
                      <a href="doctor_profile.html" className="nav-link_aside">
                        <img
                          src="../../../../src/assets/predictionAssets/images/Icons/IconSet.png"
                          alt=""
                        />
                        Doctor Profile
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <!--------- Main body -----------------> */}
            {/* <!----------------- Symptom Content ------------> */}
            <div className="main_content">
              <div className="main">
                <div className="symtomp_main">
                  <div className="symtomp_content ">
                    <Outlet />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PredictionMain;