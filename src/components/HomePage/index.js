/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';
import NavBar from '../NavBar';
import Quest from '../../containers/Quest';
import HideoutElement from '../../containers/HideoutElement';

import './styles.scss';

const HomePage = ({ followedList, followedListHideout, isLogged }) => (
  <div className="homepage-container">
    <Header />
    <NavBar />
    <div className="homepage-container-body">
      {/* <HomeCategories /> */}
      {!isLogged && (
        <div className="homepage-container-notlogged">
          <div className="notlogged-title">
            <p>You must be logged to access followed content</p>
          </div>
        </div>
      )}
      {isLogged && (
        <div className="quests-list-active">
          {followedList.length > 0 ? (
            <div className="followed-container">
              <div className="follow-category"><span>Followed Quests</span></div>
              {
                followedList.map((item) => (
                  <Quest key={item.id} {...item} />
                ))
              }
            </div>
          ) : (
            <div className="follow-none-category">
              {followedList.length === 0 && followedListHideout.length === 0 && (
                <div className="follow-none">
                  <p>You don't have any followed elements yet</p>
                  <p>To add a quest or a hideout element to your homepage, go to Quests Items or Hideout Items</p>
                </div>
              )}
            </div>
          )}
          {followedListHideout.length > 0 && (
            <div className="followed-container">
              <div className="follow-category"><span>Followed Hideout Elements</span></div>
              {
                followedListHideout.map((item) => (
                  <HideoutElement key={item.id} {...item} />
                ))
              }
            </div>
          )}
        </div>
      )}
    </div>
    <Footer />
  </div>
);

HomePage.propTypes = {
  followedList: PropTypes.array.isRequired,
  followedListHideout: PropTypes.array.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default HomePage;
