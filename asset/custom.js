function searchTiles(){

    // Logic To Filter Tiles Based On Input Provided By User On Searchbox

    const input = document.getElementById('myInput').value.toUpperCase();
    const cardContainer = document.getElementById('myTiles')
    const cards =cardContainer.getElementsByClassName('card');

    for(let i = 0; i<cards.length;i++ ){
        let title=cards[i].querySelector('.card-content h1')
    
        if(title.innerText.toUpperCase().indexOf(input) > -1){
          cards[i].style.display = "";
        } else{
          cards[i].style.display = "none";
        }
    }
  

  }