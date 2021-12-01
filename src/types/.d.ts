interface IApp {
  start(): void;
}

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

type Options = {
  apiKey: string;
};

type TEndpoint = string;

type TOptions = {
  sources?: string;
};

type Obj = {
  endpoint: TEndpoint;
  options?: TOptions;
};

type TurlOptions = {
  [key: string]: string;
};

type TCallback = (data?: JSON) => void;

interface ILoader {
  getResp(object: Obj): void;
  errorHandler(res: Response): Response;
  makeUrl(options: TOptions, endpoint: string): string;
  load(method: string, endpoint: string, callback: TCallback): void;
}