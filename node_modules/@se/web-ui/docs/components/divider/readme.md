# se-divider



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                                                                                                                                        | Type                                    | Default        |
| -------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | -------------- |
| `color`  | `color`   | Indicates the color schema of your divider line. Default setting is `standard`, rendering a light gray colored line. The `alternative` property sets a white colored divider line. | `"alternative" \| "standard"`           | `"standard"`   |
| `option` | `option`  | Indicates the visual appearance of your divider line.  Default setting is `horizontal`.                                                                                            | `"horizontal" \| "inset" \| "vertical"` | `"horizontal"` |


## Dependencies

### Used by

 - [se-block-footer](../block-footer)
 - [se-block-header](../block-header)
 - [se-sidemenu](../sidemenu)
 - [se-stepper](../stepper)

### Graph
```mermaid
graph TD;
  se-block-footer --> se-divider
  se-block-header --> se-divider
  se-sidemenu --> se-divider
  se-stepper --> se-divider
  style se-divider fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
