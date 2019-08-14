import React, { Component } from "react";
import Transition from "react-transition-group/Transition";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    backdropModalActive: false,
    showBlock: false
  };
  closeModalHandler = () => {
    this.setState({
      backdropModalActive: false
    });
  };
  openModalHandler = () => {
    this.setState({
      backdropModalActive: true
    });
  };
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={() =>
            this.setState(prevState => ({ showBlock: !prevState.showBlock }))
          }
        >
          Toggle
        </button>
        <br />
        {/* {this.state.showBlock ? (
          <Transition>
            <div
              style={{
                backgroundColor: "red",
                width: 100,
                height: 100,
                margin: "auto"
              }}
            >
              <br />
            </div>
          </Transition>
        ) : null} */}
        <Transition
          in={this.state.showBlock}
          timeout={1000}
          mountOnEnter
          unmountOnExit
          onEnter={() => {console.log('onEnter')}}
          onEntering={() => {console.log('onEntering')}}
          onEntered={() => {console.log('onEntered')}}
          onExit={() => {console.log('onExit')}}
          onExiting={() => {console.log('onExiting')}}
          onExited={() => {console.log('onExited')}}
        >
          {state => {
            return (
              <div
                className={this.state.showBlock ? "active" : "inactive"}
                style={{
                  backgroundColor: "red",
                  width: 100,
                  height: 100,
                  margin: "auto",
                  transition: "opacity 1s linear",
                  opacity: state === "exiting" ? 0 : 1
                }}
              />
            );
          }}
        </Transition>
        <br />
        <Modal
              closed={this.closeModalHandler} show={this.state.backdropModalActive}
            />
        {this.state.backdropModalActive ? (
          <Backdrop backdropActive={this.state.backdropModalActive} />
        ) : null}

        <button className="Button" onClick={this.openModalHandler}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
