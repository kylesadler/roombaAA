const Text = require('../models/text.js');
const util = require('../util.js');

module.exports = {
	//Find All Employee
	getAllEmployees: (req, response) =>
	{
		Employee.find({}, util.handleQuery(response));
	},

	//Find One Employee By MongoDB ID
	getEmployee: (req, response) =>
	{
		Employee.findById(req.params.id, util.handleQuery(response));
	},
	
	//Find One Employee By employeeID
	getEmployeeByEmployeeId: (req, response) =>
	{
		Employee.find({employeeId: req.params.employeeId}, util.handleQuery(response));
	},

	//Check if a employee is a Manager
	isManager: (req, response) =>
	{
		Employee.findById(req.params.id, (err, employee) =>
		{
			if(err)
			{
				handleError(response, err.message);
			}
			if(!employee) {
				response.status(404);
				response.send();
				return;
			}
			response.status(200);
			response.send(employee.employeeType === 'General Manager' || employee.employeeType === 'Shift Manager');
		});
	},

	//Add Employee
	addEmployee: (req, response) =>
	{
		var data = req.body;
		var employee = new Employee(data);
		Employee.find().sort({employeeId: -1}).limit(1).exec((err, employeeWithHighestEmployeeId) => {
			if(employeeWithHighestEmployeeId.length > 0) {
				employee.employeeId = employeeWithHighestEmployeeId[0].employeeId + 1;
			}
			else {
				employee.employeeId = 1;
			}
			employee.save(util.handleQuery(response));
		});
	},


	//Update Employee
	updateEmployee: (req, response) =>
	{
		Employee.findByIdAndUpdate(req.params.id, req.body, util.handleQuery(response));
	},

	// Delete record
	deleteEmployee: (req, response) => {
		Employee.deleteOne({employeeId: req.params.id}, util.handleQuery(response));
	},

	deleteAll: (request, response) =>
	{
		Employee.deleteMany({}, util.handleQuery(response));
	}
};
