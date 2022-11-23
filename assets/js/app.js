// Toggle Show Hide Password
function showPassword(e){
	var type = e.previousElementSibling.type;
	if(type == 'password'){
		e.previousElementSibling.type='text';
	}else{
		e.previousElementSibling.type='password';
	}
}

// Toggle Requisites Show Hide
function toggleRequi(parent){
	const requisites = parent.nextElementSibling;
	requisites.classList.toggle('d-inline-block');		
}

function toggleRequiEl(){
	const requisites = document.querySelector('.requisites-show');
	requisites.classList.toggle('d-block');
}


// Toggle Checkboxes
function toggleChecked(id){
	const btn = document.querySelector('#'+id);
	const checkbox = document.querySelector('.'+id);
	if(btn.classList.contains('collapsed')){
		checkbox.checked = false;
	}
	else{
		checkbox.checked = true;
	}
}


// Custom Dropdown Select
const fields=document.querySelectorAll(".select__trigger");

fields.forEach(field => {
	field.addEventListener('click', function(){
		field.nextElementSibling.classList.toggle('show_el');
		if(field.id != 'drop'){
			for(const option of field.nextElementSibling.querySelectorAll('.dropdown-item__input')){
				option.addEventListener('click', function(){
					if(field.id == 'select-radio'){
						field.textContent = this.querySelector('.day').textContent;
					} else{
						field.textContent = this.textContent;
						field.nextElementSibling.classList.remove('show_el');
					}
				})
			}
		}
	})
})

window.addEventListener('click', (e) => {
	const areas = document.querySelectorAll('.dropdown__area');
	areas.forEach(select => {
		if(!select.contains(e.target)){
			select.querySelector(".dropdown-menu__input").classList.remove('show_el');
		}
	});
})


// Live Search
const search = document.querySelector('#bank-account');
const boxes = document.querySelectorAll('.bank__item');

search && search.addEventListener('keyup', (e) => {
	let search_query = e.target.value;
	for(var i=0; i<boxes.length; i++){
		if(boxes[i].getAttribute('data-value').toLowerCase().includes(search_query.toLowerCase())){
			boxes[i].classList.remove('d-none');
		} else{
			boxes[i].classList.add('d-none');
		}
	}
});	


// Toggle Menu
function toggleMenu(){
	const hamburger=document.querySelector('.hamburger-menu');
	const mobile_nav=document.querySelector('.mobile-navbar');
	const closeBtn=document.querySelector('.close-menu');

	if(mobile_nav.classList.contains('w-100')){
		mobile_nav.classList.remove('w-100');
		hamburger.style.display="block";
		closeBtn.classList.add('d-none');
	} else{
		mobile_nav.classList.add('w-100');
		hamburger.style.display='none';
		closeBtn.classList.remove('d-none');
	}
}

// Carousel Slider
var splide = new Splide('.splide', {
	type: 'slide',
	perPage: 2,
	arrows: false,
	pagination: false,
	gap: '1em',
	autoplay: true,
	interval: 3000,
	pauseOnHover: true,
	speed: 600,
	focus: "center",
	breakpoints: {
		510: {
			perPage: 1
		}
	}
});
splide.mount();








