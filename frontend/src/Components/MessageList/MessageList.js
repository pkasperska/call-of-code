import React, { Component } from "react";
import styles from "./MessageList.module.scss";
import dot from "./circle-medium.png";

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
   
    const days = convertData(this.props.data);

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
        {Object.keys(days).map(day => (
          <React.Fragment key={day}>
            <h2 className={styles.messageDate}>
              {isToday(day) && "DZISIAJ"} {isYesterday(day) && "WCZORAJ"} {day}
            </h2>
            { days[day].map((message, index) => (
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
