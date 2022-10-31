import React from 'react';
import { Stage, Layer, Rect, Text, } from 'react-konva';
import Car from '../../components/Car';
import Divider from '../../components/Divider';
import Enemycar from '../../components/Enemycar';
import Secondenemycar from '../../components/Secondenemycar';
import { Link } from 'react-router-dom';
import './App.scss';




export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      line: { x: 200, y: -140 },
      line2: { x: 200, y: 160 },
      score: 0,
      currentName: '',
      lineEnd: {},
      line2End: {},
      timer: 'true',
      lives: 5,
      gamersCar: { x: 30, y: 400 },
      firstEnemy: { x: 50, y: 50 },
      secondEnemy: { x: 280, y: -250 },
    }
  }



  handle = (t) => {
    if (this.state.timer === 'true') {
      if (this.state.line.y > 500) {
        this.setState({
          line: { x: this.state.line.x, y: -140 }
        })
      }
      else if (this.state.line2.y > 500) {
        this.setState({
          line2: { x: this.state.line2.x, y: -140 }
        })
      }
      else {
        this.setState({
          line: { x: this.state.line.x, y: this.state.line.y + 7 },
          line2: { x: this.state.line2.x, y: this.state.line2.y + 7 },
          score: this.state.score + 1,
        })
      }
    }
    else if (this.state.timer === 'false') {
      clearInterval(t);
    }

  }

  firstEnemyCarDriving = (cars) => {
    if (this.state.timer === 'true') {
      if (this.state.firstEnemy.y > 500) {
        this.setState({
          firstEnemy: { x: Math.floor(Math.random() * 335), y: -300 }
        })
      }
      else if (
        (this.state.firstEnemy.y < this.state.gamersCar.y + 90)
        && (this.state.firstEnemy.y + 90 > this.state.gamersCar.y)
      ) {
        this.setState({
          firstEnemy: { x: this.state.firstEnemy.x, y: this.state.firstEnemy.y + 4 },
        })
        if ((this.state.gamersCar.x + 65 >= this.state.firstEnemy.x) &&
          ((this.state.gamersCar.x + 65 <= this.state.firstEnemy.x + 65))) {
          if (this.state.secondEnemy.y > 100) {
            this.setState({ firstEnemy: { x: Math.floor(Math.random() * 335), y: this.state.secondEnemy.y - 600 } })
          }
          else {
            this.setState({ firstEnemy: { x: Math.floor(Math.random() * 335), y: this.state.secondEnemy.y - 300 } })
          }
          if (this.state.lives > 1) {
            this.setState({ lives: this.state.lives - 1 })
          }
          else if (this.state.lives === 1) {
            this.setState({ lives: 0 });
            this.stoper();
          }
        }
        else if ((this.state.gamersCar.x <= this.state.firstEnemy.x + 65) &&
          ((this.state.gamersCar.x >= this.state.firstEnemy.x))) {
          if (this.state.secondEnemy.y > 100) {
            this.setState({ firstEnemy: { x: Math.floor(Math.random() * 335), y: this.state.secondEnemy.y - 600 } })
          }
          else {
            this.setState({ firstEnemy: { x: Math.floor(Math.random() * 335), y: this.state.secondEnemy.y - 300 } })
          }
          if (this.state.lives > 1) {
            this.setState({ lives: this.state.lives - 1 })
          }
          else if (this.state.lives === 1) {
            this.setState({ lives: 0 });
            this.stoper();
          }
        }
      }
      else {
        this.setState({
          firstEnemy: { x: this.state.firstEnemy.x, y: this.state.firstEnemy.y + 4 },
        })
      }
    }
    else if (this.state.timer === 'false') {
      clearInterval(cars)
    }
  }

  secondEnemyCarDriving = (cars) => {
    if (this.state.timer === 'true') {
      if (this.state.secondEnemy.y > 500) {
        this.setState({
          secondEnemy: { x: Math.floor(Math.random() * 335), y: -300 }
        })
      }
      else if (
        (this.state.secondEnemy.y < this.state.gamersCar.y + 90)
        && (this.state.secondEnemy.y + 90 > this.state.gamersCar.y)
      ) {
        this.setState({
          secondEnemy: { x: this.state.secondEnemy.x, y: this.state.secondEnemy.y + 4 },
        })
        if ((this.state.gamersCar.x + 65 >= this.state.secondEnemy.x) &&
          ((this.state.gamersCar.x + 65 <= this.state.secondEnemy.x + 65))) {
          if (this.state.firstEnemy.y > 100) {
            this.setState({ secondEnemy: { x: Math.floor(Math.random() * 335), y: this.state.firstEnemy.y - 600 } })
          }
          else {
            this.setState({ secondEnemy: { x: Math.floor(Math.random() * 335), y: this.state.firstEnemy.y - 300 } })
          }
          if (this.state.lives > 1) {
            this.setState({ lives: this.state.lives - 1 })
          }
          else if (this.state.lives === 1) {
            this.setState({ lives: 0 });
            this.stoper();
          }
        }
        else if ((this.state.gamersCar.x <= this.state.secondEnemy.x + 65) &&
          ((this.state.gamersCar.x >= this.state.secondEnemy.x))) {
          if (this.state.firstEnemy.y > 100) {
            this.setState({ secondEnemy: { x: Math.floor(Math.random() * 335), y: this.state.firstEnemy.y - 600 } })
          }
          else {
            this.setState({ secondEnemy: { x: Math.floor(Math.random() * 335), y: this.state.firstEnemy.y - 300 } })
          }
          if (this.state.lives > 1) {
            this.setState({ lives: this.state.lives - 1 })
          }
          else if (this.state.lives === 1) {
            this.setState({ lives: 0 });
            this.stoper();
          }
        }
      }
      else {
        this.setState({
          secondEnemy: { x: this.state.secondEnemy.x, y: this.state.secondEnemy.y + 4 },
        })
      }
    }
    else if (this.state.timer === 'false') {
      clearInterval(cars);
    }
  }

  driving = (e) => {
    this.keyPressed(e);
  }

  componentDidMount() {
    if (this.state.timer === 'true') {
      this.setState({
        currentName: this.props.props,
      })
      let t = setInterval(() => {
        this.handle(t)
      }, 100);
      let cars = setInterval(() => {
        this.firstEnemyCarDriving(cars);
        this.secondEnemyCarDriving(cars);
      }, 100);
      document.addEventListener('keydown', this.driving);
    }
  }

  componentDidUpdate() {
    if (this.state.timer === 'false') {
      document.removeEventListener('keydown', this.driving);
    }
  }


  tireToStorage = () => {
    let store = localStorage.getItem('score');
    if (store === null) {
      let currentScore = [];
      currentScore.push({ name: this.state.currentName, score: this.state.score, key: Math.random() });
      localStorage.setItem('score', JSON.stringify(currentScore));
    }
    else {
      let sessionStore = JSON.parse(store);
      sessionStore.push({ name: this.state.currentName, score: this.state.score, key: Math.random() });
      localStorage.setItem('score', JSON.stringify(sessionStore));
    }
  }


  stoper = () => {
    this.myRef.current.className = this.myRef.current.className + ' hi';
    this.setState({
      timer: 'false',
      lineEnd: this.state.line,
      line2End: this.state.line2,
    })
    this.tireToStorage();
  }

  keyPressed = (e) => {
    e.preventDefault();
    if (e.keyCode === 37 && this.state.gamersCar.x > 25) {
      this.setState({ gamersCar: { x: this.state.gamersCar.x - 5, y: this.state.gamersCar.y } })
    }
    if (e.keyCode === 39 && this.state.gamersCar.x < 325) {
      this.setState({ gamersCar: { x: this.state.gamersCar.x + 5, y: this.state.gamersCar.y } })
    }
    if (e.keyCode === 38 && this.state.gamersCar.y > 55) {
      this.setState({ gamersCar: { x: this.state.gamersCar.x, y: this.state.gamersCar.y - 5 } })
    }
    if (e.keyCode === 40 && this.state.gamersCar.y <= 390) {
      this.setState({ gamersCar: { x: this.state.gamersCar.x, y: this.state.gamersCar.y + 5 } })
    }
  }
  render() {
    return (
      <div className='motherR' >
        <Stage width={400} height={500}>
          <Layer >
            <Rect
              width={400}
              height={500}
              fill="grey"
            />
            <Divider coordinate={this.state.line} />
            <Divider coordinate={this.state.line2} />
            <Enemycar coordinate={this.state.firstEnemy} />
            <Secondenemycar coordinate={this.state.secondEnemy} />
            <Text x={20} y={3} fontFamily={'KalamB'} fill={'#f0f8ff'}
              stroke={'#C3563F'} strokeWidth={1} fontSize={15} text={'Lives: ' + this.state.lives} />
            <Text x={250} y={3} fontFamily={'KalamB'} fill={'#f0f8ff'}
              stroke={'#C3563F'} strokeWidth={1} fontSize={15} text={'Score: ' + this.state.score} />
            <Car coordinate={this.state.gamersCar} />
          </Layer>
        </Stage>
        <div ref={this.myRef} className='motheR__doughter' >Game Over</div>
        <div className='motheR__back'>
          <Link to='/'>back</Link>
        </div>
      </div>
    )
  }
}