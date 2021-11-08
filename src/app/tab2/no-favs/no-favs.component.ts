import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-favs',
  templateUrl: './no-favs.component.html',
  styleUrls: ['./no-favs.component.scss'],
})
export class NoFavsComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  searchNav() {
    this.router.navigate(['/buscador']);
  }

}
