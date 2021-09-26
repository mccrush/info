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
          <!-- <input
            type="radio"
            class="input-ss btn-check"
            name="inputSS"
            :id="'option' + ss"
            autocomplete="off"
            @change="calculate"
          /> -->
          <button
            class="input-ss btn btn-outline-dark w-75"
            :class="{ 'activ-in-ss': inputSS == ss + 1 }"
            @click="selectInputSS(ss + 1)"
          >
            {{ ss + 1 }}
          </button>
        </div>
        <input
          type="text"
          class="
            form-control
            d-inline-flex
            border-warning
            text-center
            w-20
            ms-2
          "
          v-model.trim="inputSS"
          @input="calculate"
          title="MAX 36"
          @focus="checkOffInSS"
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
          <button
            class="btn btn-outline-secondary"
            id="button-addon2"
            @click="copyInBuffer($event)"
            title="Скопировать в буфер"
          >
            Копировать
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
          <button
            class="result-ss btn btn-outline-dark w-75"
            :class="{ 'activ-res-ss': resultSS == ss + 1 }"
            @click="selectResultSS(ss + 1)"
          >
            {{ ss + 1 }}
          </button>
        </div>
        <input
          type="text"
          class="
            form-control
            d-inline-flex
            border-warning
            text-center
            w-20
            ms-2
          "
          v-model.trim="resultSS"
          @input="calculate"
          title="MAX 36"
          @focus="checkOffResSS"
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
          <button
            class="btn btn-outline-secondary"
            id="button-addon2"
            @click="copyInBuffer($event)"
            title="Скопировать в буфер"
          >
            Копировать
          </button>
        </div>
      </div>
    </div>
    <div class="col-12">
      <br />

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
              <p class="mb-0">
                <strong>1. Переведем число в десятичную СС</strong>
              </p>
              <p>
                <code>
                  {{ inputNum }}<sub>{{ inputSS }}</sub> =
                  <span v-html="reshDecStr"></span>
                </code>
              </p>
              <div v-if="resultSS !== 10">
                <p class="mb-0">
                  <strong>
                    2. Переведем
                    <code>{{ reshDec }}<sub>10</sub></code>
                    в нужную нам СС</strong
                  >
                </p>
                <p>
                  Целая часть числа находится делением на основание новой СС<br />
                  <code><span v-html="reshSSStr"></span></code>
                </p>
                <p>
                  Записываем последнюю целую часть от деления + остатки от
                  деления начиная с последнего <br />
                  <code>{{ resultNum }}</code>
                </p>
                <p class="mb-0">
                  <strong> 3. Результат</strong>
                </p>
                <p>
                  <code>
                    {{ inputNum }}<sub>{{ inputSS }}</sub> = {{ resultNum
                    }}<sub>{{ resultSS }}</sub>
                  </code>
                </p>
              </div>
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
      reshDec: '',
      reshSSStr: ''
    }
  },
  methods: {
    copyInBuffer(e) {
      const el = e.target.previousSibling
      el.focus()
      el.select()
      if (document.execCommand('copy')) {
        console.log('Результат скопирован в буфер')
      }
    },
    checkOffInSS() {
      let btnEls = document.querySelectorAll('.input-ss')
      for (let i = 0; i < btnEls.length; i++) {
        btnEls[i].classList.remove('activ-in-ss')
      }
    },
    checkOffResSS() {
      let btnEls = document.querySelectorAll('.result-ss')
      for (let i = 0; i < btnEls.length; i++) {
        btnEls[i].classList.remove('activ-res-ss')
      }
    },
    selectInputSS(ss) {
      this.inputSS = ss
      this.calculate()
    },
    selectResultSS(ss) {
      this.resultSS = ss
      this.calculate()
    },
    calculate() {
      if (this.inputSS > 36) {
        alert('Основание СС не может быть больше 36')
        this.inputSS = ''
      }

      if (this.resultSS > 36) {
        alert('Основание СС не может быть больше 36')
        this.resultSS = ''
      }

      if (this.inputNum) {
        this.inputNum = this.inputNum.toUpperCase()

        this.inputNumHelp = this.inputNum + '<sub>' + this.inputSS + '</sub>'

        let inputNumArrayInt = []
        let inputNumArrayStr = this.inputNum.split('')

        inputNumArrayStr.forEach(item => {
          if (Number.isInteger(+item)) {
            inputNumArrayInt.push(+item)
          } else {
            inputNumArrayInt.push(this.getNumber(item))
          }

          for (let i = 0; i < inputNumArrayInt.length; i++) {
            if (inputNumArrayInt[i] >= this.inputSS && this.inputSS < 11) {
              this.inputNumHelp =
                '<code>Цифры ' +
                inputNumArrayStr[i] +
                ' нет в ' +
                this.inputSS +
                '-ой CC</code>'
              break
            } else if (inputNumArrayInt[i] > this.inputSS) {
              this.inputNumHelp =
                '<code>Цифры ' +
                inputNumArrayStr[i] +
                ' нет в ' +
                this.inputSS +
                '-ой CC</code>'
              break
            }
          }
        })

        let res = parseInt(this.inputNum, this.inputSS).toString(+this.resultSS)

        if (res !== 'NaN') {
          this.resultNum = res.toUpperCase()
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
      this.reshSSStr = ''
      this.inputNum.split('').forEach((item, index, array) => {
        this.reshDecStr +=
          item +
          '•' +
          this.inputSS +
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

      let cel = this.reshDec
      let ost = ''
      while (cel >= this.resultSS) {
        ost += cel % this.resultSS

        this.reshSSStr +=
          cel +
          ' &divide; ' +
          this.resultSS +
          ' = ' +
          Math.trunc(cel / this.resultSS) +
          ', остаток ' +
          (cel % this.resultSS) +
          '<br>'

        cel = Math.trunc(cel / this.resultSS)
      }

      ost += cel
      const res = ost.split('').reverse().join('')
    },
    getNumber(char) {
      return char.charCodeAt(0) - 54
    }
  }
}
</script>

<style scoped>
.activ-in-ss,
.activ-res-ss {
  color: #fff;
  background-color: #212529;
}
</style>