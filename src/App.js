import React from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';

const HomePage = props => {
  return (
    <div>
      <button onClick={()=>props.history.push('/topics')}>To Topics</button>
      <h1>HOME PAGE</h1>
    </div>
  );
};

const TopicsList = (props) => {
  return (
    <div>
      <h1>TOPIC LIST PAGE</h1>
      <Link to={`${props.match.url}/13`}>TO TOPIC 13</Link>
      <Link to={`${props.match.url}/15`}>TO TOPIC 15</Link>
      <Link to={`${props.match.url}/17`}>TO TOPIC 17</Link>

    </div>
  );
};

const TopicDetail = props => {
  console.log(props);
  return (
    <div>
      <h1>TOPIC DETAIL PAGE => {props.match.params.topicId}</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/topics' component={TopicsList} />
      <Route path='/topics/:topicId' component={TopicDetail} />
      <Route exact path='/something/else/topics' component={TopicsList} />
      <Route path='/something/else/topics/:topicId' component={TopicDetail} />
    </div>
  );
}

export default App;
