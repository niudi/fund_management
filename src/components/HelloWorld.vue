<template>
  <div class="box">

      <div class="top">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1" class="logo">
            <i class="el-icon-loading bigIcon"></i>
            基金后台管理系统
          </el-menu-item>
          <el-submenu index="2" class="userInfo">
            <template slot="title" >{{level}} | {{userName}}</template>
            <el-menu-item index="2-1" class="xl" style="width: 100%; text-align: center;">权限管理</el-menu-item>
            <el-menu-item index="2-2" style="width: 100%; text-align: center;">退出</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <div class="center">
        <div class="centerLeft">
          <el-row class="tac">
            <el-col :span="12">
              <el-menu
                default-active="1-1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-submenu index="1">
                  <!--第一个标签页-->

                   <template slot="title">
                     <i class="el-icon-service bigIcon"></i>
                     <span class="bigTitle">会员管理</span>
                   </template>


                  <el-menu-item-group>
                    <el-menu-item index="1-1" @click="componentUser">会员查询</el-menu-item>
                  </el-menu-item-group>

                  <el-menu-item-group>
                    <el-menu-item index="1-2" @click="componentInvest">投资查询</el-menu-item>
                  </el-menu-item-group>

                  <el-menu-item-group>
                    <el-menu-item index="1-3"  @click="componentRedeem">赎回查询</el-menu-item>
                  </el-menu-item-group>

                  <el-menu-item-group>
                    <el-menu-item index="1-4">收益记录</el-menu-item>
                  </el-menu-item-group>

                  <el-menu-item-group>
                    <el-menu-item index="1-5">用户密码找回申请</el-menu-item>
                  </el-menu-item-group>




                </el-submenu>
                <el-submenu index="2" >
                  <!--第2个标签页-->

                  <template slot="title">
                    <i class="el-icon-printer bigIcon"></i>
                    <span class="bigTitle">系统管理</span>
                  </template>


                  <el-menu-item-group>
                    <el-menu-item index="2-1">银行管理</el-menu-item>

                  </el-menu-item-group>

                  <el-menu-item-group>
                    <el-menu-item index="2-2">用户管理</el-menu-item>
                  </el-menu-item-group>

                  <el-menu-item-group>
                    <el-menu-item index="2-3">角色管理</el-menu-item>
                  </el-menu-item-group>



                </el-submenu>
                <el-submenu index="3" >
                  <!--第3个标签页-->

                  <template slot="title">
                    <i class="el-icon-refresh bigIcon"></i>
                    <span class="bigTitle">财务管理</span>
                  </template>


                  <el-menu-item-group>
                    <el-menu-item index="3-1">用户投资对账</el-menu-item>

                  </el-menu-item-group>

                  <el-menu-item-group>
                    <el-menu-item index="3-2">用户赎回对账</el-menu-item>
                  </el-menu-item-group>






                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>

        </div>
        <div class="centerRight" id="centerRight">
            <!--上方查询的条件-->
          <userContent v-show="Mycomponent.userContent"></userContent>
          <userInvest v-show="Mycomponent.userInvest"></userInvest>
          <userRedeem v-show="Mycomponent.userRedeem"></userRedeem>
        </div>
      </div>



  </div>
</template>

<script>
  import userContent from './userContent.vue'
  import userInvest from './userInvest.vue'
  import userRedeem from './userRedeem.vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeIndex: '1',
      activeIndex2: '1',
      level:'管理员',
      userName:'张益达',
      pageNum:10000,
      Mycomponent:{
        userContent:true,
        userInvest:false,
        userRedeem:false,

      },

      formInline: {
        tel: '',
        userName: '',
        cardId: '',
        investState:'',
        openAccState:''
      },
      tableData: [{
        id:1,
        name: '王小虎',
        tel:'13521233779',
        idcard:'342201199208104444',
        fundid: '135212337799',
        bank:'建设银行',
        bankCardCode:'6222021307004598866',
        openAccTime:'2016-03-10 12:54:48',
        openAccState:'已开户',
        investState:'未投资'

      },{
        id:2,
        name: '王小虎',
        tel:'13521233779',
        idcard:'342201199208104444',
        fundid: '135212337799',
        bank:'建设银行',
        bankCardCode:'6222021307004598866',
        openAccTime:'2016-03-10 12:54:48',
        openAccState:'已开户',
        investState:'未投资'

      },{
        id:3,
        name: '王小虎',
        tel:'13521233779',
        idcard:'342201199208104444',
        fundid: '135212337799',
        bank:'建设银行',
        bankCardCode:'6222021307004598866',
        openAccTime:'2016-03-10 12:54:48',
        openAccState:'已开户',
        investState:'未投资'

      },{
        id:4,
        name: '王小虎',
        tel:'13521233779',
        idcard:'342201199208104444',
        fundid: '135212337799',
        bank:'建设银行',
        bankCardCode:'6222021307004598866',
        openAccTime:'2016-03-10 12:54:48',
        openAccState:'已开户',
        investState:'未投资'

      },{
        id:5,
        name: '王小虎',
        tel:'13521233779',
        idcard:'342201199208104444',
        fundid: '135212337799',
        bank:'建设银行',
        bankCardCode:'6222021307004598866',
        openAccTime:'2016-03-10 12:54:48',
        openAccState:'已开户',
        investState:'未投资'

      },{
        id:6,
        name: '王小虎',
        tel:'13521233779',
        idcard:'342201199208104444',
        fundid: '135212337799',
        bank:'建设银行',
        bankCardCode:'6222021307004598866',
        openAccTime:'2016-03-10 12:54:48',
        openAccState:'已开户',
        investState:'未投资'

      },{
        id:7,
        name: '王小虎',
        tel:'13521233779',
        idcard:'342201199208104444',
        fundid: '135212337799',
        bank:'建设银行',
        bankCardCode:'6222021307004598866',
        openAccTime:'2016-03-10 12:54:48',
        openAccState:'已开户',
        investState:'未投资'

      },{
        id:8,
        name: '王小虎',
        tel:'13521233779',
        idcard:'342201199208104444',
        fundid: '135212337799',
        bank:'建设银行',
        bankCardCode:'6222021307004598866',
        openAccTime:'2016-03-10 12:54:48',
        openAccState:'已开户',
        investState:'未投资'

      },{
        id:9,
        name: '王小虎',
        tel:'13521233779',
        idcard:'342201199208104444',
        fundid: '135212337799',
        bank:'建设银行',
        bankCardCode:'6222021307004598866',
        openAccTime:'2016-03-10 12:54:48',
        openAccState:'已开户',
        investState:'未投资'

      },{
        id:10,
        name: '王小虎',
        tel:'13521233779',
        idcard:'342201199208104444',
        fundid: '135212337799',
        bank:'建设银行',
        bankCardCode:'6222021307004598866',
        openAccTime:'2016-03-10 12:54:48',
        openAccState:'已开户',
        investState:'未投资'

      },{
        id:11,
        name: '王小虎',
        tel:'13521233779',
        idcard:'342201199208104444',
        fundid: '135212337799',
        bank:'建设银行',
        bankCardCode:'6222021307004598866',
        openAccTime:'2016-03-10 12:54:48',
        openAccState:'已开户',
        investState:'未投资'

      }, {
        id:12,
        name: '王小虎',
        tel:'13521233779',
        idcard:'342201199208104444',
        fundid: '135212337799',
        bank:'建设银行',
        bankCardCode:'6222021307004598866',
        openAccTime:'2016-03-10 12:54:48',
        openAccState:'已开户',
        investState:'未投资'

      },{
        id:13,
        name: '王小虎',
        tel:'13521233779',
        idcard:'342201199208104444',
        fundid: '135212337799',
        bank:'建设银行',
        bankCardCode:'6222021307004598866',
        openAccTime:'2016-03-10 12:54:48',
        openAccState:'已开户',
        investState:'未投资'

      },{
        id:14,
        name: '王小虎',
        tel:'13521233779',
        idcard:'342201199208104444',
        fundid: '135212337799',
        bank:'建设银行',
        bankCardCode:'6222021307004598866',
        openAccTime:'2016-03-10 12:54:48',
        openAccState:'已开户',
        investState:'未投资'

      },{
        id:15,
        name: '王小虎',
        tel:'13521233779',
        idcard:'342201199208104444',
        fundid: '135212337799',
        bank:'建设银行',
        bankCardCode:'6222021307004598866',
        openAccTime:'2016-03-10 12:54:48',
        openAccState:'已开户',
        investState:'未投资'

      }]
    }
  },
  components:{
    userContent,
    userInvest,
    userRedeem
  },
  methods: {
    componentUser(){
       this.Mycomponent.userContent=true;
       this.Mycomponent.userInvest=false;
       this.Mycomponent.userRedeem=false;
    },
    componentInvest(){
      this.Mycomponent.userContent=false;
      this.Mycomponent.userInvest=true;
      this.Mycomponent.userRedeem=false;
    },
    componentRedeem(){
      this.Mycomponent.userContent=false;
      this.Mycomponent.userInvest=false;
      this.Mycomponent.userRedeem=true;
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },

    onSubmit() {
      console.log(this.formInline);
    },
    onReset(){
      this.formInline={
        tel: '',
          userName: '',
          cardId: '',
          investState:'',
          openAccState:''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  html,body{
    width: 100%;
    height: 100%;
    /*overflow: hidden;*/
  }
  .box{
    width: 100%;
    height: 100%;
  }
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  overflow: hidden;
}
.top{
  width: 100%;
  height: 60px;
  background: #ccc;
  position: fixed;
  left: 0;
  top: 0;
  overflow: hidden;

}
.logo{
  width: 12%;
}
/*个人信息*/
.userInfo{
  position: absolute;
  right: 20px;
  top:0;

}
.bigIcon{
  position: absolute;
  left: 10px;
  top:19px;
}
.bigTitle{
  display: block;
  position: absolute;
  left: 45px;
  top: 0;
}

  .center{
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    position: fixed;
    left: 0;
    top: 60px;
  }

  .centerLeft{
    width: 12%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: #ccc;
    overflow: scroll;
  }
  .tac{
    width: 100%;
    height: 100%;
    /*margin-top: 10px;*/
    background: #545c64;
  }
  .tac .el-col {
    width: 100%;
    height: 100%;
  }
  .centerRight{
    width: 88%;
    height: 100%;
    margin-left: 12%;
    background: #e0e0e0;
    overflow: scroll;
  }
  /*中间的查询条件*/
  .queryCondition{
    width: 99%;
    /*height: 10%;*/
    margin-left: 0.5%;
    margin-top: 0.5%;
    border:1px solid #FFFFFF;
    background: #FFFFFF;
    box-sizing: border-box;
    border-radius:10px;
  }
  .queryCondition form{
    height: 100%;
  }

  .el-form-item{
    margin: 0;
    margin-top: 10px;
    margin-left: 20px;
    margin-bottom: 10px;


  }






  /*查询的结果*/
  .queryContent{
    width: 99%;
    height:75%;
    margin-left: 0.5%;
    margin-top: 1%;
    border:1px solid #FFFFFF;
    background: #FFFFFF;
    box-sizing: border-box;
    border-radius:10px;
    overflow: scroll;
  }
  /*查询的分页*/
  .queryPage{
    width: 99%;
    margin-left: 0.5%;
    margin-top: 0.5%;
    border:1px solid #FFFFFF;
    background: #FFFFFF;
    box-sizing: border-box;
    border-radius:10px;
  }
  .queryPage .block,.queryPage .block div{
    margin-top:10px;
    margin-bottom:10px;
  }


</style>
