
import { GoogleMap, Marker, LoadScript } from "react-google-maps/api";

const MapContainer = ({ latitude, longitude }) => {
  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const defaultCenter = {
    lat: latitude,
    lng: longitude,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBHYgQjlJ5DCLiGaes-USYdYd1-qy1iJB4">
      <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
