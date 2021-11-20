package com.pcsbackend.serviceImplementation;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pcsbackend.entity.Employee;
import com.pcsbackend.repository.EmployeeRepository;
import com.pcsbackend.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	@Override
	public List<Employee> getAllEmployees()
	{
		return employeeRepository.findAll();
	}

	@Override
	public void createEmployee(Employee employee) 
	{
		employeeRepository.save(employee);
	}

	@Override
	public Optional<Employee> searchById(Long employeeId) 
	{
		return employeeRepository.findById(employeeId);
	}

	@Override
	public void updateEmployee(Long employeeId, Employee employee) {
		try {
			Employee emp = employeeRepository.findById(employeeId).orElseThrow(() -> new Exception("no user found for this ID"+employeeId));
			emp.setFirstName(employee.getFirstName());
			emp.setLastName(employee.getLastName());
			emp.setAge(employee.getAge());
			emp.setEmailId(employee.getEmailId());
			emp.setPhoneNo(employee.getPhoneNo());
			emp.setAddress(employee.getAddress());
			emp.setSex(employee.getSex());
			emp.setRole(employee.getRole());
			emp.setSkills(employee.getSkills());
			emp.setCertifications(employee.getCertificates());
			employeeRepository.save(emp);
		} catch (Exception e2) 
		{
			e2.printStackTrace();
		}
	}

	@Override
	public void deleteEmployee(Long employeeId) 
	{
		employeeRepository.deleteById(employeeId);
	}
}
