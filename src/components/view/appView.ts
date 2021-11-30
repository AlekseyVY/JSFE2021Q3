import News from './news/news';
import Sources from './sources/sources';

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
export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: IDataArticles) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: IData) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
