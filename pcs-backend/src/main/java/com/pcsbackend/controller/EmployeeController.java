package com.pcsbackend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pcsbackend.entity.Employee;
import com.pcsbackend.serviceImplementation.EmployeeServiceImpl;

@RestController
@RequestMapping("/employees")
public class EmployeeController {

	@Autowired
	private EmployeeServiceImpl employeeServiceImpl;
	
	//GET ALL EMPLOYEES
	@GetMapping("/all")
	public List<Employee>getAllEmployees()
	{
		return employeeServiceImpl.getAllEmployees();
	}
	
	//ADD NEW EMPLOYEE
	@PostMapping("/create")
	public void createEmployee(@RequestBody Employee employee)
	{
		employeeServiceImpl.createEmployee(employee);
	}
	
	//GET EMPLOYEE BY ID
	@GetMapping("/getby/{id}")
	public Optional<Employee> getEmployeeById(@PathVariable Long id)
	{
		return employeeServiceImpl.searchById(id);
	}
	
	//UPDATE EMPLOYEE
	@PutMapping("/update/{id}")
	public void update_employee(@PathVariable Long id, @RequestBody Employee employee)
	{
		employeeServiceImpl.updateEmployee(id, employee);
	}
	
	//DELETE EMPLOYEE
	@DeleteMapping("/delete/{id}")
	public void deleteEmployee(@PathVariable Long id)
	{
		employeeServiceImpl.deleteEmployee(id);
	}
}
