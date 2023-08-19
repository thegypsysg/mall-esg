// eventBus.js
import { createApp } from "vue";

const app = createApp({});
const eventBus = (app.config.globalProperties.$eventBus = {});
eventBus.callbacks = {};

eventBus.$on = (event, callback) => {
  if (!eventBus.callbacks[event]) {
    eventBus.callbacks[event] = [];
  }
  eventBus.callbacks[event].push(callback);
};

eventBus.$off = (event, callback) => {
  if (eventBus.callbacks[event]) {
    if (callback) {
      eventBus.callbacks[event] = eventBus.callbacks[event].filter(
        (cb) => cb !== callback
      );
    } else {
      delete eventBus.callbacks[event];
    }
  }
};

eventBus.$emit = (event, ...args) => {
  if (eventBus.callbacks[event]) {
    eventBus.callbacks[event].forEach((callback) => {
      callback(...args);
    });
  }
};

export default app;

// import Vue from "vue";

// const bus = new Vue();

// export default bus;
