<script setup lang="ts">
// Props
interface IProps {
  title: string
}

const props = defineProps<IProps>();
</script>

<template>
  <div class="item">
    <p class="item__title">
      <b>Имя элемента:</b>
    </p>

    <p class="item__title">
      {{ props.title }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.item {
  width: fit-content;
  height: fit-content;
  min-height: 50px;
  padding: 10px 20px;
  border-radius: 15px;
  background-color: rgb(90, 90, 90);
  user-select: none;
  cursor: pointer;
  transition: 100ms;

  &:hover {
    transform: scale(1.025);
    transition: 100ms;
  }
}
</style>
