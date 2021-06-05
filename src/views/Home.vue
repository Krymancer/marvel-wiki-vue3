<template>
  <div class="home" id="main-dashborad">
    <Main msg="Pedro dos Beats Foda" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Main from '@/components/Home/Main.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    Main,
  },
});
</script>
