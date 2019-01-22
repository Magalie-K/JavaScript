

submit.addEventListener("click", function () {

  var lastname = document.getElementById('lastname').value;
  var firstname = document.getElementById('firstname').value;
  var city = document.getElementById('city').value;
  var regexletters = /^[a-zA-ZÄ-ÿ- ]+$/;

  if (regexletters.test(lastname) && regexletters.test(firstname) && regexletters.test(city)) {

        alert("Nom : "+ lastname +"\nPrénom : "+ firstname +"\nVille : "+ city);
      }  else {
        alert("Saisie incorrecte");
      }
    });
