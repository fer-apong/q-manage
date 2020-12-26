<template>
  <q-card flat>
    <q-card-section>
      <CurrentTitle class="text-h6" />
    </q-card-section>
    <q-separator inset />
    <!-- 主要内容 -->
    <router-view></router-view>
  </q-card>

</template>

<script>
import CurrentTitle from 'components/common/CurrentTitle/CurrentTitle'

export default {
  components:{
    CurrentTitle
  }
  
}
</script>
