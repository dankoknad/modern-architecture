import React from 'react';
import ReactDOM from 'react-dom';
// import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/bootstrap-grid-only/bootstrap.css'
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
