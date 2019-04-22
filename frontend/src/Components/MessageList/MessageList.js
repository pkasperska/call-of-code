import React, { Component } from "react";
import styles from "./MessageList.module.scss";
import dot from "./circle-medium.png";

// const days = {
//   "20.04.2019": [
//     {
//       title: "WYPADEK NA BATOREGO",
//       message:
//         " Marshmallow jelly gingerbread chocolate candy sweet roll lemon drops pudding",
//       time: "14:14",
//       longitude: "17.03333",
//       latitude: "51.1"
//     },
//     {
//       title: "WYPADEK NA BATOREGO",
//       message:
//         "Jelly beans icing oat cake bear claw fruitcake. Toffee lemon drops biscuit liquorice candy lollipop sweet candy canes pie. Cheesecake oat cake sweet roll",
//       time: "15:15",
//       longitude: "16.1619",
//       latitude: "51.21006"
//     }
//   ],
//   "19.04.2019": [
//     {
//       title: "WYPADEK NA BATOREGO",
//       message:
//         "Marshmallow gummies pudding chocolate. Muffin tiramisu chocolate bar chocolate cake muffin caramels sesame snaps toffee. ",
//       time: "16:16",
//       longitude: "15.50643",
//       latitude: "51.93548"
//     }
//   ]
// };

class MessageList extends Component {
  state = {
    showIndicator: true
  };

  render() {
    const convertData = data => {
      const messagesData = data.reduce((messagesData, message) => {
        const messageListFromTheDate = [];
  
        if (messagesData[message.date] !== undefined) {
          messageListFromTheDate.push(...messagesData[message.date]);
        }
  
        return {
          ...messagesData,
          [message.date]: [...messageListFromTheDate, message]
        };
      }, {});
      return messagesData;
    };
   
    const getDate = date => {
      const month = date.getMonth() + 1;
      return `${date.getDate()}.${
        month >= 10 ? month : "0" + month
      }.${date.getFullYear()}`;
    };
    const isToday = date => date === getDate(new Date());
    const isYesterday = date =>
      date === getDate(new Date(Date.now() - 24 * 60 * 60 * 1000));
    const { showIndicator } = this.state;
    
    return (
      <div className={styles.appMessageList}>
      {!this.props.data.length && 
      <div className={styles.noMessageInfo}> Brak wiadomości!</div> }
        {Object.keys( convertData(this.props.data)).map(day => (
          <React.Fragment key={day}>
            <h2 className={styles.messageDate}>
              {isToday(day) && "DZISIAJ"} {isYesterday(day) && "WCZORAJ"} {day}
            </h2>
            { convertData(this.props.data)[day].map((message, index) => (
              <div className={styles.messageContainer} key={index}>
                <div
                  className={styles.newMessageIndicator}
                  onClick={() =>
                    this.setState({ showIndicator: !showIndicator })
                  }
                >
                  {showIndicator ? (
                    <img src={dot} alt="Unreaded message" />
                  ) : null}
                </div>
                <div className={styles.message}>
                  <h2 className={styles.messageTitle}>{message.title.toUpperCase()}</h2>
                  <h1 className={styles.messagePreview}>{message.message}</h1>
                </div>
                <div className={styles.time}>
                  <p className={styles.messageTime}>{message.time}</p>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default MessageList;
