export function HD(x) {
    document.body.innerHTML= `<header class="x">
			<div class="logo">
				<a  href="${x==0 ? '' : ("../").repeat(x) }Acceuil/acceuil.html">
					<img src="${x==0 ? '' : ("../").repeat(x) }Images/atsm.png"class="image-main">
				</a>
			</div>
			 <button class="menu-toggle" id="menuToggle" onclick="toggleMenu()" aria-label="Toggle navigation">
   				 ☰
			</button>
			<nav class="nav-links">
				<a class="big-link" href="${x==0 ? '' : ("../").repeat(x) }Compétitons/comp.html">
					Compétitons et résultats
				</a>
				<div class="hover-show">
				<a class="big-link" href="${x==0 ? '' : ("../").repeat(x) }Annonces/annonceDouble.html">
					Actualités
				</a>
				<div class="hover-links">
					<a href="${x==0 ? '' : ("../").repeat(x) }Annonces/typeAnnonce.html?title=passées&types=passed&types=competiton&types=release" class="big-link hover-link">
						Actualités passées
					</a>
					<a href="${x==0 ? '' : ("../").repeat(x) }Annonces/typeAnnonce.html?title=à%20venir&types=upcoming&types=stage&types=test"  class="big-link hover-link">
						À venir
					</a>
				</div>
				</div>
				<a class="big-link" href="${x==0 ? '' : ("../").repeat(x) }Mission/mission.html">
					Qui sommes nous?
				</a>
				<a class="big-link" href="${x==0 ? '' : ("../").repeat(x) }Partner/partner.html">
					Nos Partenaires
				</a>
				<a class="big-link" href="${x==0 ? '' : ("../").repeat(x) }Contact/contact.html">
					Contact
				</a>
			</nav>
	</header>`+ document.body.innerHTML + `<footer class="y">
	<div class="footer-container footer-grid">
		<div class="footer-text">
			<p>
				Association Tunisienne des Sciences Mathématiques (ATSM) 
			</p>
		</div>
		<div class="footer-column">
				<a href="${x==0 ? '' : ("../").repeat(x) }Acceuil/acceuil.html"> 
					Acceuil
				</a>
				<a href="${x==0 ? '' : ("../").repeat(x) }Compétitons/comp.html">
					Compétitons et résultats
				</a>
				<a href="${x==0 ? '' : ("../").repeat(x) }Annonces/annonceDouble.html">
					Actualités
				</a>
				<a href="${x==0 ? '' : ("../").repeat(x) }Mission/mission.html">
					Qui sommes nous?
				</a>
				<a href="${x==0 ? '' : ("../").repeat(x) }Partner/partner.html">
					Nos Partenaires
				</a>
				<a href="${x==0 ? '' : ("../").repeat(x) }Contact/contact.html">
					Contact
				</a>
		</div>
		<div class="footer-column">
			<h3>Contact</h3>
			<div class="contact-list">
				<a href="tel:+21692096882" class="contact-link-f">
				<div class="icon-f">
					<i class="fa-solid fa-phone"></i><p>+216 92 09 6882</p>
				</div>
			</a>
			<a href="mailto:secretairegeneralatsm@gmail.com" class="contact-link-f">
				<div class="icon-f">
					<i class="fa-solid fa-envelope"></i>
					<p>secretairegeneralatsm@gmail.com</p>
				</div>
			</a>
			<a href="https://www.facebook.com/p/ATSM-Ben-Arous-100089070761300/" target="_blank" class="contact-link-f">
				<div class="icon-f">
					<i class="fa-brands fa-facebook"></i>
				</div>
			</a>
			
		</div>
		<div class="footer-footer">
			<p>
				&copy; 2026 Association Tunisienne des Sciences Mathématiques. Tous droits réservés.
			</p>
			<br></br>
			<p>
				Support technique : Youssef Halim Ajmi
				<a href="mailto:youssef500ajmi@gmail.com" class="contact-link-f">
					youssef500ajmi@gmail.com
				</a>
			</p>
		</div>
	</div>
</footer>`  
}