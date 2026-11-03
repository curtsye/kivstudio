// Demonstração local do assistente: não realiza chamadas a serviços externos.
const input = document.getElementById('qwen-input');
const send = document.getElementById('qwen-send');
const messages = document.querySelector('.qwen-messages') || document.getElementById('qwen-messages');
function reply(){
  if(!input || !input.value.trim()) return;
  const question=input.value.trim(); input.value='';
  if(messages){
    const user=document.createElement('div');user.className='qwen-bubble user';user.textContent=question;messages.appendChild(user);
    const answer=document.createElement('div');answer.className='qwen-bubble';answer.textContent='Esta é uma demonstração visual. Para respostas com IA, conecte o assistente a um serviço de API.';messages.appendChild(answer);messages.scrollTop=messages.scrollHeight;
  }
}
send?.addEventListener('click',reply);
input?.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();reply();}});
