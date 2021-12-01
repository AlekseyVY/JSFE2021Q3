import './news.css';
class News {
    draw(data: IArticle[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp?.content.cloneNode(true) as HTMLTemplateElement;

            if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');
            const nodePhoto = newsClone.querySelector('.news__meta-photo') as HTMLElement;
            nodePhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            const nodeAuthor = newsClone.querySelector('.news__meta-author') as HTMLElement;
            nodeAuthor.textContent = item.author || item.source.name;
            const nodeDate = newsClone.querySelector('.news__meta-date') as HTMLElement;
            nodeDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            const nodeTitle = newsClone.querySelector('.news__description-title') as HTMLElement;
            nodeTitle.textContent = item.title;
            const nodeSource = newsClone.querySelector('.news__description-source') as HTMLElement;
            nodeSource.textContent = item.source.name;
            const nodeContent = newsClone.querySelector('.news__description-content') as HTMLElement;
            nodeContent.textContent = item.description;
            const nodeReadMore = newsClone.querySelector('.news__read-more a') as HTMLElement;
            nodeReadMore.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const node = document.querySelector('.news') as HTMLElement;
        node.innerHTML = '';
        const append = document.querySelector('.news') as HTMLElement;
        append.appendChild(fragment);
    }
}

export default News;
