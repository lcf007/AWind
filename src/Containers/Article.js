import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Article extends Component {
    static propTypes = {
        abstract:PropTypes.string,
        byline:PropTypes.string,
        created_date:PropTypes.string
    }

    constructor() {
        super()
        this._initState = {
            abstract:'',
            byline:'byline',
            created_date:'createdate'
        }
        this.state = this._initState;
    }
    
  render() {
    return (
      <div >
        <h1> {this.props.abstract} </h1>
        <p> {this.props.byline} </p>
        <p> {this.props.created_date} </p>
      </div>
    );
  }
}

export default Article;
