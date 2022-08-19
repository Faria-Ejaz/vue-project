<template>
  <div class="home">
    <tabs class="home-tabs pb-2" :tabList="tabList" :id="0">
      <template v-slot:tabPanel-1>
        <div class="row">
          <div v-for="issues in activeIssues" class="col">
            <div v-for="issue in issues">
              <cards :id="issue.id" :issue="issue"></cards>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:tabPanel-2>
        <div class="row">
          <div v-for="issues in ignoredIssues" class="col">
            <div v-for="issue in issues">
              <cards :id="issue.id" :issue="issue"></cards>
            </div>
          </div>
        </div>
      </template>
    </tabs>
  </div>
</template>

<script>
import Cards from "./Cards.vue";
import Tabs from "./Tabs.vue";

export default {
  components: {
    Cards,
    Tabs,
  },

  data() {
    return {
      activeIssues: [],
      ignoredIssues: [],
      tabList: ["Active(8)", "Ignored(2)"],
    };
  },

  methods: {
    async getIssues() {
      try {
        let response = await fetch("http://localhost:3001/issues");
        let issues = await response.json();
        this.ignoredIssues = this.groupByN(
          3,
          issues.filter((x) => x.ignored === true)
        );
        this.activeIssues = this.groupByN(
          3,
          issues.filter((x) => x.ignored === false)
        );
      } catch (error) {
        console.log(error);
      }
    },

    groupByN(n, data) {
      let result = [];
      for (let i = 0; i < data.length; i += n)
       result.push(data.slice(i, i + n));
      return result;
    },
  },

  created() {
    this.getIssues();
  },
};
</script>

<style lang="scss" scoped>
.home {
  .row {
    display: flex;
    flex-wrap: wrap;
    padding-top: 30px;
  }

  .home-tabs > :deep(ul) {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    right: 11px;
  }
}
</style>
