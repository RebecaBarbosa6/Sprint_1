// JSON descrições
const artPosts = {
    "artPosts": [
      {
        "id": 1,
        "artist": "isabela_araujo",
        "profile_picture": "https://example.com/profiles/isabela_araujo.jpg",
        "art_title": "Reflexos da Alma",
        "description": "🎨✨ Esta obra captura a dualidade da felicidade e da tristeza. Espero que vocês sintam a conexão! #ArteDigital #Emoções",
        "art_type": "digital painting",
        "media": [
          {
            "type": "image",
            "url": "https://example.com/art/reflexos_da_alma.jpg"
          }
        ],
        "date": "2024-10-06T10:15:00Z",
        "likes": 120
      },
      {
        "id": 2,
        "artist": "pedro_silva",
        "profile_picture": "https://example.com/profiles/pedro_silva.jpg",
        "art_title": "Cidades Futuristas",
        "description": "Uma visão de como as cidades poderiam ser em um futuro distante. 🌆🚀 O uso de luz e sombra dá vida a essa cidade imaginária! #ArteConceitual #Futuro",
        "art_type": "concept art",
        "media": [
          {
            "type": "image",
            "url": "https://example.com/art/cidades_futuristas.jpg"
          }
        ],
        "date": "2024-10-05T14:45:00Z",
        "likes": 250
      }
    ]
  };
  
  function formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
  }
  
  function displayPosts() {
      const postsSection = document.getElementById('postsSection');
      postsSection.innerHTML = ''; 
  
      artPosts.artPosts.forEach(post => {
          const newPost = document.createElement('div');
          newPost.classList.add('post');
  
          const postHeader = document.createElement('div');
          postHeader.classList.add('post-header');
          postHeader.innerHTML = `
              <img src="${post.profile_picture}" alt="${post.artist}">
              <h2>${post.artist}</h2>
          `;
          newPost.appendChild(postHeader);
  
          const postTitle = document.createElement('h3');
          postTitle.textContent = post.art_title;
          newPost.appendChild(postTitle);
  
          const postDescription = document.createElement('p');
          postDescription.classList.add('post-description');
          postDescription.textContent = post.description;
          newPost.appendChild(postDescription);
  
          if (post.media.length > 0 && post.media[0].type === 'image') {
              const artImage = document.createElement('img');
              artImage.src = post.media[0].url;
              artImage.alt = post.art_title;
              newPost.appendChild(artImage);
          }
  
          const postFooter = document.createElement('div');
          postFooter.classList.add('post-footer');
          postFooter.innerHTML = `
              <span class="likes">❤️ ${post.likes} curtidas</span>
              <span class="date">${formatDate(post.date)}</span>
          `;
          newPost.appendChild(postFooter);
  
          postsSection.appendChild(newPost);
      });
  }
  
  window.onload = displayPosts;
  