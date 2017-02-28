const random = require('./')

for(var i = 0; i < 32; i ++) {
    console.log(random(i).to('hex'))
}
