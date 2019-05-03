import React, { Component } from "react";
import styles from "./MessageList.module.scss";
import { Link } from "react-router-dom";
import { convertData, isToday, isYesterday } from "../../date.converter";

class MessageList extends Component {
  render() {
    const days = convertData(this.props.data);
    return (
      <div className={styles.appMessageList}>
        {!this.props.data.length && (
          <div className={styles.noMessageInfo}> Brak wiadomości!</div>
        )}
        {
          Object.keys(days)
          .sort()
          .reverse()
          .map(day => (
            <React.Fragment key={day}>
              <h2 className={styles.messageDate}>
                {isToday(day) && "DZISIAJ"} {isYesterday(day) && "WCZORAJ"} {day}
              </h2>
              {days[day]
                .sort()
                .reverse()
                .map((message, index) => (
                  <Link
                    to={{
                      pathname: `/message/${index}`,
                      state: {
                        data: message
                      }
                    }}
                    key={index}
                  >
                    <div className={styles.messageContainer}>
                      <div className={styles.newMessageIndicator} />
                      <div className={styles.message}>
                        <h2 className={styles.messageTitle}>
                          {message.title.toUpperCase()}
                        </h2>
                        <h1 className={styles.messagePreview}>
                          {message.message}
                        </h1>
                      </div>
                      <div className={styles.time}>
                        <p className={styles.messageTime}>{message.time}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </React.Fragment>
          ))}
      </div>
    );
  }
}

export default MessageList;
