export default [
  // {
  //   title: 'Закон тождества',
  //   text: 'A = A'
  // },

  {
    title: 'Закон противоречия',
    text: 'A &amp; <span class="overline">A</span> = 0'
  },
  {
    title: 'Закон исключающего третьего',
    text: 'A &or; <span class="overline">A</span> = 1'
  },
  {
    title: 'Закон двойного отрицания',
    text: '<span class="duble-border">A</span> = A'
  },
  {
    title: 'Закон идемпотентности (тавтологии)',
    text: `<div class="row">
    <div class="col-6 pe-0">A &amp; A = A</div>
    <div class="col-6 ps-0">A &or; A = A</div>
    </div>`
  },
  {
    title: 'Закон де Моргана',
    text: '<span class="overline">A &amp; B</span> = <span class="overline">A</span> &or; <span class="overline">B</span><br /><span class="overline">A &or; B</span> = <span class="overline">A</span> &amp; <span class="overline">B</span>'
  },
  {
    title: 'Закон склеивания',
    text: `(A &or; B) &amp; (A &or; <span class="overline">B</span>) = A<br />
    (A &amp; B) &or; (A &amp; <span class="overline">B</span>) = A`
  },

  {
    title: 'Отрицание импликации',
    text: '<span class="overline">A &rarr; B</span> = A &amp; <span class="overline">B</span>'
  },
  {
    title: 'Устранение импликации',
    text: 'A &rarr; B =<span class="overline">A</span> &or; B'
  },

  // {
  //   title: 'Закон идемпотентности (тавтологии)',
  //   text: 'A &amp; A = A<br />A &or; A = A'
  // },
  {
    title: 'Замены эквивалентности',
    text: `A &harr; B = (A &amp; B) &or; (<span class="overline">A</span> &amp; <span class="overline">B</span>)<br />
    A &harr; B = (<span class="overline">A</span> &or; B) &amp; (A &or; <span class="overline">B</span>)`
  },
  {
    title: 'Свойства констант',
    text: `<div class="row">
    <div class="col-6 pe-0">A &amp; 1 = A<br />A &amp; 0 = 0</div>
    <div class="col-6 ps-0">A &or; 1 = 1<br />A &or; 0 = A</div>
    </div>`
  },

  {
    title: 'Закон коммутативности (переместительный)',
    text: 'A &amp; B = B &amp; A<br />A &or; B = B &or; A'
  },
  {
    title: 'Закон ассоциативности (сочетательный)',
    text: '(A &amp; B) &amp; C = A &amp; (B &amp; C)<br />(A &or; B) &or; C = A &or; (B &or; C)'
  },
  {
    title: 'Закон дистрибутивности (распределительный)',
    text: '(A &amp; B) &or; C = (A &or; C) &amp; (B &or; C)<br />(A &or; B) &amp; C = (A &amp; C) &or; (B &amp; C)'
  },
  {
    title: 'Законы поглащения',
    text: `A &amp; (A &or; B) = A<br />
    A &or; (A &amp; B) = A<br />
    A &amp; (<span class="overline">A</span> &or; B) = A &amp; B<br />
    A &or; (<span class="overline">A</span> &amp; B) = A &or; B`
  },
]