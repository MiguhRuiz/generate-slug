# generate-slug

This module generates a slug from a string in order to delete spaces.

**Build Status:** ![](https://circleci.com/gh/MiguhRuiz/generate-slug.png)

## Table of Concepts

- [generate-slug](#generate-slug)
	- [Table of Concepts](#table-of-concepts)
	- [Installation](#installation)
	- [Ussage](#ussage)
	- [License MIT](#license-mit)

## Installation

To download the module simply download it via NPM. NPM is always going to have the latest stable version of it. Be free to add any flag after the command such as `--save` or `--save-dev`

```bash

$ npm install generate-slug

```

## Ussage

```js
import slug from 'generate-slug'
const string = "This is an awesome string that I want to make an slug"
const s = slug(string) // 'This-is-an-awesome-string-that-I-want-to-make-an-slug'
```

## License MIT

Copyright (c) 2016 - Miguel Ruiz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
