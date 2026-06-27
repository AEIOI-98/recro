"use client";

import { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import { MapPin, Calendar, ArrowRight, X } from "lucide-react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  type Libraries,
} from "@react-google-maps/api";
import { StatusBadge, type ProjectStatus } from "./references";
import { asset } from "@/lib/site";

export interface ReferenceProject {
  title: string;
  slug: string;
  status: ProjectStatus;
  location: string;
  date: string;
  image: string;
  coordinates: [number, number];
  shortDescription: string;
}

interface ReferencesMapProps {
  references: ReferenceProject[];
}

const MAPS_LIBRARIES: Libraries = [];
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";

// Deep-emerald dark style tuned to the RECRO palette.
const MAP_STYLE: google.maps.MapTypeStyle[] = [
  { elementType: "geometry", stylers: [{ color: "#0c1d1a" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#7d8f86" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#0a1816" }] },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [{ color: "#2a3d36" }],
  },
  {
    featureType: "administrative.country",
    elementType: "geometry.stroke",
    stylers: [{ color: "#3a534a" }],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#b89a72" }],
  },
  { featureType: "poi", stylers: [{ visibility: "off" }] },
  {
    featureType: "landscape.natural",
    elementType: "geometry",
    stylers: [{ color: "#102420" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#1d3029" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b7d74" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#3a2e1f" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#5a4427" }],
  },
  {
    featureType: "transit",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#081512" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#3a534a" }],
  },
];

const SLOVENIA_CENTER = { lat: 46.35, lng: 15.5 };

// Bronze pin for active, muted stone pin for finished — drawn as SVG data URLs.
function pinIcon(active: boolean): string {
  const fill = active ? "#d49960" : "#5d6f66";
  const stroke = active ? "#f4ead4" : "#8aa092";
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="44" viewBox="0 0 34 44">
      <path d="M17 1C8.7 1 2 7.7 2 16c0 10.5 13 25.4 14.1 26.6a1.2 1.2 0 0 0 1.8 0C19 41.4 32 26.5 32 16 32 7.7 25.3 1 17 1Z"
        fill="${fill}" stroke="${stroke}" stroke-width="1.6"/>
      <circle cx="17" cy="16" r="5.4" fill="#0c1d1a" stroke="${stroke}" stroke-width="1.2"/>
    </svg>`;
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

export function ReferencesMap({ references }: ReferencesMapProps) {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: API_KEY,
    libraries: MAPS_LIBRARIES,
  });

  const [selectedProject, setSelectedProject] =
    useState<ReferenceProject | null>(null);

  const onLoad = useCallback(
    (map: google.maps.Map) => {
      if (references.length > 1) {
        const bounds = new google.maps.LatLngBounds();
        references.forEach((r) =>
          bounds.extend({ lat: r.coordinates[0], lng: r.coordinates[1] })
        );
        map.fitBounds(bounds, 64);
      }
    },
    [references]
  );

  const activeCount = useMemo(
    () => references.filter((r) => r.status === "active").length,
    [references]
  );

  if (loadError) {
    return (
      <div className="flex h-[560px] items-center justify-center rounded-2xl border border-[#d49960]/20 bg-[#0c1d1a]/60 px-6 text-center">
        <span className="text-sm text-[#e8dcc4]/60">
          Zemljevida ni bilo mogoče naložiti. Preverite Google Maps API
          ključ.
        </span>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="flex h-[560px] items-center justify-center rounded-2xl border border-[#d49960]/20 bg-[#0c1d1a]/60">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#d49960]/40 border-t-[#d49960]" />
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#e8dcc4]/60">
            Nalaganje zemljevida...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Map Container */}
      <div className="brackets relative h-[560px] w-full overflow-hidden rounded-2xl border border-[#d49960]/25 bg-[#0c1d1a]">
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={SLOVENIA_CENTER}
          zoom={9}
          onLoad={onLoad}
          options={{
            styles: MAP_STYLE,
            disableDefaultUI: true,
            zoomControl: true,
            backgroundColor: "#0c1d1a",
            clickableIcons: false,
            maxZoom: 16,
          }}
        >
          {references.map((ref) => (
            <Marker
              key={ref.slug}
              position={{ lat: ref.coordinates[0], lng: ref.coordinates[1] }}
              icon={{
                url: pinIcon(ref.status === "active"),
                scaledSize: new google.maps.Size(
                  ref.status === "active" ? 38 : 30,
                  ref.status === "active" ? 49 : 39
                ),
                anchor: new google.maps.Point(
                  ref.status === "active" ? 19 : 15,
                  ref.status === "active" ? 49 : 39
                ),
              }}
              zIndex={ref.status === "active" ? 1000 : 1}
              onClick={() => setSelectedProject(ref)}
            />
          ))}
        </GoogleMap>

        {/* Corner overlay label */}
        <div className="pointer-events-none absolute left-4 top-4 z-[400] rounded-md border border-[#d49960]/30 bg-[#0c1d1a]/85 px-3 py-2 backdrop-blur-md">
          <p className="font-mono text-[10px] tracking-[0.3em] text-[#d49960]/70">
            / GEO · SI
          </p>
          <p className="mt-1 text-xs font-medium tracking-wider text-[#e8dcc4]">
            {references.length} lokacij · {activeCount} v izvajanju
          </p>
        </div>

        {/* Legend */}
        <div className="pointer-events-none absolute bottom-4 left-4 z-[400] flex flex-col gap-1.5 rounded-md border border-[#d49960]/25 bg-[#0c1d1a]/85 px-3 py-2 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span
              className="h-2.5 w-2.5 rounded-full bg-[#d49960]"
              style={{ boxShadow: "0 0 8px rgba(212,153,96,0.85)" }}
            />
            <span className="text-[10px] uppercase tracking-[0.18em] text-[#e8dcc4]/75">
              V izvajanju
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#5d6f66]" />
            <span className="text-[10px] uppercase tracking-[0.18em] text-[#e8dcc4]/55">
              Zaključeno
            </span>
          </div>
        </div>
      </div>

      {/* Selected Project Card */}
      {selectedProject && (
        <div className="absolute bottom-4 left-4 right-4 z-[1000] sm:left-auto sm:right-4 sm:w-96">
          <div className="relative overflow-hidden rounded-xl border border-[#d49960]/30 bg-[#0c1d1a]/95 p-4 shadow-2xl backdrop-blur-xl">
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(212,153,96,0.7), transparent)",
              }}
            />
            <button
              onClick={() => setSelectedProject(null)}
              className="icon-fx absolute right-3 top-3 rounded-md border border-[#d49960]/20 bg-[#0c1d1a]/80 p-1 text-[#e8dcc4]/70 transition-colors hover:border-[#d49960]/60 hover:text-[#f4ead4]"
              aria-label="Zapri"
            >
              <X className="mi mi-rotate h-3.5 w-3.5" />
            </button>

            <div className="flex gap-4 pr-6">
              <div
                className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md border border-[#d49960]/25 bg-cover bg-center"
                style={{ backgroundImage: `url(${asset(selectedProject.image)})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1d1a]/60 to-transparent" />
              </div>
              <div className="flex-1 overflow-hidden">
                <div className="mb-1.5">
                  <StatusBadge status={selectedProject.status} />
                </div>
                <h4 className="line-clamp-2 font-serif text-base font-medium text-[#e8dcc4]">
                  {selectedProject.title}
                </h4>
                <div className="mt-2 flex items-center gap-1.5 text-[10px] text-[#e8dcc4]/60">
                  <MapPin className="h-3 w-3 shrink-0 text-[#d49960]" />
                  <span className="line-clamp-1">
                    {selectedProject.location}
                  </span>
                </div>
                <div className="mt-1 flex items-center gap-1.5 text-[10px] text-[#e8dcc4]/60">
                  <Calendar className="h-3 w-3 shrink-0 text-[#d49960]" />
                  <span className="font-mono tracking-wider">
                    {selectedProject.date}
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-3 line-clamp-2 text-xs text-[#e8dcc4]/65">
              {selectedProject.shortDescription}
            </p>

            <Link
              href={`/reference/${selectedProject.slug}`}
              className="btn-bronze icon-fx !w-full !py-2.5 !text-xs mt-4"
            >
              Ogled projekta <ArrowRight className="mi mi-nudge h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
