import React from 'react';
import ReactDOM from 'react-dom';
import qs from 'qs'
import './one.less'
console.log(qs.parse("name=alex&age=10"));

ReactDOM.render(<div>
    <h1>hello world</h1>
</div>, document.getElementById('root'));
