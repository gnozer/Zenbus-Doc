<article class="article">
<div class="row">
	<div class="section col s12 m12 l10 bodybox">
		<a class="btn-floating btn-large waves-effect waves-light printButton" onclick="setArticleView()"><i class="material-icons">remove_red_eye</i></a>
		<h1>Application Web</h1>
		<p>Les réseaux zenbus sont aussi accessibles depuis un navigateur internet. La liste est disponible ici: <a href="http://www.zenbus.fr/">zenbus.fr</a> </p>
		<div id="traveller-web-cat1" class="section scrollspy">
			<h2>Sélection d'un réseau</h2>
			<div class="row valign-wrapper">
				<div class="col s12 m12 l4">                
               <div class="material-placeholder">
                	<img src="/images/fr/traveller_select_network_web.png" alt="" class="greyBorder responsive-img materialboxed" data-caption="Sélection de réseau">
           		</div>
				</div>
				<div class="col s12 m12 l8">
					<ul class="collection">
						<li class="collection-item avatar"><span class="number-icon circle cyan lighten-5">1</span> <span class="title">Réseaux disponibles</span>
							<p>Sélection parmi les réseaux publics présents sur Zenbus <br>
								Dans cette liste, les réseaux sont regroupés par pays.</p>
						</li>
						<li class="collection-item avatar"><span class="number-icon circle cyan lighten-5">2</span> <span class="title">Réseau privé</span>
							<p>Si vous souhaitez accéder à un réseau privé, saisir l’adresse que votre chef de projet zenbus vous a communiqué.</p></li>
					</ul>
				</div>
			</div>
		</div>
		<div id="traveller-web-cat2" class="section scrollspy">
			<h2>Carte</h2>
			<p>Visualisation sur une carte du ou des lignes du réseau. <br>La position des véhicules apparait en temps réels dans la couleur de la ligne sur laquelle ils sont affectés.</p>
			<div class="row valign-wrapper">
				<div class="col s12 m12 l4">
					<div class="material-placeholder">
                	<img src="/images/fr/traveller_map_web.png" alt="" class="greyBorder responsive-img materialboxed" data-caption="Carte du réseau">
           		</div>
				</div>
				<div class="col s12 m12 l8">
					<ul class="collection">
						<li class="collection-item avatar"><span class="number-icon circle cyan lighten-5">1</span> <span class="title">Icône Ma position</span>
							<p>Cette icône indique votre position actuelle.</p></li>
						<li class="collection-item avatar"><span class="number-icon circle cyan lighten-5">2</span> <span class="title">Vers ma position</span>
							<p>Au clic sur ce bouton, la carte zoom sur votre position actuelle.</p></li>
						<li class="collection-item avatar"><span class="number-icon circle cyan lighten-5">3</span> <span class="title">Plan / Satellite</span>
							<p>Permet de modifier la visualisation de la carte et de faire apparaître réciproquement une vue Plan ou une vue Satellite.</p></li>
						<li class="collection-item avatar"><span class="number-icon circle cyan lighten-5">4</span> <span class="title">Ligne</span>
							<p>Au clic sur une ligne sur la carte, permet de changer la ligne (voir paragraphe Lignes ci-dessous)</p></li>
						<li class="collection-item avatar"><span class="number-icon circle cyan lighten-5">5</span> <span class="title">Arrêt</span>
							<p>Au clic sur un arrêt, plus d'information sur les lignes passant à l'arrêt.</p></li>
						<li class="collection-item avatar"><span class="number-icon circle cyan lighten-5">6</span> <span class="title">Véhicule</span>
							<p>Au clic sur un véhicule, le véhicule est sélectionné sur la ligne (voir paragraphe Lignes ci-dessous).</p></li>
					</ul>
				</div>
			</div>
		</div>
		<div id="traveller-web-cat3" class="section scrollspy">
			<h2>Rechercher</h2>
			<p>Toutes les lignes du réseau sont affichées.</p>
			<div class="row valign-wrapper">
				<div class="col s12 m12 l4">
					<div class="material-placeholder">
                	<img src="/images/fr/traveller_search.png" alt="" class="smaller greyBorder responsive-img materialboxed" data-caption="Section recherche">
           		</div>
				</div>
				<div class="col s12 m12 l8">
					<ul class="collection">
						<li class="collection-item avatar"><span class="number-icon circle cyan lighten-5">1</span> <span class="title">Moins</span>
							<p>Au clic sur ce lien, permet de ne visualiser que le numéro commercial de la ligne.</p></li>
						<li class="collection-item avatar"><span class="number-icon circle cyan lighten-5">2</span> <span class="title">Plus</span>
							<p>Au clic sur ce lien, permet de visualiser l'ensemble des directions de la ligne.</p></li>
						<li class="collection-item avatar"><span class="number-icon circle cyan lighten-5">3</span> <span class="title">Ligne</span>
							<p>Au clic sur une ligne, visualisation et sélection de la ligne sur la carte (voir paragraphe Lignes ci-dessous).</p></li>
					</ul>
				</div>
			</div>
			<blockquote class="gold">
                <span>Recherche et filtre possible avec auto complétion par : </span>
				<ul class="browser-default">
					<li>nom de réseau : La liste des réseaux correspondant s'affiche.</li>
					<li>nom d'arrêt : La liste des arrêts du réseau sélectionné s'affiche.</li>
					<li>numéro de ligne : La liste des arrêts de la ligne s'affiche.</li>
				</ul>
			</blockquote>
		</div>
		<div id="traveller-web-cat4" class="section scrollspy">
			<h2>Lignes</h2>
			<div class="row valign-wrapper">
				<div class="col s12 m12 l4">
					<div class="material-placeholder">
                	<img src="/images/fr/traveller_web_lines.png" alt="" class="smaller greyBorder responsive-img materialboxed" data-caption="Lignes">
           		</div>
				</div>
				<div class="col s12 m12 l8">
					<ul class="collection">
						<li class="collection-item avatar"><span class="number-icon circle cyan lighten-5">1</span> <span class="title">Nom</span>
							<p>Nom de la ligne.</p></li>
						<li class="collection-item avatar"><span class="number-icon circle cyan lighten-5">2</span> <span class="title">Direction</span>
							<p>Différentes destinations de la ligne.</p></li>
						<li class="collection-item avatar"><span class="number-icon circle cyan lighten-5">3</span> <span class="title">Aide</span>
							<p>Au clic sur cette icône, permet l'affichage de l'Aide (voir paragraphe Aides ci-dessous).</p></li>
						<li class="collection-item avatar"><span class="number-icon circle cyan lighten-5">4</span> <span class="title">Fermer</span>
							<p>Au clic sur cette icône, permet de fermer l'affichage des informations de la ligne. Une sélection d'une ligne sur la carte permet de le faire réapparaître.</p></li>
						<li class="collection-item avatar"><span class="number-icon circle cyan lighten-5">5</span> <span class="title">Arrêt</span>
							<p>Pour chaque arrêt est indiqué :</p>
								<ul class="browser-default">
									<li>la distance restant à parcourir par le ou les deux prochains véhicules avant l’arrêt</li>
									<li>le temps de départ du prochain départ</li>
									<li>les icônes des lignes en correspondance aux arrêts sont présentes.</li>
								</ul>
							</li>
					</ul>
				</div>
			</div>
			<blockquote class="gold">
				Si un véhicule ou un arrêt est sélectionné, celui-ci est mis en évidence dans la liste. <br>
				Dans le cas d'un arrêt sélectionné, la liste de tous les prochains passages à l'arrêt est indiqué.
            </blockquote>
		</div>
		<div id="traveller-web-cat5" class="section scrollspy">
			<h2>Aide</h2>
			<div class="row valign-wrapper">
				<div class="col s12 m12 l4">
					<div class="material-placeholder">
                	<img src="/images/fr/traveller_web_help.png" alt="" class="smaller greyBorder responsive-img materialboxed" data-caption="Aide">
           		</div>
				</div>
				<div class="col s12 m12 l8">
					<p>L’Aide présente la description des icônes utilisées dans la zone Ligne. <br>
						Un clic sur la croix permet de fermer cette Aide.</p>
				</div>
			</div>
		</div>
		<div id="traveller-web-cat6" class="section scrollspy">
			<h2>Messages</h2>
			<div class="row valign-wrapper">
				<div class="col s12 m12 l4">
					<div class="material-placeholder">
                	<img src="/images/fr/traveller_web_messages.png" alt="" class="smaller greyBorder responsive-img materialboxed" data-caption="Messages">
           		</div>
				</div>
				<div class="col s12 m12 l8">
					<p>
						En cliquant sur l'icône "Messages" (voir Légende des icônes ci-dessous) au-dessus du nom de votre réseau, vous obtenez les messages postés apr l'exploitant de votre réseau à destination des voyageurs.<br>
						Ils peuvent informer sur les problèmes de circulation, les déviations, les manifestations, etc...<br>
						En italique sont précisées, si connues, les dates de début et de fin du message.<br>
						Un point bleu clignotant appraît à la suite du libellé s'il s'agit d'un nouveau message.
					</p>
				</div>
			</div>
		</div>
		<div id="traveller-web-cat7" class="section scrollspy">
			<h2>Légende des icônes</h2>
			<ul class="collection icon-list">
				<li class="nopadding collection-item ">
					<span class="icon-logozenbus"></span>
					<span class="title">Redirection vers le site <a href="http://zenbus.fr">http://zenbus.fr</a></span>
				</li>
				<li class="nopadding collection-item ">
					<span class="icon-messageactive"></span>
					<span class="title">Accès aux messages - Nouveau(x) message(s)</span>
				</li>
				<li class="nopadding collection-item ">
					<span class="icon-message"></span>
					<span class="title">Accès aux messages - Pas de nouveau message</span>
				</li>
				<li class="nopadding collection-item ">
					<span class="icon-vehicleactive"></span>
					<span class="title">Véhicule sélectionné</span>
				</li>
				<li class="nopadding collection-item ">
					<span class="icon-vehicle"></span>
					<span class="title">Véhicule non-sélectionné</span>
				</li>
				<li class="nopadding collection-item ">
					<span class="icon-zoom"></span>
					<span class="title">Zoom de la carte sur votre position actuelle</span>
				</li>
				<li class="nopadding collection-item ">
					<span class="icon-zoomactive"></span>
					<span class="title">La carte est zoomée sur votre position actuelle</span>
				</li>
				<li class="nopadding collection-item ">
					<span class="icon-help"></span>
					<span class="title">Ouvrir l'Aide</span>
				</li>
				<li class="nopadding collection-item ">
					<span class="icon-cross"></span>
					<span class="title">Fermer l'Aide ou les informations de la ligne</span>
				</li>
				<li class="nopadding collection-item ">
					<span class="icon-direction"></span>
					<span class="title">Une destination de la ligne</span>
				</li>
				<li class="nopadding collection-item ">
					<span class="icon-search"></span>
					<span class="title">Rechercher</span>
				</li>
				<li class="nopadding collection-item ">
					<span class="icon-position"></span>
					<span class="title">Votre position sur la carte</span>
				</li>
				<li class="nopadding collection-item ">
					<span class="icon-realtime"></span>
					<span class="title">Temps réel - Votre bus est actif et visible sur votre ligne. Le temps d'arrivée est évalué en temps-réel par Zenbus.</span>
				</li>
				<li class="nopadding collection-item ">
					<span class="icon-estimatedtime"></span>
					<span class="title">Horaire estimé - Il n'y a pas encore de bus actif sur votre ligne mais zenbus peut déjà estimer son horaire d'arrivée.</span>
				</li>
				<li class="nopadding collection-item ">
					<span class="icon-officialtime"></span>
					<span class="title">Horaire théorique - Il n'y a pas de bus actifs sur votre ligne et l'horaire de passage indiqué correspond à la fiche horaire officielle publiée par le réseau de transports.</span>
				</li>
				<li class="nopadding collection-item ">
					<span class="icon-notime"></span>
					<span class="title">Horaire indisponible - Il n'y a pas de bus actif sur votre ligne et nous ne disposons pas d'horaires de passage à l'arrêt pour ce trajet. Vous pouvez peut-être consulter les informations aux arrêts précédents.</span>
				</li>
				<li class="nopadding collection-item ">
					<span class="icon-endservice"></span>
					<span class="title">Fin de service - Plus aucun véhicule n'est prévu pour circuler dans cette direction aujourd'hui.</span>
				</li>
				<li class="nopadding collection-item ">
					<span class="icon-tomorrow"></span>
					<span class="title">Demain - Indique le premier horaire de passage prévu à votre arrêt pour le lendemain.</span>
				</li>
			</ul>
		</div>
	</div>
	<div class="col hide-on-small-only m3 l2 articleNav">
		<ul class="section table-of-contents" style="position: fixed; top: 65px;">
			<li><a href="#traveller-web-cat1">Sélection d'un réseau</a></li>
			<li><a href="#traveller-web-cat2">Carte</a></li>
			<li><a href="#traveller-web-cat3">Rechercher</a></li>
			<li><a href="#traveller-web-cat4">Lignes</a></li>
			<li><a href="#traveller-web-cat5">Aide</a></li>
			<li><a href="#traveller-web-cat6">Messages</a></li>
			<li><a href="#traveller-web-cat7">Légende des icônes</a></li>
		</ul>
	</div>
</div>
</article>