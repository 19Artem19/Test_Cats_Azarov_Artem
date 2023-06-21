import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Breeds } from 'src/app/interfaces';
import { CatsService } from 'src/app/services/cats.service';

@Component({
  selector: 'app-filter-cats',
  templateUrl: './filter-cats.component.html',
  styleUrls: ['./filter-cats.component.scss']
})
export class FilterCatsComponent implements OnInit {

  subscription = new Subscription;

  breeds: Breeds[] = [];
  selectedBreed?: string;
  images?: any;

  constructor(private catService: CatsService) { }


  ngOnInit(): void {
    this.subscription.add(this.catService.getBreeds().subscribe((breed) => {
      this.breeds = breed
      console.log('all breeds', this.breeds);
    }))
  }

  onBreedSelectChange(): void {
    if (!this.selectedBreed) {
      return
    }
    this.subscription.add(this.catService.getCatsImagesByBreed(this.selectedBreed, 10).subscribe((list) => {
      this.images = list
      console.log('images', this.images);
    }))
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}




