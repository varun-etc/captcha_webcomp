# se-checkbox



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                                                                                                                                                                                                                                                                                                      | Type                                    | Default      |
| ------------ | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | ------------ |
| `background` | `background` | Defines the color schema of the checkbox when the option is set to `onoff`. The default value is `standard`.                                                                                                                                                                                                     | `"alternative" \| "standard"`           | `'standard'` |
| `color`      | `color`      | Defines the color of the checkbox for when the option is set to `checkbox` or `switch`. The default value is `success`, rendering a green color. The `secondary` setting renders a blue color.                                                                                                                   | `"primary" \| "secondary" \| "success"` | `'success'`  |
| `disabled`   | `disabled`   | Optional property that defines if the checkbox is disabled.  Set to `false` by default.                                                                                                                                                                                                                          | `boolean`                               | `false`      |
| `header`     | `header`     | Reduces the visual height of the checkbox when the option is set to `onoff`. Useful if the on/off checkbox is within a header element.                                                                                                                                                                           | `boolean`                               | `false`      |
| `label`      | `label`      | The label of the checkbox that will be attached to the box.                                                                                                                                                                                                                                                      | `string`                                | `undefined`  |
| `labelPos`   | `label-pos`  | Sets the position of the label for your checkbox component. The default setting is `right` when the option is set to `checkbox`. The default setting is `left` when the option is set to `switch`.                                                                                                               | `"left" \| "right"`                     | `undefined`  |
| `option`     | `option`     | Determines the visual appearance of the component. `checkbox` is the default option, which will render the component like a standard HTML checkbox. `switch` renders the component like a toggle switch. `onoff` renders the component like an "on/off" switch, with a red "off" button and a green "on" button. | `"checkbox" \| "onoff" \| "switch"`     | `'checkbox'` |
| `required`   | `required`   | Adds a red asterisk if the checkbox is required when used in a form field.  Default is `false`.                                                                                                                                                                                                                  | `boolean`                               | `false`      |
| `selected`   | `selected`   | The "checked" state of the checkbox, `false` by default.                                                                                                                                                                                                                                                         | `boolean`                               | `false`      |
| `textOff`    | `text-off`   | Defines the text the user will see for the "off" or "inactive" part of the checkbox when option is set to `onoff`.  Set to `OFF` by default.                                                                                                                                                                     | `string`                                | `'OFF'`      |
| `textOn`     | `text-on`    | Defines the text the user will see for the "on" or "active" part of the checkbox when option is set to `onoff`.  Set to `ON` by default.                                                                                                                                                                         | `string`                                | `'ON'`       |
| `value`      | `value`      | The value you want to pass to the parent component when the checkbox is checked.                                                                                                                                                                                                                                 | `string`                                | `undefined`  |


## Events

| Event       | Description                                                                    | Type               |
| ----------- | ------------------------------------------------------------------------------ | ------------------ |
| `didChange` | Send the checkbox value to the parent component when clicking on the checkbox. | `CustomEvent<any>` |


## Methods

### `setRequired() => Promise<void>`

Sets the required property on the checkbox element.  Used when the checkbox is within a form field.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
