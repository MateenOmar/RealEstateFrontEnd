import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';
import { IPropertyBase } from 'src/app/model/IPropertyBase';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form')
  addPropertyForm!: NgForm;
  @ViewChild('formTabs')
  formTabs!: TabsetComponent;

  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex']
  furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished']

  propertyView: IPropertyBase = {
    ID: null!,
    SellRent: null!,
    Name: '',
    PType: null!,
    FType: null!,
    Price: null!,
    BHK: null!,
    BuiltArea: null!,
    City: null!,
    RTM: null!
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBack() {
    this.router.navigate(['/'])
  }

  onSubmit(){
    console.log("submitted");
    console.log(this.addPropertyForm);
  }

  selectTab(tabID: number) {
    this.formTabs.tabs[tabID].active = true;
  }

}
