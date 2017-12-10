import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class App extends Component {


  renderSocialMedia() {
    const socialMedia = this.props.content.social.media;

    const list = socialMedia.map( (media, id) => {
      return (
        <a href={ media.url } target="_blank" key={ id }>
          <i className={ media.icon }></i>
        </a>
      );
    });

    return list;
  }


  render() {
    return (
      <div className="home page-container">
        <div className="content-wrapper">
          <div className="intro-wrapper">
            <h1>Ren.</h1>

            <Link to="/about" >ABOUT</Link>
          </div>

          <div className="social-media-wrapper">
            <ul>
              { this.renderSocialMedia() }
            </ul>
          </div>
        </div>

      </div>
    );
  }
}


function mapStateToProps({ content }) {
  return { content };
}


export default connect(mapStateToProps)(App);
