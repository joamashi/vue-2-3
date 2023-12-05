<template>
  <div class="MyComponent2">
    <h1>MyComponent2</h1>
    
    <h2>age1(반응형X) :  {{ age1 }}</h2>
    <h2>age2 :  {{ age2 }}</h2>

    <h2>obj1(반응형X) :  {{ obj1 }}</h2>
    <h2 class="active">obj2 :  {{ obj2 }}</h2>

    <v-btn @click="age2++">age2 증가</v-btn>
    <v-btn @click="age2--">age2 감소</v-btn>

    <!-- <v-btn @click="increment">증가 emit</v-btn>
    <v-btn @click="decrement">감소 emit</v-btn> -->

    <v-btn @click="increment">age2 증가 emit</v-btn>
    <v-btn @click="decrement">age2 감소 emit</v-btn>

    <v-btn @click="
      emit('increment_obj2', obj2.age++); 
      console.log(obj2.age)
    ">obj2 증가 emit</v-btn>
    <v-btn @click="emit('decrement_obj2', obj2.age--)">obj2 감소 emit</v-btn>

    <my-component21
      :age1="age1"
      :age2="age2"
      :obj1="obj1"
      :obj2="obj2"
      @increment="increment"
      @decrement="decrement"
      @onIncrement_obj2="increment_obj2"
      @onDecrement_obj2="decrement_obj2" />

    <my-component21
      :age1="age1"
      :age2="age2"
      :obj1="obj1"
      :obj2="obj2"
      @increment="increment"
      @decrement="decrement"
      @onIncrement_obj2="increment_obj2"
      @onDecrement_obj2="decrement_obj2">
      
      <template v-slot:default>
        slot!! defaultsadads
      </template>

      <template v-slot:header>
        header
      </template>

      <template v-slot:footer="data">
        footer {{ data }}
        <h1>{{ data.dataName }}</h1>
      </template>

      <!-- <template #default>
        slot!!
      </template -->
    </my-component21>
  </div>
</template>

<script setup>
  import MyComponent21 from '@/components/MyComponent21.vue';

  import { defineProps, reactive, ref, defineEmits } from 'vue'

  // emit 선언
  const emit = defineEmits([
    'increment', 
    'decrement', 
    'increment_obj2', 
    'decrement_obj2'
  ])

  const props = defineProps({
    age1: Number,
    age2: Number,
    obj1: Object,
    obj2: Object, 
  })

  const age2 = ref(props.age2) // 데이터 가공하기 위한 ref 선언!!!
  const obj2 = reactive(props.obj2) // 데이터 가공하기 위한 ref 선언!!!

  const increment = () => {
    emit('increment', ++age2.value)
  }

  const decrement = () => {
    emit('decrement', --age2.value)
  }

  const increment_obj2 = (val) => {
    obj2.age = val
  }

  const decrement_obj2 = (val) => {
    obj2.age = val
  }
</script>       