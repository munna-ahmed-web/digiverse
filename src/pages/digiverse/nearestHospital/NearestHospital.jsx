import { useEffect, useState } from "react";
import apiService from "../../../api";
import NearestHospitalPagination from "../../../components/UI/pagination/NearestHospitalPagination";
const initalLocationValue = {
  latitude: null,
  longitude: null,
};
const initalSearchInputValue = {
  division: "",
  district: "",
  station: "",
};

const NearestHospital = () => {
  const [nearestHospitalList, setNearestHospitalList] = useState("");
  const [currentHosLocation, setCurrentHosLocation] =
    useState(initalLocationValue);

  const [currentPage, setcurrentPage] = useState(1);
  const [postPerPage, setpostPerPage] = useState(1);
  const [searchInput, setSearchInput] = useState(initalSearchInputValue);
  const handleUserLocation = async () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async function (position) {
        // setLocation({
        //   latitude: position.coords.latitude,
        //   longitude: position.coords.longitude,
        // });
        if (position.coords.latitude && position.coords.longitude) {
          console.log(position.coords.longitude, position.coords.latitude);
          const response = await apiService.getData(
            `http://127.0.0.1:8000/hospital/nearest-hospitals/?long=${position.coords.longitude}&lat=${position.coords.latitude}`
          );
          if (response.length > 0) {
            setNearestHospitalList(response);
          }
        }
      });
    } else {
      alert("Geolocation is not available in your browser.");
    }
  };
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentHospitalList = nearestHospitalList.slice(
    firstPostIndex,
    lastPostIndex
  );


  useEffect(() => {
    handleUserLocation();
  }, []);

  const handleMap = (lat, long) => {
    setCurrentHosLocation({
      latitude: lat,
      longitude: long,
    });
  };

  const handleSearchValue = (e) => {
    setSearchInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const changePage = (pageNumber) => {
    setcurrentPage(pageNumber);
  };

  return (
    <div>
      {/* <!--------- Main body ----------------->
                <!----------------- Hospital Content ------------> */}
      <div className="main_content">
        <div className="main">
          {/* <!---------- Hospital List Header----------> */}
          <div className="">
            <div className="hospital_content">
              {/* main header */}
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
              {/* <!-- Hospital list menual search --> */}
              <div className="hospital_content_body">
                <div className="hospital_body_top h_body_single">
                  <form className="location_search" action="#">
                    <div className="hospital_top_left">
                      <div className="top_left_inner">
                        <a className="h_location_i" href="#">
                          <i className="fa-solid fa-location-dot"></i>
                        </a>
                        <div className="h_location_div">
                          <p className="h_sub_title">Division</p>
                          <select
                            name="division"
                            id="selectDivition"
                            className="location_select w-100"
                            data-live-search="true"
                            onChange={handleSearchValue}
                          >
                            <option value="">Select</option>
                            <option value="dhaka">Dhaka</option>
                            <option value="barishal">Barishal</option>
                            <option value="rajshahi">Rajshahi</option>
                            <option value="khulna">Khulna</option>
                          </select>
                        </div>
                      </div>
                      <div className="top_left_inner">
                        <a className="h_location_i" href="#">
                          <i className="fa-solid fa-location-dot"></i>
                        </a>
                        <div className="h_location_div">
                          <p className="h_sub_title">District</p>
                          <select
                            name="district"
                            id="selectDistrict"
                            className="location_select"
                            data-live-search="true"
                            onChange={handleSearchValue}
                          >
                            <option value="">Select</option>
                            <option value="dhaka">Dhaka</option>
                            <option value="narayangonj">Narayan gonj</option>
                            <option value="manikgonj">Manik gonj</option>
                            <option value="unsigonj">Munsi gonj</option>
                          </select>
                        </div>
                      </div>
                      <div className="top_left_inner">
                        <a className="h_location_i" href="#">
                          <i className="fa-solid fa-location-dot"></i>
                        </a>
                        <div className="h_location_div">
                          <p className="h_sub_title">Station</p>
                          <select
                            name="station"
                            id="selectStation"
                            className="location_select"
                            data-live-search="true"
                            onChange={handleSearchValue}
                          >
                            <option value="">Select</option>
                            <option value="adabor">Adabor</option>
                            <option value="mirpur">Mirpur</option>
                            <option value="gulshan">Gulshan</option>
                            <option value="uttara">Uttara</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="hospital_top_right">
                      <div className="top_right_search">
                        <button type="">
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                      </div>
                      <div className="h_search_div">
                        <a className="top_right_filter" href="#">
                          <div className="filter_img">
                            <img
                              src="../../../../src/assets/predictionAssets/images/Icons/mdi_hospital-box-outline.png"
                              alt=""
                            />
                          </div>
                          <div className="h_nearest_btn">
                            <p>Station</p>
                            <p>Singair</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/* <!-- Hospital List Main div --> */}
              <div className="h_list_group">
                <ul className="h_list_ul">
                  {/* <!-- mannual  Hospital list single --> */}
                  <li className="h_list_single">
                    <div className="h_single_content">
                      <div className="h_photo_data">
                        <div className="h_photo">
                          <img
                            src="../../../../src/assets/predictionAssets/images/hospitals/BSHL1.webp"
                            alt=""
                          />
                        </div>
                        <div className="h_data">
                          {/* <!-- Hospital Link --> */}
                          <h2>
                            <a className="h_title_blue" href="#">
                              Bangladesh Specialized Hospital
                            </a>
                          </h2>
                          <div className="h_single_locate_div">
                            <p className="h_location_city">
                              21 Shyamoli, Mirpur Road, Dhaka,
                            </p>
                            <p className="h_location_country">
                              1207, Bangladesh
                            </p>
                          </div>
                          <div className="h_doctor_div">
                            <p className="h_doctors">
                              <img
                                src="./asset/images/Icons/healthicons_doctor-male.png"
                                alt=""
                              />

                              {/* <!-- doctor count --> */}
                              <span className="h_doctor_count">25</span>
                              <span className="h_doctor_count"> Doctors</span>
                            </p>
                            <p className="h_specialists">
                              <img
                                src="./asset/images/Icons/fluent_doctor-24-filled.png"
                                alt=""
                              />
                              {/* <!-- Specialist count --> */}
                              <span className="h_doctor_count">15 </span>
                              <span className="h_doctor_count">
                                Specialties
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="h_single_rating">
                        <button className="h_rating_btn">
                          <i className="fa-solid fa-star"></i>
                          {/* <!-- rating --> */}
                          <span className="h_rating_count">5</span>
                        </button>
                      </div>
                    </div>
                    <div className="h_single_btn">
                      <a className="btn_blue" href="#">
                        View Hospital
                      </a>
                    </div>
                  </li>

                  {/* ---------dynamic Hospital List-------------- */}
                  {currentHospitalList ? (
                    currentHospitalList.map((singleHospital, index) => {
                      return (
                        <li className="h_list_single" key={index + 1}>
                          <div className="h_single_content">
                            <div className="h_photo_data">
                              <div className="h_photo">
                                <img
                                  src="../../../../src/assets/predictionAssets/images/hospitals/BSHL1.webp"
                                  alt=""
                                />
                              </div>
                              <div className="h_data">
                                {/* <!-- Hospital Link --> */}
                                <h2>
                                  <a className="h_title_blue" href="#">
                                    {singleHospital.hospital_name}
                                  </a>
                                </h2>
                                <div className="h_single_locate_div">
                                  <p className="h_location_city">
                                    21 Shyamoli, Mirpur Road, Dhaka,
                                  </p>
                                  <p className="h_location_country">
                                    1207, Bangladesh
                                  </p>
                                </div>
                                <div className="h_doctor_div">
                                  <p className="h_doctors">
                                    <img
                                      src="./asset/images/Icons/healthicons_doctor-male.png"
                                      alt=""
                                    />

                                    {/* <!-- doctor count --> */}
                                    <span className="h_doctor_count">25</span>
                                    <span className="h_doctor_count">
                                      {" "}
                                      Doctors
                                    </span>
                                  </p>
                                  <p className="h_specialists">
                                    <img
                                      src="./asset/images/Icons/fluent_doctor-24-filled.png"
                                      alt=""
                                    />
                                    {/* <!-- Specialist count --> */}
                                    <span className="h_doctor_count">15 </span>
                                    <span className="h_doctor_count">
                                      Specialties
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="h_single_rating">
                              <button className="h_rating_btn">
                                <i className="fa-solid fa-star"></i>
                                {/* <!-- rating --> */}
                                <span className="h_rating_count">5</span>
                              </button>
                            </div>
                          </div>
                          <div className="h_single_btn">
                            <a
                              className="btn_blue"
                              href="#"
                              onClick={() =>
                                handleMap(
                                  singleHospital.latitude,
                                  singleHospital.longitude
                                )
                              }
                            >
                              View Hospital
                            </a>
                          </div>
                        </li>
                      );
                    })
                  ) : (
                    <p style={{color:'white'}}>Hospital is not available in your locality</p>
                  )}
                </ul>
              </div>

              {/* <!-- Hospital list paginate --> */}
              {/* <div className="h_paginate">
                <div className="h_paginate_list">
                  <button className="h_paginate_left pnr">
                    <i className="fa-solid fa-angle-left"></i>
                    <span className="pagi_text">PREV</span>
                  </button>
                  <button className="h_paginate_number active_pagi">1</button>
                  <button className="h_paginate_number">2</button>
                  <button className="h_paginate_number">3</button>
                  <button className="h_paginate_number">...</button>
                  <button className="h_paginate_number">10</button>
                  <button className="h_paginate_right pnr">
                    <span className="pagi_text">NEXT</span>
                    <i className="fa-solid fa-angle-right"></i>
                  </button>
                </div>
              </div> */}
              <NearestHospitalPagination
                changePage={changePage}
                currentPage={currentPage}
                postPerPage={postPerPage}
                totalPost={nearestHospitalList.length}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NearestHospital;
