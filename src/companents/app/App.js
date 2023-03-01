import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
// import Banner from '../banner/banner';
import Overflow from '../../pages/overflow/overflow';
import Tiscets from '../../pages/tiscets/tiscets';
import NavLink from '../navlink/navlink'
import Ideas from '../../pages/Ideas/Ideas';
import Contacts from '../../pages/Contacts/Contacts';
import Agents from '../../pages/Agents/agents';
import Articles from '../../pages/articles/articles';
// import Overview from '../overview/overview';
export default class App extends Component {
  render() {
    // const BannerInfo = [
    //   { text: 'Unresolved', number: 60, id: 1 },
    //   { text: 'Overdue', number: 16, id: 2 },
    //   { text: 'Open', number: 43, id: 3 },
    //   { text: 'On hold', number: 64, id: 4 },
    // ]
    return (
      <div className='container App mt-1'>
        <div>
          <NavLink />
          <Routes>
            <Route path={'/'} element={<Overflow />} />
            <Route path={'/Tiscets'} element={<Tiscets />} />
            <Route path={'/Ideas'} element={<Ideas />} />
            <Route path={'/Contacts'} element={<Contacts />} />
            <Route path={'/agents'} element={<Agents />} />
            <Route path={'/articles'} element={<Articles />} >
            </Route>
          </Routes>
        </div>
        {/* <BannerInfo /> */}
      </div>
    )
  }
}

// export default App;
