# se-table-item-header



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                                                                                                                                                                                                                                                                            | Type                        | Default     |
| ----------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------- | ----------- |
| `clickable` | `clickable` | Optional property defines the tag type within the `se-table-item`. Default value `false` defines the tag type as `div`. `true` defines the tag type as a `button`.                                                                                                                                     | `boolean`                   | `undefined` |
| `flex`      | `flex`      | Defines the specific flex-basis of a block.                                                                                                                                                                                                                                                            | `string`                    | `undefined` |
| `minWidth`  | `min-width` | Defines the  min-width of a block to insure that a scroll appear if too many column are in the table. Only necessary if using flex.                                                                                                                                                                    | `string`                    | `undefined` |
| `sort`      | `sort`      | Optional property that provides the arrow icon based on which string is provided, and also causes the `clickable` property to `true`. `asc` defines the icon as an upwards arrow in black. `desc` defines the icon as a downwards arrow in black. `none` defines the icon as an upwards arrow in grey. | `"asc" \| "desc" \| "none"` | `undefined` |
| `width`     | `width`     | Defines the specific width of a block, for items that should not be flexible.                                                                                                                                                                                                                          | `string`                    | `undefined` |


## Dependencies

### Depends on

- [se-icon](../icon)

### Graph
```mermaid
graph TD;
  se-table-item-header --> se-icon
  style se-table-item-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
