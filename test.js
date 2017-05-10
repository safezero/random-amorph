const random = require('./')
const Amorph = require('amorph')
const amorphBuffer = require ('amorph-buffer')
const amorphBn = require ('amorph-bn')

Amorph.loadPlugin(amorphBuffer)
Amorph.loadPlugin(amorphBn)
Amorph.ready()

for(var i = 0; i < 32; i ++) {
    console.log(random(i).to('hex'))
}
