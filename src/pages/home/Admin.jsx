import { Outlet, NavLink, Link } from "react-router-dom";
import "../../../src/assets/predictionAssets/css/style.css";
import { useStoreState } from "easy-peasy";
import { useEffect, useState } from "react";


const Admin = () => {
  const { menu, menuPermission } = useStoreState((state) => state);
  const userProfile = JSON.parse(sessionStorage.getItem("loginInfo"));
  const userRole = userProfile.role;
  const permissionArray = menuPermission.menuPermissionList.filter(
    (item) => item.role_name == userRole
  );
  const [permissionObject, setpermissionObject] = useState("");
  const handleLogOut = () => {
    const logOutInfo = {
      user_name: "",
      role: "",
      role_permissions: {
        view: false,
        insert: false,
        edit: false,
        delete: false,
      },
      message: "Logout successful",
    };

    sessionStorage.setItem("loginInfo", JSON.stringify(logOutInfo));
    window.location.reload();
  };

  useEffect(() => {
    setpermissionObject(permissionArray[0]);
  }, [permissionArray]);
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
                    style={{width:'200px'}}
                      src="../../../src/assets/Innovativelogo.png"
                      alt=""
                    />
                    {/* <img
                      src="../../../../src/assets/predictionAssets/images/logo/White-DigiVerse-Logo1.png"
                      alt=""
                    /> */}
                  </NavLink>
                </div>
                <ul
                  className="nav sidebar_inner mx-auto flex-column nav-pills mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  {menu.menuList.map((singleMenu, index) => {
                    return (
                      <li className="nav-item d-block w-100" key={index}>
                        {singleMenu.submenus.length > 0 ? (
                          <div className="dropdown mb-2">
                            {/* menu execute that have sub menu */}
                            {permissionObject &&
                              permissionObject.menu_names.includes(
                                singleMenu.menu_name
                              ) && (
                                <Link
                                  className="nav-link dropdown-toggle d-block text-white"
                                  to="#"
                                  id={`menu-${index}`}
                                  role="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <span>{singleMenu.menu_name}</span>
                                </Link>
                              )}

                            <ul
                              className="dropdown-menu"
                              aria-labelledby={`menu-${index}`}
                            >
                              {singleMenu.submenus.map(
                                (singleSubMenu, subIndex) => {
                                  return (
                                    <li key={subIndex}>
                                      {permissionObject &&
                                        permissionObject.submenu_names.includes(
                                          singleSubMenu.submenu_name
                                        ) && (
                                          <Link
                                            className="dropdown-item submenu text-dark"
                                            to={singleSubMenu.submenu_url}
                                          >
                                            {singleSubMenu.submenu_name}
                                          </Link>
                                        )}
                                    </li>
                                  );
                                }
                              )}
                            </ul>
                          </div>
                        ) : (
                          // menu execute that does not have sub menu
                          permissionObject &&
                          permissionObject.menu_names.includes(
                            singleMenu.menu_name
                          ) && (
                            <Link
                              className="nav-link d-block w-100 text-white "
                              to={singleMenu.menu_url}
                            >
                              {singleMenu.menu_name}
                            </Link>
                          )
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* <!--------- Main body -----------------> */}
            <div className="main_content">
              <div className="main">
                <div className="symtomp_main">
                  <div className="symtomp_content ">
                    {/* header section */}
                    <div className="hospital_content_header symtomp_header mb-2">
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
                        <div className="dropdown">
                          <a
                            className="user_pannel dropdown-toggle"
                            href="#"
                            role="button"
                            id="userMenu"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <img
                              src="../../../../src/assets/predictionAssets/images/profile/profile1(1).png"
                              alt="User Profile"
                            />
                          </a>
                          <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="userMenu"
                          >
                            <li>
                              <a
                                className="dropdown-item dahsboard btn_blue"
                                href="#"
                              >
                                {userProfile.user_name
                                  ? userProfile.user_name
                                  : "No User"}
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item dahsboard btn_blue"
                                href="#"
                              >
                                {userProfile.role
                                  ? userProfile.role
                                  : "No Role"}
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item user_logout btn_blue"
                                href="#"
                                onClick={handleLogOut}
                              >
                                Log Out
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* body section */}
                    <div style={{ margin: "16px" }}>
                      <Outlet />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admin;
