import { mount } from "@vue/test-utils";
import index from "@/pages/index.vue";

// 普通に通る
describe("index.vueのテスト", () => {
  test("タイトルが表示されている", () => {
    const wrapper = mount(index);
    // console.log(wrapper);
    expect(wrapper.find(".title")).toBeTruthy();
  });
});

