// Add, remove, modify your articles here
  document.addEventListener("DOMContentLoaded", function() {
    var articles = [
		{
			onClickLink: 'https://www.youtube.com/watch?v=eVGxGg0TAjA',
			imageSource: 'https://img.youtube.com/vi/eVGxGg0TAjA/maxresdefault.jpg',
			title: 'Rollercoin Oyun Oyna Para Kazan | Yeni Mini Event Geldi'
		},
		{
			onClickLink: 'https://rollercoin.com/faq',
			imageSource: 'https://rollercoin.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffaq.810496ea.png&w=384&q=75',
			title: 'RollerCoin hakkında sorulan sorular.'
		},
		{
			onClickLink: 'https://rollercoin.com/how-it-works/basics',
			imageSource: 'https://rollercoin.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmount.cd7bf810.png&w=384&q=75',
			title: 'Nasıl kazım yapabilirim?'
		},
		{
			onClickLink: 'https://www.youtube.com/watch?v=-YjltjGIOuI',
			imageSource: 'https://img.youtube.com/vi/-YjltjGIOuI/maxresdefault.jpg',
			title: '9. Sezon: Dünya Çapında - Yayın Fragmanı'
		},
		
    ]

    var rootElement = document.getElementById("imageGalleryWithTitle");

    for (let i=0; i < articles.length; i++) {
      //Create the container
      var itemContainer = document.createElement("a");
      itemContainer.classList.add("article-container");
      var href = document.createAttribute("href");
      href.value = articles[i].onClickLink;
      itemContainer.setAttributeNode(href);
      var target = document.createAttribute("target");
      target.value = '_blank';
      itemContainer.setAttributeNode(target);

      //Create Image
      var image = document.createElement("img");
      image.classList.add("article-image");
      var src = document.createAttribute("src");
      src.value = articles[i].imageSource;
      image.setAttributeNode(src);
      var alt = document.createAttribute("alt");
      alt.value = articles[i].title;
      image.setAttributeNode(alt);

      //Create title
      var h3 = document.createElement("h3");
      h3.classList.add("article-title");
      var h3Text = document.createTextNode(articles[i].title);
      h3.appendChild(h3Text);

      //Atach image and title to container
      itemContainer.appendChild(image);
      itemContainer.appendChild(h3);

      //Attach element to root div
      rootElement.appendChild(itemContainer);
    }
  });