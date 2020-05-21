import { mount } from "@vue/test-utils";
import index from "@/pages/index.vue";

describe("index.vueのテスト", () => {
  test("タイトルが表示されている", () => {
    const wrapper = mount(index);
    expect(wrapper.find(".title")).toBeTruthy();
  });
});
