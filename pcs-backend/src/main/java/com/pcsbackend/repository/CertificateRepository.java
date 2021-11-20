package com.pcsbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pcsbackend.entity.Certificate;

@Repository
public interface CertificateRepository extends JpaRepository<Certificate, Long>{

}
