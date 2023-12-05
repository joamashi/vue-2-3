<template>
  <div>
    <h1>안녕하세요</h1>

    <page-num 
      isTrun 
      :data-num="num" 
      :data-obj="obj"
      @numEmit="numEmit" />


    

    {{ str }}

    <h1> {{ obj.a }} </h1>

    <h2> {{ num }}</h2>

    <v-btn @click="num++">버튼</v-btn>


    <v-btn @click="onNum">버튼2</v-btn>

    <v-btn to="About">링크</v-btn>


    <page-num2  :data-obj="obj" />
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue'

  import PageNum from '@/components/pageNum.vue'
  import PageNum2 from '@/components/pageNum2.vue'

  const str = ref('안녕')

  const num = ref(0)

  const obj = reactive({
    a: 1,
    b: 2 
  })

  console.log(num)

  const onNum = () => {
    num.value++
  }

  // const onNum = function () {}

  const numEmit = (val) => {
    num.value = val
  }

  // function onNum() {}
</script>
