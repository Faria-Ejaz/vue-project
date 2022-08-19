<template>
  <span
    :class="`bg-${getSeverityColor(severity)}`"
    class="items-center flex text-xs text-white max-w-min font-semibold px-2">
    {{ severity }}
    </span>
</template>

<script>

const severity = [
    { tag: 'Critical'},
    { tag: 'High'},
    { tag: 'Medium'},
    { tag: 'Low'}
]

export default {
  components: {
  },
  props: {
    severity: {
      type: String,
      required: true,
    },
  },

  methods: {
      getSeverityColor(value) {
        return severity.filter( s => s.tag === value)[0].tag 
      }
  },
};
</script>
