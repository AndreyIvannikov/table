export  function createElement (dom) {
    let div = document.createElement('div')
    div.innerHTML = dom
    return div.firstElementChild
}

export function _createElementTable(dom) {
    let div = document.createElement('table')
    div.innerHTML = dom
    return div.firstElementChild.firstElementChild
}

export  function _createTable (data) {
    return `
        <table border="1">
           <caption>Таблица</caption>
           <tr>
            <th>Имя</th>
            <th>Цена</th>
            <th>Дата</th>
           </tr>
           ${data.map((item) => {
        return `<tr data-id = ${item.id}>
                    <td data-name = name>${item.name}</td>
                    <td data-price = price>${item.price}</td>
                    <td data-date = date>${item.date}</td>
                </tr>`
    }).join('')}
     </table>
    `
}