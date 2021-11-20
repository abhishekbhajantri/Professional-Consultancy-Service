package com.pcsbackend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.pcsbackend.entity.Employee;

@Service
public interface EmployeeService {

	public List<Employee> getAllEmployees();
	public void createEmployee(Employee employee);
	public Optional<Employee> searchById(Long employeeId);
	public void updateEmployee(Long employeeId,Employee employee);
	public void deleteEmployee(Long employeeId);
}
