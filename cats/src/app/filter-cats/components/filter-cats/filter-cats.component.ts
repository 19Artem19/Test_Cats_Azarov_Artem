import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { Breed, Breeds } from 'src/app/interfaces';
import { CatsService } from 'src/app/services/cats.service';

@Component({
  selector: 'app-filter-cats',
  templateUrl: './filter-cats.component.html',
  styleUrls: ['./filter-cats.component.scss']
})
export class FilterCatsComponent implements OnInit {

  subscription = new Subscription;
  title: string = 'Breeds';

  breeds: Breeds[] = [];
  selectedBreed: string[] = [];
  imagesBreed: Breed[] = [];
  selectedAmount?: number;
  defaultQuantityDisplayed: number = 10;
  showDisplayedImages: boolean = false;
  notDisplayedPictures: number = 0;

  breedsCats = new FormControl('');

  amountBreeds: { key: string }[] = [
    { key: '5' },
    { key: '10' },
    { key: '15' },
    { key: '20' }
  ];

  constructor(private catService: CatsService,
    private titleService: Title) { }

  ngOnInit(): void {
    this.subscription.add(this.catService.getBreeds().subscribe((breed) => {
      this.breeds = breed
    }))

    this.subscription.add(
      this.titleService.setTitle(this.title)
    )
  }

  onDisplayedPicturesChange(): void {
    if (!this.selectedBreed || this.selectedBreed.length === 0) {
      return;
    }
    this.getImages()
  }

  onBreedSelectChange(): void {
    if (!this.selectedBreed || this.selectedBreed.length === 0) {
      this.imagesBreed = [];
      this.showDisplayedImages = false;
      this.defaultQuantityDisplayed = this.notDisplayedPictures;
      return
    }
    this.getImages()
  }

  getImages() {
    const selectedBreedIds = this.selectedBreed as string[];
    if (selectedBreedIds.length === 0) {
      this.defaultQuantityDisplayed = this.notDisplayedPictures;
      return;
    }

    let limit: number;
    if (this.defaultQuantityDisplayed === 0) {
      limit = 10;
    } else {
      limit = this.defaultQuantityDisplayed;
    }
    this.subscription.add(this.catService.getCatsImagesByBreed(selectedBreedIds, limit).subscribe((list) => {
      this.imagesBreed = list;
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}




