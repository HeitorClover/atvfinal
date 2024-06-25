function enviar(){
    alert("Mensagem enviada. Aguarde a resposta no seu Email em até 2 dias.");
}

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})