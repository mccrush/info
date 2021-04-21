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
import About from '@/views/About'

export default {
  name: 'App',
  components: {
    Header,
    Navbar,
    Footer,
    Logic,
    Ss,
    About
  },
  data() {
    return {
      myComponent: 'Logic'
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

.btn:focus,
.form-control:focus,
.form-select:focus,
.navbar-toggler:focus {
  outline: 0 !important;
  box-shadow: none !important;
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
