// ~ Ativar links do menu

const menuLinks = document.querySelectorAll(".menu li a");
console.log(menuLinks);

menuLinks.forEach((link) => {
	const url = location.href;
	console.log(url);
	const href = link.href;
	console.log(href);

	if (url.includes(href)) {
		link.classList.add("link-ativo");
	}
});

// ~ Ativar itens do Orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
	const elemento = document.getElementById(parametro);
	if (parametro) {
		elemento.checked = true;
	}
}

parametros.forEach(ativarProduto);

// ~ Clique de imagem na galeria

const imagens = document.querySelectorAll(".bicicleta-imagem img");
const galeria = document.querySelector(".bicicleta-imagem");

console.log(galeria);

imagens.forEach((imagem) => {
	imagem.addEventListener("click", (e) => {
		const media = window.matchMedia("(min-width: 961px)").matches;
		if (e.target.alt.includes("bicicleta") && media) {
			galeria.prepend(e.target);
		}
	});
});

// ~ Animação: Simple-Anime

if (window.SimpleAnime) {
	new SimpleAnime();
}

// ~ Menu Hamburger
const toggleButton = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

toggleButton.addEventListener("click", () => {
	menu.classList.toggle("show");
});
