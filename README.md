ReactJs - React Router - Axios Example
=========================

A sample app showcasing Reactjs with React Router and Axios.


I made it to document a few approaches I have tried while learning React-Router and Axios.
I tried to keep it close to real world (pagination, no fake localStorage APIs).


There are a few bits here I was especially interested in:

* It uses Reactjs and [React Router](https://github.com/rackt/react-router);
* It can show post page with partial known info and load details on the go;
* Router handlers are updated gracefully in `componentWillReceiveProps` if some page is requested with a different parameter;
* It demonstrates usage of [higher-order components](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750) through [decorators](https://github.com/wycats/javascript-decorators) (experimental);
* It is is built in ES6 using [Babel](https://babeljs.io) and [Webpack](https://github.com/webpack/webpack), and has [React Transform](https://github.com/gaearon/react-transform-boilerplate) integrated.
