let ejemplo = document.getElementById("demo")
            console.log(ejemplo)
            ejemplo.innerHTML = "hola" 

     export function imagen(id) {
        
        const componente=" <figure>"+
        '<img src="https://picsum.photos/id/' +id+ '/200/200" alt="">'+
        " <figcaption>john</figcaption>"+
     "</figure>" 
       
        return componente

     }

     export const Picture = (id) => {
        return `
        <figure> 
        <img src="https://picsum.photos/id/${id}/200/200" alt=""> 
        <figcaption>john</figcaption> 
        </figure> `
      

     }


     // ejemplo.innerHTML = "hola" + imagen(1) + imagen(2) 
     ejemplo.innerHTML = "hola" + Picture 