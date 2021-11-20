package com.pcsbackend.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Certificate {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long certificateId;
	private String certificateName;
	private String certificateDescription;
	@JsonIgnore
	@ManyToMany(mappedBy = "certificates")
	private List<Employee> employees;
	
	
	public Certificate() {
		super();
	}
	public Certificate(Long certificateId, String certificateName, String certificateDescription,
			List<Employee> employees) {
		super();
		this.certificateId = certificateId;
		this.certificateName = certificateName;
		this.certificateDescription = certificateDescription;
		this.employees = employees;
	}
	public Long getCertificateId() {
		return certificateId;
	}
	public void setCertificateId(Long certificateId) {
		this.certificateId = certificateId;
	}
	public String getCertificateName() {
		return certificateName;
	}
	public void setCertificateName(String certificateName) {
		this.certificateName = certificateName;
	}
	public String getCertificateDescription() {
		return certificateDescription;
	}
	public void setCertificateDescription(String certificateDescription) {
		this.certificateDescription = certificateDescription;
	}
	public List<Employee> getEmployees() {
		return employees;
	}
	public void setEmployees(List<Employee> employees) {
		this.employees = employees;
	}
	
	
}
