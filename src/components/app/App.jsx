// import React, { Component } from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
// } from 'react-router-dom';
// import NewsSearch from '../../containers/NewsSearch';

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Router>
//           <Switch>
//             <Route
//               path="/"
//               exact
//               render={(routerProps) => <NewsSearch {...routerProps} />}
//             />
//           </Switch>
//         </Router>
//       </div>
//     )
//   }
// }

import React from 'react';
import NewsSearch from '../../containers/NewsSearch';

export default function App() {
  return (
    <NewsSearch />
  )
}


