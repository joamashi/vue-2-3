<template>
  <div class="MyComponent1">
    <h1>MyComponent1</h1>


    <h2>age1(반응형X) :  {{ age01 }}</h2>
    <h2>age2 :  {{ age02 }}</h2>

    <h2>obj1(반응형X) :  {{ obj01 }}</h2>
    <h2 class="active">obj2 :  {{ obj02 }}</h2>

    <v-btn @click="age02++">age02 증가</v-btn>
    <v-btn @click="age02--">age02 감소</v-btn>

    <!-- <v-btn @click="increment">증가 emit</v-btn>
    <v-btn @click="decrement">감소 emit</v-btn> -->

    <v-btn @click="increment">age02 증가 emit</v-btn>
    <v-btn @click="decrement">age02 감소 emit</v-btn>

    <v-btn @click="emit('increment_obj2', obj02.age++)">obj2 증가 emit</v-btn>
    <v-btn @click="emit('decrement_obj2', obj02.age--)">obj2 감소 emit</v-btn>
  </div>
</template>

<script setup>
  import { defineProps, reactive, ref, defineEmits } from 'vue'

  // emit 선언
  const emit = defineEmits([
    'increment11', 
    'decrement', 
    'increment_obj2', 
    'decrement_obj2'
  ])

  const props = defineProps({
    age01: Number,
    age02: Number,
    obj01: Object,
    obj02: Object, 
    name: String,
  })

  const age02 = ref(props.age02) // 데이터 가공하기 위한 ref 선언!!!
  const obj02 = reactive(props.obj02) // 데이터 가공하기 위한 ref 선언!!!
  
  const increment = () => {
    emit('increment11', age02.value++)
  }

  const decrement = () => {
    emit('decrement', age02.value--)
  }
</script>       