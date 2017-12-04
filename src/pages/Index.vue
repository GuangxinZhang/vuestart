<template>
  <v-container fluid>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex lg3>
          <v-card color="blue-grey darken-2" class="white--text">
            <v-card-title primary-title>
              <div class="headline">Unlimited music now</div>
              <div>Listen to your favorite artists and albums whenever and wherever, online and offline.</div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat dark>Listen now</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex lg3>
          <v-card color="blue-grey darken-2" class="white--text">
            <v-card-title primary-title>
              <div class="headline">Unlimited music now</div>
              <div>Listen to your favorite artists and albums whenever and wherever, online and offline.</div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat dark>Listen now</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex lg3>
          <v-card color="blue-grey darken-2" class="white--text">
            <v-card-title primary-title>
              <div class="headline">Unlimited music now</div>
              <div>Listen to your favorite artists and albums whenever and wherever, online and offline.</div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat dark>Listen now</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex lg3>
          <v-card color="blue-grey darken-2" class="white--text">
            <v-card-title primary-title>
              <div class="headline">Unlimited music now</div>
              <div>Listen to your favorite artists and albums whenever and wherever, online and offline.</div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat dark>Listen now</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex lg9>
          <v-card ref="abc">
            <ve-line :data="chartData" :settings="chartSettings" ref="chart1"></ve-line>
          </v-card>
        </v-flex>
        <v-flex lg3>
          <v-card>
            <ve-line :data="chartData" :settings="chartSettings" ref="chart2"></ve-line>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-md text-xs-center>
      <div>
        <v-btn color="primary" v-on:click="button" ref="resize">Primary</v-btn>
      </div>
    </v-container>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          提示信息
        </v-card-title>
        <v-card-text>
          <span>{{ message }}</span>
        </v-card-text>
        <v-card-actions>
          <v-card-text class="text-md-right">
            <v-btn color="primary" flat @click.stop="dialog=false">关闭</v-btn>
          </v-card-text>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import 'vuetify/dist/vuetify.min.css'
export default {
  props: {
    drawer: {
      type: Boolean
    }
  },
  data: function () {
    return {
      dialog: false,
      message: '',
      chartData: {
        columns: ['日期', '成本', '利润', '占比', '其他'],
        rows: [
          { '日期': '1月1日', '成本': 1523, '利润': 1523, '占比': 0.12, '其他': 100 },
          { '日期': '1月2日', '成本': 1223, '利润': 1523, '占比': 0.345, '其他': 100 },
          { '日期': '1月3日', '成本': 2123, '利润': 1523, '占比': 0.7, '其他': 100 },
          { '日期': '1月4日', '成本': 4123, '利润': 1523, '占比': 0.31, '其他': 100 },
          { '日期': '1月5日', '成本': 3123, '利润': 1523, '占比': 0.12, '其他': 100 },
          { '日期': '1月6日', '成本': 7123, '利润': 1523, '占比': 0.65, '其他': 100 }
        ]
      },
      chartSettings: {
        stack: { '售价': ['成本', '利润'] },
        area: true
      },
      height: '350px'
    }
  },
  mounted: function () {
    setTimeout(() => {
      this.$refs[`chart1`].echarts.resize()
      this.$refs[`chart2`].echarts.resize()
    }, 200)
    // this.$nextTick(function () {
    //   this.$refs[`chart1`].echarts.resize()
    //   this.$refs[`chart2`].echarts.resize()
    // })
  },
  methods: {
    button () {
      this.$refs[`chart1`].echarts.resize()
      this.$refs[`chart2`].echarts.resize()
      this.$http.get(this.api['user'], {}).then(function (response) {
        console.log(response.data)
      }, function (response) {
        this.dialog = true
        this.message = '数据请求失败！' + response.data
        console.log(response)
      })
    }
  },
  watch: {
    drawer (newValue, oldValue) {
      setTimeout(() => {
        this.$refs[`chart1`].echarts.resize()
        this.$refs[`chart2`].echarts.resize()
      }, 200)
    }
  }
}
</script>
