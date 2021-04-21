<template>
  <nav class="row">
    <div class="col-4">
      <button
        class="btn btn-block btn-light w-100 router-link-active"
        @click="selectTab('Logic', $event)"
        ref="logic"
      >
        Логика
      </button>
    </div>
    <div class="col-4">
      <button
        class="btn btn-block btn-light w-100"
        @click="selectTab('Ss', $event)"
        ref="ss"
      >
        Перевод СС
      </button>
    </div>
    <div class="col-4">
      <button
        class="btn btn-block btn-light w-100"
        @click="selectTab('About', $event)"
        ref="about"
      >
        О проекте
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    selectTab(compName, e) {
      this.$emit('mytab', compName)
      this.$refs.logic.classList.remove('router-link-active')
      this.$refs.ss.classList.remove('router-link-active')
      this.$refs.about.classList.remove('router-link-active')
      e.target.classList.add('router-link-active')
    }
  }
}
</script>


<style scoped>
.router-link-active {
  color: #fff;
  background-color: #212529;
  border-color: #212529;
}
</style>