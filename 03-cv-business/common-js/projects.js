$(document).ready( () => {
  

  let 
    projects = [
       {
        title: 'Project 2',
        img: 'images/burger.jpg',
        tech: ['Express', 'Handlebars', 'MySql', 'ECMAscript8' ],
        description: 'Base Stat tracker Application',
        link: 'https://vast-island-78003.herokuapp.com/',
        repo: 'https://github.com/PlainOlFred/Project2'
      }
      //  {
      //   title: 'Eat-Da-Burger',
      //   img: 'images/karaoke.jpeg',
      //   tech: ['tech 1', 'tech 2', 'tech 3', 'tech 4' ],
      //   description: 'eating burger application',
      //   link: 'https://blooming-falls-70859.herokuapp.com/',
      //   repo: 'https://github.com/PlainOlFred/burger'
      // },
      //  {
      //   title: 'Friend Finder',
      //   img: 'images/karaoke.jpeg',
      //   tech: ['Express', 'Bootstrap4', 'html', 'tech 4' ],
      //   description: 'Friend Finder',
      //   link: 'https://ancient-lake-73417.herokuapp.com/',
      //   repo: 'https://github.com/PlainOlFred/friendFinder'
      // },
      // {
      //   title: 'Bamazon',
      //   img: 'images/karaoke.jpeg',
      //   tech: ['node.js', 'inquier', 'MySQL', 'tech 4' ],
      //   description: 'Store front application',
      //   link: 'https://github.com/PlainOlFred/storeFront',
      //   repo: 'https://github.com/PlainOlFred/storeFront'
      // },
      // {
      //   title: 'LiriBot',
      //   img: 'images/karaoke.jpeg',
      //   tech: ['node.js', 'Axios', 'dotEnv', 'API\'s' ],
      //   description: 'media searc',
      //   link: 'https://github.com/PlainOlFred/liri-node-app',
      //   repo: 'https://github.com/PlainOlFred/liri-node-app'
      // },
      // {
      //   title: 'CapCityKaraoke',
      //   img: 'images/karaoke.jpeg',
      //   tech: ['Firebase', 'tech 2', 'tech 3', 'tech 4' ],
      //   description: 'Project 1',
      //   link: 'https://plainolfred.github.io/CapCityKaraoke/',
      //   repo: 'https://github.com/PlainOlFred/CapCityKaraoke'
      // },
      // {
      //   title: 'Trains',
      //   img: 'images/karaoke.jpeg',
      //   tech: ['tech 1', 'tech 2', 'tech 3', 'tech 4' ],
      //   description: 'Train scheduler',
      //   link: 'https://plainolfred.github.io/trains-project/',
      //   repo: 'https://github.com/PlainOlFred/trains-project'
      // },
      // {
      //   title: 'GifTastic',
      //   img: 'images/karaoke.jpeg',
      //   tech: ['tech 1', 'tech 2', 'tech 3', 'tech 4' ],
      //   description: 'Gif Searcher',
      //   link: 'https://plainolfred.github.io/GifTastic/',
      //   repo: 'https://github.com/PlainOlFred/GifTastic'
      // },
      // {
      //   title: 'Word Guess Game',
      //   img: 'images/karaoke.jpeg',
      //   tech: ['tech 1', 'tech 2', 'tech 3', 'tech 4' ],
      //   description: 'Word Guess Game',
      //   link: 'https://plainolfred.github.io/Word-Guess-Game/',
      //   repo: 'https://github.com/PlainOlFred/Word-Guess-Game'
      // },
      // {
      //   title: 'RPG Game',
      //   img: 'images/karaoke.jpeg',
      //   tech: ['HTML', 'Javascript', 'CSS', 'JQuery' ],
      //   description: 'Roll Playing Game',
      //   link: 'https://plainolfred.github.io/unit-4-game/',
      //   repo: 'https://github.com/PlainOlFred/unit-4-game'
      // },
      // {
      //   title: 'Triva Game',
      //   img: 'images/karaoke.jpeg',
      //   tech: ['HTML', 'Javascript', 'CSS', 'Giphy API' ],
      //   description: 'Austin Trivia game',
      //   link: 'https://plainolfred.github.io/TriviaGame/',
      //   repo: 'https://github.com/PlainOlFred/TriviaGame'
      // }

  ],
  projectCount = 0;




function Project(title, img, tech_array, description, link, repo) {
    this.title = title;
    this.img = img;
    this.tech_array = tech_array;
    this.description = description;
    this.link = link;
    this.repo = repo;
}


Project.prototype.createProjectCard = function(){
		// <div class="p-item react" style="position: absolute; left: 0px; top: 0px;">
		// 		<a href="images/portfolio-1-600x400.jpg" data-fluidbox="" class="fluidbox__instance-1 fluidbox--initialized fluidbox--closed fluidbox--ready">
    //      <div class="fluidbox__wrap" style="z-index: 990;">
		// 			  <img src="images/karaoke.jpeg" alt="" class="fluidbox__thumb" style="opacity: 1;">
    //        <div class="fluidbox__ghost" style="width: 474.984px; height: 316.078px; top: 0px; left: 0px;"></div>
    //      </div>
    //    </a>
		// 	</div>

    


    let projectCard = $('<div>');
    projectCard.attr({
        'class' : 'p-item firebase',
        'style': 'position: absolute; left: 0px; top: 0px;'
        // 'data-title' : this.titile,
        // 'data-img' : this.img,
        // 'data-tech' : this.tech_array,
        // 'data-description' : this.description,
        // 'data-link' : this.link,
        // 'id' : 'project-' + projectCount
    });

    let aTag = $('<a data-fluidbox>');
    aTag.attr({
      'class': 'fluidbox__instance-1 fluidbox--initialized fluidbox--closed fluidbox--ready',
      // 'href':this.link or link to popout with link and repo
      'href': 'images/portfolio-1-600x400.jpg'
    })

    let img = $('<img>');
    img.attr({
        'src' : this.img,
        'class' : 'fluidbox__thumb', 
        'style': 'opacity: 1;',
        'alt': this.title
    });

    let fluidbox_wrap = $('<div>');
    fluidbox_wrap.attr({
      'class': 'fluidbox__wrap',
      'style': 'z-index: 990;'
    })
   
    let fluidbox_ghost = $('<div>');
    fluidbox_ghost.attr({
      'class': 'fluidbox__ghost',
      'style': 'width: 474.984px; height: 316.078px; top: 0px; left: 0px;'
    })

    fluidbox_wrap.append(img).append(fluidbox_ghost);
    aTag.append(fluidbox_wrap);
    projectCard.append(aTag);

   
    projectCount++;
    console.log(projectCount)
    return projectCard;

    // let cardBody = $('<div>');
    // cardBody.attr({
    //   'class': 'card-body'
    // });

    // let cardTitle = $('<h2>');
    // cardTitle
    //   .attr({
    //     'class': 'card-title'
    //   })
    //   .text(this.title)

    // let cardText = $('<p>');
    // cardText
    //   .attr({
    //     'class': 'card-text'
    //   })
    //   .text(this.description)

    // let listGroup = $('<ul>');
    // listGroup
    //   .attr({
    //     'class': 'list-group list-group-flush'
    //   })


  
    // for (let tech of this.tech_array){
      
    //   let li = $('<li>');
    //   li
    //     .attr({
    //       'class': 'list-group-item'
    //     })
    //     .text(tech);
    //     listGroup.append(li);
    
    // }

    // let cardLink = $('<a>')
    // cardLink
    //   .attr({
    //     'class': 'card-link',
    //     'href': this.link
    //   })
    //   .text('View')

    // let repoLink = $('<a>')
    // repoLink
    //   .attr({
    //     'class': 'card-link',
    //     'href': this.repo
    //   })
    //   .text('Repo')

    
    // projectCard.append(cardTitle);
    // projectCard.append(img);
    // cardBody.append(cardText).append(listGroup);
    // projectCard.append(cardBody);
    // cardBody.append(cardLink)
    // cardBody.append(repoLink)

    
}

Project.prototype.createProjectTile = function(){
  // <div class="p-item react">
  //   <a href="images/portfolio-1-600x400.jpg" data-fluidbox>
  //     <img src="images/karaoke.jpeg" alt=""></a>
  // </div>

  let pItem = $('<div>');
  pItem.attr({
    'class': 'p-item'
  });

  let aTag = $('<a>');
  aTag.attr({
    'data-fluidbox': ''
  })

  let img = $('<img>');
  img.attr({
    'src': this.img
  })

 aTag.append(img);
 pItem.append(aTag);
  return pItem;
 
}



for(let p of projects) {
  let newProject= new Project(p.title, p.img, p.tech, p.description, p.link, p.repo);
        
        // let newProjectCard = newProject.createProjectCard();
        let newProjectTile = newProject.createProjectTile();
        // $('.portfolioContainer').append(newProjectCard);
        // $('.portfolioContainer').append(newProjectTile);
        console.log(newProject)
        console.log(newProjectTile)
      
  }




})

$('#example').popover('show')




