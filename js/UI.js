class UI {

  // Display a custom message
  printMessage(message, className) {
    const div = document.createElement('div');

    // Add the HTML
    div.innerHTML = `
        <div class="alert alert-dismissable alert-${className}">
          <button type="button" class="close" data-dismiss="alert">x</button>
          ${message}
        </div>
    `;

    // Insert before
    const reference = document.querySelector('.jumbotron h1');
    const parentNode = reference.parentElement;
    parentNode.insertBefore(div, reference);

    // Remove after three seconds
    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 3000);
  }

}
