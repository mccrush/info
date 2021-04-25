<template>
  <nav class="row">
    <div class="col-6 col-sm-3">
      <button
        class="btn btn-block btn-light w-100 router-link-active"
        @click="selectTab('Logic', $event)"
        ref="logic"
      >
        Логика
      </button>
    </div>
    <div class="col-6 col-sm-3">
      <button
        class="btn btn-block btn-light w-100"
        @click="selectTab('Step', $event)"
        ref="step"
      >
        Степени 2
      </button>
    </div>
    <div class="col-6 col-sm-3 mt-2 mt-sm-0">
      <button
        class="btn btn-block btn-light w-100"
        @click="selectTab('Ss', $event)"
        ref="ss"
      >
        Перевод СС
      </button>
    </div>
    <div class="col-6 col-sm-3 mt-2 mt-sm-0">
      <button
        class="btn btn-block btn-light w-100"
        @click="selectTab('Algol', $event)"
        ref="algol"
      >
        Алгоритмы
      </button>
    </div>
    <div class="col-6 col-sm-3 mt-2 mt-sm-0">
      <button
        class="btn btn-block btn-light w-100"
        @click="selectTab('Graph', $event)"
        ref="graph"
      >
        Графы
      </button>
    </div>
    <div class="col-6 col-sm-3 mt-2 mt-sm-0">
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
      this.$refs.step.classList.remove('router-link-active')
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