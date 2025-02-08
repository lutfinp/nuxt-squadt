import { expect, describe, test } from "vitest";
import { mount } from "@vue/test-utils";
import Chat from "@/components/atom/Chat.vue";

describe("Testing Chat", () => {
  test("testing komponen Chat", () => {
    const wrapper = mount(Chat);
    expect(wrapper).toBeTruthy();
  });
});
