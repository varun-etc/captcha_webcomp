# se-radio



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description                                                                                                                                 | Type                       | Default     |
| ---------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ----------- |
| `color`    | `color`     | Defines the color of the checkbox. The default setting is `primary`, rendering a green color. The `secondary` setting renders a blue color. | `"primary" \| "secondary"` | `'primary'` |
| `disabled` | `disabled`  | Optional property that defines if the checkbox is disabled.  Set to `false` by default.                                                     | `boolean`                  | `false`     |
| `label`    | `label`     | Defines the label that will display next to the radio button.                                                                               | `string`                   | `undefined` |
| `labelPos` | `label-pos` | Sets the position of the label for your checkbox component. The default setting is `right`.                                                 | `"left" \| "right"`        | `'right'`   |
| `required` | `required`  | Adds a red asterisk if the radio button is required when used in a form field.  Default setting is `false`.                                 | `boolean`                  | `false`     |
| `selected` | `selected`  | Determines whether or not the checkbox is checked when you initialize it.  The default setting is `false`.  Checked if set to `true`.       | `boolean`                  | `false`     |
| `value`    | `value`     | Defines the value you want to pass to the parent component when the radio button is checked.                                                | `string`                   | `undefined` |


## Events

| Event      | Description                                                                    | Type               |
| ---------- | ------------------------------------------------------------------------------ | ------------------ |
| `didCheck` | Send the checkbox value to the parent component when clicking on the checkbox. | `CustomEvent<any>` |


## Methods

### `setRequired() => Promise<void>`

Sets the required property on the radio button element.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
