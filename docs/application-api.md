---
id: application-api
title: Application API
---

rollcake-spa exports named classes, functions and variables rather than a single default export. This means importing must happen in one of two ways:

```js
import { RollCakeSpa, RollCakeMFBroker, RollCakeRouter } from '@rollcakejs/rollcake-spa';
// or
import * as rollCakeSpa from '@rollcakejs/rollcake-spa';
```
### createElement
`createElement` it's a method to perform the creation of the Element class which is responsible for append DOM nodes.

### Simple arguments
```js
// components/ReactPage.js
import { createElement, CUSTOM_ELEMENT_TAG} from ‘@rollcakejs/rollcake-spa’;

const ReactMf = () => createElement({
	tag: CUSTOM_ELEMENT_TAG.MICROFRONTEND,
	attr: {
		name: ‘react-bucket’
	}
});

export default ReactMf;
```

<h3>arguments</h3>

<dl className="args-list">
	<dt>tag: string</dt>
	<dd>Contain the HTML tag that will be created in DOM.</dd>
	<dt>attr: Object</dt>
	<dd>Contain in it attribute declaration what should be add as attribute with the DOM element being created, e.g.: name, class, style, id, and others.</dd>
	<dt>props: Object</dt>
	<dd>Contain props that will be inserted  with the DOM element being created, e.g.: textContent, innerHTML, innerText, and eventListener.</dd>
	<dt>children: Array of Elements</dt>
	<dd>A list of elements that will be render under the current element</dd>
</dl>

<h3>returns</h3>

`Object`

### createPage
`createPage` it's a method to perform the creation of the Page class which is responsible for order the render and destruction of elements, and lifecycle functions.

### Simple arguments
```js
// pages/ReactPage.js
import { createPage } from ‘@rollcakejs/rollcake-spa’;
import ReactMf from ‘../components/ReactMf’;

const ReactPage = () => createPage({
    onInit: function() { console.log(‘initialized!’) },
    onDestroy: function() { console.log(‘destroyed!’) },
    onUpdate: function() { console.log(‘updated’) },
    content: function() {
        return ReactMf();
    }
});

export default ReactPage;
```

<h3>arguments</h3>

<dl className="args-list">
	<dt>onInit: () => void</dt>
	<dd>Function that will be executed when the page be initialized</dd>
	<dt>onDestroy: () => void</dt>
	<dd>Function that will be executed when the page be destroyed</dd>
	<dt>onUpdate: () => void</dt>
	<dd>Function that will be executed when the shared data base of the application be updated</dd>
	<dt>content: () => Object</dt>
	<dd>Elements that will be applied to the DOM after render method be executed</dd>
</dl>

<h3>returns</h3>

`Object`

### RollCakeMFBroker
`RollCakeMFBroker` class register parcels and prepare a fully shareable communication and data storage environment between them and the application. This one, can be consider this module with the most value-added artifact of the project.

### Simple arguments
```js
// mf-broker.config.js
import { RollCakeMFBroker } from ‘@rollcakejs/rollcake-spa’;

const buckets = [
	{
        name: ‘react-bucket’,
        address: ‘https://locahost:3000’
	}
];

export default new RollCakeMFBroker(buckets);
```

<h3>arguments</h3>

<dl className="args-list">
	<dt>Buckets: Array of Bucket</dt>
	<dd>List of buckets that should be register and intermidated by broker.</dd>
</dl>

<h3>returns</h3>

`Object`

### RollCakeRouter
`RollCakeRouter` class will be responsible for making the declaration, identification and control of routes of the application.

### Simple arguments
```js
// router.config.js
import { RollCakeRouter, NAVIGATION_MODE } from ‘@rollcakejs/rollcake-spa’;
import ReactPage from ‘./components/ReactPage’;

const routes = [
	{
        path: ‘/react’,
        item: ReactPage
	}
];

export default new RollCakeRouter({
	routes,
    mode: NAVIGATION_MODE.HISTORY
});
```

<h3>arguments</h3>

<dl className="args-list">
	<dt>Routes: Array of Route</dt>
	<dd>List of pages and location that could be render.</dd>
	<dt>Mode: string</dt>
	<dd>Preferred mode navigation of router.</dd>
</dl>

<h3>returns</h3>

`Object`

### RollCakeSpa
`RollCakeSpa` class will be responsible for the use and integration of all previous classes, along with the ability to render, 
destroy, and update on-screen elements.

### Simple arguments
```js
// index.js
import { RollCakeSpa } from ‘@rollcakejs/rollcake-spa’;
import Router from ‘./router.config’;
import MFBroker from ‘./mf-broker.config’;

const MFBroker = new RollCakeMFBroker([{
        name: ‘react-bucket’,
        address: ‘https://localhost:3000’
}]);

new RollCakeSpa(MFBroker, Router, document.getElementById(‘root’));
```

<h3>arguments</h3>

<dl className="args-list">
	<dt>MFBroker: RollCakeMFBroker</dt>
	<dd>Instance of the class responsible for register and reference the parcels.</dd>
	<dt>Router: RollCakeRouter</dt>
	<dd>Instance of the class responsible for control route preferences.</dd>
	<dt>entryDOMNode: HTMLElement</dt>
	<dd>Reference of a DOM node that will receive the elements to be render.</dd>
	<dt>loadingContent?: () => Element</dt>
	<dd>Function that will be trigger while the parcels are being fetched.</dd>
</dl>

<h3>returns</h3>

`Object`