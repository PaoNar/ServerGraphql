import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import gql from 'graphql-tag';
import { Cursos, Query} from '../type'; 
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
cursos:Observable<Cursos[]>;
  constructor(private apollo:Apollo) { }

  ngOnInit(): void {
  this.cursos= this.apollo.watchQuery<Query>({
  query:gql`
  query getCursos{
    getCursos{
      titulo
    profesor
    descripcion
    genero
    }
  }`
  })
     .valueChanges
     .pipe(
      map(result=>result.data.getCursos)
    );
  }

}
