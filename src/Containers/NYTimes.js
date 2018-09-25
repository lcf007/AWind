import React, { Component } from 'react';
import Article from './Article';
const URL_NYT = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=b16db5741229458f944b734fb349c1d7";

class NYTimes extends Component {

  constructor() {
    super()

    this._initState = {
      articles:null
    }
    this.state = this._initState;
  }

  componentWillMount(){
    fetch( URL_NYT, {
      method: 'GET',
    })
    .then(res => res.json())
    .then((res) => {
      this.setState({articles:res.results});
      console.log(res.results);
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    if ( !this.state.articles )
      return <div>Loading...</div>
    return (
      <div>
        <h1 className='text-center'>NY Times Top Stories</h1>
        {
          this.state.articles.map( (obj, i) => 
            <Article obj={obj} key={i} index={i}/>
            
            
          )
        }
        </div>
    );
  }
}

export default NYTimes;
