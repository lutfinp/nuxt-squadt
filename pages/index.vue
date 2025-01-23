<script setup>
const buttonMenu = ref(["All", "Published", "Scheduled", "Draft"]);

const activeButtonMenu = ref("All");

const showOption = ref(false);

const showOptionPosition = reactive({
  top: 0,
});

const dataListDashboard = ref([
  {
    Key: "2485",
    data: {
      author: {
        raw: ["Deny Ramanda"],
      },
      editor: {
        raw: "Deny Ramanda",
      },
      categories: {
        raw: [
          '{"slug":"opini","name":"Opini"}',
          '{"name":"Artikel Opini","slug":"artikel-opini"}',
        ],
      },
      id: {
        raw: "2485",
      },
      live_editing: {
        raw: "",
      },
      modified_date: {
        raw: "2025-01-13T06:12:00.113Z",
      },
      published_date: {
        raw: "2024-12-16T06:48:38.127Z",
      },
      status: {
        raw: "Published",
      },
      thumbnail: {
        raw: "https://asset.kgnewsroom.com/photo/pre/2024/12/16/836adc79-706d-4622-8af9-b0492f707a67_jpg.jpg",
      },
      title: {
        raw: "Deny Ramanda, regresi post article",
      },
      excerpt: {
        raw: "Ini adalah excerpt",
      },
      penyelarasBahasa: {
        raw: {
          name: "",
          email: "",
          modifiedDate: {
            seconds: 1734331718,
            nanoseconds: 127000000,
          },
          status: "requested",
          approvedDate: null,
        },
      },
      isLocked: {
        raw: false,
      },
      lockBy: {
        raw: null,
      },
      chatCounter: {
        raw: 0,
      },
      type: {
        raw: "post",
      },
      review: {
        raw: null,
      },
    },
  },
  {
    Key: "2222",
    data: {
      author: {
        raw: ["Deny Ramanda"],
      },
      editor: {
        raw: "Firly Anugrah Firdaus",
      },
      categories: {
        raw: ['{"slug":"nusantara","name":"Nusantara"}'],
      },
      id: {
        raw: "2222",
      },
      live_editing: {
        raw: "",
      },
      modified_date: {
        raw: "2025-01-12T16:10:52.097Z",
      },
      published_date: {
        raw: "2024-11-25T07:43:03.971Z",
      },
      status: {
        raw: "Published",
      },
      thumbnail: {
        raw: "https://asset.kgnewsroom.com/photo/pre/2024/12/09/8a460b6b-7d77-40a7-80d0-1f66b9943d81_jpg.jpg",
      },
      title: {
        raw: "ICM Paling lengkap",
      },
      excerpt: {
        raw: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      },
      penyelarasBahasa: {
        raw: {
          modifiedDate: {
            seconds: 1732520583,
            nanoseconds: 971000000,
          },
          name: "",
          status: "requested",
          approvedDate: null,
          email: "",
        },
      },
      isLocked: {
        raw: false,
      },
      lockBy: {
        raw: "deny@kompas.com",
      },
      chatCounter: {
        raw: 0,
      },
      type: {
        raw: "post",
      },
      review: {
        raw: {
          reviewerName: "",
          requesterName: "Firly Anugrah Firdaus",
          isReviewed: false,
          requesterEmail: "firly.firdaus@kompas.com",
          modifiedDate: {
            seconds: 1735339897,
            nanoseconds: 704000000,
          },
          reviewerEmail: "",
          scores: {},
          reviewDate: null,
        },
      },
    },
  },
  {
    Key: "2255",
    data: {
      author: {
        raw: ["Deny Ramanda"],
      },
      editor: {
        raw: "Deny Ramanda",
      },
      categories: {
        raw: ['{"slug":"polhuk","name":"Politik & Hukum"}'],
      },
      id: {
        raw: "2255",
      },
      live_editing: {
        raw: "",
      },
      modified_date: {
        raw: "2025-01-07T07:10:31.268Z",
      },
      published_date: {
        raw: "2024-12-02T09:45:43.432Z",
      },
      status: {
        raw: "Published",
      },
      thumbnail: {
        raw: "https://cdn-dam.kompas.id/images-dev/2024/11/29/36bbbe4b9adfc47bc9ad7250e76cc3e3-Miami_Dolphins_v_Green_Bay_Packers.jpg",
      },
      title: {
        raw: "Brief with number section 2",
      },
      excerpt: {
        raw: "number section brief",
      },
      penyelarasBahasa: {
        raw: {
          email: "",
          name: "",
          approvedDate: null,
          modifiedDate: {
            seconds: 1733132743,
            nanoseconds: 432000000,
          },
          status: "requested",
        },
      },
      isLocked: {
        raw: false,
      },
      lockBy: {
        raw: null,
      },
      chatCounter: {
        raw: 0,
      },
      type: {
        raw: "brief",
      },
      review: {
        raw: null,
      },
    },
  },
  {
    Key: "2529",
    data: {
      author: {
        raw: ["Deny Ramanda"],
      },
      editor: {
        raw: "Deny Ramanda",
      },
      categories: {
        raw: [],
      },
      id: {
        raw: "2529",
      },
      live_editing: {
        raw: "",
      },
      modified_date: {
        raw: "2024-12-27T10:08:00.361Z",
      },
      published_date: {
        raw: null,
      },
      status: {
        raw: "Draft",
      },
      thumbnail: null,
      title: {
        raw: "Yddada",
      },
      excerpt: {
        raw: "",
      },
      penyelarasBahasa: {
        raw: null,
      },
      isLocked: {
        raw: false,
      },
      lockBy: {
        raw: null,
      },
      chatCounter: {
        raw: 0,
      },
      type: {
        raw: "video",
      },
      review: {
        raw: null,
      },
    },
  },
  {
    Key: "2515",
    data: {
      author: {
        raw: ["Deny Ramanda"],
      },
      editor: {
        raw: "Deny Ramanda",
      },
      categories: {
        raw: [],
      },
      id: {
        raw: "2515",
      },
      live_editing: {
        raw: "",
      },
      modified_date: {
        raw: "2024-12-27T06:13:51.321Z",
      },
      published_date: {
        raw: null,
      },
      status: {
        raw: "Draft",
      },
      thumbnail: null,
      title: {
        raw: "Dsds",
      },
      excerpt: {
        raw: "",
      },
      penyelarasBahasa: {
        raw: null,
      },
      isLocked: {
        raw: false,
      },
      lockBy: {
        raw: null,
      },
      chatCounter: {
        raw: 0,
      },
      type: {
        raw: "post",
      },
      review: {
        raw: null,
      },
    },
  },
  {
    Key: "2506",
    data: {
      author: {
        raw: ["Deny Ramanda"],
      },
      editor: {
        raw: "Deny Ramanda",
      },
      categories: {
        raw: [
          '{"slug":"foto","name":"Foto"}',
          '{"slug":"foto-cerita","name":"Foto Cerita"}',
        ],
      },
      id: {
        raw: "2506",
      },
      live_editing: {
        raw: "",
      },
      modified_date: {
        raw: "2024-12-27T04:28:47.957Z",
      },
      published_date: {
        raw: "2024-12-24T06:46:48.955Z",
      },
      status: {
        raw: "Published",
      },
      thumbnail: {
        raw: "https://cdn-dam.kompas.id/images-dev/2024/12/11/4a4be766584e82fdf605d09c12779ad0-cropped_image.png",
      },
      title: {
        raw: "Foto Cerita hehe",
      },
      excerpt: {
        raw: "foto cerita hehe",
      },
      penyelarasBahasa: {
        raw: {
          name: "",
          email: "",
          status: "requested",
          approvedDate: null,
          modifiedDate: {
            seconds: 1735022808,
            nanoseconds: 955000000,
          },
        },
      },
      isLocked: {
        raw: false,
      },
      lockBy: {
        raw: null,
      },
      chatCounter: {
        raw: 0,
      },
      type: {
        raw: "post",
      },
      review: {
        raw: null,
      },
    },
  },
  {
    Key: "2505",
    data: {
      author: {
        raw: ["Deny Ramanda"],
      },
      editor: {
        raw: "Deny Ramanda",
      },
      categories: {
        raw: [
          '{"slug":"humaniora","name":"Humaniora"}',
          '{"name":"Dikbud","slug":"dikbud"}',
        ],
      },
      id: {
        raw: "2505",
      },
      live_editing: {
        raw: "",
      },
      modified_date: {
        raw: "2024-12-23T13:22:58.717Z",
      },
      published_date: {
        raw: "2024-12-23T13:25:00.000Z",
      },
      status: {
        raw: "Published",
      },
      thumbnail: {
        raw: "https://cdn-dam.kompas.id/images-dev/2024/12/11/4a4be766584e82fdf605d09c12779ad0-cropped_image.png",
      },
      title: {
        raw: "Test Scheduling",
      },
      excerpt: {
        raw: "Test",
      },
      penyelarasBahasa: {
        raw: {
          approvedDate: null,
          email: "",
          modifiedDate: {
            seconds: 1734959950,
            nanoseconds: 597000000,
          },
          status: "requested",
          name: "",
        },
      },
      isLocked: {
        raw: false,
      },
      lockBy: {
        raw: null,
      },
      chatCounter: {
        raw: 0,
      },
      type: {
        raw: "post",
      },
      review: {
        raw: null,
      },
    },
  },
  {
    Key: "2500",
    data: {
      author: {
        raw: ["Deny Ramanda"],
      },
      editor: {
        raw: "Deny Ramanda",
      },
      categories: {
        raw: [],
      },
      id: {
        raw: "2500",
      },
      live_editing: {
        raw: "",
      },
      modified_date: {
        raw: "2024-12-20T10:13:03.340Z",
      },
      published_date: {
        raw: null,
      },
      status: {
        raw: "Draft",
      },
      thumbnail: null,
      title: {
        raw: "Test Idle Save",
      },
      excerpt: {
        raw: "",
      },
      penyelarasBahasa: {
        raw: null,
      },
      isLocked: {
        raw: false,
      },
      lockBy: {
        raw: null,
      },
      chatCounter: {
        raw: 0,
      },
      type: {
        raw: "post",
      },
      review: {
        raw: null,
      },
    },
  },
  {
    Key: "2231",
    data: {
      author: {
        raw: ["Deny Ramanda"],
      },
      editor: {
        raw: "Deny Ramanda",
      },
      categories: {
        raw: ['{"slug":"polhuk","name":"Politik & Hukum"}'],
      },
      id: {
        raw: "2231",
      },
      live_editing: {
        raw: "",
      },
      modified_date: {
        raw: "2024-12-20T08:05:38.215Z",
      },
      published_date: {
        raw: "2024-11-26T08:28:47.103Z",
      },
      status: {
        raw: "Published",
      },
      thumbnail: {
        raw: "https://cdn-dam.kompas.id/images-dev/2024/11/18/be7b40745dbd67a3a842150b67214423-be7b40745dbd67a3a842150b67214423_20230922IDO_Kebakaran_Gambut17.jpeg",
      },
      title: {
        raw: "Jawalll",
      },
      excerpt: {
        raw: "jawall",
      },
      penyelarasBahasa: {
        raw: {
          approvedDate: null,
          name: "",
          status: "requested",
          modifiedDate: {
            seconds: 1732609727,
            nanoseconds: 103000000,
          },
          email: "",
        },
      },
      isLocked: {
        raw: false,
      },
      lockBy: {
        raw: null,
      },
      chatCounter: {
        raw: 0,
      },
      type: {
        raw: "post",
      },
      review: {
        raw: null,
      },
    },
  },
  {
    Key: "2189",
    data: {
      author: {
        raw: ["Deny Ramanda"],
      },
      editor: {
        raw: "Deny Ramanda",
      },
      categories: {
        raw: [],
      },
      id: {
        raw: "2189",
      },
      live_editing: {
        raw: "",
      },
      modified_date: {
        raw: "2024-12-19T06:40:03.542Z",
      },
      published_date: {
        raw: null,
      },
      status: {
        raw: "Draft",
      },
      thumbnail: null,
      title: {
        raw: "New test article logs",
      },
      excerpt: {
        raw: "",
      },
      penyelarasBahasa: {
        raw: null,
      },
      isLocked: {
        raw: false,
      },
      lockBy: {
        raw: null,
      },
      chatCounter: {
        raw: 0,
      },
      type: {
        raw: "post",
      },
      review: {
        raw: null,
      },
    },
  },
]);

const dateFormat = (dateString) => {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-GB");
  const hours = date.getUTCHours() % 12 || 12;
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  const period = date.getUTCHours() >= 12 ? "PM" : "AM";
  return `${formattedDate} at ${hours}:${minutes} ${period}`;
};

const handleOptionClick = (event) => {
  const rect = event.target.getBoundingClientRect();
  showOptionPosition.top = rect.top + window.scrollY + rect.height;
  showOption.value = !showOption.value;
};
</script>

<template>
  <div class="py-16 px-2 max-sm:py-5 max-sm:px-4">
    <div class="flex flex-col gap-5 border-b border-gray-200 w-full pb-5">
      <div class="flex flex-col gap-5 border-b border-gray-200 w-full pb-5">
        <div class="flex flex-row gap-3 max-sm:justify-between">
          <AtomButton
            v-for="(btn, key) in buttonMenu"
            :desk="btn"
            :key="key"
            @click="activeButtonMenu = btn"
            :is-active="btn === activeButtonMenu"
            :rounded="true"
          />
        </div>
      </div>
      <AtomButton desk="+ Create Post" solid="true" />
    </div>
    <div class="font-sans font-thin py-4 px-2 border-b border-gray-200 text-sm">
      10 artikel ditampilkan
    </div>
    <div class="max-sm:overflow-auto">
      <div
        class="flex flex-row justify-start py-4 px-2 gap-2 text-left border-b border-gray-200 font-sans font-black text-base"
      >
        <div class="basis-[38px]">No</div>
        <div class="basis-[200px] cursor-pointer">Title</div>
        <div class="basis-[100px]">Thumbnail</div>
        <div class="basis-[150px] cursor-pointer">Last Edited By</div>
        <div class="basis-[150px]">Created By</div>
        <div class="basis-[100px]">Status</div>
        <div class="basis-[110px]">Categories</div>
        <div class="basis-[130px]">Review Status</div>
        <div class="basis-[100px]">Date</div>
      </div>
      <div
        v-for="(dataArticle, key) in dataListDashboard"
        :key="key"
        class="flex flex-row justify-start py-4 px-2 gap-2 text-left border-b border-gray-200 font-sans font-black items-center"
      >
        <div class="basis-[38px] font-bold text-sm">{{ key + 1 }}</div>
        <div
          class="basis-[200px] font-semibold text-sm hover:text-blue-800 cursor-pointer"
        >
          {{ dataArticle.data.title.raw }}
        </div>
        <div class="basis-[100px] cursor-pointer">
          <img
            :src="
              dataArticle.data.thumbnail?.raw
                ? dataArticle.data.thumbnail.raw
                : '/img/thumbnail.png'
            "
            alt=""
            class="w-[90px] h-[53px] rounded-md"
          />
        </div>
        <div class="basis-[150px] font-semibold text-sm">
          {{ dataArticle.data.editor.raw }}
        </div>
        <div class="basis-[150px] font-semibold text-sm">
          {{ dataArticle.data.author.raw[0] }}
        </div>
        <div class="basis-[100px]">
          <div class="w-[70px]">
            <div
              :class="[
                dataArticle.data.status.raw == 'Published'
                  ? 'bg-blue-200 p-2 rounded-md text-xs text-blue-800 font-bold text-center'
                  : 'bg-gray-300 p-2 w-[60px] rounded-md text-xs text-black font-bold text-center',
              ]"
            >
              {{ dataArticle.data.status.raw }}
            </div>
          </div>
        </div>
        <div class="flex flex-col basis-[110px] font-semibold text-xs">
          <span
            v-for="(category, index) in dataArticle.data.categories.raw.map(
              (item) => JSON.parse(item)
            )"
            :key="index"
          >
            {{ category.name }}
          </span>
        </div>
        <div class="basis-[130px]">
          <div class="w-[100px]">
            <div
              v-if="dataArticle.data.review.raw"
              class="bg-orange-100 p-2 rounded-md text-xs text-orange-600 font-bold text-center"
            >
              Ready to Review
            </div>
            <div v-else class="font-bold">-</div>
          </div>
        </div>
        <div class="basis-[100px] font-thin text-xs flex flex-col">
          <div class="font-bold">Updated</div>
          {{ dateFormat(dataArticle.data.modified_date.raw) }}
        </div>
        <button @click="handleOptionClick" class="ml-7">
          <icon
            name="meteor-icons:ellipsis"
            class="w-[17px] h-[17px] text-gray-400"
          />
        </button>
      </div>
      <div>
        <div
          v-if="showOption"
          :style="{
            top: `${showOptionPosition.top}px`,
          }"
          class="bg-white shadow-md absolute right-32 flex flex-col font-sans font-bold text-xs gap-4 p-5"
        >
          <button class="flex flex-row gap-2 items-center">
            <img src="/img/stick.png" alt="" class="w-[10px] h-[10px]" />
            <div>Quick Edit</div>
          </button>
          <button class="flex flex-row gap-2 items-center">
            <img src="/img/edit.png" alt="" class="w-[12px] h-[12px]" />
            <div>Edit Post</div>
          </button>
          <div class="border-b"></div>
          <button class="flex flex-row gap-2 items-center">
            <img src="/img/delete.png" alt="" class="w-[10px] h-[12px]" />
            <div class="text-orange-500">Quick Edit</div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
