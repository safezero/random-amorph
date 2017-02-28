const Amorph = require('amorph')
const crypto = require('crypto')
const arguguard = require('arguguard')

const amorphBufferPlugin = require('amorph-buffer')
Amorph.loadPlugin(amorphBufferPlugin)
Amorph.ready()

module.exports = function random(length) {
  arguguard('random', ['number'], arguments)
  return new Amorph(crypto.randomBytes(length), 'buffer')
}
