import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Banner from '../banner/banner';
import Overflow from '../../pages/overflow/overflow';
import Tiscets from '../../pages/tiscets/tiscets';
import NavLink from '../navlink/navlink'
import Ideas from '../../pages/Ideas/Ideas';
import Contacts from '../../pages/Contacts/Contacts';
import Agents from '../../pages/Agents/agents';
import Articles from '../../pages/articles/articles';
import Trends from '../trends/trends';
import Tasks from '../tasks/tasks';
// import Overview from '../overview/overview';
export default class App extends Component {
  render() {
    const BannerInfo = [
      { text: 'Unresolved', number: 60, id: 1 },
      { text: 'Overdue', number: 16, id: 2 },
      { text: 'Open', number: 43, id: 3 },
      { text: 'On hold', number: 64, id: 4 },
    ];
    const trendInfo = [
      { text: 'Resolved', number: "449", id: 1 },
      { text: 'Received', number: "426", id: 2 },
      { text: 'Average first response time', number: '33m', id: 3 },
      { text: 'Average response time', number: '3h 8m', id: 4 },
      { text: 'Resolution within SLA', number: "94%", id: 5 },
    ]
    return (
      <div className='container App mt-1'>
        <div><NavLink /></div>
        <div className='Routes'>
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
        <div className='main'>
          <div>
            <Banner data={BannerInfo} />
            <Trends data={trendInfo} />
          </div>
        </div>
        <div className='tasks'>
          <Tasks />
        </div>
      </div>
    )
  }
}

// export default App;
