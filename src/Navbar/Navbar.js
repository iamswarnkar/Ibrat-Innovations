import React from 'react';
import { RiLiveLine } from 'react-icons/ri';
import { FaRegAddressCard, FaUserAlt } from 'react-icons/fa';
import { GiRunningNinja } from 'react-icons/gi';
import { BsGrid } from 'react-icons/bs';

import './navbar.css';
export default function Navbar() {
  return (
    <>
      <div className="navClass">
        <div className="container">
          <div className="logo">
            <a href="">
              <img src="https://thumbs.dreamstime.com/z/fitness-logo-man-woman-76825344.jpg" alt=""/>
            </a>
          </div>
          <div className="main">
            <ul>
              <li>
                <a href="#">
                  Live <RiLiveLine />
                </a>
              </li>
              <li>
                <a href="#">
                  Membership <FaRegAddressCard />
                </a>
              </li>
              <li>
                <a href="#">
                  Plans <GiRunningNinja />
                </a>
              </li>
              <li>
                <a href="#">
                  more <BsGrid />
                </a>
              </li>
            </ul>
          </div>
          <div className="login">
            <a href="#">
              Sign in
              <FaUserAlt />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
