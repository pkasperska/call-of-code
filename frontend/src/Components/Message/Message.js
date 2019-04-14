import React from "react";
import styles from "./Message.module.scss";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

const Message = () => {
  const position = [51.93548, 15.50643];
  return (
    <React.Fragment>
      <div className={styles.messageBox}>
        <p className={styles.messageDate}>14.02 9:16</p>
        <h1 className={styles.messageTitle}>WYPADEK NA BATOREGO</h1>
        <p className={styles.message}>
          Marshmallow jelly gingerbread chocolate candy sweet roll lemon drops
          pudding gummi bears. Tiramisu danish toffee wafer jelly danish cake
          gingerbread. Pie wafer biscuit lemon drops croissant gummi bears.
          Marshmallow jelly gingerbread chocolate candy sweet roll lemon drops
          pudding gummi bears. Tiramisu danish toffee wafer jelly danish cake
          gingerbread. Pie wafer biscuit lemon drops croissant gummi bears.
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
            Patrz, działa!
          </Popup>
        </Marker>
      </Map>
      
    </React.Fragment>
  );
};

export default Message;
