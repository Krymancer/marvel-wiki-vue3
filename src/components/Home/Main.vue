<template>
  <h1>{{ msg }}</h1>
  <div class="container">
    <div v-for="character in state.characters" :key="character.name">
      <Card
        :key="character.id"
        :name="character.name"
        :thumbnail="
          character.thumbnail.path + '.' + character.thumbnail.extension
        "
        @click="handleClickCard(character.id)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive } from 'vue';

import { publicKey } from '@/utils/apitConstants';
import api from '@/api';
import { CharacterDataWrapper, Character } from '@/api/interfaces';

import Card from './Card.vue';

export default defineComponent({
  name: 'Main',
  props: {
    msg: String,
  },
  components: {
    Card,
  },
  methods: {
    handleClickCard(id: number) {
      console.log(id);
    },
  },
  setup() {
    let characters: Character[] = [];
    const state = reactive({ characters });

    onBeforeMount(async () => {
      const url = 'characters';
      const params = {
        apikey: publicKey,
      };

      await api<CharacterDataWrapper>('GET', url, params).then(
        (axiosResponse) => {
          const response = axiosResponse.data;
          state.characters = response.data?.results ?? [];
        },
      );
    });

    return {
      state,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

h1 {
  margin: 0;
}
</style>
