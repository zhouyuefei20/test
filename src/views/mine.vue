<template>
  <div>{{ time }}</div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      time: '',
    };
  },
  methods: {},
  mounted() {
    this.time = this.$format(0.1 + 0.2, 2);
  },
};
</script>
<style lang="scss" scoped></style>
