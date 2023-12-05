<template>
  <div>
    <h1>About</h1>
    <UserInfo 
      dataTrue
      :jkljlkjkl="num"
      :dataObj="obj"
      @onCount="count">
      <template v-slot>
        <p>안녕하세요</p>
      </template>
    </UserInfo>

    <h2>{{ num }}</h2>
    <h2>{{ obj }}</h2>
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue'
  import UserInfo from '@/components/UserInfo'

  const num = ref(1111)

  const obj = reactive({
    a : 1,
    b : 2,
  })

  const count = (val) => {
    console.log(val)
    num.value = val
  }
</script>