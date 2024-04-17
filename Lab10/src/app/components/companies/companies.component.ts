import {Component, OnInit} from '@angular/core';
import {Company} from "../../models/models";
import {CompaniesService} from "../../services/companies.service";
import {DataserviceService} from "../../services/dataservice.service";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  Companies: Company[] = []

  constructor(private companyService: CompaniesService, private dataService: DataserviceService) {
  }

  ngOnInit(): void {
    this.fetchCompanies();
  }

  fetchCompanies(): void {
    this.companyService.getCompanies().subscribe(companies => {
      this.Companies = companies;
      console.log('Companies:', this.Companies); // Log the retrieved companies
    });
  }

  deleteCompany(itemId: number) {
    return this.companyService.deleteCompany(itemId).subscribe(
      () => {
        console.log('Item deleted successfully')
        this.reloadPage()
      });
  }

  reloadPage() {
    window.location.reload()
  }

  public sendData(id: number): void {
    this.dataService.setData(id);
  }

}
