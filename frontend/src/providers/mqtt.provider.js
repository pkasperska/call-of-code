export let mqtt = null;
export let topic = null;

export const setMqtt = _mqtt => {
  mqtt = _mqtt;
};
export const setTopic = _topic => {
  topic = _topic;
};
