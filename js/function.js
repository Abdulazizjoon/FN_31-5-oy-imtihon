function createCard(data) {
  return `
  <div class="wrapper_header">
          <h1 class="h1">${data[0].word}</h1>
          <audio class="newaudio" src=""></audio>
          <button class="bottom"><img src="./img/Path 2.svg" alt="" /></button>
        </div>
        <p class="biot">${data[0].phonetic} </p>
        <div class="flex">
          <p>${data[0].meanings[0].partOfSpeech}</p>
          <div class="tiziqq"></div>
        </div>
        <div class="mining">
          <p>Meaning</p>
          <ul class="ul">
            
              ${data[0].meanings[0].definitions
                .map((value) => {
                  return `<li>${value.definition}</li>`;
                })
                .join("")}
            
          </ul>
          <div class="fle">
            <h3>Synonyms</h3>
            <h3>${data[0].meanings[0].synonyms[0]}</h3>
          </div>
        </div>
        <div class="verb">
          <div class="flex">
            <p>${data[0].meanings[1].partOfSpeech}</p>
            <div class="tiziqq"></div>
          </div>
          <div class="mining">
            <ul class="ul">
            ${data[0].meanings[1].definitions
              .map((value) => {
                return `<li>${value.definition}</li>`;
              })
              .join("")}
              
              <p id="keyboard">
              “${data[0].meanings[1].definitions[0].example}”
              </p>
              <div class="mining_tiziq"></div>
              <div class="source">
                <a class="a" href="#"><p>Source</p></a>
                <a href="${data[0].sourceUrls[0]}"
                  ><p style="color: #2d2d2d">
                    ${data[0].sourceUrls[0]}
                  </p></a
                >
                <img src="./img/Shape (1).svg" alt="" />
              </div>
            </ul>
          </div>
        </div>
  `;
}
function err() {
  return `
        <img class="emoji" src="./img/😕.png" alt="">
        <h3 class="nodefinate">No Definitions Found</h3>
        <p class="paragref">Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
  `;
}
function nall() {
  return `
        <p class="woops">Whoops, can’t be empty…</p>

  `;
}
export { createCard, err, nall };
