export const convertData = data => {
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

export const getDate = date => {
  const month = date.getMonth() + 1;
  return `${date.getDate()}.${
    month >= 10 ? month : "0" + month
  }.${date.getFullYear()}`;
};

export const getTime = date => {
  const minutes = date.getMinutes();
  return `${date.getHours()}:${minutes >= 9 ? minutes : "0" + minutes}`;
};

export const isToday = date => date === getDate(new Date());
export const isYesterday = date =>
  date === getDate(new Date(Date.now() - 24 * 60 * 60 * 1000));
