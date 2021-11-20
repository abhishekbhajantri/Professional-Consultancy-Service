package com.pcsbackend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pcsbackend.entity.Certificate;
import com.pcsbackend.serviceImplementation.CertificateServiceImpl;

@RestController
@RequestMapping("/certificates")
public class CertificateController {

	@Autowired
	private CertificateServiceImpl certificateServiceImpl;
	
	@GetMapping("/all")
	public List<Certificate> getAllCertificates()
	{
		return certificateServiceImpl.getAllCertificates();
	}
	
	@PostMapping("/create")
	public void addCertificate(@RequestBody Certificate certificate)
	{
		certificateServiceImpl.createCertificate(certificate);
	}
	
//	@GetMapping("/certificates")
//	public ResponseEntity<List<Certificate>> getAllcertificates()
//	{
//		return ResponseEntity.ok(ci.getAllCertificates());
//	}

	@GetMapping("/getby/{id}")
	public Optional<Certificate> getById(@PathVariable Long id)
	{
		return certificateServiceImpl.searchById(id);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteCertificate(@PathVariable Long id)
	{
		certificateServiceImpl.deleteCertificate(id);
	}
}
