<script setup lang="ts">
import { useMainStore } from '@pinia';
import { computed } from 'vue';

// Init
const storeMain = useMainStore();

// Components
import Area from '@components/Area.vue';
import Item from '@components/Item.vue';

// Computed
const leftListSelectableItems = computed(() => storeMain.leftBlock);
const rightListSelectableItems = computed(() => storeMain.rightBlock);

const leftSelectedItems = computed(() => storeMain.leftSelectedItems);
const rightSelectedItems = computed(() => storeMain.rightSelectedItem);
</script>

<template>
  <div class="main-app">
    <div class="main-app__container">
      <Area
        class="main-app__selected-items"
        title="Выбранные элементы"
      >
        <template v-if="leftSelectedItems.length" #default>
          <Item
            v-for="{name, id} in leftSelectedItems"
            :title="name"
            :key="id"
             @click="storeMain.selectElement('leftBlock', id, true)"
          />

          <div class="selected-counter">
            {{ leftSelectedItems.length }}/6
          </div>
        </template>
        
        <template v-else #default>Нет выбранных элементов</template>
      </Area>

      <Area
        class="main-app__selected-items main-app__selected-items--right"
        title="Выбранный элемент"
      >
        <template v-if="rightSelectedItems.length">
          <Item
            v-for="{name, id} in rightSelectedItems"
            :title="name"
            :key="id"
            @click="storeMain.selectElement('rightBlock', id, true)"
          />
        </template>
        
        <template v-else>Нет выбранных элементов</template>
      </Area>

      <Area
        class="main-app__list-items"
        title="Выберите элементы"
      >
        <Item
          v-for="{name, id} in leftListSelectableItems"
          :title="name"
          :key="id"
          @click="storeMain.selectElement('leftBlock', id)"
        />
      </Area>

      <Area
        class="main-app__list-items"
        title="Выберите один элемент"
      >
        <Item
          v-for="{name, id} in rightListSelectableItems"
          :title="name"
          :key="id"
          @click="storeMain.selectElement('rightBlock', id)"
        />
      </Area>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-app {
  position: relative;
  width: 100vw;
  height: 100vh;

  &__container {
    position: relative;
    display: grid;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 40px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 3fr;
    gap: 40px;
  }

  &__selected-items {
    justify-self: flex-start;

    &--right {
      justify-self: self-end;
    }
  }
}

.selected-counter {
  position: absolute;
  right: 18px;
  bottom: 12px;
  background: rgba(0,0,0,0.7);
  color: #fff;
  font-size: 1.1em;
  padding: 2px 12px;
  border-radius: 12px;
  pointer-events: none;
  z-index: 2;
}
</style>
