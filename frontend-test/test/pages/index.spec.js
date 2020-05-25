import { mount, createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import index from "@/pages/index.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("index.vueのテスト", () => {
  let store;
  beforeEach(() => {
    // const wrapper = mount(index);
    // store = new Vuex.Store(cloneDeep(indexStore));
    store = new Vuex.Store({
      state: {
        counter: 0
      },
      mutations: {
        increment(state) {
          state.counter++;
        }
      }
    });
  });
  test("aタグを2回押すと表示が2になる", () => {
    const wrapper = shallowMount(index, { store, localVue });
    let i = 0
    // 普通にjsの文法は当然使える
    for (i = 0; i < 2; i++) {
      wrapper.find(".link").trigger("click");
    }
    expect(store.state.counter).toBe(2);
  });
});

// 全てのストアの要素を各テストに突っ込む必要があった。
