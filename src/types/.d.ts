interface TNewsObj {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
}

interface IData {
  sources: TNewsObj[];
  status: string;
}

interface ISource {
  id: string;
  name: string;
}

interface IArticle {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: ISource;
  title: string;
  url: string;
  urlToImage: string;
}

interface IDataArticles {
  articles: IArticle[];
  status: string;
  totalResults: number;
}
