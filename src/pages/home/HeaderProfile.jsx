import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { faAlignLeft, faBell } from "@fortawesome/free-solid-svg-icons";

const HeaderProfile = ({ makeDefaultMenu }) => {
  const userProfile = JSON.parse(sessionStorage.getItem("loginInfo"));
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

  return (
        <li className="nav-item dropdown has-arrow">
          <div className="dropdown-menu">
            <div className="user-header">
              <div className="avatar avatar-sm">
                <img
                  src="/src/assets/img/profiles/avatar-01.jpg"
                  alt="User Image"
                  className="avatar-img rounded-circle"
                />
              </div>
              <div className="user-text">
                <h6>
                  {userProfile.user_name ? userProfile.user_name : "No User"}
                </h6>
                <p className="text-muted mb-0">
                  {userProfile.role ? userProfile.role : "No Role"}
                </p>
              </div>
            </div>
            <a className="dropdown-item" href="profile.html">
              My Profile
            </a>
            <a className="dropdown-item" href="settings.html">
              Settings
            </a>
            <button className="dropdown-item" onClick={handleLogOut}>
              Logout
            </button>
          </div>
        </li>
  );
};

HeaderProfile.propTypes = {
  makeDefaultMenu: PropTypes.func,
};
export default HeaderProfile;
