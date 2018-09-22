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
        console.log(this.Objects[0].abstract)
      }
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    if (this.Ojbects.length > 0){
      return (
        <div>
          NY Times
          <Article abstract={this.Objects[0].abstract} key='0' />
        </div>
      );
    }else{
      return( <p> Loading... </p>);
    }
  }
}

export default NYTimes;
