import React from "react";
import styles from "./Message.module.scss";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

const Message = (props) => {
  const data = props.location.state.data;
  const position = [data.latitude, data.longitude];

  return (
    <React.Fragment>
      <div className={styles.messageBox}>
        <p className={styles.messageDate}>{data.date} {data.time}</p>
        <h1 className={styles.messageTitle}>{data.title.toUpperCase()}</h1>
        <p className={styles.message}>
        {data.message}
        </p>
        <p className={styles.map}>Zobacz na mapie:</p>
      </div>
      <Map center={position} zoom={16}>
      <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
          {data.title}
          </Popup>
        </Marker>
      </Map>
      
    </React.Fragment>
  );
};

export default Message;
