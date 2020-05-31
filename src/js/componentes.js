import '../css/componentes.css';


export const holaMundo = ()=>{
    
    console.log('Running...');
    const titulo = 'Webpack configuration';
    const h1 = document.createElement('h1');
    h1.innerText = 'Hola Mundo';
    document.body.append(h1);

    const title = document.querySelector('title');
    title.innerText =  `${titulo}`;
    
}