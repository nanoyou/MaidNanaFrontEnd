<template>
  <v-table>
    <thead>
    <tr><th colspan="2" class="text-center text-h6">通知列表</th></tr>
    <tr class="text-subtitle-1 text-center">
      <th class="text-subtitle-1 text-center">
        通知名
      </th>
      <th class="text-subtitle-1 text-center">
        触发器
      </th>
    </tr>
    </thead>
    <tbody>
    <tr
        v-for="item in desserts"
        :key="item.name"
    >
      <td>{{ item.name }}</td>
      <td>{{ item.trigger }}</td>
    </tr>
    </tbody>
  </v-table>
</template>

<script>
export default {
  data () {
    return {
      desserts: [
        {
          name: '离谱数学',
          trigger: '芝士触发器',
        },
        {
          name: '雷普数学',
          trigger: '芝士触发器',
        },
        {
          name: '人类三大欲望',
          trigger: '芝士触发器',
        },
        {
          name: '寄算机组成原理',
          trigger: '芝士触发器',
        },
        {
          name: '爪娃高级编程',
          trigger: '芝士触发器',
        },
        {
          name: '哲♂学',
          trigger: '芝士触发器',
        },
        {
          name: 'Zood',
          trigger: '芝士触发器',
        },
        {
          name: '然然的直播间',
          trigger: '芝士触发器',
        },
        {
          name: '永雏塔菲的垃圾桶',
          trigger: '芝士触发器',
        },
        {
          name: '董薛怜老罕见',
          trigger: '芝士触发器',
        },
      ],
    }
  },
}
</script>
<style scoped>
</style>