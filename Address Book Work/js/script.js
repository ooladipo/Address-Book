 
var addressBook = (function() {
  var people = [{
    firstName: '',
    lastName: '',
    phone: ''
  }];

  var table = $('#table1');
  var tbody = table.find('tbody');
  var $firstName = table.find('#firstName');
  var $lastName = table.find('#lastName');
  var $phone = table.find('#phone');
  var $button = table.find('#add');
  var $btnSave = table.find('#save');
  var $btnEdit = table.find('#edit');
  var $btnRemove = table.find('#remove');
  var $input = table.find(".edit");

  
  $button.on('click', addPerson);
  table.on('click', '#remove', deletePerson);
  
  console.log($input);
  _render();

  
  function _render() {
    tbody.html('');
    var length = people.length;
    for (var i = 0; i < length; i++) {
      table.prepend('<tr><td><input class="edit" type="text" value="' + people[i].firstName + '" ></td><td><input class="edit" type="text" value="' + people[i].lastName + '" ></td><td><input type="text" class="edit" value="' + people[i].phone + '" ></td><td> <button id="remove" class="btn btn-block">X</button></td></tr>');
    }
  }

  
  function addPerson() {
    var person = {
      firstName: $firstName.val(),
      lastName: $lastName.val(),
      phone: $phone.val()
    };
    people.push(person);
    $firstName.val('');
    $lastName.val('');
    $phone.val('');
    _render()
  }

  function deletePerson(event) {
      var element = event.target.closest('tr');
      var i = table.find('td').index(element);
      people.splice(i, 1);
      _render();
    }
    
  return {
    addPerson: addPerson,
    deletePerson: deletePerson
  };

})();