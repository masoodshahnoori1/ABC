/*var books = ['Harry_Potter', 
             'Anna_Karenina', 
             'Madame_bovary',
             'War-&-peace',
             'The_Great_Gatsby',
             'Alone_theory',
             'Open_Wisdom',
             'Attorney_and_Laws',
             'Summar_Jams',
             'End_of_Era'];*/

//console.log(books.length);
// 2
// console.log('1', books[0]);
// console.log('2', books[1]);
// console.log('3', books[2]);
// console.log('4', books[3]);
// console.log('5', books[4]);
// console.log('6', books[5]);
// console.log('7', books[6]);
// console.log('8', books[7]);
// console.log('9', books[8]);
// console.log('10', books[9]);

//books.splice(1, 3);

//delete books[0];
//removed = books [0];
//books.splice(0,2)



  "use strict";
//create a list

let myFavoriteBooks = [style.font-size = "xx-large", 'End_of_Era', "harry_potter_the_final_reveal",
  "Summar_Jams", "Attorney_and_Laws", "the_lord_of_the_rings",
  "jane_eyre", "little_women", "the_hobbit", "Attoreny_With_Law", "The_Great_Gatsby"];

//create function ul
function createListOfBooks(listOfBooks) {
  let listView = document.createElement('ul');
  for (let i = 0; i < listOfBooks.length; i++) {
    let listViewItem = document.createElement('li');
    listViewItem.appendChild(document.createTextNode(listOfBooks[i]));
    listView.appendChild(listViewItem);
  }
  return listView;
}
document.getElementById("listOfBooks").appendChild(createListOfBooks(myFavoriteBooks));

//https://stackoverflow.com/questions/11351135/create-ul-and-li-elements-in-javascript/31873736

/*
Make an object (not an array!) containing information for each book. Each property of this object should be 
another (i.e., nested) object with the book ID you thought up in step 1.1 as a key, and at least the 
following properties: title, language and author.
*/

let myFavoriteBooksObj = {
  book01: { title: "its_about_a_boy", language: "english", author: "nick_hornby" },
  book02: {
    title: "harry_potter_and_the_sorcerers_stone", language: "english",
    author: "j_k_rowling"
  }
};

/*
1.5 Now change the function from step 1.3 that you used to display the book ID's in a list
to take the actual information about the book from the object and display that. Make sure
you choose the correct HTML elements for each piece of info, for instance, a heading for the title.
*/


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
