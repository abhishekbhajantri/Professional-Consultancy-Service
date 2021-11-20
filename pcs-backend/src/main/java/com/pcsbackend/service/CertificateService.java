package com.pcsbackend.service;

import java.util.List;
import java.util.Optional;

import com.pcsbackend.entity.Certificate;


public interface CertificateService {

	public List<Certificate> getAllCertificates();
	public void createCertificate(Certificate certificate);
	public Optional<Certificate> searchById(Long certificateId);
	public void deleteCertificate(Long certificateId) ;
}
