import React, { Component } from 'react';
import './App.css';

import { LabelData, TabData, TextBoxData, adjectives, colors, nouns } from './lib'

class Label extends Component {
  render() {
    let tabId = this.props.tabId
    let labelId = this.props.labelId

    return (
      <div id={this.props.id} className="label">
        {((tabId === 0 || tabId) ? <> {tabId} - </> : <></>)}  {labelId} - {this.props.children}<slot></slot>
      </div>
    )
  }
}

class Tabs extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: 0
    }
  }
  render() {
    console.log("render tabs")
    console.log("active tab"+this.state.activeTab)

    return (
      <div>
        {
          this.props.tabData.map(tab => { return <TabButton key={Object.uid(tab)} tabId={tab.id} onActivate={e => { console.log("click"); this.setState({ activeTab: e }) } }></TabButton> })
        }
        {
          this.props.tabData.map(tab => { return <TabContent key={Object.uid(tab)} tabId={tab.id} activeTab={this.state.activeTab} labelData={tab.data}></TabContent> })
        }
      </div>
    )
  }
}

class TabButton extends Component {
  render() {    
    return (
      <button id={'tab-' + this.props.tabId} onClick={(e) => this.props.onActivate(this.props.tabId)} type="button">Tab {this.props.tabId}</button>
    )
  }
}

class TabContent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: this.props.activeTab
    }
  }
  render() {
    const draw = (this.props.activeTab == this.props.tabId || (this.props.tabId == 0 && !this.props.activeTab))
    const labelData = this.props.labelData
    console.log("activeTab"+this.props.activeTab)

    if(draw) {
      console.log("rendering " + this.props.tabId)
      return (
        <>
        {
          labelData.map((v) => <Label id={"tbl-" + v.tabId + "-" + v.id} tabId={v.tabId} labelId={v.id}>{v.name}</Label>)
        }
        </>
      )
    } else {
      console.log("not rendering " + this.props.tabId)
      return (<></>)
    }
  }
}

class TextBox extends Component {

  constructor(props) {
    super(props)

    this.state = {
      value: this.props.textBox.text
    }
  }

  render() {
    return (
      <input id={"tb-" + this.props.textBox.id} onChange={(name) => this.setState({ value: name })} value={this.state.value} type="text"/>
    )
  }
}

class App extends Component {
  state = {
    labels: [],
    generatedLabels: [],

    tabs: [],
    generatedTabs: [],
    
    textBoxes: [],
    generatedTextBoxes: []
  };

  clear = () => {
    this.setState({ labels: [] })
    this.setState({ generatedLabels: [] })

    this.setState({ tabs: [] })
    this.setState({ generatedTabs: [] })

    this.setState({ textBoxes: [] })
    this.setState({ generatedTextBoxes: [] })
  }

  trackById(index, item) {
    return item.id
  }




  //Labels

  ctbl = () => {
    let labels = []

    for(let i = 0; i < 1000; i++) {
      labels.push(new LabelData(i, this.generateRandomWords()))
    }

    this.setState({ generatedLabels: labels })
  }

  cttbl = () => {
    let labels = []

    for(let i = 0; i < 10000; i++) {
      labels.push(new LabelData(i, this.generateRandomWords()))
    }

    this.setState({ generatedLabels: labels })
  }

  ubl = () => {
    console.log(this.state)
    this.setState({ labels: this.state.generatedLabels })
  }

  sbl = () => {
    let tmp = this.state.labels.slice()
    this.swap(tmp, 0, 50)
    this.setState({labels: tmp})
  }

  srbl = () => {
    let tmp = this.state.labels.slice()
    this.swap(tmp, Math.floor(Math.random() * this.state.labels.length), Math.floor(Math.random() * this.state.labels.length))
    this.setState({labels: tmp})
  }

  strbl = () => {
    let tmp = this.state.labels.slice()

    for(let i = 0; i < 1000; i++) {
      this.swap(tmp, Math.floor(Math.random() * this.state.generatedLabels.length), Math.floor(Math.random() * this.state.generatedLabels.length))
    }

    this.setState({ generatedLabels: tmp })
  }

  rbl = () => {
    let tmpLabels = this.state.labels.slice(1)

    this.setState({
      labels: tmpLabels
    })
  }

  rrbl = () => {
    let tmp = this.state.labels.slice()
    let index = Math.floor(Math.random() * this.state.labels.length)

    tmp.splice(index, 1)

    this.setState({ labels: tmp })
  }

  rtrbl = () => {
    let indices = []

    for(let i = 0; i < 1000; i++) {
      indices.push(Math.floor(Math.random() * this.state.generatedLabels.length))
    }

    this.setState({ generatedLabels: this.state.labels.filter((v, i, a) => { return !indices.includes(i) }) })
  }




  //Tabs

  cht = () => {
    let tmp = []

    for(let i = 0; i < 100; i++) {
      tmp.push(new TabData(i, this.generateRandomArray(1000)))
    }

    this.setState({ generatedTabs: tmp })
  }

  ctt = () => {
    let tmp = []

    for(let i = 0; i < 1000; i++) {
      tmp.push(new TabData(i, this.generateRandomArray(1000)))
    }

    this.setState({ generatedTabs: tmp })
  }

  cttt = () => {
    let tmp = []

    for(let i = 0; i < 10000; i++) {
      this.state.generatedTabs.push(new TabData(i, this.generateRandomArray(1000)))
    }

    this.setState({ generatedTabs: tmp })
  }

  ut = () => {
    this.setState({ tabs: this.state.generatedTabs })
  }

  strlrt = () => {
    console.log(this.state.tabs)
    let tmpTabs = this.state.tabs.slice()
    
    for(let i = 0; i < 10000; i++) {
      let a = Math.floor(Math.random() * tmpTabs.length)
      let aa = Math.floor(Math.random() * tmpTabs[a].data.length)
      let b = Math.floor(Math.random() * tmpTabs.length)
      let bb = Math.floor(Math.random() * tmpTabs[b].data.length)

      let tmp = tmpTabs[a].data[aa]
      tmpTabs[a].data[aa] = tmpTabs[b].data[bb]
      tmpTabs[b].data[bb] = tmp
    }

    this.setState({ tabs: tmpTabs })
  }

  shtrlrt = () => {
    let tmpTabs = this.state.tabs.slice()

    for(let i = 0; i < 100000; i++) {
      let a = Math.floor(Math.random() * tmpTabs.length)
      let aa = Math.floor(Math.random() * tmpTabs[a].data.length)
      let b = Math.floor(Math.random() * tmpTabs.length)
      let bb = Math.floor(Math.random() * tmpTabs[b].data.length)

      let tmp = tmpTabs[a].data[aa]
      tmpTabs[a].data[aa] = tmpTabs[b].data[bb]
      tmpTabs[b].data[bb] = tmp
    }

    this.setState({ tabs: tmpTabs })
  }




  //TextBoxes

  cttb = () => {
    let tmp = []

    for(let i = 0; i < 1000; i++) {
      tmp.push(new TextBoxData(i, this.generateRandomWords()))
    }

    this.setState({ generatedTextBoxes: tmp })
  }

  ctttb = () => {
    let tmp = []

    for(let i = 0; i < 10000; i++) {
      tmp.push(new TextBoxData(i, this.generateRandomWords()))
    }

    this.setState({ generatedTextBoxes: tmp })
  }

  utb = () => {
    this.setState({ textBoxes: this.state.generatedTextBoxes })
  }

  chthtb = () => {
    let tmp = this.state.textBoxes.slice()

    for(let i = 0; i < 100; i++) {
      let index = Math.floor(Math.random() * tmp.length)
      tmp[index] = new TextBoxData(tmp[index].id, this.generateRandomWords())
    }

    this.setState({ textBoxes: tmp })
  }

  chtttb = () => {
    let tmp = this.state.textBoxes.slice()

    for(let i = 0; i < 1000; i++) {
      let index = Math.floor(Math.random() * tmp.length)
      tmp[index] = new TextBoxData(tmp[index].id, this.generateRandomWords())
    }

    this.setState({ textBoxes: tmp })
  }

  chttttb = () => {
    let tmp = this.state.textBoxes.slice()

    for(let i = 0; i < 10000; i++) {
      let index = Math.floor(Math.random() * tmp.length)
      tmp[index] = new TextBoxData(tmp[index].id, this.generateRandomWords())
    }

    this.setState({ textBoxes: tmp })
  }

  rtb = () => {
    let tmp = this.state.textBoxes.slice()
    tmp.shift()
    this.setState({ textBoxes: tmp })
  }

  rrtb = () => {
    let tmp = this.state.textBoxes.slice()
    tmp.splice(Math.floor(Math.random() * this.state.textBoxes.length), 1)
    this.setState({ textBoxes: tmp })
  }

  rhrtb = () => {
    let indices = []

    for(let i = 0; i < 100; i++) {
      indices.push(Math.floor(Math.random() * this.state.generatedTextBoxes.length))
    }

    this.setState({ generatedTextBoxes: this.state.textBoxes.filter((v, i, a) => { return !indices.includes(i) }) })
  }

  rtrtb = () => {
    let indices = []

    for(let i = 0; i < 1000; i++) {
      indices.push(Math.floor(Math.random() * this.state.generatedTextBoxes.length))
    }

    this.setState({ generatedTextBoxes: this.state.textBoxes.filter((v, i, a) => { return !indices.includes(i) }) })
  }
  
  showTab(index) {
    console.log(index)
    this.activeTab = index
  }

  swap(arr, indexA, indexB) {
    let tmp = arr[indexA]
    arr[indexA] = arr[indexB]
    arr[indexB] = tmp
  }

  generateRandomArray(size) {
    let result = []

    for(let i = 0; i < size; i++) {
      result.push(new LabelData(i, this.generateRandomWords()))
    }

    return result
  }

  generateRandomWords = () => {
    return colors[Math.floor(Math.random() * colors.length)] + " " + adjectives[Math.floor(Math.random() * adjectives.length)] + " " + nouns[Math.floor(Math.random() * nouns.length)]
  }

  render() {
    return (
      <div id="buttons">
        Init-Label:
        <button id="ctbl" onClick={this.ctbl} type="button">Create 1000 bound labels</button>
        <button id="cttbl" onClick={this.cttbl} type="button">Create 10000 bound labels</button>
        <br />
        Init-Textboxes:
        <button id="cttb" onClick={this.cttb} type="button">Create 1000 text boxes</button>
        <button id="ctttb" onClick={this.ctttb} type="button">Create 10000 text boxes</button>
        <br />
        Init-Tabs:
        <button id="cht" onClick={this.cht} type="button">Create 100 tabs with 1000 entries</button>
        <button id="ctt" onClick={this.ctt} type="button">Create 1000 tabs with 1000 entries</button>
        <button id="cttt" onClick={this.cttt} type="button">Create 10000 tabs with 1000 entries</button>
        <br />
        Execute-Label:
        <button id="ubl" onClick={this.ubl} type="button">Update bound labels</button>
        <button id="sbl" onClick={this.sbl} type="button">Swap two labels</button>
        <button id="srbl" onClick={this.srbl} type="button">Swap two random labels</button>
        <button id="strbl" onClick={this.strbl} type="button">Swap 1000 random labels</button>
        <br />
        <button id="rbl" onClick={this.rbl} type="button">Remove a label</button>
        <button id="rrbl" onClick={this.rrbl} type="button">Remove a random label</button>
        <button id="rtrbl" onClick={this.rtrbl} type="button">Remove 1000 random labels</button>
        <br />
        Execute-Tabs:
        <button id="ut" onClick={this.ut} type="button">Update tabs</button>
        <br />
        <button id="strlrt" onClick={this.strlrt} type="button">Switch 10000 random labels from random tabs</button>
        <button id="shtrlrt" onClick={this.shtrlrt} type="button">Switch 100000 random labels from random tabs</button>
        <br />
        Execute-Textboxes:
        <button id="utb" onClick={this.utb} type="button">Update textboxes</button>
        <button id="chthtb" onClick={this.chthtb} type="button">Change text 100 textboxes</button>
        <button id="chtttb" onClick={this.chtttb} type="button">Change text 1000 textboxes</button>
        <button id="chttttb" onClick={this.chttttb} type="button">Change text 10000 textboxes</button>
        <br />
        <button id="rtb" onClick={this.rtb} type="button">Remove textbox</button>
        <button id="rrtb" onClick={this.rrtb} type="button">Remove random textbox</button>
        <button id="rhrtb" onClick={this.rhrtb} type="button">Remove 100 random textboxes</button>
        <button id="rtrtb" onClick={this.rtrtb} type="button">Remove 1000 random textboxes</button>
        <br />
        Clear:
        <button id="clear" onClick={this.clear} type="button">Clear</button>
        
        <div id="labels">
          {
            this.state.labels.map((v) => <Label key={Object.uid(v)} id={"bl-" + v.id} labelId={v.id}>{v.name}</Label>)
          }
        </div>
        <div id="textBoxes">
          {
            this.state.textBoxes.map((v) => <TextBox key={Object.uid(v)} textBox={v}></TextBox>)
          }
        </div>
        <div id="tabs">
          {
            <Tabs tabData={this.state.tabs}></Tabs>
          }
        </div>
      
        {/* <div id="labels">
          <app-label *ngFor="let label of labels;trackBy: trackById" id="bl-{{label.id}}" labelId="{{label.id}}">{{label.name}}</app-label>
        </div>
        <div id="textBoxes">
          <app-text-box *ngFor="let textbox of textBoxes;let i=index;trackBy: trackById" [(tb)]="textBoxes[i]"></app-text-box>
        </div>
        <div id="tabs">
          <app-tabs [tabsData]="tabs"></app-tabs>
        </div> */}
      </div>
    );
  }
}

export default App;