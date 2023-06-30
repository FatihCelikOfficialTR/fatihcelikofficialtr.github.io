// Add, remove, modify your articles here
  document.addEventListener("DOMContentLoaded", function() {
    var articles = [
		{
			onClickLink: 'https://shreyascyber.com/test/1.html',
			imageSource: 'https://cdn.jsdelivr.net/gh/linuxguist/news@main/1.png',
			title: 'Tobacco is a huge health threat. So why aren’t we doing more about it?'
		},
		{
			onClickLink: 'https://shreyascyber.com/test/1.html',
			imageSource: 'https://cdn.jsdelivr.net/gh/linuxguist/news@main/1.png',
			title: 'Tobacco is a huge health threat. So why aren’t we doing more about it?'
		},
		{
			onClickLink: 'https://shreyascyber.com/test/1.html',
			imageSource: 'https://cdn.jsdelivr.net/gh/linuxguist/news@main/1.png',
			title: 'Tobacco is a huge health threat. So why aren’t we doing more about it?'
		},
		{
			onClickLink: 'https://shreyascyber.com/test/1.html',
			imageSource: 'https://cdn.jsdelivr.net/gh/linuxguist/news@main/1.png',
			title: 'Tobacco is a huge health threat. So why aren’t we doing more about it?'
		},
		{
			onClickLink: 'https://shreyascyber.com/test/1.html',
			imageSource: 'https://cdn.jsdelivr.net/gh/linuxguist/news@main/1.png',
			title: 'Tobacco is a huge health threat. So why aren’t we doing more about it?'
		},
		{
			onClickLink: 'https://shreyascyber.com/test/1.html',
			imageSource: 'https://cdn.jsdelivr.net/gh/linuxguist/news@main/1.png',
			title: 'Tobacco is a huge health threat. So why aren’t we doing more about it?'
		},
		{
			onClickLink: 'https://shreyascyber.com/test/1.html',
			imageSource: 'https://cdn.jsdelivr.net/gh/linuxguist/news@main/1.png',
			title: 'Tobacco is a huge health threat. So why aren’t we doing more about it?'
		},
		{
			onClickLink: 'https://shreyascyber.com/test/1.html',
			imageSource: 'https://cdn.jsdelivr.net/gh/linuxguist/news@main/1.png',
			title: 'Tobacco is a huge health threat. So why aren’t we doing more about it?'
		},
		{
			onClickLink: 'https://shreyascyber.com/test/1.html',
			imageSource: 'https://cdn.jsdelivr.net/gh/linuxguist/news@main/1.png',
			title: 'Tobacco is a huge health threat. So why aren’t we doing more about it?'
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