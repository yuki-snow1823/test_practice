import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import index from "@/pages/index.vue";
import { cloneDeep } from "lodash";
import indexStore from "@/store/index.js"

// const localVue = createLocalVue();
// localVue.use(Vuex);


describe("index.vueのテスト", () => {
  let store;
  beforeEach(() => {
    // const wrapper = mount(index);
    // store = new Vuex.Store(cloneDeep(indexStore));
  });
  test("タイトルが表示されている", () => {
    // console.log(wrapper);
    const wrapper = mount(index, {
      store
    });
    store = new Vuex.Store({
      state: {},
    });
    expect(store.state.count).toBe(0);
    expect(wrapper.find(".title")).toBeTruthy();
  });
  test("カウント前の表示が0", () => {
    const wrapper = mount(index);
    expect(wrapper.find("a").value).toBeTruthy();
  });
});
