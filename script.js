function showContent(event, contentId) {
	// "Eltunteti" a nem focusban levo oldalakat
	var contents = document.querySelectorAll('.content');
	contents.forEach(function(content) {
		content.classList.remove('active');
	});

	// Mutatja a kivalasztott oldalt
	var selectedContent = document.getElementById(contentId);
	selectedContent.classList.add('active');
}

let container = document.getElementById('container');
let registerBtn = document.getElementById('register');
let loginBtn = document.getElementById('login');

const buttons = [registerBtn, loginBtn];
buttons.forEach(button => {
    button.onclick = function() {
        const action = this.id === 'register' ? 'add' : 'remove';
        container.classList[action]('active');
    }
});
alert("amugy ez egy budos szar vagod, gyasz egye ki az egesz projektet, meg azt is hogy nekem kell dolgozni rajta mert mas vagy nem tudja vagy tul lusta hozza geci");