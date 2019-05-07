import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// react plugin used to create google maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MapWrapper = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
      defaultOptions={{
        scrollwheel: false,
        styles: [
          {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [{ color: "#444444" }]
          },
          {
            featureType: "landscape",
            elementType: "all",
            stylers: [{ color: "#f2f2f2" }]
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [{ saturation: -100 }, { lightness: 45 }]
          },
          {
            featureType: "road.highway",
            elementType: "all",
            stylers: [{ visibility: "simplified" }]
          },
          {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [{ color: "#5e72e4" }, { visibility: "on" }]
          }
        ]
      }}
    >
      <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
    </GoogleMap>
  ))
);

const codeExample = `import React from "react";
// react plugin used to create google maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MapWrapper = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
      defaultOptions={{
        scrollwheel: false,
        styles: [
          {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [{ color: "#444444" }]
          },
          {
            featureType: "landscape",
            elementType: "all",
            stylers: [{ color: "#f2f2f2" }]
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [{ saturation: -100 }, { lightness: 45 }]
          },
          {
            featureType: "road.highway",
            elementType: "all",
            stylers: [{ visibility: "simplified" }]
          },
          {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [{ color: "#5e72e4" }, { visibility: "on" }]
          }
        ]
      }}
    >
      <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
    </GoogleMap>
  ))
);

class Maps extends React.Component {
  render() {
    return (
      <>
        <MapWrapper
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"
          loadingElement={<div style={{ height: \`100%\` }} />}
          containerElement={
            <div
              style={{ height: \`600px\` }}
              className="map-canvas"
              id="map-canvas"
            />
          }
          mapElement={
            <div style={{ height: \`100%\`, borderRadius: "inherit" }} />
          }
        />
      </>
    );
  }
}

export default Maps;
`;

class Maps extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            React Google Maps v9.4.5
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          Our map component uses the Google Maps API and it comes with a custom
          interface that matches the theme’s colors
        </p>
        <hr />
        <h2 id="example">Example</h2>
        <div className="ct-example">
          <MapWrapper
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={
              <div
                style={{ height: `600px` }}
                className="map-canvas"
                id="map-canvas"
              />
            }
            mapElement={
              <div style={{ height: `100%`, borderRadius: "inherit" }} />
            }
          />
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>
        <h3 id="get-your-api-key">Get your API key</h3>
        <p>
          In order to get your Google Maps API key navigate to the following
          page:{" "}
          <a href="https://developers.google.com/maps/documentation/javascript/get-api-key">
            Google Maps
          </a>
        </p>
        <h3 id="initialization">Props</h3>
        <p>
          Please refer to{" "}
          <a
            href="https://tomchentw.github.io/react-google-maps/"
            target="_blank"
            rel="noopener noreferrer"
          >
            react-google-maps documentation
          </a>
          .
        </p>
      </>
    );
  }
}

export default Maps;
