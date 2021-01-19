const bodyesArea = document.querySelector('.male-muscles');
const descriptions = document.querySelectorAll('.description');

bodyesArea.addEventListener('click', (e)=>{

	const part = e.target.dataset.part;
	if(part) {
		descriptions.forEach(element => {
			element.classList.remove('active');

			if(element.classList.contains(part)){
				console.log('part');
				element.classList.remove('noactive');
				element.classList.add('active');
			}
		});
	}
});