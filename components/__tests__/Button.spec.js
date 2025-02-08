import { expect, describe, test } from "vitest";
import { mount } from "@vue/test-utils";
import Button from "@/components/atom/Button.vue";

describe("Coba Unit testing", () => {
  test("testing komponen Button", () => {
    const wrapper = mount(Button);
    expect(wrapper).toBeTruthy();
  });

  test("Testing button rounded", () => {
    const wrapper = mount(Button, {
      props: {
        rounded: true,
      },
    });
    const button = wrapper.find("button");
    expect(button.classes()).toContain("rounded-full");
  });
});
