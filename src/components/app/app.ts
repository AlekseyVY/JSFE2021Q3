import { IApp } from './app.d';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App implements IApp {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const node: HTMLElement = document.querySelector('.sources') as HTMLElement;
        node.addEventListener('click', (e: Event) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
        this.controller.getSources((data) => this.view.drawSources(data));
    }
}

export default App;
