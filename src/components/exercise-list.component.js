import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Exercise = props => {
	return(
	<tr>
		<td>{props.exercise.username}</td>
      	<td>{props.exercise.description}</td>
      	<td>{props.exercise.duration}</td>
      	<td>{props.exercise.date.substring(0,10)}</td>
      	<td>
      		<Link to={"/edit/"+props.exercise._id}>Edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id)}}>Delete</a>
      	</td>
	</tr>
	)
}


export default class ExerciseList extends Component{
	constructor(props) {
		super(props);

		this.deleteExercise = this.deleteExercise.bind(this);

		this.state = {exercise: []};
	}


	componentDidMount() {
		axios.get('http://localhost:5000/exercises/')
			.then(response => {
				this.setState({ exercise: response.data})
			})
			.catch((error) => {
				console.log(error);
			})
	}

	deleteExercise(id) {
		axios.delete('http://localhost:5000/exercises/' + id)
			.then(res => console.log(res.data));
		this.setState({
			exercises: this.state.exercise.filter(el => el._id !== id)
		})
	}


	exerciseList() {
		return this.state.exercise.map(currentexercise => {
			return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />;
		})
	}

	render() {
		return (
				<div>
					<h3>Logged Exercise</h3>
					<table className="table">
					  <thead className="thead-dark">
					    <tr>
					      <th scope="col">Username</th>
					      <th scope="col">Description</th>
					      <th scope="col">Duration</th>
					      <th scope="col">Date</th>
					      <th scope="col">Actions</th>
					    </tr>
					  </thead>
					  <tbody>
					    	{ this.exerciseList() }
					  </tbody>
					</table>
				</div>
			)
	}
}