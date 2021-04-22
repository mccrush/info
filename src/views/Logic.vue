<template>
  <div class="row">
    <div class="col-12 pt-3">
      <h2>Логика</h2>

      <hr />
      <h4>Таблицы истинности</h4>
      <TableIst />

      <hr />
      <h4>Законы логики</h4>
      <div class="row">
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
      </div>

      <hr />
      <h4>Порядок выполнения логических операций</h4>

      <table
        class="table table-bordered table-striped table-hover table-sm text-center mb-0"
      >
        <thead>
          <tr>
            <th>0</th>
            <td>( )</td>
            <td class="text-start ps-2 w-75">действия в скобках</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td><span class="overline">X</span></td>
            <td class="text-start ps-2">инверсия (отрицание)</td>
          </tr>
          <tr>
            <th>2</th>
            <td>&</td>
            <td class="text-start ps-2">конъюнкция</td>
          </tr>
          <tr>
            <th>3</th>
            <td>v</td>
            <td class="text-start ps-2">дизъюнкция</td>
          </tr>
          <tr>
            <th>4</th>
            <td>&rarr;</td>
            <td class="text-start ps-2">импликация (следование)</td>
          </tr>
          <tr>
            <th>5</th>
            <td>&harr;</td>
            <td class="text-start ps-2">эквивалентность</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import TableIst from '@/components/logic/TableIst'

export default {
  components: {
    TableIst
  }
}
</script>

<style scoped>
a.card {
  border: 1px solid #dee2e6;
  transition: 0.3s ease-in-out;
}

a.card:hover {
  border-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
</style>

