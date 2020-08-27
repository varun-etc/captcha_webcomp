# se-icon

| Slot | Description                                                |
| ---- | ---------------------------------------------------------- |
| none | used to load svg icon instead of using the icon string tag |

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                                                                               | Type                                                                                           | Default     |
| ---------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ----------- |
| `color`    | `color`    | Optional property that defines the background color of the button. The default color will be inherited from its parent.                                                                                   | `"alternative" \| "error" \| "primary" \| "secondary" \| "standard" \| "success" \| "warning"` | `undefined` |
| `disabled` | `disabled` | Optional property that defines if the button is disabled.  Set to `false` by default.                                                                                                                     | `boolean`                                                                                      | `false`     |
| `option`   | `option`   | Optional property to define if the icon should act as a button (clickable).                                                                                                                               | `"button"`                                                                                     | `undefined` |
| `size`     | `size`     | Defines the size of an icon. `nano` sets the size to 14px. `small` sets the size to 24px.(default setting) `medium` sets the size to 32px. `large` sets the size to 52px. `xlarge` sets the size to 62px. | `"large" \| "medium" \| "nano" \| "small" \| "xlarge"`                                         | `undefined` |


## Dependencies

### Used by

 - [se-banner](../banner)
 - [se-breadcrumb-item](../breadcrumb-item)
 - [se-button](../button)
 - [se-chip](../chip)
 - [se-dialog-content](../dialog-content)
 - [se-fab](../fab)
 - [se-fab-item](../fab-item)
 - [se-header](../header)
 - [se-list-group](../list-group)
 - [se-list-item](../list-item)
 - [se-sidemenu](../sidemenu)
 - [se-snackbar](../snackbar)
 - [se-table-item-header](../table-item-header)
 - [se-tooltip-content](../tooltip-content)
 - [se-tooltip-header](../tooltip-header)

### Graph
```mermaid
graph TD;
  se-banner --> se-icon
  se-breadcrumb-item --> se-icon
  se-button --> se-icon
  se-chip --> se-icon
  se-dialog-content --> se-icon
  se-fab --> se-icon
  se-fab-item --> se-icon
  se-header --> se-icon
  se-list-group --> se-icon
  se-list-item --> se-icon
  se-sidemenu --> se-icon
  se-snackbar --> se-icon
  se-table-item-header --> se-icon
  se-tooltip-content --> se-icon
  se-tooltip-header --> se-icon
  style se-icon fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
