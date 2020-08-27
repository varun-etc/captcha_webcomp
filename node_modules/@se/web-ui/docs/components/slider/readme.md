# se-slider



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                   | Type      | Default     |
| ---------- | ---------- | --------------------------------------------------------------------------------------------- | --------- | ----------- |
| `disabled` | `disabled` | Indicates if your slider is disabled. The default setting is `false`.                         | `boolean` | `false`     |
| `label`    | `label`    | The label of the slider that will be attached to the input.                                   | `string`  | `undefined` |
| `max`      | `max`      | Indicates the maximum value of your slider. The default value is `100`.                       | `number`  | `100`       |
| `min`      | `min`      | Indicates the minimum value of your slider. The default value is `0`.                         | `number`  | `0`         |
| `value`    | `value`    | Indicates the initial value of your slider component when it loads. The default value is `0`. | `any`     | `0`         |


## Events

| Event       | Description                                     | Type               |
| ----------- | ----------------------------------------------- | ------------------ |
| `didChange` | Event emitted when the slider has been changed. | `CustomEvent<any>` |


## Methods

### `setDisabled(val: boolean) => Promise<void>`

Sets the disabled property for slider component.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
