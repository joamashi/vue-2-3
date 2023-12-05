<template>
  <div style="border:1px #000 solid">
    
    <h3> {{ dataNum }} </h3>

    <h4> {{ dataObj.a }} </h4>

    <v-btn @click="onEmit">버튼</v-btn>
  </div>
</template>

<script setup>
  import { ref, defineProps, defineEmits } from 'vue'

  const props = defineProps({
    dataNum: {
      type: Number,
      // default: 1000,
      // required: true
    },
    dataObj: Object,
    isTrun: Boolean
  })

  const emit = defineEmits([
    'numEmit'
  ])

  const num2 = ref(props.dataNum)

  // function test (num=100) {
  //   console.log('test', num)
  // }
  // test(23123)

  const onObj = () => {
    props.dataNum++
  }

  const onEmit = () => {
    // let num = props.dataNum
    emit('numEmit', ++num2.value)
  }

  console.log(props.isTrun)
  console.log(props.num)

  console.log(typeof props.num)
</script>