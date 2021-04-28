<template>
  <div class="container-640 container">
    <Header />
    <Navbar @mytab="getComponent" />

    <transition name="fade" mode="out-in">
      <component :is="myComponent" />
    </transition>

    <Footer />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import Logic from '@/views/Logic'
import Ss from '@/views/Ss'
import Step from '@/views/Step'
import About from '@/views/About'

export default {
  name: 'App',
  components: {
    Header,
    Navbar,
    Footer,
    Logic,
    Ss,
    Step,
    About
  },
  data() {
    return {
      myComponent: localStorage.getItem('info-page') || 'Logic'
    }
  },
  methods: {
    getComponent(comp) {
      this.myComponent = comp
    }
  }
}
</script>

<style>
.container-640 {
  max-width: 640px;
  margin: 0 auto;
}

h4 {
  margin-top: 32px;
}

.w-20 {
  width: 20%;
}

.btn:focus,
.btn-check:focus + .btn-outline-dark,
.form-control:focus,
.form-select:focus,
.accordion-button:focus,
.navbar-toggler:focus {
  outline: 0 !important;
  border-color: #6c757d !important;
  box-shadow: none !important;
}

.accordion-button:not(.collapsed) {
  color: #212529;
  background-color: #f8f9fa;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
