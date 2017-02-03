import React, { Component } from 'react';
import '../css/ManageEmployees.css';

class ManageEmployees extends Component {
	constructor() {
		super();
		this.renderEmployees = this.renderEmployees.bind(this);
	}

	renderEmployees(key) {
		const employee = this.props.employees[key];

		return (
			<tr key={key}>
				<td>
					<input type="text" placeholder="Employee Name" name="username" value={employee.username} onChange={(e) => this.updateEmployee(e,key)}/>
				</td>
				<td>
					<input type="text" placeholder="Employee Email" name="email" value={employee.email} onChange={(e) => this.updateEmployee(e,key)}/>
				</td>
				<td>
					<i className="fa fa-trash" onClick={()=> this.deleteEmployee(key)}></i>
				</td>
			</tr>
		);
	}

	createEmployee(event) {
		console.log(event);
		event.preventDefault();

		const newEmployee = {
			username: this.username.value,
			email: this.email.value
		};

		this.username.value = '';
		this.email.value = '';

		this.props.addEmployee(newEmployee);
    	
	}

	updateEmployee(e, key) {
		const employee = this.props.employees[key];
		
		// tale a copy of that fish and update it with the new data
		const updatedEmployee = {
			...employee,
			[e.target.name]: e.target.value
		};

		console.log(updatedEmployee);

		this.props.updateEmployee(key, updatedEmployee);
	}

	deleteEmployee(key) {
		const isDeleted =  confirm('Would you like to delete the employee?');

		if (isDeleted) {
			this.props.removeEmployee(key);
		}
	}

	render() {
		return(
			<div className="container employee-edit" >
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

				<table className="table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{ Object.keys(this.props.employees).map(this.renderEmployees) }
					</tbody>
				</table>

				<form onSubmit={(e) => this.createEmployee(e)}>
					<input className="input-field" ref={input => this.username = input } type="text" placeholder="Employee Name" />
					<input className="input-field" ref={input => this.email = input } type="text" placeholder="Employee Email" />
					<input className="btn" type="submit" value="Add" />
				</form>
			</div>
		);
	}
}

export default ManageEmployees;