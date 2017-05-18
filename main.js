var contacts = [];


function printContact(){
	var HTML = "<ul>"
	
	for(var i = 0 ; i < contacts.length ; i++){
	
	HTML += "<li class='detail'>" + contacts[i].name + " : " + contacts[i].phone + "<button class='delete' >delete</button></li>";
	
	}
	
	HTML += "</ul>";
	display.innerHTML = HTML;

	document.querySelector('.delete').onclick = function(e){
		e.target.parentElement.style.display = 'none';
	}

}

document.querySelector('#addBtn').onclick = function(){
	var contact = {
		name : contact_name.value,
		phone : phone.value
	};

	contacts.push(contact);

	contact_name.value = "";
	phone.value = "";

	printContact();
}

