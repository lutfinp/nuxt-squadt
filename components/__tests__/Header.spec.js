import { expect, describe, test } from "vitest";
import { mount, shallowMount } from "@vue/test-utils";
import Header from "@/components/organism/HeaderTextEditor.vue";

describe("Testing Header", () => {
  test("Test", () => {
    const wrapper = shallowMount(Header);
    expect(wrapper).toBeTruthy();
  });
});
