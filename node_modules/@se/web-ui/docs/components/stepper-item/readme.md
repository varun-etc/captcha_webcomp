# se-stepper-item



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                                                                                                                                                                                            | Type      | Default     |
| ----------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `active`    | `active`    | Indicates the content for the currently selected step in the stepper.                                                                                                                                                  | `boolean` | `undefined` |
| `label`     | `label`     | Indicates the label for your stepper item.                                                                                                                                                                             | `string`  | `undefined` |
| `validated` | `validated` | Indicates whether a required item's data has been validated.  Useful if using a form field. When the stepper component is set to linear mode, all stepper items will need to be validated before advancing the stpper. | `boolean` | `undefined` |


## Events

| Event         | Description                                                                                                                            | Type               |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `didValidate` | Event to send to the parent component when a stepper item's data is validated. The boolean validated property is passed to the parent. | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
