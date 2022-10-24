import React from 'react';
import './App.css';
import { Stage, Layer, Rect, Text, Circle, Line, Image } from 'react-konva';
import centralLine from './image/centralLine.png';
import greenCar from './image/greenCar.png'
import useImage from 'use-image';
import Car from './components/Car';
import Divider from './components/Divider';
import Enemycar from './components/Enemycar';
import Secondenemycar from './components/Secondenemycar';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      line: { x: 200, y: -140 },
      line2: { x: 200, y: 160 },
      score: 0,
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
          firstEnemy: { x: Math.floor(Math.random() * 335), y: -100 }
        })
      }
      else if ((this.state.firstEnemy.y + 90 > this.state.gamersCar.y) &&
        (this.state.firstEnemy.x + 65 > this.state.gamersCar.x) &&
        (this.state.gamersCar.x + 65 > this.state.firstEnemy.x)) {
        this.setState({ firstEnemy: { x: Math.floor(Math.random() * 335), y: this.state.secondEnemy.y - 300 } })
        if (this.state.lives > 1) {
          this.setState({ lives: this.state.lives - 1 })
        }
        else if (this.state.lives == 1) {
          this.setState({ lives: 0 });
          this.stoper();
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
          secondEnemy: { x: Math.floor(Math.random() * 335), y: -100 }
        })
      }
      else if ((this.state.secondEnemy.y + 90 > this.state.gamersCar.y) &&
        (this.state.secondEnemy.x + 65 > this.state.gamersCar.x) &&
        (this.state.gamersCar.x + 65 > this.state.secondEnemy.x)) {
        this.setState({ secondEnemy: { x: Math.floor(Math.random() * 335), y: this.state.firstEnemy.y - 300 } });
        console.log(this.state.firstEnemy.y);
        if (this.state.lives > 1) {
          this.setState({ lives: this.state.lives - 1 })
        }
        else if (this.state.lives == 1) {
          this.setState({ lives: 0 });
          this.stoper();
        }
      }
      else {
        this.setState({
          secondEnemy: { x: this.state.secondEnemy.x, y: this.state.secondEnemy.y + 4 },
        })
      }
    }
    else if (this.state.timer === 'false') {
      clearInterval(cars)
    }
  }

  driving = (e) => {
    this.keyPressed(e);
  }

  componentDidMount() {
    if (this.state.timer == 'true') {
      let t = setInterval(() => {
        this.handle(t)
      }, 100);
      let cars = setInterval(() => {
        this.firstEnemyCarDriving(cars);
        this.secondEnemyCarDriving(cars)
      }, 100);
      document.addEventListener('keydown', this.driving);
    }
  }

  componentDidUpdate() {
    if (this.state.timer == 'false') {
      document.removeEventListener('keydown', this.driving);
    }
  }


  stoper = () => {
    console.log(this.myRef.current.className);
    this.myRef.current.className = 'doughter' + ' hi';
    this.setState({
      timer: 'false',
      lineEnd: this.state.line,
      line2End: this.state.line2,
    })
  }

  keyPressed = (e) => {
    console.log(e.keyCode);
    if (e.keyCode === 37 && this.state.gamersCar.x > 25) {
      this.setState({ gamersCar: { x: this.state.gamersCar.x - 5, y: this.state.gamersCar.y } })
    }
    if (e.keyCode === 39 && this.state.gamersCar.x < 325) {
      this.setState({ gamersCar: { x: this.state.gamersCar.x + 5, y: this.state.gamersCar.y } })
    }
    if (e.keyCode === 38 && this.state.gamersCar.y > 25) {
      console.log(this.state.gamersCar.y);
      this.setState({ gamersCar: { x: this.state.gamersCar.x, y: this.state.gamersCar.y - 5 } })
    }
    if (e.keyCode === 40 && this.state.gamersCar.y <= 390) {
      console.log(this.state.gamersCar.y);
      this.setState({ gamersCar: { x: this.state.gamersCar.x, y: this.state.gamersCar.y + 5 } })
    }
  }
  render() {
    if (this.state.timer === 'true') {
      return (
        <div className='mother' >
          <Stage width={400} height={500}>
            <Layer >
              <Rect
                width={400}
                height={500}
                fill="grey"
              />
              <Text x={20} y={0} fontSize={15} text={'Lives: ' + this.state.lives} />
              <Text x={250} y={0} fontSize={15} text={'Score: ' + this.state.score} />
              <Divider coordinate={this.state.line} />
              <Divider coordinate={this.state.line2} />
              <Enemycar coordinate={this.state.firstEnemy} />
              <Secondenemycar coordinate={this.state.secondEnemy} />
              <Car coordinate={this.state.gamersCar} />
            </Layer>
          </Stage>
          <div ref={this.myRef} className='doughter' >Game Over</div>
        </div>
      )
    }
    else if (this.state.timer === 'false') {
      return (
        <div className='mother' >
          <Stage width={400} height={500}>
            <Layer >
              <Rect
                width={400}
                height={500}
                fill="grey"
              />
              <Text x={20} y={0} fontSize={15} text={'Lives: ' + this.state.lives} />
              <Text x={250} y={0} fontSize={15} text={'Score: ' + this.state.score} />
              <Divider coordinate={this.state.line} />
              <Divider coordinate={this.state.line2} />
              <Enemycar coordinate={this.state.firstEnemy} />
              <Secondenemycar coordinate={this.state.secondEnemy} />
              <Car coordinate={this.state.gamersCar} />
            </Layer>
          </Stage>
          <div ref={this.myRef} className='doughter' >Game Over</div>
        </div>
      )
    }
  }
}








