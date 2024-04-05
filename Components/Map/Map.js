import {Component} from '../../Api/Component/Component.js'


export class Map extends Component {
    static _url = import.meta.url;


    _map = null;
    _current_region_container = null;


    async _build() {
        await super._build();

        this._map = this._shadow.querySelector('.map');
        this._current_region_container = this._shadow.querySelector('.current_region');

        this._map.addEventListener('mouseover', this._map__on__mouseOver.bind(this));
        this._map.addEventListener('pointerdown', this._map__on_poinetrDown.bind(this));

        // this._build__popup_region()
    }

    // _build__popup_region() {
    //     if (!this.children.length) return;
    //     console.log(1)
    // }

    _map__on__mouseOver(event) {
        if (event.target == this._map) {
            this._current_region_container.removeAttribute('_active');

            return;
        }

        let region = event.target.parentElement == this._map ? event.target : event.target.parentElement;
        let current_region__title = this._shadow.querySelector('.current_region__title');

        current_region__title.textContent = region.dataset.title;
        this._current_region_container.setAttribute('_active', true);
    }

    _map__on_poinetrDown(event) {
        if (event.target == this._map) return;

        let region = event.target.parentElement == this._map ? event.target : event.target.parentElement;

        let link = this.querySelector(`#${region.dataset.code}`)?.getAttribute('href') || '';

        location = link;
    }
}


Map.init();
