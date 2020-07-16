import { type } from 'os'

export type Estudiantes ={
    apellido:String;
    nombre:String;
    email:string;
    direccion:string;
    edad:string;
    foto:string;
}

export type Query = {
    getEstudiantes:Estudiantes[]
}

export type Mutation={
    nuevoCurso:Estudiantes[];
    editarEstudiante:Estudiantes[]
}