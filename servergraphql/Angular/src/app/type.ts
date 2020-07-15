export type Cursos ={
    titulo:String;
    profesor:string;
    descripcion:string;
    genero:string;
}

export type Query = {
    getCursos:Cursos[]
}