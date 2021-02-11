const _createModal = () => {
    return `
 <div class="modal">
 <div class="modal__overlay"></div>

 <div class="modal__inner">
   <div class="modal__header">
     <button type="button" class="modal__close">
       <img src="./icons/cross-icon.svg" alt="close-icon" />
     </button>

     <h3 class="modal__title"></h3>
   </div>


   <div class="modal__body">
   <div class = 'modal__body-field'>
      <label for='name'>Добавьте назвние:</label>
      <input type='text' id='name' name='name'>
   </div>

   <div class = 'modal__body-field'>
      <label for='price'> Добавьте цену:</label>
      <input type='text' id='price' name='price'>
   </div>

   </div>
   <button class = 'btn btn--modal'>Добавить</button>
 </div>

</div>
  `
}
const createElement = (dom) => {
    let div = document.createElement('div')
    div.innerHTML = dom
    return div.firstElementChild
}

export default class Modal {
    constructor(arr) {
        this.container = null;
        this.arr = arr
        this.render()
    }

    render() {
        this.container = createElement(_createModal())
        this.addEventListener()
    }

    setTitle(title){
      this.container.querySelector('.modal__title').innerHTML = title
    }



    generateRandomId() {
      return Math.floor(Math.random() * 10000);
  }

    addEventListener() {
        this.container.querySelector('.modal__close').addEventListener('click',this.destroy)

        this.container.querySelector('.btn').addEventListener('click',(event)=>{
          let obj = new Object()
          obj.name =  this.container.querySelector('input[name=name]').value
          obj.price =  this.container.querySelector('input[name=price]').value
          obj.date =  new Date().toLocaleDateString()
          obj.id = this.generateRandomId()

          const events = new CustomEvent('build', {
            bubbles:true,
            detail: obj
          })
          this.container.dispatchEvent(events)

        })
    }

    destroy(){
      document.querySelector('.modal').remove()
    }


    get elem() {
        return this.container
    }

}

