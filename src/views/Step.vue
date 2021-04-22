<template>
  <div class="row">
    <div class="col-12 pt-4">
      <h2>Степени двойки</h2>
      <div class="row">
        <div class="col-12 col-sm-6">
          <table
            class="table table-bordered table-striped table-hover table-sm"
          >
            <thead>
              <tr>
                <th class="w-50">n</th>
                <th>2<sup>n</sup></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="n in 16" :key="n + 'id'">
                <td>{{ n }}</td>
                <td>{{ Math.pow(2, n).toLocaleString() }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-12 col-sm-6">
          <table
            class="table table-bordered table-striped table-hover table-sm"
          >
            <thead>
              <tr>
                <th class="w-50">n</th>
                <th>2<sup>n</sup></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="m in 16" :key="m + 'id'">
                <td>{{ m + 16 }}</td>
                <td>{{ Math.pow(2, m + 16).toLocaleString() }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
