# se-block



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                                                                                                                                                                                                                                                                                                                                          | Type                                                   | Default         |
| -------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | --------------- |
| `clickable`    | `clickable`     | Defines the se-block item's ability to appear clickable / selectable. Default setting is `false`, resulting in no hover effects on the block level. `true` adds a hover effect on the se-block. The cursor will change to `pointer`, a box-shadow will appear, and a `$se-life-green` bar will appear at the top of the block.                                                                       | `boolean`                                              | `false`         |
| `clickableBar` | `clickable-bar` | Defines clickable se-block item's bar on hover. Default setting is `false`. `true` renders a `$se-life-green` colored bar on a hover.                                                                                                                                                                                                                                                                | `boolean`                                              | `false`         |
| `color`        | `color`         | Optional property that defines the background color of the block. Default setting is `alternative`, rendering the "alternative" theme background. `none` has no background. `standard` renders the "standard" theme background.                                                                                                                                                                      | `"alternative" \| "none" \| "standard"`                | `"alternative"` |
| `corner`       | `corner`        | Defines the se-block corner radius. Default setting is `small`, rendering a rounded, 4px rounded corner. `none` is for a sharp, 90 degree corner. `nano` is for a slightly rounded, 2px rounded corner.                                                                                                                                                                                              | `"nano" \| "none" \| "small"`                          | `undefined`     |
| `display`      | `display`       | Defines how to display the element. `flex` is the default display. `block` helps in specific cases. Make sure you know what you are doing.                                                                                                                                                                                                                                                           | `"block" \| "flex" \| "grid"`                          | `"flex"`        |
| `divider`      | `divider`       | Defines whether or not a divider will be applied to the se-block header and footer. `true` will add a divider to the se-block-header and se-block-footer, if they are present. `false` will remove dividers on the se-block header and se-block-footer, if they are present.                                                                                                                         | `boolean`                                              | `false`         |
| `enlarged`     | `enlarged`      | When the display is set to `grid`, this property determines if the block should have double the width and height of a standard grid item. Default setting is `false`, spanning 1 row and 1 column (1/1). `true` spans 2 rows and 2 columns (2/2). `vertical` spans 2 rows (2/1). `horizontal` spans 2 columns (1/2).                                                                                 | `"horizontal" \| "vertical" \| boolean`                | `false`         |
| `height`       | `height`        | Defines the specific height of a block.  Useful to create easy layouts under `se-container` which uses `flex` by default.                                                                                                                                                                                                                                                                            | `string`                                               | `undefined`     |
| `loading`      | `loading`       | Displays the loading icon if set to `true`.  Default setting is `false`.                                                                                                                                                                                                                                                                                                                             | `boolean`                                              | `false`         |
| `margin`       | `margin`        | Defines the spacing around the outside edge of a block. Default `none` is 0px. `small` is 4px. `medium` is 8px. `large` is 16px. `xlarge` is 32px.                                                                                                                                                                                                                                                   | `"large" \| "medium" \| "none" \| "small" \| "xlarge"` | `undefined`     |
| `option`       | `option`        | Defines the visual appearance of a block. Default setting is `basic`, which will remove any spacing. `widget` will create a flat widget look and feel with a `medium` margin around it. `card` will create a card look and feel with rounded corners, and with a `large` margin around it. Pending deprecation - `card-old` follows a prior design pattern with a box-shadow and will be deprecated. | `"basic" \| "card" \| "card-old" \| "widget"`          | `"basic"`       |
| `outline`      | `outline`       | Defines the se-block outline. Default setting is `false`. Setting this property to `true` will add a 1px border.                                                                                                                                                                                                                                                                                     | `boolean`                                              | `false`         |
| `outlineColor` | `outline-color` | Defines the se-block outline color. Default setting is `standard`, which renders the outline with the `$se-super-light-grey` color. `primary` defines the outline color as `$se-life-green`, used primarily for technical applications when the block is selected. `secondary` defines the outline color as `$se-sky-blue`.                                                                          | `"primary" \| "secondary" \| "standard"`               | `"standard"`    |
| `width`        | `width`         | Defines the specific width of a block.  Useful to create easy layouts under `se-container` which uses `flex` by default.                                                                                                                                                                                                                                                                             | `string`                                               | `undefined`     |


## Dependencies

### Used by

 - [se-sidemenu](../sidemenu)

### Depends on

- [se-loading](../loading)

### Graph
```mermaid
graph TD;
  se-block --> se-loading
  se-sidemenu --> se-block
  style se-block fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
