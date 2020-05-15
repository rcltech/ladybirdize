# ladybird

> NPM package for rcltech/ladybird

[![NPM](https://img.shields.io/npm/v/ladybird.svg)](https://www.npmjs.com/package/ladybird) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save ladybird
```

## Usage

```tsx
import React, { Component } from 'react'

import LadybirdProvider from 'ladybird'
import 'ladybird/dist/index.css'

const Index = () => {
  return (
    <LadybirdProvider authURL={"<PHOENIX_OAUTH>"} apiUrl={"<PHOENIX_GRAPHQL_URL"}>
      <App />
    </LadybirdProvider>
  )
}
```
