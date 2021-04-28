<template>
  <div class="row">
    <div class="col-12 col-sm-6">
      <!-- <label for="inputNum" class="form-label">Введите число</label> -->
      <input
        type="text"
        id="inputNum"
        class="form-control"
        placeholder="Исходное число"
        v-model.trim="inputNum"
        @input="calculate"
      />
      <div id="inputNumHelp" class="form-text" v-html="inputNumHelp"></div>
      <br />
      <p class="mb-2">Исходная система счисления</p>
      <div class="rounded border pb-2 w-100">
        <div
          class="d-inline-flex justify-content-around mt-2 w-25"
          v-for="ss in 15"
          :key="'id' + ss"
        >
          <input
            type="radio"
            class="btn-check"
            name="inputSS"
            :id="'option' + ss"
            autocomplete="off"
            @change="calculate"
          />
          <label
            class="inputSS btn btn-outline-dark w-75"
            :for="'option' + ss"
            @click="inputSS = ss + 1"
            >{{ ss + 1 }}</label
          >
        </div>
        <input
          type="text"
          class="form-control d-inline-flex border-warning text-center w-20 ms-2"
          v-model.trim="inputSS"
          @input="calculate"
        />
      </div>
    </div>
    <div class="col-12 col-sm-6 mt-2 mt-sm-0">
      <div class="d-none d-sm-block">
        <!-- <label for="resultNum" class="form-label">Результат</label> -->
        <div class="input-group">
          <input
            type="text"
            id="resultNum"
            class="form-control"
            v-model="resultNum"
            aria-describedby="button-addon2"
          />
          <button class="btn btn-outline-secondary" id="button-addon2">
            Copy
          </button>
        </div>
        <div id="resultNumHelp" class="form-text" v-html="resultNumHelp"></div>
      </div>

      <br />
      <p class="mb-2">Перевести в систему счисления</p>
      <div class="rounded border pb-2 w-100">
        <div
          class="d-inline-flex justify-content-around me-0 mt-2 w-25"
          v-for="ss in 15"
          :key="'idr' + ss"
        >
          <input
            type="radio"
            class="btn-check"
            name="resultSS"
            :id="'optionr' + ss"
            autocomplete="off"
            @change="calculate"
          />
          <label
            class="btn btn-outline-dark w-75"
            :for="'optionr' + ss"
            @click="resultSS = ss + 1"
            >{{ ss + 1 }}</label
          >
        </div>
        <input
          type="text"
          class="form-control d-inline-flex border-warning text-center w-20 ms-2"
          v-model.trim="resultSS"
          @input="calculate"
        />
      </div>

      <div class="d-block d-sm-none mt-4">
        <label for="resultNum" class="form-label">Результат</label>
        <div class="input-group">
          <input
            type="text"
            id="resultNum"
            class="form-control"
            v-model="resultNum"
            aria-describedby="button-addon2"
          />
          <button class="btn btn-outline-secondary" id="button-addon2">
            Copy
          </button>
        </div>
      </div>
    </div>
    <div class="col-12">
      <br />
      <p>
        <code>
          {{ inputNum }}<sub>{{ inputSS }}</sub> =
          <span v-html="reshDecStr"></span>
        </code>
      </p>
      <p>
        <strong>
          2. Переведем
          <code>{{ reshDec }}<sub>10</sub></code>
          в нужную нам СС</strong
        >
      </p>
      <p>Целая часть числа находится делением на основание новой</p>
      <div v-if="resultNum" class="accordion" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              @click="showResh = !showResh"
            >
              <span v-if="!showResh">Показать решение</span>
              <span v-else>Скрыть решение</span>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <p><strong>1. Переведем число в десятичную СС</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { collapse } from 'bootstrap'

export default {
  data() {
    return {
      inputNum: '',
      resultNum: '',
      inputSS: '10',
      resultSS: '10',
      inputNumHelp: 'Введите число',
      resultNumHelp: 'Результат',
      showResh: false,
      reshDecStr: '',
      reshDec: ''
    }
  },
  methods: {
    calculate() {
      if (this.inputNum) {
        this.inputNumHelp = this.inputNum + '<sub>' + this.inputSS + '</sub>'

        let res = parseInt(this.inputNum, this.inputSS).toString(+this.resultSS)

        if (res !== 'NaN') {
          this.resultNum = res
          this.resultNumHelp =
            this.resultNum + '<sub>' + this.resultSS + '</sub>'
          this.reshenie()
        }
      } else {
        this.resultNum = ''
        this.inputNumHelp = 'Введите число'
        this.resultNumHelp = 'Результат'
      }
    },
    reshenie() {
      this.reshDecStr = ''
      this.inputNum.split('').forEach((item, index, array) => {
        this.reshDecStr +=
          item +
          '•' +
          '10' +
          '<sup>' +
          (array.length - (index + 1)) +
          '</sup> + '
      })

      this.reshDec = parseInt(this.inputNum, this.inputSS).toString(10)

      this.reshDecStr =
        this.reshDecStr.substr(0, this.reshDecStr.length - 2) +
        ' = ' +
        this.reshDec +
        '<sub>10</sub>'
    },
    // inSub(ss) {
    //   if (ss <= this.inputMAX) {
    //     return true
    //   }
    //   return false
    // },
    getNumber(char) {
      switch (char) {
        case 'A':
          return 11
          break
        case 'B':
          return 12
          break
        case 'C':
          return 13
          break
        case 'D':
          return 14
          break
        case 'E':
          return 15
          break
        case 'F':
          return 16
          break
      }
    }
    // tempMet() {
    //   let arrString = []
    //     let arrStringUp = []
    //     this.inputNum.split('').forEach(item => {
    //       if (item.toUpperCase() >= 'A' && item.toUpperCase() <= 'F') {
    //         arrString.push(item)
    //       }
    //     })

    //     if (arrString.length) {
    //       arrStringUp = arrString.map(item => {
    //         return item.toUpperCase()
    //       })
    //       const maxChar = arrStringUp.sort()[arrStringUp.length - 1]
    //       this.inputMAX = this.getNumber(maxChar)
    //     } else {
    //       this.inputMAX = Math.max.apply(null, this.inputNum.split(''))
    //     }
    // }
  }
}
</script>

<style scoped>
</style>