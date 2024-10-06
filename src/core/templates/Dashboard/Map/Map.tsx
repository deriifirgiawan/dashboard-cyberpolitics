"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
	return (
		<MapContainer
			center={[-6.2088, 106.8456]}
			zoom={12}
			style={{ height: "600px", width: "100%" }}
			className="rounded-md"
		>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
			/>
			<Marker position={[-6.2088, 106.8456]}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
		</MapContainer>
	);
};

export default Map;
