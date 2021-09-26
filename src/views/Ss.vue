<template>
  <div class="row">
    <div class="col-12 pt-3">
      <h4>Перевод СС</h4>
      <p>
        Калькулятор перевода <strong>целых чисел</strong> между различными
        системами счисления
        <!-- <a
          href="https://calculatori.ru/perevod-chisel.html"
          target="_blank"
          title="Открыть Калькулятор"
          >Калькулятор</a
        > -->
      </p>
      <hr />
      <CalcSS />
      <div class="row mt-3">
        <div class="col-12">
          <div class="alert alert-warning lh-sm" role="alert">
            Доступно обучающее видео на YouTube:<br />
            <a
              href="https://www.youtube.com/watch?v=JizNYwkiXJM"
              target="_blank"
              title="Перевод числа из двоичной системы счисления в десятичную"
              >Перевод числа из двоичной системы счисления в десятичную</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CalcSS from '@/components/SS/CalcSS'

export default {
  components: {
    CalcSS
  }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}
</style>