<template>
<div class="buttons">
  Init-Label:
  <button id="ctbl" v-on:click="ctbl" type="button">Create 1000 bound labels</button>
  <button id="cttbl" v-on:click="cttbl" type="button">Create 10000 bound labels</button>
  <br>
  Init-Textboxes:
  <button id="cttb" v-on:click="cttb" type="button">Create 1000 text boxes</button>
  <button id="ctttb" v-on:click="ctttb" type="button">Create 10000 text boxes</button>
  <br>
  Init-Tabs:
  <button id="cht" v-on:click="cht" type="button">Create 100 tabs with 1000 entries</button>
  <button id="ctt" v-on:click="ctt" type="button">Create 1000 tabs with 1000 entries</button>
  <button id="cttt" v-on:click="cttt" type="button">Create 10000 tabs with 1000 entries</button>
  <br>
  Execute-Label:
  <button id="ubl" v-on:click="ubl" type="button">Update bound labels</button>
  <button id="sbl" v-on:click="sbl" type="button">Swap two labels</button>
  <button id="srbl" v-on:click="srbl" type="button">Swap two random labels</button>
  <button id="strbl" v-on:click="strbl" type="button">Swap 1000 random labels</button>
  <br>
  <button id="rbl" v-on:click="rbl" type="button">Remove a label</button>
  <button id="rrbl" v-on:click="rrbl" type="button">Remove a random label</button>
  <button id="rtrbl" v-on:click="rtrbl" type="button">Remove 1000 random labels</button>
  <br>
  Execute-Tabs:
  <button id="ut" v-on:click="ut" type="button">Update tabs</button>
  <br>
  <button id="strlrt" v-on:click="strlrt" type="button">Switch 10000 random labels from random tabs</button>
  <button id="shtrlrt" v-on:click="shtrlrt" type="button">Switch 100000 random labels from random tabs</button>
  <br>
  Execute-Textboxes:
  <button id="utb" v-on:click="utb" type="button">Update textboxes</button>
  <button id="chthtb" v-on:click="chthtb" type="button">Change text 100 textboxes</button>
  <button id="chtttb" v-on:click="chtttb" type="button">Change text 1000 textboxes</button>
  <button id="chttttb" v-on:click="chttttb" type="button">Change text 10000 textboxes</button>
  <br>
  <button id="rtb" v-on:click="rtb" type="button">Remove textbox</button>
  <button id="rrtb" v-on:click="rrtb" type="button">Remove random textbox</button>
  <button id="rhrtb" v-on:click="rhrtb" type="button">Remove 100 random textboxes</button>
  <button id="rtrtb" v-on:click="rtrtb" type="button">Remove 1000 random textboxes</button>
  <br>
  Clear:
  <button id="clear" v-on:click="clear" type="button">Clear</button>

  <div id="labels">
    <app-label v-for="label in labels" :key="label.id" :id="'bl-' + label.id" :labelId="label.id">{{label.name}}</app-label>
  </div>
  <div id="textBoxes">
    <app-textbox v-for="(textbox, index) in textBoxes" :key="textbox.id" v-model="textBoxes[index]"></app-textbox>
  </div>
  <div id="tabs">
    <app-tabs :tabs="tabs"></app-tabs>
  </div>

  <!-- <div id="labels">
    <app-label *ngFor="let label of labels;trackBy: trackById" id="bl-{{label.id}}" labelId="{{label.id}}">{{label.name}}</app-label>
  </div>
  <div id="textBoxes">
    <app-text-box *ngFor="let textbox of textBoxes;let i=index;trackBy: trackById" [(tb)]="textBoxes[i]"></app-text-box>
  </div>
  <div id="tabs">
    <app-tabs [tabsData]="tabs"></app-tabs>
  </div> -->
</div>
</template>

<!-- <template>
  <div id="app">
   <template>
    <div class="container">
        <div class="jumbotron">
            <div class="row">
                <div class="col-md-6">
                    <h1>Vue.js</h1>
                </div>
                <div class="col-md-6">
                    <div class="row">
                        <!-- <div class="col-sm-6 smallpad">
                          <button type="button" class="btn btn-primary btn-block" id="run" v-on:click="run">Create 1,000 rows</button>
                        </div>
                        <div class="col-sm-6 smallpad">
                            <button type="button" class="btn btn-primary btn-block" id="runlots" v-on:click="runLots">Create 10,000 rows</button>
                        </div>
                        <div class="col-sm-6 smallpad">
                            <button type="button" class="btn btn-primary btn-block" id="add" v-on:click="add">Append 1,000 rows</button>
                        </div>
                        <div class="col-sm-6 smallpad">
                            <button type="button" class="btn btn-primary btn-block" id="update" v-on:click="update">Update every 10th row</button>
                        </div>
                        <div class="col-sm-6 smallpad">
                            <button type="button" class="btn btn-primary btn-block" id="clear" v-on:click="clear">Clear</button>
                        </div>
                        <div class="col-sm-6 smallpad">
                            <button type="button" class="btn btn-primary btn-block" id="swaprows" v-on:click="swapRows">Swap Rows</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <table class="table table-hover table-striped test-data" v-on:click="handleClick">
            <tbody>
                <tr v-for="item in rows" :key="item.id" :class="{'danger': item.id == selected}">
                    <td class="col-md-1">{{item.id}}</td>
                    <td class="col-md-4">
                        <a data-action="select" :data-id="item.id">{{item.label}}</a>
                    </td>
                    <td class="col-md-1">
                        <a>
                            <span class="glyphicon glyphicon-remove" aria-hidden="true"
                                data-action="remove" :data-id="item.id"></span>
                        </a>
                    </td>
                    <td class="col-md-6"></td>
                </tr>
            </tbody>
        </table>
        <table class="table table-hover table-striped test-data" v-on:click="handleClick">
            <tbody>
              <tr v-for="item in rows" :key="item.id" :class="{'danger': item.id == selected}">
                    <td class="col-md-1">{{item.id}}</td>
                    <td class="col-md-1">
                        <a>
                            <textarea class="glyphicon glyphicon-remove" aria-hidden="true"
                                data-action="remove" :data-id="item.id" v-model="item.label"></textarea>
                        </a>
                    </td>
                    <td class="col-md-6"></td>
                </tr>
            </tbody>
        </table>

        <table class="table table-hover table-striped test-data" v-on:click="handleClick">
            <tbody>
            <tabs>
              <tr v-for="item in rows" :key="item.id" :class="{'danger': item.id == selected}">

                    <tab :id = "item.id" :name = "item.id">
                    <span>{{item.label}} </span>
                    </tab>

              </tr>
            </tabs>
            </tbody>
        </table>

        <span class="preloadicon glyphicon glyphicon-remove" aria-hidden="true"></span>
    </div>
</template>
  </div>
</template>-->

<script>
import { Store } from './store';
import Vue from 'vue'
var store = new Store;

import { LabelData, TabData, TextBoxData, colors, adjectives, nouns } from './lib'

export default {
    data: () => ({
        rows: store.data,
        selected: store.selected,
        activeTab: 0,
        labels: [],
        generatedLabels: [],
        tabs: [],
        generatedTabs: [],
        textBoxes: [],
        generatedTextBoxes: []
    }),
    methods: {
        clear() {
          this.labels = []
          this.generatedLabels = []

          this.tabs = []
          this.generatedTabs = []

          this.textBoxes = []
          this.generatedTabs = []
        },
        trackById(index, item) {
          return item.id
        },




        //Labels

        ctbl() {
          console.log(this.generateRandomWords())
          this.generatedLabels = []

          for(let i = 0; i < 1000; i++) {
            this.generatedLabels.push(new LabelData(i, this.generateRandomWords()))
          }
        },

        cttbl() {
          this.generatedLabels = []

          for(let i = 0; i < 10000; i++) {
            this.generatedLabels.push(new LabelData(i, this.generateRandomWords()))
          }
        },

        ubl() {
          this.labels = this.generatedLabels
        },

        sbl() {
          this.swap(this.labels, 0, 50)
        },

        srbl() {
          this.swap(this.labels, Math.floor(Math.random() * this.labels.length), Math.floor(Math.random() * this.labels.length))
        },

        strbl() {
          this.generatedLabels = this.labels.slice()

          for(let i = 0; i < 1000; i++) {
            this.swap(this.generatedLabels, Math.floor(Math.random() * this.generatedLabels.length), Math.floor(Math.random() * this.generatedLabels.length))
          }
        },

        rbl() {
          this.labels.shift()
        },

        rrbl() {
          let index = Math.floor(Math.random() * this.labels.length)
          this.labels.splice(index, 1)
          console.log(index)
        },

        rtrbl() {
          this.generatedLabels = this.labels.slice()
          let indices = []

          for(let i = 0; i < 1000; i++) {
            indices.push(Math.floor(Math.random() * this.generatedLabels.length))
          }

          this.generatedLabels = this.labels.filter((v, i, a) => {
            return !indices.includes(i)
          })
        },




        //Tabs

        cht() {
          this.generatedTabs = []

          for(let i = 0; i < 100; i++) {
            this.generatedTabs.push(new TabData(i, this.generateRandomArray(1000)))
          }
        },

        ctt() {
          this.generatedTabs = []

          for(let i = 0; i < 1000; i++) {
            this.generatedTabs.push(new TabData(i, this.generateRandomArray(1000)))
          }
        },

        cttt() {
          this.generatedTabs = []

          for(let i = 0; i < 10000; i++) {
            this.generatedTabs.push(new TabData(i, this.generateRandomArray(1000)))
          }
        },

        ut() {
          this.tabs = this.generatedTabs
        },

        strlrt() {
          for(let i = 0; i < 10000; i++) {
            let a = Math.floor(Math.random() * this.tabs.length)
            let aa = Math.floor(Math.random() * this.tabs[a].data.length)
            let b = Math.floor(Math.random() * this.tabs.length)
            let bb = Math.floor(Math.random() * this.tabs[b].data.length)

            let tmp = this.tabs[a].data[aa]
            this.tabs[a].data[aa] = this.tabs[b].data[bb]
            this.tabs[b].data[bb] = tmp
          }
        },

        shtrlrt() {
          for(let i = 0; i < 100000; i++) {
            let a = Math.floor(Math.random() * this.tabs.length)
            let aa = Math.floor(Math.random() * this.tabs[a].data.length)
            let b = Math.floor(Math.random() * this.tabs.length)
            let bb = Math.floor(Math.random() * this.tabs[b].data.length)

            let tmp = this.tabs[a].data[aa]
            this.tabs[a].data[aa] = this.tabs[b].data[bb]
            this.tabs[b].data[bb] = tmp
          }
        },




        //TextBoxes

        cttb() {
          this.generatedTextBoxes = []

          for(let i = 0; i < 1000; i++) {
            this.generatedTextBoxes.push(new TextBoxData(i, this.generateRandomWords()))
          }
        },

        ctttb() {
          this.generatedTextBoxes = []

          for(let i = 0; i < 10000; i++) {
            this.generatedTextBoxes.push(new TextBoxData(i, this.generateRandomWords()))
          }
        },

        utb() {
          this.textBoxes = this.generatedTextBoxes
        },

        chthtb() {
          for(let i = 0; i < 100; i++) {
            this.generatedTextBoxes[Math.floor(Math.random() * this.generatedTextBoxes.length)].text = this.generateRandomWords()
          }
        },

        chtttb() {
          for(let i = 0; i < 1000; i++) {
            this.generatedTextBoxes[Math.floor(Math.random() * this.generatedTextBoxes.length)].text = this.generateRandomWords()
          }
        },

        chttttb() {
          for(let i = 0; i < 10000; i++) {
            this.generatedTextBoxes[Math.floor(Math.random() * this.generatedTextBoxes.length)].text = this.generateRandomWords()
          }
        },

        rtb() {
          this.textBoxes.shift()
        },

        rrtb() {
          this.textBoxes.splice(Math.floor(Math.random() * this.textBoxes.length), 1)
        },

        rhrtb() {
          this.generatedTextBoxes = this.textBoxes.slice()
          let indices = []

          for(let i = 0; i < 100; i++) {
            indices.push(Math.floor(Math.random() * this.generatedTextBoxes.length))
          }

          this.generatedTextBoxes = this.textBoxes.filter((v, i, a) => {
            return !indices.includes(i)
          })
        },

        rtrtb() {
          this.generatedTextBoxes = this.textBoxes.slice()
          let indices = []

          for(let i = 0; i < 1000; i++) {
            indices.push(Math.floor(Math.random() * this.generatedTextBoxes.length))
          }

          this.generatedTextBoxes = this.textBoxes.filter((v, i, a) => {
            return !indices.includes(i)
          })
        },

        showTab(index) {
          this.activeTab = index
        },

        swap(arr, indexA, indexB) {
          let tmp = arr[indexA]
          Vue.set(arr, indexA, arr[indexB])
          Vue.set(arr, indexB, tmp)
        },

        generateRandomArray(size) {
          let result = []

          for(let i = 0; i < size; i++) {
            result.push(new LabelData(i, this.generateRandomWords()))
          }

          return result
        },
        generateRandomWords() {
          return colors[Math.floor(Math.random() * colors.length)] + " " + adjectives[Math.floor(Math.random() * adjectives.length)] + " " + nouns[Math.floor(Math.random() * nouns.length)]
        },
        trackById(index, item) {
          return item.id
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
-->
