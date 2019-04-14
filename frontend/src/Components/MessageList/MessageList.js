import React from "react";
import styles from "./MessageList.module.scss";

const days = {
  "14.04.2019": [
    {
      title: "WYPADEK NA BATOREGO",
      message:
        " Marshmallow jelly gingerbread chocolate candy sweet roll lemon drops pudding",
      time: "14:14"
    },
    {
      title: "WYPADEK NA BATOREGO",
      message:
        "elly beans icing oat cake bear claw fruitcake. Toffee lemon drops biscuit liquorice candy lollipop sweet candy canes pie. Cheesecake oat cake sweet roll",
      time: "15:15"
    }
  ],
  "13.04.2019": [
    {
      title: "WYPADEK NA BATOREGO",
      message:
        "Marshmallow gummies pudding chocolate. Muffin tiramisu chocolate bar chocolate cake muffin caramels sesame snaps toffee. ",
      time: "16:16"
    }
  ]
};

const getDate = (date) => {
  const month = date.getMonth()+1;
  return `${date.getDate()}.${month >= 10 ? month : '0' + month }.${date.getFullYear()}`
}

const isToday = date => date === getDate(new Date());
const isYesterday = date => date === getDate(new Date(Date.now()-24*60*60*1000))

const MessagesList = Object.keys(days).map(day => (
  <React.Fragment key={day}>
    <h2 className={styles.messageDate}>{isToday(day) && "DZISIAJ"} {isYesterday(day) && "WCZORAJ"} {day}</h2>
    {days[day].map((message, index) => (
      <div className="message" key={index}>
        <h1 className={`${styles.messageTitle}`}>{message.title}</h1>
        <p className={`${styles.message}`}>{message.message}</p>
      </div>
    ))}
  </React.Fragment>
));

const MessageList = () => {
  return <div className={styles.appMessageList}>{MessagesList}</div>;
};

export default MessageList;
