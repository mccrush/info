<template>
  <table class="table table-bordered table-sm text-center">
    <thead>
      <tr>
        <th class="w-20">Инверсия</th>
        <th class="w-20">Конъюнкция</th>
        <th class="w-20">Дизъюнкция</th>
        <th class="w-20">Импликация</th>
        <th class="w-20">Эквивалентность</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <TableIn />
        </td>
        <td>
          <TableKon />
        </td>
        <td>
          <TableDiz />
        </td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import TableIn from '@/components/logic/TableIn'
import TableKon from '@/components/logic/TableKon'
import TableDiz from '@/components/logic/TableDiz'

export default {
  components: {
    TableIn,
    TableKon,
    TableDiz
  }
}
</script>

<style>
.w-20 {
  width: 20%;
}

.overline {
  text-decoration: overline;
}
</style>