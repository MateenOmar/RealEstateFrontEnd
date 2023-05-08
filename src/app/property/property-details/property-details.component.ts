import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { Property } from 'src/app/model/Property';
import { HousingService } from 'src/app/services/housing.service';
import { NgxGalleryImage } from '@kolkov/ngx-gallery';
import { NgxGalleryAnimation } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css'],
})
export class PropertyDetailsComponent implements OnInit {
  public propertyID!: number;
  property = new Property();
  galleryOptions!: NgxGalleryOptions[];
  galleryImages!: NgxGalleryImage[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private housingService: HousingService
  ) {}

  ngOnInit() {
    this.propertyID = Number(this.route.snapshot.params['id']);
    this.route.data.subscribe((data: any) => {
      this.property = data['prop'];
    });

    // this.route.params.subscribe((params) => {
    //   this.propertyID = +params['id'];
    //   this.housingService
    //     .getProperty(this.propertyID)
    //     // .subscribe((data: Property) => {
    //     //   this.property = data;
    //     // });
    //     .subscribe(
    //       (data: any) => {
    //         this.property = data;
    //       },
    //       (error) => this.router.navigate(['/'])
    //     );
    // });

    this.galleryOptions = [
      {
        width: '100%',
        height: '600px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
      },
    ];

    this.galleryImages = [
      {
        small: 'assets/images/house1.png',
        medium: 'assets/images/house1.png',
        big: 'assets/images/house1.png',
      },
      {
        small: 'assets/images/house2.png',
        medium: 'assets/images/house2.png',
        big: 'assets/images/house2.png',
      },
      {
        small: 'assets/images/livingRoom1.png',
        medium: 'assets/images/livingRoom1.png',
        big: 'assets/images/livingRoom1.png',
      },
      {
        small: 'assets/images/kitchen1.png',
        medium: 'assets/images/kitchen1.png',
        big: 'assets/images/kitchen1.png',
      },
      {
        small: 'assets/images/bathroom1.png',
        medium: 'assets/images/bathroom1.png',
        big: 'assets/images/bathroom1.png',
      },
      {
        small: 'assets/images/garage1.png',
        medium: 'assets/images/garage1.png',
        big: 'assets/images/garage1.png',
      },
    ];
  }
}
