
import "../assets/css/style.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from "../pages/home";
import DigiverseMain from "../pages/digiverse";
import { useStoreActions} from 'easy-peasy'
import DigiverseLogin from "../pages/digiverse/login/DigiverseLogin";
import { DigiverseSignUp } from "../pages/digiverse/singUp/DigiverseSignUp";
import DigiversePrivacy from "../pages/digiverse/privacy/DigiversePrivacy";
import DigiverseTerms from "../pages/digiverse/terms/DigiverseTerms";
import DigiverseForgotPass from "../pages/digiverse/forgotPass/DigiverseForgotPass";
import DigiverseWelcome from "../pages/welcome/DigiverseWelcome";
import { GoogleLogIn } from "../pages/digiverse/googleLogIn/GoogleLogIn";
import DigiverseAbout from "../pages/digiverse/about/DigiverseAbout";
import Symptom from "../pages/digiverse/symptom/Symptom";
import PredictionMain from "../pages/digiverse/prediction";
import SymptomHistory from "../pages/digiverse/symptomHisotry/SymptomHistory";
import NearestHospital from "../pages/digiverse/nearestHospital/NearestHospital";
import Admin from "../pages/home/Admin";
import DivisionInput from "../pages/home/Input/DivisionInput";
import DistrictInput from "../pages/home/Input/DistrictInput";
import StationInput from "../pages/home/Input/StationInput";
import HospitalCategoryInput from "../pages/home/Input/HospitalCategoryInput";
import HospitalAppInput from "../pages/home/Input/HospitalAppInput";
import HospitalMap from "../pages/home/Input/HospitalMapInput";
import DepartmentInput from "../pages/home/Input/DepartmentInput";
import DepartmentDetails from "../pages/home/Input/DepartmentDetails";
import DiseaseInput from "../pages/home/Input/DiseaseInput";
import SymtomsInput from "../pages/home/Input/SymtomsInput";
import RoleInput from "../pages/home/Input/RoleInput";
import RoleUser from "../pages/home/Input/RoleUser";
import DashBoard from "../pages/home/DefaultBodySection";
import RolePermissionInput from "../pages/home/Input/RolePermissionInput";
import OldMenuInput from "../pages/home/Input/OldMenuInput";
import MenuPermissionInput from "../pages/home/Input/MenuPermissionInput";
import MenuInput from "../pages/home/Input/MenuInput";
import NotFound from "../components/UI/pagination/NotFound";




const App = () => {
  const {
    division,
    district,
    station,
    hospitalCategory,
    hospitalInfo,
    department,
    disease,
    hospitalMap,
    symptom,
    role,
    users,
    userRole,
    rolePermission,
    menu,
    menuPermission,
  } = useStoreActions((actions) => actions);
  division.getDivisionListFromServer(
    "http://127.0.0.1:8000/division/divisions/"
  );

  district.getDistrictListFromServer(
    "http://127.0.0.1:8000/district/districts/"
  );

  station.getStationFromServer("http://127.0.0.1:8000/station/stations/");

  hospitalCategory.getCategoryListFromServer(
    "http://127.0.0.1:8000/hospital_category/hospital_categories/"
  );

  hospitalInfo.getHospitalInfoFromServer(
    "http://127.0.0.1:8000/hospital/hospitals/"
  );

  department.getDepartmentListFromServer(
    "http://127.0.0.1:8000/departments/department/"
  );

  disease.getDiseaseListFromServer("http://127.0.0.1:8000/diseases/disease/");

  hospitalMap.getHospitalMapListFromServer(
    "http://127.0.0.1:8000/hospital-map-app/hospital-maps/"
  );

  symptom.getSymptomListFromServer("http://127.0.0.1:8000/symptoms/symptom/");

  role.getRoleListFromServer("http://127.0.0.1:8000/role/roles/");
  
  users.getUserListFromServer("http://127.0.0.1:8000/auth_user/user_emails/");
  
  userRole.getUserRoleListFromServer(
    "http://127.0.0.1:8000/user_role/user-role-panels/"
  );

  rolePermission.getRolePermissionListFromServer(
    "http://127.0.0.1:8000/role/crudOperation/"
  );

  menu.getMenuListFromServer("http://127.0.0.1:8000/menu_permission/menus/");
  
  menuPermission.getMenuPermissionListFromServer(
    "http://127.0.0.1:8000/menu_permission/menu-permissions/"
  );
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DigiverseMain />} />
        <Route path="/digiverse" element={<DigiverseMain />} />
        <Route path="/digiverse/login" element={<DigiverseLogin />} />
        <Route path="/digiverse/login/google" element={<GoogleLogIn />} />
        <Route
          path="/digiverse/login/forgotpass"
          element={<DigiverseForgotPass />}
        />
        <Route path="/digiverse/signup" element={<DigiverseSignUp />} />
        <Route path="/digiverse/privacy" element={<DigiversePrivacy />} />
        <Route path="/digiverse/terms" element={<DigiverseTerms />} />
        <Route path="/digiverse/welcome" element={<DigiverseWelcome />} />
        <Route path="/digiverse/about" element={<DigiverseAbout />} />

        <Route path="/nadmin/:input" element={<HomePage />} />


        {/* prediction part route */}
        <Route path="/prediction/*" element={<PredictionMain />}>
          <Route path="symptom" element={<Symptom />} />
          <Route path="symptomHistory" element={<SymptomHistory />} />
          <Route path="nearestHospital" element={<NearestHospital />} />
        </Route>

        {/* admin panel route */}
        <Route path="/admin/*" element={<Admin />}>
          <Route path="division" element={<DivisionInput />} />
          <Route path="district" element={<DistrictInput />} />
          <Route path="station" element={<StationInput />} />
          <Route path="hospital_category" element={<HospitalCategoryInput />} />
          <Route path="hospital_app" element={<HospitalAppInput />} />
          <Route path="hospital_map" element={<HospitalMap />} />
          <Route path="department" element={<DepartmentInput />} />
          <Route path="departmentDetails" element={<DepartmentDetails />} />
          <Route path="disease" element={<DiseaseInput />} />
          <Route path="symptoms" element={<SymtomsInput />} />
          <Route path="role" element={<RoleInput />} />
          <Route path="role_user" element={<RoleUser />} />
          <Route path="role_permission" element={<RolePermissionInput />} />
          <Route path="menu_operation" element={<OldMenuInput />} />
          <Route path="menu_permission" element={<MenuPermissionInput />} />
          <Route path="menu_input" element={<MenuInput />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App