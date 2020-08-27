# se-list-item

| Slot   | Description                                                                                       |
| ------ | ------------------------------------------------------------------------------------------------- |
| `icon` | Another way to configure your own icon instead of using the icon property (used to load svg icon) |

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                                                                                                        | Type                                                                                           | Default     |
| ------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ----------- |
| `description` | `description` | Defines the description of the item, placed under its title.                                                                       | `string`                                                                                       | `undefined` |
| `href`        | `href`        | Determines if se-item configures an `a` tag with an `href` attibute. Default when href is blank configures as a `button` tag.      | `string`                                                                                       | `undefined` |
| `icon`        | `icon`        | Places an icon on the left side of the item list.                                                                                  | `string`                                                                                       | `undefined` |
| `iconColor`   | `icon-color`  | Optional property to define the color of the icon. The default color will be inherited from it's parent.                           | `"alternative" \| "error" \| "primary" \| "secondary" \| "standard" \| "success" \| "warning"` | `undefined` |
| `indentation` | `indentation` | Defines the group indentation to add paddings to the list item (used with multiple list groups).                                   | `number`                                                                                       | `0`         |
| `item`        | `item`        | Defines the title of the item.                                                                                                     | `string`                                                                                       | `undefined` |
| `option`      | `option`      | Defines the style of the list. The default setting is `classic`, and the style will be handled and modified by the parent element. | `"classic" \| "dropdown" \| "headline" \| "nav" \| "treeview"`                                 | `undefined` |
| `selected`    | `selected`    | Defines if the list element should be selected or not.                                                                             | `boolean`                                                                                      | `undefined` |


## Events

| Event               | Description                                                                           | Type                |
| ------------------- | ------------------------------------------------------------------------------------- | ------------------- |
| `didSelectedChange` | Event emitted to notify the list-group component that the selected state has changed. | `CustomEvent<void>` |


## Dependencies

### Used by

 - [se-sidemenu](../sidemenu)

### Depends on

- [se-icon](../icon)

### Graph
```mermaid
graph TD;
  se-list-item --> se-icon
  se-sidemenu --> se-list-item
  style se-list-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
