//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!
let n = document.querySelector('button[id="show"]'); 
n.addEventListener('click',show); 
function show(){
	let p = document.createElement('p'); 
	p.textContent = campus.address; 
	let h = document.querySelector('h2#addr'); 
	h.insertAdjacentElement('afterend',p); 
	
	let u = document.createElement('ul'); 
	let l;
	for(let r of gakka){
		l = document.createElement('li'); 
		l.textContent = r.name;
		u.insertAdjacentElement('beforeend', l); 
	} 
	p = document.querySelector('h2#dept'); 
	p.insertAdjacentElement('afterend', u); 
}

