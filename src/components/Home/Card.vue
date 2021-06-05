<template>
  <div class="container">
    <img class="thumbnail" :src="thumbnail" />
    <span class="name">{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    name: String,
    thumbnail: String,
  },
};
</script>

<style scoped lang="scss">
.container {
  margin: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1em;
  min-width: 12em;
  width: 12em;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

.container:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.thumbnail {
  width: 10em;
  height: 10em;
}

.name {
  font-size: 1em;
  padding: 1em;
  text-align: center;
  vertical-align: center;
  font-weight: 700;
}
</style>
