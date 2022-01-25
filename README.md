# devsgnr-carousel

A Simple React.js Carousel built using styled-components

## Install

#### npm

`npm install devsgnr-carousel`

#### yarn

`yarn add devsgnr-carousel`

## Props

| props                     | values                                                                                                |
| ------------------------- | ----------------------------------------------------------------------------------------------------- |
| autoPlay                  | `boolean`: `optional?` default `true`, set the carousel to automatically play or not                  |
| timeout                   | `number`: `optional?` default `5000`, set the duration for each picture                               |
| height                    | `string`: `optional?` default `"100%"`, set the height of the carousel                                |
| pictures                  | `string[]`: `required` this is the pictures address                                                   |
| showThumbs                | `boolean`: `optional?` default `false`, when set to `true` shows the image thumbnails                 |
| showIndicators            | `boolean`: `optional?` default `true`, when set to `false` hides the indicators                       |
| showButtons               | `boolean`: `optional?` default: `true`, when set to `false` hides buttons                             |
| thumbnailOutlineColor     | `string`: `optional?` default `#000`, accepts `hsla`, `rgba`, `rgb`, and `hex` values                 |
| thumbnailOutlineThickness | `number`: `optional?` default `2`, sets the thickness of the outline of the thumbnails                |
| thumbnailOutlineStyle     | `string`: `optional?` default `"solid"`, accepts `"solid"`, `"dashed"`, `"dotted"` as values          |
| thumbnailOutlineOffset    | `number`: `optional?` default `1`, set the offset of the outline from the thumbnail, ie. how far away |
| borderRadius              | `number`: `optional?` default `10`, set the `border-radius` of the carousel                           |
| thumbnailOutlineOffset    | `number`: `optional?` default `1`, set the offset of the outline from the thumbnail, ie. how far away |

Package bundled using Rollup.js
