import { Label } from './label'

export class Tab {
  public id: number
  public data: Array<Label>

  constructor(id: number, data: Array<Label>) {
    this.id = id
    this.data = data
    this.data.forEach(c => {
      c.tabId = id
    })
  }
}
