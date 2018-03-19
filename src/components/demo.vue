<template>
  <input type="text" v-model='componentName'>
  <button @click='add'>click me to add a component</button>
</template>

<script>
  // 引入要添加的所有组件
  import component1 from './components/component1.vue'
  import component2 from './components/component2.vue'
  export default {
    data: function() {
      return {
        allComponents: [],
        componentName: ''
      }
    },
    components: {
      // 注册所有组件
      component1,
      component2
    },
    methods: {
      add() {
        this.allComponents.push(this.componentName)
        // 重置输入框
        this.componentName = ''
      },
      render(h) { // h 为 createElement 函数，接受三个参数
        // tag
        // data
        // children 具体看文档吧
        return h('div',this.allComponents.map(function(componentName) {
          return h(componentName)
        }))
      }
    }
  }
</script>
