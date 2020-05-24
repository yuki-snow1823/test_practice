import { mount, createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import index from "@/pages/index.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("index.vueのテスト", () => {
  let store;
  beforeEach(() => {
    store = new Vuex.Store({
      state: { count: 0 }
    });
  });
  test("タイトルが表示されている", () => {
    // console.log(wrapper);
    const wrapper = mount(index, {
      store,
      localVue
    });
    expect(store.state.count).toBe(0);
    expect(wrapper.find(".title")).toBeTruthy();
  });
  test("カウント前の表示が0", () => {
    const wrapper = mount(index, { store, localVue });
    expect(wrapper.find("a")).toBeTruthy();
  });
});
