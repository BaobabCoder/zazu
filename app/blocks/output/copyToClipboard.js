import cuid from 'cuid'
import electron from 'electron'

import Template from '../../lib/template'

export default class CopyToClipboard {
  constructor (data) {
    this.id = data && data.id || cuid()
    this.clipboard = electron.clipboard
    this.text = data.text
  }

  call (state) {
    this.clipboard.writeText(Template.compile(this.text, {
      value: String(state.value),
    }))
    state.next()
  }
}