import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import MyCard from "./components/MyCard";

class App extends React.Component {
  state = {
    person: {
      fullName: "BILL GATES",
       
      imgSrc:
        "https://pbs.twimg.com/profile_images/1674815862879178752/nTGMV1Eo_400x400.jpg",
      profession: "Former CEO of Microsoft",
    },
    show: false,
    mountedTime: 0,
  };

  // Lifecycle method: componentDidMount
  componentDidMount() {
    // Set up an interval to update mountedTime every second
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1,
      }));
    }, 1000);
  }

  // Lifecycle method: componentWillUnmount
  componentWillUnmount() {
    // Clear the interval to avoid memory leaks
    clearInterval(this.intervalId);
  }

  // Custom method: toggleShow
  toggleShow = () => {
    // Toggle the value of 'show' in the state
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    return (
      <>
        {this.state.show && <MyCard person={this.state.person} />}
        <button onClick={this.toggleShow}>toggle me!</button>
      </>
    );
  }
}

export default App;