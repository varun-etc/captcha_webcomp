# se-dialog



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                                                                                                                                        | Type                                       | Default     |
| ------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------ | ----------- |
| `canBackdrop` | `can-backdrop` | Option to enable clicking on the dialog's backdrop. Will automatically close the modal.  Default setting is `true`.                                                | `boolean`                                  | `true`      |
| `color`       | `color`        | Defines the color of the dialog header. `alternative`: Alternative background with primary color for the text `primary`: Primary color schema and default setting. | `"alternative" \| "primary"`               | `'primary'` |
| `open`        | `open`         | Indicates whether or not the dialog is open or closed.  Default setting is `false`.                                                                                | `boolean`                                  | `false`     |
| `size`        | `size`         | Defines the size of the modal. `small`: used in alerts and messages `medium`: default setting, used by other apps `fill`: takes the full space of the screen       | `"fill" \| "large" \| "medium" \| "small"` | `"medium"`  |


## Events

| Event      | Description                                                                                                                                  | Type               |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `backdrop` | Send data to the parent component when the backdrop is clicked.                                                                              | `CustomEvent<any>` |
| `didClose` | Send data to the parent component when clicking an element within the dialog to close it. The modal can then be safely removed from the DOM. | `CustomEvent<any>` |


## Methods

### `backdropClicked() => Promise<void>`

Emit the `backdrop` event from the dialog's parent component if `canBackdrop=true`. When the event is emitted, the dialog is automatically closed.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
