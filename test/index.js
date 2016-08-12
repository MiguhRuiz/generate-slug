'use strict'
const test = require('ava')
const slug = require('..')

test('Should create an slug from a string', async t => {
  const sentence = "Today is a beautiful day"
  const e = "Today-is-a-beautiful-day"
  const s = slug(sentence)
  t.deepEqual(s, e)
})
