<template>
  <div class="cards m-4">
    <div class="card">
      <p class="label px-4 py-2 pt-3 font-semibold">
        {{ issue.title }}
        <badges :severity="issue.severity"></badges>
      </p>
      <p class="label px-4">@ 2 targets</p>
      <input type="checkbox" :id="`chck${id}`" />
      <label class="card-label" :for="`chck${id}`"></label>
      <div class="card-content">
        <div>
          <tabs class="pb-2" :tabList="tabList" :id="id">
            <template v-slot:tabPanel-1>
              {{ issue.description }}
            </template>
            <template v-slot:tabPanel-2>
              {{ issue.remediation }}
            </template>
          </tabs>
        </div>
        <div v-for="(target, index) in issue.targets">
          <p class="px-2 py-2 pb-2">
            {{ target.address }}
            <span>{{ timeSince(new Date(target.discovered_at)) }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from "./Tabs.vue";
import Badges from "./Badges.vue";

export default {
  components: {
    Tabs,
    Badges,
  },
  props: {
    issue: {
      required: true,
    },

    id: {
      type: Number,
      required: true,
    },
  },

  methods: {
    timeSince(date) {
      let seconds = Math.floor((new Date() - date) / 1000);

      let interval = seconds / 31536000;

      if (interval > 1) {
        return Math.floor(interval) + " years ago";
      }
      interval = seconds / 2592000;
      if (interval > 1) {
        return Math.floor(interval) + " months ago";
      }
      interval = seconds / 86400;
      if (interval > 1) {
        return Math.floor(interval) + " days ago";
      }
      interval = seconds / 3600;
      if (interval > 1) {
        return Math.floor(interval) + " hours ago";
      }
      interval = seconds / 60;
      if (interval > 1) {
        return Math.floor(interval) + " minutes ago";
      }
      return Math.floor(seconds) + " seconds ago";
    },
  },

  data() {
    return {
      tabList: ["Description", "Remediation"],
    };
  },
};
</script>

<style lang="scss">
.cards {
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);

  .card {
    max-width: 400px;
    color: white;
    overflow: hidden;
  }

  .card-label {
    display: flex;
    justify-content: space-between;
    padding: 0 1em;
    background: #fff;
    color: #000;
    font-weight: bold;
    cursor: pointer;
  }

  input {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }

  .label {
    display: flex;
    justify-content: space-between;
    background: #fff;
    color: #000;
  }

  .label > span {
    max-height: 26px;
  }

  .card-label > i {
    font-family: FontAwesome;
    text-align: center;
    transition: all 0.35s;
    color: #1AB394;
    font-size: 20px;
    content: "\f139";
    justify-content: flex-start;
  }

  .card-label::after {
    content: "\f13a";
    font-family: FontAwesome;
    text-align: center;
    transition: all 0.35s;
    color: #1AB394;
    font-size: 20px;
    justify-content: flex-start;
  }

  .card-content {
    max-height: 0;
    padding: 0 1em;
    color: #2c3e50;
    background: white;
    transition: all 0.35s;

    p {
      font-size: 12px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-flow: wrap;
    }
  }

  .card-close {
    display: flex;
    justify-content: flex-end;
    padding: 1em;
    font-size: 0.75em;
    background: #2c3e50;
    cursor: pointer;
  }

  .card-close:hover {
    background: #1a252f;
  }

  input:checked + .card-label {
    background: #fff;
  }

  input:checked + .card-label::after {
    font-family: FontAwesome;
    text-align: center;
    transition: all 0.35s;
    color: #1AB394;
    font-size: 20px;
    content: "\f139";
    justify-content: flex-start;
  }

  input:checked ~ .card-content {
    max-height: 100vh;
  }
}
</style>
