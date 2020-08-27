# se-stepper



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                                                                                                                                                                                                                                            | Type                         | Default     |
| -------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------- |
| `color`  | `color`   | Sets the background color of your stepper. The default setting is `primary`, implementing a green background for the stepper visual items. The `alternative` setting implements a white background for the stepper visual items.  This setting is best used against a gray background. | `"alternative" \| "primary"` | `'primary'` |
| `linear` | `linear`  | Defines if the stepper items must be completed sequentially. The default setting is `true`, each stepper item must be validated before advancing to the next step. `false` allows each step to be selected in any order.                                                               | `boolean`                    | `true`      |


## Methods

### `next(validate: boolean) => Promise<void>`

Call the `next` method to navigate to the next step from the step that is currently selected.
This will not work in linear mode if the next step is not validated.

#### Returns

Type: `Promise<void>`



### `previous() => Promise<void>`

Call the `previous` method to navigate to the previous step from the step that is currently selected.

#### Returns

Type: `Promise<void>`



### `reset(step?: number) => Promise<void>`

Call the `reset` method to reset the stepper to the indicated step.  This also invalidates any validated steps.
It no step parameter is provided, it will reset to the first stepper item.

#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [se-divider](../divider)

### Graph
```mermaid
graph TD;
  se-stepper --> se-divider
  style se-stepper fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
