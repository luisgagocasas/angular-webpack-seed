Services
========

> After creating a new service add it on the list below and create a new block with its attributes and methods



## Index

- [libs](#libs)
- [ui](#ui)
- [network](#network)

---

## `libs`

Exports libs registered on `src/app/app.libs.js`

---

## `ui`

#### Methods

##### `ui.registerComponent(cname)`
Registers a new component with the name `cname`

##### `ui.component(cname)`
Returns the component named `cname`.

##### `ui.component(cname).registerAction(aname, handler)`
Registers an action named `aname` inside the `cname` component.

##### `ui.component(cname).cction(aname, params)`
Triggers the action named `aname` of the `cname` component passing `params` to the action handler function.

---

## `network`

#### Methods

##### `network.isOnline()`
Returns network status

##### `network.onChange(callback)`
Registers the `callback` function to listen when network status is changed
