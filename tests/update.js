const oleoo = require('../src/index.js')
const assert = require('assert')
const path = require('path')
const fs  = require('fs')

const names = fs.readFileSync(path.join(__dirname, 'fixtures', 'releases.txt'), 'utf-8').split(/\r?\n/)
const data = {}
let name

while(name = names.shift()) {
  const release = oleoo.parse(name)
  data[name] = release

  const clone = oleoo.guess(name)
  data[name].guess = {}

  if (!data[name].year) {
    data[name].guess.year = clone.year
  }

  if (!data[name].resolution) {
    data[name].guess.resolution = clone.resolution
  }
}

fs.writeFileSync(path.join(__dirname, 'fixtures', 'releases.json'), JSON.stringify(data, null, 2))
