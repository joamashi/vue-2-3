<template>
  <my-component1 
    :data-age1="age1"
    :data-age2="age2"
    :data-obj1="obj1"
    :data-obj2="obj2"
    :name="name"
    @increment11="increment22"
    @decrement="decrement"
    @onIncrement_obj2="increment_obj2"
    @onDecrement_obj2="decrement_obj2" />
    <!-- :key="age2" -->

  <myComponent2 
    :age1="age1"
    :age2="age2"
    :obj1="obj1"
    :obj2="obj2"
    @increment="increment22"
    @decrement="decrement"
    @onIncrement_obj2="increment_obj2"
    @onDecrement_obj2="decrement_obj2" />
    <!-- :key="age2" -->

  <div class="Components">
    <h1>컴포넌트</h1>

    <h2>{{ 나이 }}</h2>

    <v-btn @click="나이++">나이 증가</v-btn>

    <h2>age1(반응형X) : {{ age1 }}</h2><!-- 반응형X  -->
    <h2>age2 :  {{ age2 }}</h2><!-- 반응형O -->

    <h2>obj1(반응형X) :  {{ obj1.age }}</h2><!--  -->
    <h2 class="active">obj2 :  {{ obj2.age }}</h2><!--  -->
    
    <v-btn @click="age1++">age1 증가 (반응형X)</v-btn><!--  -->
    <v-btn @click="age2Event">age2 증가</v-btn><!--  -->

    <v-btn @click="obj1.age++">obj1 증가 (반응형X)</v-btn><!--  -->
    <v-btn @click="obj2.age++">obj2 증가</v-btn><!--  -->

    <v-text-field label="age1" v-model="age1" /><!--  -->
    <v-text-field label="age2" v-model="age2" /><!-- :key 적용 -->


    <v-btn @click="get">데이터 가져오기</v-btn>

    <ul>
      <li v-for="(item, index) in data" :key="index">
        {{ item.title }}
      </li>
    </ul>
  </div>    
</template>

<script setup>
  // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
  console.log(this) // undefined
  
  import axios from "axios";

  import MyComponent1 from '@/components/MyComponent1.vue';
  import MyComponent2 from '@/components/MyComponent2.vue';

  import '@/plugins/test.js'
  // console.log(test)
  
  import { ref, reactive } from 'vue'

  const name = '박영철'
  
  // const a = 0

  // function ab () {
  //   const a = 1
  // }

  const 나이 = ref(33)

  const age1 = 30 // 원시 타입, 불변성, 반응형 데이터 X
  const age2 = ref(24) // 원시 타입, 불변성, 반응형 데이터 O
  
  const age2Event = () => {
    age2.value++
  }

  const increment22 = (val) => {
    console.log(val)
    age2.value = val
  }

  const decrement = (val) => {
    age2.value = val
  }


  const obj1 = { age: 24} // 참조 타입, 반응형 데이터 X
  const obj2 = reactive ({ age: 24 }) // 참조 타입, 반응형 데이터 O
  const increment_obj2 = (val) => {
    obj2.age = val
  }
  const decrement_obj2 = (val) => {
    obj2.age = val
  }


  const data = reactive([])
  const _id = ref(1)


  const get = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${_id.value}`, {
      method: "GET",
      body: JSON.stringify()
    })
      .then((result) => { // 성공 시 실행할 코드
        console.log('result', result.json())
        // data.push(result.data)
        // _id.value++
      })
      .catch((error) => { // 에러 발생 시 실행될 코드
        console.log('error', error)
      })
  }
</script>