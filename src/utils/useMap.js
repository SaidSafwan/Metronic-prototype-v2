import { useEffect } from "react";
import L from "leaflet";

const useMap = (mapId, coordinates, zoom) => {
    useEffect(() => {
        if (!mapId) return;

        // Initialize map
        const map = L.map(mapId).setView(coordinates, zoom);

        // Add OpenStreetMap tiles
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 17,
            attribution: "© OpenStreetMap contributors",
        }).addTo(map);

        // Custom marker icon
        const customIcon = L.icon({
            iconUrl: "./assets/icons/icons-location.svg",
            iconSize: [40, 50],
            iconAnchor: [35, 70],
            popupAnchor: [-14, -70],
        });

        // Add marker with popup
        L.marker(coordinates, { icon: customIcon })
            .addTo(map)
            .bindPopup("1054 XE Amsterdam")
            .openPopup();

        // Cleanup on unmount
        return () => {
            map.remove();
        };
    }, [mapId, coordinates, zoom]);
};

export default useMap;