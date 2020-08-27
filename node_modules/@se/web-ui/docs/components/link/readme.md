# se-link


<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                                                                                                                                               | Type                       | Default      |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------ |
| `disabled` | `disabled` | Determines whether or not the link is disabled.                                                                                                                                                                                                                           | `boolean`                  | `undefined`  |
| `option`   | `option`   | Adds visual and function properties to your link component. The default setting is `internal`, which redirects you to the specified URL in the same page. The `external` setting adds an underline and ">" icon to the link, and opens the link in a new web browser tab. | `"external" \| "internal"` | `'internal'` |
| `url`      | `url`      | Defines the url the user should get redirected to when clicking on the link.                                                                                                                                                                                              | `string`                   | `undefined`  |


## Dependencies

### Used by

 - [se-sidemenu](../sidemenu)

### Graph
```mermaid
graph TD;
  se-sidemenu --> se-link
  style se-link fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
