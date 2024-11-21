function Location() {
  return <div>Location</div>;
}

export default Location;

// "use client";

// import { Box } from "@mui/material";
// import { Icon } from "leaflet";

// import { MapContainer, Marker, Popup } from "react-leaflet";
// import { TileLayer } from "react-leaflet/TileLayer";

// const Location = () => {
//   const customIcon = new Icon({
//     iconUrl: require("../assets/map-icon.png"),
//     iconSize: [30, 30],
//   });

//   // const handleDragEnd = (e: Record<string, any>) => {
//   //   const { lat, lng } = e.target.getLatLng();
//   //   console.log(`Lat: ${lat}, Lon: ${lng}`);
//   // };

//   return (
//     <Box sx={{ mb: 4 }}>
//       <MapContainer
//         center={[51.505, -0.09]}
//         zoom={13}
//         scrollWheelZoom={false}
//         style={{ height: "50vh", width: "100%" }}
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker
//           position={[51.505, -0.09]}
//           icon={customIcon}
//           draggable
//           // ondragend={handleDragEnd}
//         >
//           <Popup>The Selected Location</Popup>
//         </Marker>
//       </MapContainer>
//     </Box>
//   );
// };

// export default Location;
