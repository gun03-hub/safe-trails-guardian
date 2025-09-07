import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface MapProps {
  height?: string;
  showControls?: boolean;
  center?: [number, number];
  zoom?: number;
}

const Map = ({ height = 'h-96', showControls = true, center = [77.2090, 28.6139], zoom = 12 }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isTokenSet, setIsTokenSet] = useState(false);

  // For demo purposes - in production, this would come from backend/env
  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      setIsTokenSet(true);
      initializeMap();
    }
  };

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: center,
      zoom: zoom,
    });

    if (showControls) {
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
    }

    // Add sample markers for demo
    new mapboxgl.Marker({ color: '#2563eb' })
      .setLngLat([77.2090, 28.6139])
      .setPopup(new mapboxgl.Popup().setHTML('<h3>Tourist Location 1</h3><p>Status: Safe</p>'))
      .addTo(map.current);

    new mapboxgl.Marker({ color: '#dc2626' })
      .setLngLat([77.2200, 28.6200])
      .setPopup(new mapboxgl.Popup().setHTML('<h3>Alert Zone</h3><p>High crowd density detected</p>'))
      .addTo(map.current);

    new mapboxgl.Marker({ color: '#16a34a' })
      .setLngLat([77.1900, 28.6050])
      .setPopup(new mapboxgl.Popup().setHTML('<h3>Safe Zone</h3><p>Police station nearby</p>'))
      .addTo(map.current);
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (!isTokenSet) {
    return (
      <div className={`${height} flex items-center justify-center bg-muted rounded-lg border`}>
        <div className="text-center p-6 space-y-4">
          <h3 className="text-lg font-semibold">Setup Mapbox</h3>
          <p className="text-muted-foreground text-sm">Enter your Mapbox public token to view the map</p>
          <div className="flex gap-2 max-w-md">
            <Input
              placeholder="pk.eyJ1IjoieW91ci11c2VybmFtZSIsImEiOiJjbGV..."
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleTokenSubmit}>Load Map</Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Get your token from{' '}
            <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              mapbox.com
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${height} relative rounded-lg overflow-hidden border`}>
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default Map;