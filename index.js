const crypto = require('crypto')
const arguguard = require('arguguard')

module.exports = function random(Amorph, length) {
  arguguard('random', ['Function', 'number'], arguments)
  return new Amorph(crypto.randomBytes(length), 'buffer')
}
