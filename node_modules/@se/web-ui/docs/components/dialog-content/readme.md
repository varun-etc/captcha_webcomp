# se-dialog-content

| Slot   | Description                                                                                       |
| ------ | ------------------------------------------------------------------------------------------------- |
| `icon` | Another way to configure your own icon instead of using the icon property (used to load svg icon) |

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                                              | Type                                                      | Default     |
| ----------- | ------------ | ------------------------------------------------------------------------ | --------------------------------------------------------- | ----------- |
| `icon`      | `icon`       | Indicates an icon you want to display in your dialog.                    | `string`                                                  | `undefined` |
| `iconColor` | `icon-color` | Indicates what color schema you want to render in your dialog.           | `"alternative" \| "primary" \| "secondary" \| "standard"` | `undefined` |
| `option`    | `option`     | When set to `fill`, the content will fill the whole space of the dialog. | `"fill"`                                                  | `undefined` |


## Dependencies

### Depends on

- [se-icon](../icon)

### Graph
```mermaid
graph TD;
  se-dialog-content --> se-icon
  style se-dialog-content fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
