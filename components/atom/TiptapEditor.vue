<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import { Editor, EditorContent, BubbleMenu } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Heading from "@tiptap/extension-heading";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Blockquote from "@tiptap/extension-blockquote";
import Paragraph from "@tiptap/extension-paragraph";
import Link from "@tiptap/extension-link";

const editorTitle = ref(null);

const editorNormal = ref(null);

const isLinkInputActive = ref(false);
const linkUrl = ref("");

const isActiveChat = ref(false);

const props = defineProps(["placeholder", "size", "alignment"]);

const dropcapParagraph = Paragraph.extend({
  name: "paragraph",

  addAttributes() {
    return {
      dropcap: {
        default: false,
        parseHTML: (element) => element.classList.contains("dropcap"),
        renderHTML: (attributes) => {
          return attributes.dropcap ? { class: "dropcap" } : {};
        },
      },
    };
  },

  addCommands() {
    return {
      toggleDropcap:
        () =>
        ({ chain, editor }) => {
          const isActive = editor.getAttributes("paragraph").dropcap;
          return chain()
            .updateAttributes("paragraph", { dropcap: !isActive })
            .run();
        },
    };
  },
});

const toggleChat = () => {
  isActiveChat.value = !isActiveChat.value;
};

const toggleLink = () => {
  const currentLink = editorNormal.value.getAttributes("link").href;
  if (currentLink) {
    editorNormal.value.chain().focus().unsetLink().run();
  } else {
    isLinkInputActive.value = true;
  }
};

const setLink = () => {
  if (linkUrl.value) {
    editorNormal.value.chain().focus().setLink({ href: linkUrl.value }).run();
  }
  isLinkInputActive.value = false;
};

const closeInput = () => {
  isLinkInputActive.value = false;
};

onMounted(() => {
  if (props.size == "title") {
    editorTitle.value = new Editor({
      editorProps: {
        attributes: {
          class: "outline-none",
        },
      },
      content: "",
      extensions: [
        StarterKit,
        Placeholder.configure({
          placeholder: props.placeholder,
        }),
      ],
    });
  } else if (props.size == "normal") {
    editorNormal.value = new Editor({
      editorProps: {
        attributes: {
          class: "outline-none",
        },
      },
      content: "",
      extensions: [
        StarterKit,
        Placeholder.configure({
          placeholder: props.placeholder,
        }),
        Heading.configure({
          levels: [2, 3],
        }),
        TextAlign.configure({
          types: ["heading", "paragraph"],
          defaultAlignment: "left",
        }),
        Blockquote.configure({
          HTMLAttributes: {
            class: "blockquote",
          },
        }),
        Link.configure({
          openOnClick: false,
          defaultProtocol: "https",
        }),
        Underline,
        BubbleMenu,
        EditorContent,
        dropcapParagraph,
      ],
    });
  }
});

onBeforeUnmount(() => {
  if (editorTitle.value) {
    editorTitle.value.destroy();
  } else if (editorNormal.value) {
    editorNormal.value.destroy();
  }
});
</script>

<template>
  <div>
    <div>
      <bubble-menu
        :editor="editorNormal"
        :tippy-options="{ duration: 100 }"
        v-if="editorNormal"
      >
        <div
          v-if="isLinkInputActive"
          class="text-red-600 bg-slate-600 w-fit h-fit text-sm flex flex-row items-center rounded-sm"
        >
          <input
            type="text"
            v-model="linkUrl"
            class="p-1 bg-slate-900 outline-none rounded-sm"
            @blur="closeInput"
          />
          <button class="p-1 w-[25px] h-[25px]" @click="setLink">
            <Icon
              name="material-symbols:check"
              class="w-[15px] h-[15px] text-white"
            />
          </button>
        </div>
        <div
          v-else
          class="flex flex-row text-white bg-slate-600 rounded-md items-center text-xs"
        >
          <button
            class="p-1 w-[25px] h-[25px]"
            @click="editorNormal.chain().focus().toggleBold().run()"
            :class="{
              'bg-gray-500 rounded-s-md ': editorNormal.isActive('bold'),
            }"
          >
            <b>B</b>
          </button>
          <button
            class="p-1 w-[25px] h-[25px]"
            @click="editorNormal.chain().focus().toggleItalic().run()"
            :class="{ 'bg-gray-500': editorNormal.isActive('italic') }"
          >
            <I>I</I>
          </button>
          <button
            class="p-1 w-[25px] h-[25px]"
            @click="editorNormal.chain().focus().toggleUnderline().run()"
            :class="{ 'bg-gray-500': editorNormal.isActive('underline') }"
          >
            <u>U</u>
          </button>
          <button
            class="p-1 w-[25px] h-[25px]"
            @click="toggleLink"
            :class="{ 'bg-gray-500': editorNormal.isActive('link') }"
          >
            <Icon
              name="material-symbols-light:link"
              class="w-[15px] h-[15px]"
            />
          </button>
          <button
            class="p-1 w-[25px] h-[25px]"
            @click="
              editorNormal.chain().focus().toggleHeading({ level: 2 }).run()
            "
            :class="{
              'bg-gray-500': editorNormal.isActive('heading', { level: 2 }),
            }"
          >
            <Icon name="hugeicons:heading-02" class="w-[15px] h-[15px]" />
          </button>
          <button
            class="p-1 w-[25px] h-[25px]"
            @click="
              editorNormal.chain().focus().toggleHeading({ level: 3 }).run()
            "
            :class="{
              'bg-gray-500': editorNormal.isActive('heading', { level: 3 }),
            }"
          >
            <Icon name="hugeicons:heading-03" class="w-[15px] h-[15px]" />
          </button>
          <button
            class="p-1 w-[25px] h-[25px]"
            @click="editorNormal.chain().focus().setTextAlign('left').run()"
            :class="{
              'bg-gray-500': editorNormal.isActive({ textAlign: 'left' }),
            }"
          >
            <Icon
              name="humbleicons:align-text-left"
              class="w-[15px] h-[15px]"
            />
          </button>
          <button
            class="p-1 w-[25px] h-[25px]"
            @click="editorNormal.chain().focus().setTextAlign('center').run()"
            :class="{
              'bg-gray-500': editorNormal.isActive({ textAlign: 'center' }),
            }"
          >
            <Icon
              name="humbleicons:align-text-center"
              class="w-[15px] h-[15px]"
            />
          </button>
          <button
            class="p-1 w-[25px] h-[25px]"
            @click="editorNormal.chain().focus().setTextAlign('right').run()"
            :class="{
              'bg-gray-500': editorNormal.isActive({
                textAlign: 'right',
              }),
            }"
          >
            <Icon
              name="humbleicons:align-text-right"
              class="w-[15px] h-[15px]"
            />
          </button>
          <button
            class="p-1 w-[25px] h-[25px]"
            @click="editorNormal.chain().focus().toggleBlockquote().run()"
            :class="{
              'bg-gray-500 ': editorNormal.isActive('blockquote'),
            }"
          >
            <Icon name="mingcute:quote-left-fill" class="w-[15px] h-[15px]" />
          </button>
          <button
            class="p-1 w-[25px] h-[25px]"
            @click="toggleChat"
            :class="[
              isActiveChat
                ? 'bg-gray-500' +
                  (editorNormal.isActive('blockquote') ||
                  editorNormal.isActive('heading', { level: 2 }) ||
                  editorNormal.isActive('heading', { level: 3 })
                    ? ' rounded-e-md'
                    : '')
                : '',
            ]"
          >
            <Icon name="mynaui:chat-messages" class="w-[15px] h-[15px]" />
          </button>
          <button
            v-if="
              !editorNormal.isActive('blockquote') &&
              !editorNormal.isActive('heading', { level: 2 }) &&
              !editorNormal.isActive('heading', { level: 3 })
            "
            @click="editorNormal.chain().focus().toggleDropcap().run()"
            class="p-1 w-[25px] h-[25px]"
            :class="{
              'bg-gray-500': editorNormal.isActive('paragraph', {
                dropcap: true,
              }),
            }"
          >
            <Icon
              name="mdi:format-letter-ends-with"
              class="w-[15px] h-[15px]"
            />
          </button>
        </div>
      </bubble-menu>
      <div class="mt-2">
        <editor-content
          :class="[
            props.size == 'title'
              ? 'text-black font-serif font-bold items-center text-center justify-center text-[50px]'
              : props.size == 'normal' && props.alignment == 'center'
              ? 'text-gray-400 font-sans items-center text-center justify-center text-[18px]'
              : 'text-black font-sans text-[18px]',
          ]"
          :editor="props.size == 'title' ? editorTitle : editorNormal"
        />
      </div>
    </div>
    <div
      v-if="isActiveChat"
      class="w-[320px] h-screen fixed inset-0 ml-[1214px] bg-white shadow-md"
    >
      <AtomChat />
    </div>
  </div>
</template>

<style>
.tiptap p.is-editor-empty:first-child::before {
  color: #8a8e91;
  content: attr(data-placeholder);
  float: center;
  height: 0;
  pointer-events: none;
}

.tiptap h2 {
  font-size: 37px;
}

.tiptap h3 {
  font-size: 28px;
}

.tiptap ul {
  margin-left: 25px;
  list-style-type: circle;
}

.tiptap blockquote {
  border: 2px solid rgb(0, 0, 186);
  border-radius: 10px;
  padding-bottom: 30px;
  padding-left: 40px;
  padding-right: 40px;
  width: 100%;
  text-align: center;
  position: relative;
  font-style: italic;
  font-size: 25px;
}

.tiptap blockquote::before {
  content: "“";
  font-size: 50px;
  color: rgb(244, 120, 37);
  font-weight: bold;
  position: top;
  left: 50%;
}

.tiptap blockquote::after {
  content: "_";
  font-size: 50px;
  color: rgb(244, 120, 37);
  position: bottom;
  left: 50%;
}

.dropcap::first-letter {
  font-size: 60px;
  font-weight: bold;
  float: left;
  margin-right: 8px;
  line-height: 1;
}

.tiptap a {
  color: blue;
}
</style>
