import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-insertcursos',
  templateUrl: './insertcursos.component.html',
  styleUrls: ['./insertcursos.component.scss']
})
export class InsertcursosComponent implements OnInit {
  createcursoForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.createcursoForm = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      profesor: ['', [Validators.required]],
      description: ['', [Validators.required]],
      // asistentes: ['', [Validators.required]],
    });
  }

}
