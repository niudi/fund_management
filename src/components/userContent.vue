<template>
  <div class="box">

    <!--上方查询的条件-->
    <div class="queryCondition">

      <el-form :inline="true" :model="formInline" class="demo-form-inline">


        <el-form-item label="手机号:"  size="mini" style="text-align: left;margin-left: 10px;">
          <el-input v-model="formInline.tel" placeholder="手机号"  style="width:120px;"></el-input>
        </el-form-item>

        <el-form-item label="会员名称:" size="mini" style="text-align: left;">
          <el-input v-model="formInline.userName" placeholder="会员名称" style="width:100px;"></el-input>
        </el-form-item>

        <el-form-item label="身份证号:" size="mini" style="text-align: left;">
          <el-input v-model="formInline.cardId" placeholder="身份证号" style="width:200px;"></el-input>
        </el-form-item>



        <el-form-item label="投资状态:" size="mini" style="text-align: left;">
          <el-select v-model="formInline.investState" placeholder="投资状态" style="width:100px;">
            <el-option label="全部" value="all"></el-option>
            <el-option label="已投资" value="yes"></el-option>
            <el-option label="未投资" value="no"></el-option>
          </el-select>
        </el-form-item>


        <el-form-item label="开户状态:" size="mini" style="text-align: left;">
          <el-select v-model="formInline.openAccState" placeholder="开户状态" style="width:100px;">
            <el-option label="全部" value="all"></el-option>
            <el-option label="已开户" value="yes"></el-option>
            <el-option label="未开户" value="no"></el-option>
          </el-select>
        </el-form-item>



        <el-form-item size="mini" style="text-align: left;">
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>

        <el-form-item size="mini" style="text-align: left;">
          <el-button type="danger" @click="onReset">重置</el-button>
        </el-form-item>


      </el-form>
    </div>
    <div class="queryContent">

      <el-table
        stripe
        :data="tableData"
        style="width: 100%">

        <el-table-column prop="id" label="序号" width="80">
        </el-table-column>

        <el-table-column prop="name" label="会员名称" width="80">
        </el-table-column>

        <el-table-column prop="tel" label="电话" width="120">
        </el-table-column>

        <el-table-column prop="idcard" label="身份证" width="180">
        </el-table-column>

        <el-table-column prop="fundid" label="基金账户" width="120">
        </el-table-column>

        <el-table-column prop="bank" label="开户银行" width="100">
        </el-table-column>

        <el-table-column prop="bankCardCode" label="银行卡号" >
        </el-table-column>

        <el-table-column prop="openAccTime" label="开户时间" >
        </el-table-column>

        <el-table-column prop="openAccState" label="开户状态" width="80">
        </el-table-column>

        <el-table-column prop="investState" label="投资状态" width="80">
        </el-table-column>

      </el-table>


    </div>
    <div class="queryPage">
      <div class="block">
        <el-pagination
          background
          @current-change="handleCurrentChange"
          :page-size="15"
          layout="total, prev, pager, next"
          :total="pageNum">
        </el-pagination>
      </div>
    </div>
  </div>
</template>



<script>
  export default {
    name: 'userContent',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        activeIndex: '1',
        activeIndex2: '1',
        level:'管理员',
        userName:'张益达',
        pageNum:10000,
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
    methods: {

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


