class Label {
  id
  name
  tabId

  constructor(id, name, tabId = 0) {
    this.id = id
    this.name = name
    this.tabId = tabId
  }
}

class Tab {
  id
  data

  constructor(id, data) {
    this.id = id
    this.data = data
    this.data.forEach(c => {
      c.tabId = id
    })
  }
}

class TextBox {
  id
  text

  constructor(id, text) {
    this.id = id
    this.text = text
  }
}
