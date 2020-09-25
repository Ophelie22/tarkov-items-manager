import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';

import { toggleHideout } from '../actions';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loader';
import HideoutElement from './HideoutElement';

import '../styles/AllHideouts.scss';

const Hideout = ({
  // eslint-disable-next-line no-shadow
  hideoutsList,
  hideoutsLoading,
  toggleHideout,
  hideoutElementState,
}) => {
  const hideoutArray = [];
  const hideoutBar = [];
  hideoutsList.forEach((element) => {
    if (element.name === hideoutElementState) {
      hideoutArray.push(
        <div className="hideout-list-active">
          <div className="hideout-name"><span>{element.name}</span></div>
          {
            element.hideoutObjectives.map((item) => (
              <HideoutElement key={item.id} {...item} />
            ))
          }
        </div>,
      );
      hideoutBar.push(
        <div
          className="hideout-portrait-active"
          onClick={() => {
            toggleHideout(element.name);
          }}
        >
          <img src={element.img_category} alt={element.name + " " + "Tarkov"} />
        </div>,
      );
    }
    else {
      hideoutArray.push(
        <div className="hideout-list">
          <div className="hideout-name"><span>{element.name}</span></div>
          {
            element.hideoutObjectives.map((item) => (
              <HideoutElement key={item.id} {...item} />
            ))
          }
        </div>,
      );
      hideoutBar.push(
        <div
          className="hideout-portrait"
          onClick={() => {
            toggleHideout(element.name);
          }}
        >
          <img src={element.img_category} alt={element.name + " " + "Tarkov"} />
        </div>,
      );
    }
  });
  return (

    <div className="hideout-container">
      <Header />
      <NavBar />
      {hideoutsLoading ? (<Loading />) : (
        <div className="hideout-container-body">
          <div className="hideout-bar">
            {hideoutBar}
          </div>
          {hideoutArray.map((item) => (
            <div className="hideout-div">{item}</div>
          ))}
        </div>
      )}
      <Footer />
    </div>


  );
};

const mapState = (state) => ({
  hideoutsList: state.allHideouts.hideoutsList,
  hideoutsLoading: state.allHideouts.hideoutsLoading,
  hideoutElementState: state.allHideouts.hideoutElementState,
});

const mapDispatch = (dispatch) => ({
  toggleHideout: (payload) => {
    dispatch(toggleHideout(payload));
  },
});

Hideout.propTypes = {
  hideoutsList: PropTypes.array.isRequired,
  hideoutsLoading: PropTypes.bool.isRequired,
  toggleHideout: PropTypes.func.isRequired,
  hideoutElementState: PropTypes.string.isRequired,
};

export default connect(mapState, mapDispatch)(Hideout);
