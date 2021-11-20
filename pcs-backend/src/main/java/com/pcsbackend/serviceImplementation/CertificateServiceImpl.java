package com.pcsbackend.serviceImplementation;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pcsbackend.entity.Certificate;
import com.pcsbackend.repository.CertificateRepository;
import com.pcsbackend.service.CertificateService;

@Service
public class CertificateServiceImpl implements CertificateService{
	
	@Autowired
	private CertificateRepository certificateRepository;

	@Override
	public List<Certificate> getAllCertificates() 
	{
		return certificateRepository.findAll();
	}

	@Override
	public void createCertificate(Certificate certificate) 
	{
		certificateRepository.save(certificate);
	}

	@Override
	public Optional<Certificate> searchById(Long certificateId) 
	{
		return certificateRepository.findById(certificateId);
	}

	@Override
	public void deleteCertificate(Long certificateId) 
	{
		certificateRepository.deleteById(certificateId);
	}

}
