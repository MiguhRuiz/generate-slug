function toSlug(s) {
    const c = s.split(" ").join("-")
    return c
  }

module.exports = toSlug
