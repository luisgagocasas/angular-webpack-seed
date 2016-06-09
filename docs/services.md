Services
========

- ui
- libs
- network

## `ui`

<!-- #### Attributes -->

#### Methods

##### `ui.registerComponent(cname)`
Registers a new component with the name `cname`

##### `ui.component(cname)`
Returns the component named `cname`.

##### `ui.component(cname).registerAction(aname, handler)`
Registers an action named `aname` inside the `cname` component.

##### `ui.component(cname).cction(aname, params)`
Triggers the action named `aname` of the `cname` component passing `params` to the action handler function.