/**
 * This code is just to read the json file. Don't worry about it. We will see it in detail in next sectioins
 * Write your own code in the procesarJSON function
 */

/**
 * Este código es solo para leeer el archivo json. No os preocupéis por él, lo veremos y lo analizaremos en próximos capítulos
 * Escribir vuestro código en la función procesarJSON
 */

fetch("./data/heros.json")
  .then((response) => {
    return response.json();
  })
  .then((jsondata) => {
    console.log(jsondata);
    renderCards(jsondata);
  })
  .catch((e) => {
    console.log(e);
  });
  
  const cardRow = document.querySelector(".row");

  function renderCards(jsondata) {
    const template = document.querySelector("template").content;
    for (const hero of jsondata.data.results) {
      let card = template.cloneNode(true);
      
      const imagen = card.querySelector(".card-img-top");
      imagen.src= `${hero.thumbnail.path}.${hero.thumbnail.extension}`;
      const name = card.querySelector(".card-title");
      name.textContent = hero.name;
      cardRow.append(card);
    }
  
  
    
  
  
  

  
  } 

