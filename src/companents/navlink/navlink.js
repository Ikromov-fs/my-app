import React, { Component } from 'react'
import "./navlink.css"
import Icon from "../image/lohohoh.svg"
import overview from "../image/ticket.svg"
import ticket from "../image/ower.svg"
import vector from "../image/Vector.svg"
import contact from "../image/contact.svg"
import agents from "../image/agents.svg"
import articl from "../image/articl.svg"
import settings from "../image/setings.svg"
import sub from "../image/sub.svg"
import { NavLink } from 'react-router-dom'

export default class navlink extends Component {
    render() {
        return (
            <div className='navlink__list pt-3'>
                <nav>
                    <ul className='nav__ul'>
                        <li className='d-flex align-items-center first__li'>
                            <div>
                                <img src={Icon} width={32} height={32} alt="icon" />
                            </div>
                            <strong className='nav__text' >Dashboard Kit</strong>
                        </li>
                        <li className='d-flex align-items-center'>
                            <div>
                                <img src={overview} width={16} height={16} alt="icon" />
                            </div>
                            <strong className='nav__text'><NavLink to={'/'}>Overview</NavLink></strong>
                        </li>
                        <li className='d-flex'>
                            <div>
                                <img src={ticket} alt="icon" width={16} height={10} />
                            </div>
                            <strong className='nav__text'><NavLink to={'/Tiscets'}>Tickets</NavLink></strong>
                        </li>
                        <li className='d-flex'>
                            <div><img src={vector} alt="icon" width={11} height={16} /></div>
                            <strong className='nav__text'><NavLink to={'/Ideas'}>Ideas</NavLink></strong>
                        </li>
                        <li className='d-flex'>
                            <div><img src={contact} alt="icon" width={16} height={11} /></div>
                            <strong className='nav__text'><NavLink to={'/Contacts'}>Contacts</NavLink></strong>
                        </li>
                        <li className='d-flex'>
                            <div><img src={agents} alt="icon" width={14} height={16} /></div>
                            <strong className='nav__text'><NavLink to={'/agents'}>Agents</NavLink></strong>
                        </li>
                        <li className='d-flex'>
                            <div><img src={articl} alt="icon" width={14} height={16} /></div>
                            <strong className='nav__text'><NavLink to={"/articles"}>Articles</NavLink></strong>
                        </li>
                        <hr />
                        <li className='d-flex'>
                            <div><img src={settings} alt="icon" width={14} height={15} /></div>
                            <strong className='nav__text'>Settings</strong>
                        </li>
                        <li className='d-flex'>
                            <div><img src={sub} alt="icon" width={12} height={16} /></div>
                            <strong className='nav__text'>Subscription</strong>
                        </li>
                    </ul>
                </nav>
            </div >
        )
    }
}

