import './sources.css';

interface TNewsObj {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}
class Sources {
    draw(data: TNewsObj[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            const nodeName = sourceClone.querySelector('.source__item-name') as HTMLElement;
            nodeName.textContent = item.name;
            const nodeItem = sourceClone.querySelector('.source__item') as HTMLElement;
            nodeItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });
        const nodeSources = document.querySelector('.sources') as HTMLElement;
        nodeSources.append(fragment);
    }
}

export default Sources;
