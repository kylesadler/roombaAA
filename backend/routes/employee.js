var express = require('express');
var router = express.Router();
var employeeApi = require('../api/employee.js');

router.get("/", (request, response) => {
  console.log("GET api/employee/");
  employeeApi.getAllEmployees(request, response);
});

router.get("/:id", (request, response) => {
  console.log("GET api/employee/" + request.params.id);
  employeeApi.getEmployee(request, response);
});

router.get("/isManager", (request, response) => {
  console.log("GET api/employee/isManager");
  employeeApi.isEmployeeManager(request, response);
});

// This fetches the employee by the employeeId field that we display, not the _id.
router.get("/byEmployeeId/:employeeId", (request, response) => {
  console.log("GET api/employee/byEmployeeId" + request.params.id);
  employeeApi.getEmployeeByEmployeeId(request, response);
});

router.post("/", (request, response) => {
  console.log("POST api/employee/");
  employeeApi.addEmployee(request, response);
});

router.patch("/:id", (request, response) => {
  console.log("PATCH api/employee/");
  employeeApi.updateEmployee(request, response);
});

router.delete("/:id", (request, response) => {
  console.log("DELETE api/employee/");
  employeeApi.deleteEmployee(request, response);
});

router.delete("/debug/all", (request, response) => {
  console.log("DELETE /api/employee/debug/all");
  employeeApi.deleteAll(request, response);
})

module.exports = router;
