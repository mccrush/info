<template>
  <div class="row">
    <div class="col-12 pt-3">
      <h4>Перевод единиц измерения информации</h4>
      <p>
        Форма перевода единиц измерения информации между различными величинами
      </p>
      <hr />
      <CalcPE />
      <!-- <div class="row mt-3">
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
      </div> -->
    </div>
  </div>
</template>

<script>
import CalcPE from '@/components/PE/CalcPE'

export default {
  components: {
    CalcPE
  }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}
</style>