# <center>devsgnr-carousel</center>

<center>A Simple Carousel built using React, Typescript and styled-components</center>

<center>
![npm](https://img.shields.io/npm/v/devsgnr-carousel)
![npm bundle size](https://img.shields.io/bundlephobia/min/devsgnr-carousel)
![npm](https://img.shields.io/npm/dw/devsgnr-carousel)
![NPM](https://img.shields.io/npm/l/devsgnr-carousel)
![GitHub watchers](https://img.shields.io/github/watchers/devsgnr/carousel?style=social)
</center>

---

## Table of Content

1. [Install](#install)
2. [Usage](#usage)
3. [Demos](#demos)
4. [Props](#props)

## Install {#install}

#### npm

`npm install devsgnr-carousel`

#### yarn

`yarn add devsgnr-carousel`

---

## Usage {#usage}

#### Example with default props

Customize according to your needs, check [Props](#props).

```tsx
...
import Carousel from "devsgnr-carousel

const App = () => {
  const pictures: string[] = [...];

  return (
    <div className="App">
      <Carousel
        borderRadius={10}
        timeout={5000}
        autoPlay={true}
        pictures={pictures}
        height="400px"
        showThumb={false}
        thumbnailOutlineColor="#000"
        thumbnailOutlineStyle="solid"
        thumbnailOutlineOffset={1}
        thumbnailOutlineThickness={2}
        showButton={true}
        showIndicator={true}
      />
    </div>
  );
};

export default App;
```

##### Click the link below for Demos {#demos}

[TypeScript Demo here](https://codesandbox.io/s/devsgnr-carousel-4lm2d)

---

## Props {#props}

| props                     | values                                                                                                |
| ------------------------- | ----------------------------------------------------------------------------------------------------- |
| autoPlay                  | `boolean`: `optional?` default `true`. set the carousel to automatically play or not                  |
| timeout                   | `number`: `optional?` default `5000`. set the duration for each picture                               |
| height                    | `string`: `optional?` default `"100%"`. set the height of the carousel                                |
| pictures                  | `string[]`: `required` this is the pictures address                                                   |
| showThumbs                | `boolean`: `optional?` default `false`. when set to `true` shows the image thumbnails                 |
| showIndicators            | `boolean`: `optional?` default `true`. when set to `false` hides the indicators                       |
| showButtons               | `boolean`: `optional?` default: `true`. when set to `false` hides buttons                             |
| thumbnailOutlineColor     | `string`: `optional?` default `#000`. accepts `hsla`, `rgba`, `rgb`, and `hex` values                 |
| thumbnailOutlineThickness | `number`: `optional?` default `2`. sets the thickness of the outline of the thumbnails                |
| thumbnailOutlineStyle     | `string`: `optional?` default `"solid"`. accepts `"solid"`, `"dashed"`, `"dotted"` as values          |
| thumbnailOutlineOffset    | `number`: `optional?` default `1`. set the offset of the outline from the thumbnail, ie. how far away |
| borderRadius              | `number`: `optional?` default `10`. set the `border-radius` of the carousel                           |

---

Package bundled using Rollup.js
