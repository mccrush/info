<template>
  <div id="graph">
    <h5>Построение графов</h5>
    <p class="small">
      Один клик по полю - добавление вершины<br />
      Поочередный клик по вершинам - рисование ребра<br />
      (остальные операции в процессе разработки)
    </p>
    <div id="graphPole" class="rounded-2 border">
      <svg
        version="1.1"
        baseProfile="full"
        width="100%"
        height="350"
        xmlns="http://www.w3.org/2000/svg"
        @click.self="addPoint"
        id="pole"
      ></svg>
    </div>
    <div class="d-flex justify-content-between">
      <button class="btn btn-sm btn-dark mt-2" @click="clearPole">
        Очистить поле
      </button>
      <div class="bg-light rounded-2 shadow-sm mt-2 p-0 pt-1 ps-2 pe-2 small">
        Вершин {{ points.length }}, ребер {{ lines.length }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: 350,
      radius: 14,
      poleEl: null,
      rectX: 0,
      rectY: 0,
      lineStart: null,
      lineEnd: null,
      lines: [],
      points: [],
      texts: []
    }
  },
  mounted() {
    this.poleEl = document.getElementById('pole')
    this.rectX = this.poleEl.getBoundingClientRect().x
    this.rectY = this.poleEl.getBoundingClientRect().y
  },
  methods: {
    drawPoint() {
      this.points.forEach((item, index) => {
        const pointEl = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'circle'
        )
        pointEl.setAttribute('cx', item.x)
        pointEl.setAttribute('cy', item.y)
        pointEl.setAttribute('r', this.radius)
        pointEl.setAttribute('fill', 'white')
        pointEl.setAttribute('stroke', '#8E44AD')
        pointEl.setAttribute('stroke-width', '3')
        pointEl.setAttribute('stroke-opacity', '0.8')

        // Create Text
        const textEl = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'text'
        )
        textEl.setAttribute('x', item.x)
        textEl.setAttribute('y', item.y)
        textEl.setAttribute('fill', '#000000')
        textEl.setAttribute('font-family', 'sans-serif')
        textEl.setAttribute('font-size', '14')
        textEl.setAttribute('text-anchor', 'middle')
        textEl.setAttribute('stroke-width', '1')
        textEl.setAttribute('stroke', '#000000')
        textEl.setAttribute('dy', '.35em')
        textEl.style.userSelect = 'none'
        textEl.textContent = this.texts[index].text

        const group = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'g'
        )
        group.style.cursor = 'pointer'
        group.append(pointEl)
        group.append(textEl)
        this.poleEl.append(group)

        group.addEventListener('click', this.addLine)
      })
    },
    addPoint(e) {
      const cx = e.clientX - this.rectX
      const cy = e.clientY - this.rectY

      const point = { x: cx, y: cy }
      this.points.push(point)

      console.log('this.points.length:', this.points.length)
      const text = { x: cx, y: cy, text: this.points.length } //this.points.length};
      this.texts.push(text)
      this.draw()

      // point.addEventListener("dblclick", () => {
      //   console.log("dblclick");
      //   this.startLine = null;
      //   this.endLine = null;
      // });
    },
    addLine(e) {
      //console.log(e);
      console.log(
        'e.target.parentNode.getBoundingClientRect().x:',
        e.target.parentNode.getBoundingClientRect().x
      )
      console.log(
        'e.target.parentNode.getBoundingClientRect().y:',
        e.target.parentNode.getBoundingClientRect().y
      )

      const cx =
        e.target.parentNode.getBoundingClientRect().x - this.rectX + this.radius
      const cy =
        e.target.parentNode.getBoundingClientRect().y - this.rectY + this.radius

      if (!this.lineStart) {
        this.lineStart = { x: cx, y: cy }
      } else {
        if (!this.lineEnd) {
          this.lineEnd = { x: cx, y: cy }

          const line = {
            x1: this.lineStart.x,
            x2: this.lineEnd.x,
            y1: this.lineStart.y,
            y2: this.lineEnd.y
          }

          // console.log(
          //   'lineStart.x:',
          //   this.lineStart.x,
          //   ' lineStart.y:',
          //   this.lineStart.y
          // )
          // console.log(
          //   'lineEnd.x:',
          //   this.lineEnd.x,
          //   ' lineEnd.y:',
          //   this.lineEnd.y
          // )
          this.lines.push(line)
          this.draw()
        }
      }
    },
    drawLine() {
      this.lines.forEach(item => {
        const line = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'line'
        )
        line.setAttribute('x1', item.x1)
        line.setAttribute('x2', item.x2)
        line.setAttribute('y1', item.y1)
        line.setAttribute('y2', item.y2)
        line.setAttribute('stroke', '#8E44AD')
        line.setAttribute('stroke-width', '4')
        line.setAttribute('stroke-linecap', 'round')
        line.setAttribute('stroke-opacity', '1')

        this.poleEl.prepend(line)
      })

      this.lineStart = null
      this.lineEnd = null
    },
    draw() {
      this.poleEl.innerHTML = ''
      this.drawPoint()
      this.drawLine()
    },
    clearPole() {
      this.poleEl.innerHTML = ''
      this.points = []
      this.lines = []
    }
  }
}
</script>