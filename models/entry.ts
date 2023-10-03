interface Author {
  name: string;
  pictureUrl: string;
}

interface Entry {
  id: number;
  author: Author;
  title: string;
  date: string;
  hero: string;
  url: string;
  headline: string;
}

export default Entry;
