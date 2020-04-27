export class Label {
  public id: number
  public name: string
  public tabId: number

  constructor(id: number, name: string, tabId: number = 0) {
    this.id = id
    this.name = name
    this.tabId = tabId
  }
}
