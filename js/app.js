// Instantiate the classes
const ui = new UI();


// Create the Event Listeners
function eventListeners() {

// Add eventListeners when form is submitted
const searchForm = document.querySelector('#search-form');
if(searchForm){
searchForm.addEventListener('submit', getCocktails);
  }
}

eventListeners();



// Get Cocktails
function getCocktails(e){
  e.preventDefault();

  const searchTerm = document.querySelector('#search').value;

  // Check something is in search form

  if(searchTerm === ''){
    ui.printMessage('Please add somthing to the form', 'danger');
  }else {
    console.log('Query the REST API');
  }

}
