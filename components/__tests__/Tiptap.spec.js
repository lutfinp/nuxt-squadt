import { mount } from "@vue/test-utils";
import { describe, expect, test, vi } from "vitest";
import TiptapEditor from "../atom/TiptapEditor.vue";
import BubbleMenu from "@tiptap/extension-bubble-menu";

describe("Testing Tiptap", () => {
  test("Test", () => {
    const wrapper = mount(TiptapEditor);
    expect(wrapper).toBeTruthy();
  });

  test("testing toggle chat", () => {
    const wrapper = mount(TiptapEditor);
    const onClickChat = vi.fn(wrapper.vm.toggleChat());
    onClickChat();

    expect(onClickChat).toHaveBeenCalled();
  });

  test("testing toggle setLink", () => {
    const wrapper = mount(TiptapEditor);
    const onClickSetLink = vi.fn(wrapper.vm.setLink());
    onClickSetLink();

    expect(onClickSetLink).toHaveBeenCalled();
  });

  test("testing input", () => {
    const wrapper = mount(TiptapEditor, {
      data() {
        return {
          editorNormal: true,
          isLinkInputActive: true,
          
        }
      },
      global: {
        stubs: {
          BubbleMenu: true
        }
      }
    });
    wrapper.vm.$nextTick()
    const textInput = wrapper.find('input[type="text"]');
    textInput.setValue("https://www.kompas.id/");

    expect(wrapper.find('input[type="text"]').element.value).toBe("https://www.kompas.id/");
  });
});
