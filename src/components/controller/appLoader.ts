import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '33c92ee1c5824b519c9b065865c36df8',
        });
    }
}

export default AppLoader;
