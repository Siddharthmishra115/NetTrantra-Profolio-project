function validateform(){
    let Name = document.getElementById('name');
    let Email = document.getElementById('Email');
    let Phone = document.getElementById('phn');
    let text = document.getElementById('msg');

    Name = Name.value;     
    Email = Email.value;
    Phone = Phone.value;
    text = text.value;

    let name = localStorage.setItem('Name', Name)
    let emailid = localStorage.setItem('Email', Email)
    let phnnumb = localStorage.setItem('Phone', Phone)
    let msg = localStorage.setItem('text', text)

}

//Refresh state
form.addEventListener('submit', (e)=>{
    e.preventDefault();
})

function reset(){
    Name = null;
    Email = null;
    Phnnumb = null;
    msg = null;
}


