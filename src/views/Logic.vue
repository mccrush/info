<template>
  <div class="row">
    <div class="col-12 pt-3">
      <h4>Обозначения</h4>
      <TableOboz />

      <h4>Таблицы истинности</h4>
      <TableIst />

      <h4>Законы логики</h4>
      <TableZak />
      <!-- <div class="row">
        <div class="col-12 col-sm-6">
          <a
            data-fancybox="gallery"
            href="img/logic/zakony_logiki.png"
            class="card h-100 mt-2 mt-sm-0"
          >
            <img
              src="img/logic/zakony_logiki.png"
              alt="Законы логики"
              class="w-100"
            />
          </a>
        </div>
        <div class="col-12 col-sm-6 mt-2 mt-sm-0">
          <a
            data-fancybox="gallery"
            href="img/logic/zakony.jpg"
            class="card h-100 mt-2 mt-sm-0"
          >
            <img src="img/logic/zakony.jpg" alt="Законы логики" class="w-100" />
          </a>
        </div>
      </div> -->

      <h4>Порядок выполнения логических операций</h4>
      <TablePor />
    </div>
  </div>
</template>

<script>
import TableOboz from '@/components/logic/TableOboz'
import TableIst from '@/components/logic/TableIst'
import TableZak from '@/components/logic/TableZak'
import TablePor from '@/components/logic/TablePor'

export default {
  components: {
    TableOboz,
    TableIst,
    TableZak,
    TablePor
  }
}
</script>

<style>
.overline {
  text-decoration: overline;
}

.duble-border {
  border-top: 4px double #212529;
}
</style>

