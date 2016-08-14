'use strict'
class Slug {
  toSlug(s) {
    const c = s.split(" ").join("-")
    return c
  }
}

module.exports = Slug
