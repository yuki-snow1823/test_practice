import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: function() {
      return {
        message: "count number.",
        counter: 0
      };
    }
  });
};

export default createStore;
