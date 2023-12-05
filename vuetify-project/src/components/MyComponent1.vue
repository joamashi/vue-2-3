<template>
  <div class="MyComponent1">
    <h1>MyComponent1</h1>

    <h2>age1(반응형X) :  {{ dataAge1 }}</h2>
    <h2>age2 :  {{ age2 }}</h2>

    <h2>obj1(반응형X) :  {{ dataObj1 }}</h2>
    <h2 class="active">obj2 :  {{ obj2 }}</h2>

    <v-btn @click="age2++">age2 증가</v-btn>
    <v-btn @click="age2--">age2 감소</v-btn>

    <!-- <v-btn @click="increment">증가 emit</v-btn>
    <v-btn @click="decrement">감소 emit</v-btn> -->

    <v-btn @click="increment">age2 증가 emit</v-btn>
    <v-btn @click="decrement">age2 감소 emit</v-btn>

    <v-btn @click="emit('increment_obj2', obj2.age++)">obj2 증가 emit</v-btn>
    <v-btn @click="emit('decrement_obj2', obj2.age--)">obj2 감소 emit</v-btn>
  </div>
</template>

<script setup>
  import { defineProps, reactive, ref, defineEmits } from 'vue'

  // emit 선언
  const emit = defineEmits([
    'increment', 
    'decrement', 
    'increment_obj2', 
    'decrement_obj2'
  ])

  const props = defineProps({
    dataAge1: Number,
    dataAge2: Number,
    dataObj1: Object,
    dataObj2: Object, 
  })

  const age2 = ref(props.dataAge2) // 데이터 가공하기 위한 ref 선언!!!
  const obj2 = reactive(props.dataObj2) // 데이터 가공하기 위한 ref 선언!!!
  
  const increment = () => {
    emit('increment', ++age2.value)
  }

  const decrement = () => {
    emit('decrement', --age2.value)
  }
</script>       