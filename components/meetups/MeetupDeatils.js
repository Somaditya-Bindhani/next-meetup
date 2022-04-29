import React from "react";
import styles from './MeetupDeatils.module.css'
const MeetupDeatils = (props) => {
  return (
    <section className={styles.detail}>
      <img src={props.image} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
};

export default MeetupDeatils;
