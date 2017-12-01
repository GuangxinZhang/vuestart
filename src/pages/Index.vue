<template>
  <div>
    <app-layout></app-layout>
    <v-content>
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs4>
            <v-card>
                <div>
                  <ve-line
                    :data="chartData"
                    :colors="chartColors"
                    :width="width"
                    :height="height"
                    :grid="grid"
                    :scale="scale"
                    :settings="chartSettings">
                  </ve-line>
                </div>
            </v-card>
          </v-flex>
          <v-flex xs4>
            <v-card>
                <div>
                  <ve-line
                    :data="chartData"
                    :colors="chartColors"
                    :width="width"
                    :height="height"
                    :grid="grid"
                    :scale="scale"
                    :settings="chartSettings">
                  </ve-line>
                </div>
            </v-card>
          </v-flex>
          <v-flex xs4>
            <v-card>
                <div>
                  <ve-line
                    :data="chartData"
                    :colors="chartColors"
                    :width="width"
                    :height="height"
                    :grid="grid"
                    :scale="scale"
                    :settings="chartSettings">
                  </ve-line>
                </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container grid-list-md text-xs-center>
        <div>
          <v-btn color="primary" v-on:click="button">Primary</v-btn>
        </div>
      </v-container>
    </v-content>
  </div>
</template>

<style>
.echarts {
  height: 300px;
}
</style>

<script>
export default {
  data: function () {
    return {
      chartData: {
        columns: ['日期', '销售额', '占比'],
        rows: [
          { '日期': '1月1日', '销售额': 1523, '占比': 0.12 },
          { '日期': '1月2日', '销售额': 1223, '占比': 0.345 },
          { '日期': '1月3日', '销售额': 2123, '占比': 0.7 },
          { '日期': '1月4日', '销售额': 4123, '占比': 0.31 },
          { '日期': '1月5日', '销售额': 3123, '占比': 0.12 },
          { '日期': '1月6日', '销售额': 7123, '占比': 0.65 }
        ]
      },
      chartColors: [
        '#19d4ae', '#5ab1ef', '#fa6e86',
        '#ffb980', '#0067a6', '#c4b4e4',
        '#d87a80', '#9cbbff', '#d9d0c7',
        '#87a997', '#d49ea2', '#5b4947',
        '#7ba3a8'
      ],
      grid: { left: 20, right: 20 },
      scale: { y: false },
      width: '90%',
      height: '350px',
      chartSettings: {
        axisSite: {
          right: ['占比']
        },
        yAxisType: ['KMB', 'percent'],
        area: true
      }
    }
  },
  methods: {
    button () {
      this.$http.get(this.api['user'], {}).then(function (response) {
        // 响应成功回调
        console.log('===============================')
        console.log(response.data)
      }, function (response) {
        // 响应错误回调
        console.log('-------------------------------')
        console.log(response.data)
      })
    }
  }
}
</script>