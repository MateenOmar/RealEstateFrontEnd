import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  public propertyID!: number;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.propertyID = Number(this.route.snapshot.params['id']);
    this.route.params.subscribe(
      (params) =>{
        this.propertyID = +params['id'];
      }
    )
  }

  onSelectNext(){
    this.propertyID += 1;
    this.router.navigate(['property-detail', this.propertyID]);
  }

}
