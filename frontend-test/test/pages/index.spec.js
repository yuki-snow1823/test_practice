import { mount, createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import index from "@/pages/index.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("index.vueのテスト", () => {
  let store;
  let wrapper
  beforeEach(() => {
    store = new Vuex.Store({
      state: { count: 0 }
    });
    wrapper = mount(index, { store, localVue });
  });
  test("カウント前のステートの値が0", () => {
    expect(store.state.count).toBe(0);
  });
  test("aタグを押すと表示が1になる", () => {
    wrapper.find("a").trigger("click");
    expect(wrapper.vm.$el).toBe(0);
  });
});
