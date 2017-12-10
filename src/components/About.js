import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class About extends Component {


    renderArticle() {
        const about = this.props.content.about;
        const article = about.article;

        return article;
    }


    render() {
        return(
            <div className="about page-container">

                <div className="nav">
                    <Link to="/" >Ren.</Link>
                </div>
        
                <div className="content-wrapper">


                    <div className="about-wrapper">
                        <h2>
                            Hi, this is Ren. 
                            <br/>
                            I'm a Front End Web Developer.
                        </h2>

                        <p className="article">
                            { this.renderArticle() }
                        </p>
                    </div>
                </div>

            </div>
        );
    }
}


function mapStateToProps({ content }) {
    return { content };
}


export default connect(mapStateToProps)(About);