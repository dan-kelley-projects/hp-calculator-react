import React from 'react';
import ReactDOM from 'react-dom';

class Hp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      hitPoints: null,
      hitDie: null,
      level: null,
      conScore: null,
      conMod: null,
      favoredLevelBonus: null,
      hasToughness: null,
    }
    
  }

  renderhitDie() {
    return <HitDie />
  }

  renderLevel() {
    return <Level />
  }

  renderConScore() {
    return <ConScore />
  }

  renderFavoredBonus() {
    return <FavoredBonus />
  }

  renderToughness() {
    return <Toughness />;
  }

  render() {
    return (

      <div>
        <table>
          <tr style={{textAlign: 'center'}} >
            <td colspan="2">
              <h1>HP</h1>
            </td>
          </tr>
          <tr>
            <td>Hit Die:</td>
            <td>{this.renderhitDie()}</td>
          </tr>
          <tr>
            <td>Level:</td>
            <td>{this.renderLevel()}</td>
          </tr>
          <tr>
            <td>Con Score:</td>
            <td>{this.renderConScore()}</td>
          </tr>
          <tr>
            <td>Favored:</td>
            <td>{this.renderFavoredBonus()}</td>
          </tr>
          <tr>
            <td>Toughness:</td>
            <td>{this.renderToughness()}</td>
          </tr>
        </table>
      </div>

    
  )};
}


/** Controls start here */
/**
 * Controls start here
 * Todo: convert eligible classes into controlled components
 */

class HitDie extends React.Component {

  render() {
    return (
    <div>
      <select name="hitDie">
        <option value="d6">d6</option>
        <option value="d8">d8</option>
        <option value="d10">d10</option>
        <option value="d12">d12</option>
      </select>
    </div>
    )};
  
}

class Level extends React.Component {

  render() {
    return (
    <div>
      <input placeholder="1" type="number" max="20" min="1" />
    </div>
    )};

}


class ConScore extends React.Component {

  // Still need to add con mod
  render() {
    return (
    <div>
      <input placeholder="10" type="number" min="1" />
    </div>
    )};

}

class FavoredBonus extends React.Component {
  render() {
    return (
    <div>
      <input placeholder="1" type="number" max="20" min="1"></input>
    </div>
    )};
}

class Toughness extends React.Component {

  render() {
    return (
    <div>
      <input type="checkbox"></input>
    </div>
    )};
}

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="calculator">
          <Hp />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);