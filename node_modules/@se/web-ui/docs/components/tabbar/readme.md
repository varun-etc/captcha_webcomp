# se-tabbar

| Slot    | Description                                                                                                                  |
| ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| none    | Slot with no name will be positioned to the start of the element (left)                                                      |
| `start` | Positions to the `left` of the content. The start element will be darker than the rest of the element                        |
| `end`   | Positions to the `right` of the content.                                                                                     |
| `edge`  | Positions to the `right` of the content after the `end` slot to be used behind a darker background. Used for Search section. |

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                                                                                                                                                                              | Type                               | Default     |
| ---------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | ----------- |
| `color`    | `color`    | Indicates the color of your tab bar. Default setting is `primary`, rendering a green background for nav-bars and ultra-light-grey-1 for content. The `alternative` setting renders a white background.                                                                                                   | `"alternative" \| "primary"`       | `'primary'` |
| `option`   | `option`   | Defines the function of the tabbar. Default `nav` creates a tab bar that functions as a nav-bar. `content` creates a ta bbar that functions as a content section tab bar.                                                                                                                                | `"content" \| "nav"`               | `"nav"`     |
| `overflow` | `overflow` | Indicates the overflow behavior of your tab bar. Default setting is `scroll`, keeping all tabs in one horizontal row. The `stack` setting allows your tabbar content wrap to new lines. The `compact` setting allows your tabbar content to scroll, but all stack the text together as much as possible. | `"compact" \| "scroll" \| "stack"` | `"scroll"`  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
