<template>
  <div class="row">
    <div class="col-12 col-sm-6 pe-sm-1">
      <table class="table table-bordered text-center">
        <thead>
          <tr>
            <th class="w-50">Конъюнкция</th>
            <th class="w-50">Дизъюнкция</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-2">
              <TableKon />
            </td>
            <td class="p-2">
              <TableDiz />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-12 col-sm-6 mt-2 mt-sm-0 ps-sm-1">
      <table class="table table-bordered text-center">
        <thead>
          <tr>
            <th class="w-50">Импликация</th>
            <th class="w-50">Эквивалентность</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-2">
              <TableIm />
            </td>
            <td class="p-2">
              <TableEq />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import TableKon from '@/components/logic/TableKon'
import TableDiz from '@/components/logic/TableDiz'
import TableIm from '@/components/logic/TableIm'
import TableEq from '@/components/logic/TableEq'

export default {
  components: {
    TableKon,
    TableDiz,
    TableIm,
    TableEq
  }
}
</script>