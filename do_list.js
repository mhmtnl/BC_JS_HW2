let button = document.querySelector('#liveToastBtn');
let task = document.querySelector('#task') ;
let list = document.querySelector('#list');


button.addEventListener("click",
function adding(){
    if (task.value.trim() == ''){        
        $(".error").toast("show");
        $(".success").toast("hide"); 
     }
    else {  $(".success").toast("show"); 
        $(".error").toast("hide")
        const liDOM = document.createElement('li');
        liDOM.textContent = `${task.value[0].toUpperCase()}${task.value.slice(1)}`;
        list.prepend(liDOM);
        let closeBtn = document.createElement("span"); 
        closeBtn.textContent = "\u00D7"; 
        closeBtn.classList.add("close"); 
        closeBtn.onclick = remove; 
        liDOM.appendChild(closeBtn);
    }
    task.value='';
        })

let toDo = document.getElementsByTagName("li");
for (let i = 0; i < toDo.length; i++) {
    let closeBtn = document.createElement("span"); 
    closeBtn.textContent = "\u00D7"; 
    closeBtn.classList.add("close"); 
    closeBtn.onclick = remove; 
    toDo[i].append(closeBtn);
}
    function remove() {
    this.parentElement.remove(); 
}

list.addEventListener('click', function(done) {
  if (done.target.tagName === 'LI') {
    done.target.classList.toggle('checked');
  }
}, false);

