export default {
  created () {
    // console.log('mixins-created')
  },
  data () {
    return {
      // title: 'mixins测试'
    }
  },
  // 此处编写的就是Vue组件实例的配置项，通过一定语法，可以直接混入到组件内部
  // data methods computed 生命周期函数 ...
  // 注意点：
  //   1. 如果此处和组件内，提供了同名的 data 或 methods，则组件内的优先级更高。
  //   2. 如果编写了生命周期函数，则mixins中的生命周期函数和页面的生命周期函数，会用数组管理，统一执行
  methods: {
    sayHi () {
      // console.log('Hello')
    },
    // 根据登陆状态是否需要显示登陆确认框
    // 1. 如果未登录 => 显示确认框 返回 true
    // 2. 如果已登录 => 啥也不干 返回 false
    loginConfirm () {
      // 判断token是否存在
      // 1.token不存在，弹确认框
      // 2.token存在，继续请求操作
      if (!this.$store.getters.token) {
        // 弹确认框
        // console.log('谈确认框')
        this.$dialog.confirm({
          title: '温馨提示',
          message: '此时需要先登陆才能继续操作',
          confirmButtonText: '去登录',
          cancelButtonText: '在逛逛'
        })
          .then(() => {
            // 若果希望跳转到登陆，登陆之后能回跳回来，需要在跳转去携带参数（当前路径地址）
            // this.$route.fullPath(会包含查询参数的)
            this.$router.replace({
              path: '/login',
              query: {
                backUrl: this.$route.fullPath
              }
            })
          })
          .catch(() => {})
        return true
      }
      return false
    }
  }
}
