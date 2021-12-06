import { IApp } from './app.d';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App implements IApp {
    public controller: AppController;
    public view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const nodeScroll = document.querySelector('body');
        const newsNode = document.querySelector('.news') as HTMLElement;
        const node: HTMLElement = document.querySelector('.sources') as HTMLElement;
        node.addEventListener('click', (e: Event) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
        const overlay = document.createElement('div');
        overlay.addEventListener('click', () => {
            newsNode.innerHTML = '';
            newsNode.classList.remove('border');
            nodeScroll?.classList.remove('disabled');
            const overlays = Array.from(document.getElementsByClassName('overlay'));
            overlays.forEach((ele) => {
                ele.remove();
            });
        });
        overlay.classList.add('overlay');
        const parentNode = document.querySelector('body');
        node.addEventListener('click', () => {
            parentNode?.append(overlay);
            nodeScroll?.classList.add('disabled');
            newsNode.classList.add('border');
        });
        this.controller.getSources((data) => this.view.drawSources(data));
    }
}

export default App;
