'use strict'
const test = require('ava')
const generateSlug = require('..')

test('Should create an slug from a string', async t => {

  const slug = new generateSlug()

  const sentence = "Today is a beautiful day"
  const e = "Today-is-a-beautiful-day"
  const s = slug.toSlug(sentence)
  t.deepEqual(s, e)
})
