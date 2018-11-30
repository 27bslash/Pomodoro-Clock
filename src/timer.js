import React, { Component } from 'react';
import './App.css';

export const test ='test'
export class Timer extends Component {
	state = {
		sessionLength: '25',
		breakLength: '5',

	}
	
  incrementSessionLength(){
		const { sessionlength } = this.state
		this.setState({
			sessionLength: 'test'
		})
		}
	decrementSessionLength(){
		const { sessionlength } = this.state
		this.setState({
			sessionLength: 'test'
		})
		}
	incrementBreakLength(){
		const { sessionlength } = this.state
		this.setState({
			sessionLength: 'test'
		})
		}
	decrementBreakLength(){
		const { sessionlength } = this.state
		this.setState({
			sessionLength: 'test'
		})
		}
	}