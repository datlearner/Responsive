function myFunction(x){
    let myDisplay = document.getElementById('lin');
    if(myDisplay.style.display === 'none' || myDisplay.style.display === ''){
        myDisplay.style.display = 'block';
    }
    else{
        myDisplay.style.display = 'none';
    }
    x.classList.toggle('change');
}