/*
* @flow
*/

import React, { Component } from "react";
import styled from "styled-components";
import TimerCountdown from "react-native-timer-countdown";

import { MAIN_COLOR } from "../../config/constants";

type Props = {};
const counterStyle = {
  fontSize: 60,
  color: MAIN_COLOR,
  textAlign: "center"
};

const Container = styled.View`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  padding-top: 40px;
  height: 40%;
`;

class Counter extends Component<Props> {
  render() {
    return (
      <Container>
        <TimerCountdown
          initialSecondsRemaining={0}
          onTimeElapsed={() => console.log("complete")}
          allowFontScaling={true}
          style={counterStyle}
        />
      </Container>
    );
  }
}

export default Counter;
