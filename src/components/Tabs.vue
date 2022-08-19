<template>
  <div class="app-tabs">
    <ul>
      <li v-for="(tab, index) in tabList" :key="index" class="pb-2" :class="{
        underline: index + 1 === activeTab,
      }">
        <label :for="`${id}${index}`" v-text="tab" class="cursor-pointer block" />
        <input :id="`${id}${index}`" type="radio" :name="`${id}-tab`" :value="index + 1" v-model="activeTab"
          class="hidden" />
      </li>
    </ul>
    <template v-for="(tab, index) in tabList">
      <div :key="index" v-if="index + 1 === activeTab" class="content">
        <slot :name="`tabPanel-${index + 1}`" />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    tabList: {
      type: Array,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    }
    // variant: {
    //   type: String,
    //   required: false,
    //   default: () => "vertical",
    //   // validator: (value) => ["horizontal", "vertical"].includes(value),
    // },
  },
  data() {
    return {
      activeTab: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
.app-tabs {
  .flex {
    display: flex;
    color: black;
    background: #f9f8f8;
  }

  li {
    padding: 0.5em;
    color: #f4b9b1;
  }

  .content {
    color: black;
    background: #f9f8f8;
    padding: 0 0.5em;
  }

  ul {
    display: flex;
    align-items: center;
  }
}
</style>
