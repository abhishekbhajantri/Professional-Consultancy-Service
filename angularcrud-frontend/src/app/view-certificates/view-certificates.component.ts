import { Component, OnInit } from '@angular/core';
import { Certificate } from '../certificate';
import { CertificateService } from '../certificate.service';

@Component({
  selector: 'app-view-certificates',
  templateUrl: './view-certificates.component.html',
  styleUrls: ['./view-certificates.component.css']
})
export class ViewCertificatesComponent implements OnInit {

  constructor( private certificateService: CertificateService) { }
  certificates: Certificate[]=[];
  ngOnInit(): void {
    this.getAllCertificates();
  }

  getAllCertificates()
  {
    this.certificateService.getCertificatesList().subscribe(data => {
      this.certificates = data;
      console.log(data);
    });
  }
}
