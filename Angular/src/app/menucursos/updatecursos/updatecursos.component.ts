import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cursos, Query } from '../../modelos/curso';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import gql from 'graphql-tag';
@Component({
  selector: 'app-updatecursos',
  templateUrl: './updatecursos.component.html',
  styleUrls: ['./updatecursos.component.scss'],
})
export class UpdatecursosComponent implements OnInit, OnDestroy {
  curso: any;
  editcursosforms: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apollo: Apollo
  ) {
    if (sessionStorage.getItem('curso')) {
      this.curso = sessionStorage.getItem('curso');
      this.curso = this.apollo
        .watchQuery<Query>({
          query: gql`
            query getCursos {
              getCursos {
                titulo
                profesor
                genero
                descripcion
                # asistentes
              }
            }
          `,
        })
        .valueChanges
        .pipe(
          map(result => result.data.getCursos)
        );
    }
  }

  ngOnInit(): void {
    this.editcursosforms = this.formBuilder.group({
      titulo: ['', Validators.required],
      profesor: ['', Validators.required],
      description: ['', Validators.required],
      asignatura: ['', Validators.required],
    });
  }

  ngOnDestroy(): void {}
}
