document.addEventListener("DOMContentLoaded", () => {
  fetch("artes.json")
      .then(response => response.json())
      .then(data => {
          const gallery = document.getElementById("gallery");

          data.forEach(art => {
              const artContainer = document.createElement("div");
              artContainer.classList.add("art-container");

              const artImage = document.createElement("img");
              artImage.src = art.imagem;
              artImage.alt = art.descricao;
              artImage.classList.add("art-image");

              const artDetails = document.createElement("div");
              artDetails.classList.add("art-details");

              const artName = document.createElement("h3");
              artName.textContent = art.nome;

              const artistName = document.createElement("p");
              artistName.textContent = art.artista;

              const artDescription = document.createElement("p");
              artDescription.textContent = art.descricao;
              artDescription.classList.add("art-description");

              const interactionIcons = document.createElement("div");
              interactionIcons.classList.add("interaction-icons");

              ["heart", "comment", "plus", "dollar-sign"].forEach(icon => {
                  const iconElement = document.createElement("i");
                  iconElement.classList.add("fas", `fa-${icon}`);
                  interactionIcons.appendChild(iconElement);
              });

              artDetails.appendChild(artName);
              artDetails.appendChild(artistName);
              artDetails.appendChild(artDescription);
              artDetails.appendChild(interactionIcons);

              artContainer.appendChild(artImage);
              artContainer.appendChild(artDetails);

              gallery.appendChild(artContainer);
          });
      })
      .catch(error => console.error("Erro ao carregar os dados:", error));
});
