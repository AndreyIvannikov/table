import Modal from '../modal/Modal.js';
import {
    createElement,
    _createTable,
    _createElementTable
} from './createTable.js';
import {
    dependencyGraph
} from '../graph/graph.js';


class Table {
    constructor(selector) {
        this.container = null;
        this.selector = selector
        this.data = null;
        this.input = null;
        this.getData()
    }

    getData = async () => {
        let url = './data.json'
        let response = await fetch(url);
        if (response.ok) {
            let json = await response.json();
            this.data = json;
            this.container = await createElement(_createTable(this.data))
            this.render()
            dependencyGraph(this.data)
        }
    }

    render(selector) {
        document.querySelector(this.selector).append(this.container);
        this.addEventListener()
    }

    addEventListener = () => {

        this.container.addEventListener('click', (event) => {
            this.td = event.target
            if (this.td.tagName !== 'TD') return

            this.input = this.createElementInput(event)
            this.input.focus()

            this.input.addEventListener('blur', this.inputOnFocus)
            this.input.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    this.input.removeEventListener('blur', this.inputOnFocus)
                    this.inputOnFocus()
                }
            })

        })
        document.addEventListener('build', this.addElemTable)
    }

    inputOnFocus = () => {
        if (this.input.value === '') {
            this.td.innerHTML = this.text
        } else {
            if (this.td.dataset.name === 'name') {
                this.checkingField('name')
            }

            if (this.td.dataset.price === 'price') {
                this.checkingField('price')
            }

            if (this.td.dataset.date === 'date') {
                this.checkingField('date')
            }

        }
    }

    checkingField = (nameField) => {
        this.td.innerHTML = this.input.value
        let idx = this.filterElementId(this.td.closest('tr').dataset.id)
        this.data[idx][this.td.dataset[nameField]] = this.input.value
        if (this.text !== this.input.value) {
            dependencyGraph(this.data)
        }
    }

    filterElementId(id) {
        let filter = this.data.findIndex((item) => {
            return item.id === Number(id)
        })
        return filter
    }

    createElementInput(event) {
        const input = document.createElement('input')
        input.type = 'text'
        this.text = event.target.textContent
        input.value = this.text;
        this.td.innerHTML = ''
        this.td.append(input)
        return input
    }

    addElemTable = (event) => {
        this.data.push(event.detail)
        let td = _createElementTable(`
        <tr data-id = ${event.detail.id}>
            <td>${event.detail.name}</td>
            <td>${event.detail.price}</td>
            <td>${event.detail.date}</td>
        </tr>
        `)
        this.container.querySelector('tbody').append(td)
        dependencyGraph(this.data)
    }

}


const table = new Table('#app');

const modalOpenBtn = document.querySelector('#modal')
modalOpenBtn.addEventListener('click', (event) => {
    const modal = new Modal();
    modal.setTitle('Добавить в данные в таблицу')
    document.body.append(modal.elem)
})