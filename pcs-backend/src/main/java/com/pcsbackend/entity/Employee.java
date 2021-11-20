package com.pcsbackend.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

@Entity
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long employeeId;
	private String firstName;
	private String lastName;
	private String emailId;
	private String age;
	private String sex;
	private String phoneNo;
	private String address;
	private String role;
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(name="employee_skill",joinColumns=@JoinColumn(name="employee_id",referencedColumnName ="employeeId"),inverseJoinColumns = @JoinColumn(name="skill_id",referencedColumnName ="skillId" ))
	private List<Skill> skills;
	
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(name="employee_certificate",joinColumns=@JoinColumn(name="employee_id",referencedColumnName ="employeeId"),inverseJoinColumns = @JoinColumn(name="certificate_id",referencedColumnName ="certificateId" ))
	private List<Certificate> certificates;

	
	public Employee() {
		super();
	}

	public Employee(Long employeeId, String firstName, String lastName, String emailId, String age, String sex,
			String phoneNo, String address, String role, List<Skill> skills, List<Certificate> certificates) {
		super();
		this.employeeId = employeeId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
		this.age = age;
		this.sex = sex;
		this.phoneNo = phoneNo;
		this.address = address;
		this.role = role;
		this.skills = skills;
		this.certificates = certificates;
	}

	public Long getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(Long employeeId) {
		this.employeeId = employeeId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public List<Skill> getSkills() {
		return skills;
	}

	public void setSkills(List<Skill> skills) {
		this.skills = skills;
	}

	public List<Certificate> getCertificates() {
		return certificates;
	}

	public void setCertifications(List<Certificate> certificates) {
		this.certificates = certificates;
	}
}
