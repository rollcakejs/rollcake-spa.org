---
id: buckets-api
title: Buckets API
---

All buckets methods can be called also into the application, and there is no mandatory packages to be installed.

## Window Variables

When mounting a bucket into the application, a JavaScript object of properties is placed into a Window Varible and passed to each bucket iframe generated. This object must have a bus prop and store prop.


### Bus

Bus is a publish / subcribe interface comunication provided by rollcake-spa, to use it you only need to get RollCake window variable and access bus prop.

#### Example of usage
```js
//ReactMf
window.RollCake.bus.publish('alert-message', 'User not authorized!');

//VueMf
window.RollCake.bus.subscribe('alert-message', (message) => {
  alert(message);
})
```

### Store

Store is a storage of data used across the application provided by rollcake-spa, to use it you only need to get RollCake window variable and access store prop.

#### Example of usage
```js
window.RollCake.store.getStore();
//return {}

window.RollCake.store.setState('authorization', 'gaF&l+9ak?&1s0f[XVtQalRrJu:F{J');
// return void

window.RollCake.store.getStore();
//return {'authorization':{'accessToken': 'gaF&l+9ak?&1s0f[XVtQalRrJu:F{J'}}

window.RollCake.store.getState('authorization');
//return 'authorization':{'accessToken': 'gaF&l+9ak?&1s0f[XVtQalRrJu:F{J'}
```