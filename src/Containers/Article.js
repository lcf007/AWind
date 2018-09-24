import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Article.css';

class Article extends Component {
  static propTypes = {
    obj: PropTypes.object
  }

  clickCard() {
    window.location.href = this.props.obj.short_url;
  }

  render() {
    if (this.props.obj.multimedia.length > 0)
      console.log(this.props.obj.multimedia[0]['url'])
    return (
      <div className="row">
        <div className="col-2"></div>
        <div className="card col-8" onClick={this.clickCard.bind(this)}>
          <img className="card-img-top" src={this.props.obj.multimedia.length > 0 ? this.props.obj.multimedia[this.props.obj.multimedia.length-1].url : ''} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{this.props.obj.title}</h5>
            <p className="card-text">{this.props.obj.abstract}</p>
            <p className="card-text"><small className="text-muted">{this.props.obj.created_date}</small></p>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    );
  }
}

export default Article;
