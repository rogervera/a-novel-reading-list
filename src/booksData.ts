export interface Book {
  title: string;
  author: string;
  description: string;
  jim_description: string;
  jim_order: number;
  genre: string;
  published_year: number;
  cover_image: string;
}

export const books: Book[] = [
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    description: 'A novel about teenage alienation and loss of innocence in post-World War II America.',
    jim_description: 'A touching story of a young boy growing up in America and not quite making it. An easy read, and sometimes funny.',
    jim_order: 1,
    genre: 'Coming-of-age',
    published_year: 1951,
    cover_image: 'book-covers/the-catcher-in-the-rye.jpg'
  },
  {
    title: "The Queen's Gambit",
    author: 'Walter Tevis',
    description: 'A novel about an orphaned chess prodigy who struggles with addiction while pursuing her dream of becoming a world champion.',
    jim_description: 'A touching story of a young girl growing up in America who succeeds. Tevis, more than any writer I know, had the ability to demonstrate clearly those simplest things that matter most of all.',
    jim_order: 2,
    genre: 'Coming-of-age',
    published_year: 1983,
    cover_image: 'book-covers/the-queens-gambit.jpg'
  },
  {
    title: 'All Quiet on the Western Front',
    author: 'Erich Maria Remarque',
    description: "A novel about German soldiers' physical and mental stress during World War I, and the detachment from civilian life felt by many of these soldiers upon returning home.",
    jim_description: "A most telling novel about war, and it's got only one page of physical violence in it.",
    jim_order: 3,
    genre: 'War',
    published_year: 1929,
    cover_image: 'book-covers/all-quiet-on-the-western-front.jpg'
  },
  {
    title: 'Sister Carrie',
    author: 'Theodore Dreiser',
    description: 'A novel about a young woman who moves to Chicago and experiences both success and moral decline in the pursuit of material wealth.',
    jim_description: '"Sister" is fashioned after one of Teddy\'s. It\'s too bad Dreiser isn\'t read much anymore, especially by young people, who read not much of anything. Dreiser still tells more about life in America than most writers, even though by now much of his America has vanished--regretfully.',
    jim_order: 4,
    genre: 'Literary Realism',
    published_year: 1900,
    cover_image: 'book-covers/sister-carrie.jpg'
  },
  {
    title: 'Tender is the Night',
    author: 'F. Scott Fitzgerald',
    description: 'A novel about the rise and fall of Dick Diver, a promising young psychiatrist, and his wife Nicole, set against the backdrop of the French Riviera in the 1920s.',
    jim_description: 'Another version of America "back then." It was much more cerebral than today\'s U.S.A., although we like to pretend otherwise. Today we have taken up with things, not thoughts.',
    jim_order: 5,
    genre: 'Tragedy',
    published_year: 1934,
    cover_image: 'book-covers/tender-is-the-night.jpg'
  },
  {
    title: 'Liza of Lambeth',
    author: 'W. Somerset Maugham',
    description: "A novel about a young working-class woman in London's Lambeth district who falls in love with a married man, leading to tragic consequences.",
    jim_description: "This was Maugham's first novel. He wrote it while training to be a doctor. I don't know what his prospects as a doctor were, but his talent as writer and story teller were obvious in Liza of Lambeth, which meant for him, goodbye medicine.\nAfter his literary efforts were over, Maugham left an estate valued at about nine million--at least fifty million now, I guess.",
    jim_order: 6,
    genre: 'Literary Fiction',
    published_year: 1897,
    cover_image: 'book-covers/liza-of-lambeth.jpg'
  },
  {
    title: 'Look Homeward, Angel',
    author: 'Thomas Wolfe',
    description: "A semi-autobiographical novel about Eugene Gant's coming of age in the fictional town of Altamont, North Carolina, during the early 20th century.",
    jim_description: "A rather long novel. Poetry from the first word to the last. Wolfe was a genius with words, probably more than any other writer here. I don't think there was any confusion in him about what he meant to write in Look Homeward, Angel. His words fill the pages like honey; there's not a sour phrase in all of them.\nWolfe wrote a follow-up volume called 'Of Time and the River.' It begins with the young man's train ride from Altamont (Asheville), North Carolina to Boston and Harvard University-- about a seventy-five page journey. The best, whatever and everything that means, seventy-five novel pages I ever read.",
    jim_order: 7,
    genre: 'Semi-autobiographical Coming-of-age',
    published_year: 1929,
    cover_image: 'book-covers/look-homeward-angel.jpg'
  },
  {
    title: 'Leaving Las Vegas',
    author: "John O'Brien",
    description: 'A novel about Ben Sanderson, an alcoholic screenwriter who moves to Las Vegas to drink himself to death, and his relationship with Sera, a prostitute.',
    jim_description: "It's almost too much to believe that the young author wrote this story about love, sordid love, but love nonethe-less, while in his own death throes.",
    jim_order: 8,
    genre: 'Semi-autobiographical',
    published_year: 1990,
    cover_image: 'book-covers/leaving-las-vegas.jpg'
  },
  {
    title: 'Rabbit, Run',
    author: 'John Updike',
    description: 'A novel about Harry "Rabbit" Angstrom, a former high school basketball star who feels trapped in his marriage and suburban life, leading him to run away from his responsibilities.',
    jim_description: 'In college, it was assiġned reading by my favorite professor. He said the first seventy or so pages-- through Rabbit\'s first run -- were flawlessly written. Well, when reading for college, you don\'t have time to really think, but years later, when I reread the book, I easily agreed with him.\n"Rabbit, Run" can be read for itself, but it turned out that Updike, about every ten years, added ten years more of story about Rabbit. He didn\'t originally intend to do this, but "Rabbit, Run" finished open-ended, and provided the opportunity. About the last one hundred pages of the last book, "Rabbit At Rest", were also perfectly written.\nBetween the first and final perfectly written pages about Rabbit\'s life, there aren\'t many dull pages, but nobody can write perfectly all the time. Anyway, the four "Rabbit" books together make a nice history of east-coast life in America from about 1955 to 1990.',
    jim_order: 9,
    genre: 'Psychological Fiction',
    published_year: 1960,
    cover_image: 'book-covers/rabbit-run.jpg'
  },
  {
    title: 'Ironweed',
    author: 'William Kennedy',
    description: 'A novel about Francis Phelan, a former baseball player and current alcoholic vagrant who returns to his hometown of Albany, New York, to confront his past and seek redemption.',
    jim_description: 'Kennedy chronicled the Albany, New York area. Ironweed takes place there during the Great Depression. A very good story and very good writing. Hollywood made a pretty good movie out of Ironweed starring Jack Nicholson and Meryl Streep, provided you read the book first.',
    jim_order: 10,
    genre: 'Tragedy',
    published_year: 1983,
    cover_image: 'book-covers/ironweed.jpg'
  }
]; 