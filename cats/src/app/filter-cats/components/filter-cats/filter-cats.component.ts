import { Component, OnInit } from '@angular/core';
import { CatImages } from 'src/app/interfaces';
import { CatsService } from 'src/app/services/cats.service';

@Component({
  selector: 'app-filter-cats',
  templateUrl: './filter-cats.component.html',
  styleUrls: ['./filter-cats.component.scss']
})
export class FilterCatsComponent implements OnInit {

  data: CatImages[] = [];

  constructor(private catService: CatsService) { }

  ngOnInit(): void {

    this.catService.getCats().subscribe((data) => {
      this.data = data;
      console.log(111, this.data);
    });
   
  }
}



