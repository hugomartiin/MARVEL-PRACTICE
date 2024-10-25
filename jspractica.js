fetch("./data/heros.json")
  .then((response) => response.json())
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


    // image
    const imagen = card.querySelector(".card-img-top");
    imagen.src = `${hero.thumbnail.path}.${hero.thumbnail.extension}`;

    // name
    const name = card.querySelector(".card-title");
    name.textContent = hero.name;
  

    //accordeonId
    const accordionId = hero.id;

    // description
    const description = card.querySelector(".accordion-body");
    description.textContent = hero.description;

    const accordion = card.querySelector("#accordion");
    accordion.id = `accordion_${accordionId}`;

    const collapseDescription = card.querySelector("#collapse_description_");
    const headingDescription = card.querySelector("#heading_description_");
    collapseDescription.id = `collapse_description_${accordionId}`;
    headingDescription.id = `heading_description_${accordionId}`;

    const descriptionButton = card.querySelector("[data-bs-target='#collapse_']");
    descriptionButton.setAttribute('data-bs-target', `#collapse_description_${accordionId}`);
    descriptionButton.setAttribute('aria-controls', `collapse_description_${accordionId}`);


    // comics
    const comicsList = card.querySelector("#comics-list");
    comicsList.innerHTML = "";
    for (const comic of hero.comics.items) {
      const listItem = document.createElement("li");
      listItem.textContent = comic.name;
      comicsList.appendChild(listItem);
    }
  
    const comicsAvailable  = card.querySelector(".available-comics");
    comicsAvailable.innerHTML=`Available: ${hero.comics.available}`;

    const collapseComics = card.querySelector("#collapse_comics_");
    const headingComics = card.querySelector("#heading_comics_");
    collapseComics.id = `collapse_comics_${accordionId}`;
    headingComics.id = `heading_comics_${accordionId}`;

    const comicsButton = card.querySelector("[data-bs-target='#collapse_comics_']");
    comicsButton.setAttribute('data-bs-target', `#collapse_comics_${accordionId}`);
    comicsButton.setAttribute('aria-controls', `collapse_comics_${accordionId}`);
      
    
    // series
    const seriesList = card.querySelector("#series-list");
    seriesList.innerHTML = "";
    for (const series of hero.series.items) {
        const listItem = document.createElement("li");
        listItem.textContent = series.name;
        seriesList.appendChild(listItem);
    }
  
    
    const seriesAvailable  = card.querySelector(".available-series");
    seriesAvailable.innerHTML=`Available: ${hero.series.available}`;

    const collapseSeries = card.querySelector("#collapse_series_");
    const headingSeries = card.querySelector("#heading_series_");
    collapseSeries.id = `collapse_series_${accordionId}`;
    headingSeries.id = `heading_series_${accordionId}`;

    const seriesButton = card.querySelector("[data-bs-target='#collapse_series_']");
    seriesButton.setAttribute('data-bs-target', `#collapse_series_${accordionId}`);
    seriesButton.setAttribute('aria-controls', `collapse_series_${accordionId}`);
    

    cardRow.append(card);
  }
}
