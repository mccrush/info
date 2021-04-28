<template>
  <nav class="row">
    <div class="col-6 col-sm-3">
      <button
        class="btn btn-block btn-light w-100"
        @click="selectTab('Logic', $event)"
        ref="logic"
        :class="{ 'router-link-active': infoPage === 'Logic' }"
      >
        Логика
      </button>
    </div>
    <div class="col-6 col-sm-3">
      <button
        class="btn btn-block btn-light w-100"
        @click="selectTab('Step', $event)"
        ref="step"
        :class="{ 'router-link-active': infoPage === 'Step' }"
      >
        Степени
      </button>
    </div>
    <div class="col-6 col-sm-3 mt-2 mt-sm-0">
      <button
        class="btn btn-block btn-light w-100"
        @click="selectTab('Ss', $event)"
        ref="ss"
        :class="{ 'router-link-active': infoPage === 'Ss' }"
      >
        Перевод СС
      </button>
    </div>
    <div class="col-6 col-sm-3 mt-2 mt-sm-0">
      <button
        class="btn btn-block btn-light w-100"
        @click="selectTab('Algol', $event)"
        ref="algol"
        :class="{ 'router-link-active': infoPage === 'Algol' }"
      >
        Алгоритмы
      </button>
    </div>
    <div class="col-6 col-sm-3 mt-2">
      <button
        class="btn btn-block btn-light w-100"
        @click="selectTab('Graph', $event)"
        ref="graph"
        :class="{ 'router-link-active': infoPage === 'Graph' }"
      >
        Графы
      </button>
    </div>
    <div class="col-6 col-sm-3 mt-2">
      <button
        class="btn btn-block btn-light w-100"
        @click="selectTab('About', $event)"
        ref="about"
        :class="{ 'router-link-active': infoPage === 'About' }"
      >
        О проекте
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      infoPage: localStorage.getItem('info-page') || 'Logic'
    }
  },
  methods: {
    selectTab(compName, e) {
      this.$emit('mytab', compName)
      this.$refs.logic.classList.remove('router-link-active')
      this.$refs.ss.classList.remove('router-link-active')
      this.$refs.step.classList.remove('router-link-active')
      this.$refs.about.classList.remove('router-link-active')
      this.$refs.algol.classList.remove('router-link-active')
      this.$refs.graph.classList.remove('router-link-active')
      e.target.classList.add('router-link-active')
      localStorage.setItem('info-page', compName)
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