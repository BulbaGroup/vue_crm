<script lang="ts">
import Vue from 'vue';

import { mapGetters, mapActions, mapMutations } from 'vuex';

export default Vue.extend({
  name: 'NavigationDrawerComponent',

  props: ['value'],

  computed: {
    ...mapGetters(['navigationDrawerGetter']),

    drawer: {
      get() {
        return this.navigationDrawerGetter;
      },
      set(drawer: boolean) {
        this.navigationDrawerMutation(drawer);
      },
    },
  },

  data: (): any => ({
    items: [
      {
        title: 'Счет',
        url: '/',
        exact: true,
        icon: 'mdi-credit-card-multiple',
      },
      { title: 'История', url: '/history', icon: 'mdi-table' },
      {
        title: 'Планирование',
        url: '/planning',
        icon: 'mdi-chart-line',
      },
      {
        title: 'Новая запись',
        url: '/record',
        icon: 'mdi-table-column-plus-before',
      },
      { title: 'Категории', url: '/categories', icon: 'mdi-table-edit' },
    ],
  }),

  methods: {
    ...mapMutations(['navigationDrawerMutation']),
  },
});
</script>

<template>
  <v-navigation-drawer app v-model="drawer" class="grey lighten-4" clipped>
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.url"
        :exact="item.exact"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped></style>
