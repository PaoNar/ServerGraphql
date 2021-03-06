import { type } from 'os'

export type Cursos ={
    titulo:String;
    profesor:string;
    descripcion:string;
    genero:string;
    asistentes:Array<any>;
}

export type Query = {
    getCursos:Cursos[],
   
}

export type Mutations = {
    nuevoCurso:Cursos[],
}