import React, { Component } from 'react';
import Article from './Article';
const URL_NYT = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=b16db5741229458f944b734fb349c1d7";

class NYTimes extends Component {

  constructor() {
    super()

    this._initState = {
        abstract:'',
        byline:'',
        created_date:''
    }
    this.state = this._initState;
    this.Ojbects = [];
  }

  componentWillMount(){
    fetch( URL_NYT, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
    .then(res => res.json())
    .then((response) => {
      if (response === null)
        console.log('still null??')
      else{
        this.Objects = response.results;
      }
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <div>
        NY Times
        <Article abstract="123" key='0' />
      </div>
    );
  }
}

export default NYTimes;
