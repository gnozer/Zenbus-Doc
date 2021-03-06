{::nomarkdown}
<article id="count" class="article">
	<div class="row">
	<div class="section col s12 m12 l10 bodybox">
		<a class="btn-floating btn-large waves-effect waves-light printButton" onclick="setArticleView()"><i class="material-icons">remove_red_eye</i></a>
		<h1>Mode manuel - Comptage</h1>
		<div id="driver-comptage-cat1" class="section scrollspy">
			<h2>Contexte</h2>
			<p>
				Le <span class="imp">mode manuel</span> est obligatoire quand le mode automatique ne peut pas fonctionner (ambiguités dûes à des tronçons communs) OU quand l'option Avance/Retard est activée.
			</p>
			<blockquote class="gold">Le comptage est une option payante, pour plus d'information voir avec votre Chef de projet.</blockquote>
		</div>
		<div id="driver-comptage-cat2" class="section scrollspy">
			<h2>Démarrage de l'application</h2>
			<div class="row valign-wrapper">
				<div class="col s2 m2 l2">
					<img src="/images/ic_launcher.png" alt="" class="circle responsive-img">
				</div>
				<div class="col s10 m10 l10">
					<p>Depuis votre smartphone, cliquez sur l'icône ci-contre pour lancer l'application Zenbus Driver.</p>
				</div>
			</div>
			<blockquote>Si vous rencontrez des pop-up de configuration, veuillez vous référer au chapitre Configuration.</blockquote>
			<p>La couleur de fond de l'interface correspond à l'état courant de l'application. Chaque état définit la visibilité de votre véhicule :</p>
			<ul class="collection">
				<li class="collection-item avatar"><i class="material-icons circle grey darken-1"></i> <span class="title">Invisible</span>
					<p>L'application est inactive, aucune position n'est envoyée, votre véhicule n'est visible de personne.</p></li>
				<li class="collection-item avatar"><i class="material-icons circle amber darken-1"></i> <span class="title">Supervision uniquement</span>
					<p>L'application est active, la position de votre véhicule est envoyée en temps-réel, mais vous n'êtes visible que de la supervision (mode "Sans voyageur"...).</p></li>
				<li class="collection-item avatar"><i class="material-icons circle teal lighten-2"></i> <span class="title">Voyageur et supervision</span>
					<p>L'application est active, la position de votre véhicule est envoyée en temps-réel. Votre véhicule est affecté à une ligne, il est visible de la supervision ET des voyageurs.</p></li>
			</ul>

		</div>
		<div id="driver-comptage-cat3" class="section scrollspy">
			<h2>Prise de service</h2>
			<div class="row">
				<div class="col s12 m12 l4">
					<p class="imp">Etape 1</p>
					<div class="material-placeholder"><img src="/images/fr/driver_auto_stop.png" alt="" class="greyBorder smaller responsive-img materialboxed initialized" data-caption="Pour démarrer l'envoi de position, appuyez sur le bouton Démarrer en manuel."></div>
					<p>
						A l'arrivée sur l'application, le système est arrêté.<br> Pour indiquer quelle ligne vous allez effectuer, appuyez sur le bouton "Manuel".
					</p>
				</div>

				<div class="col s12 m12 l4">
					<p class="imp">Etape 2</p>
					<div class="material-placeholder"><img src="/images/fr/driver_manuel_lineselect.png" alt="" class="greyBorder smaller responsive-img materialboxed initialized" data-caption="Sélectionnez la ligne que vous allez effectuer."></div>
					<p>
						L'application est maintenant active. Vous êtes visible uniquement de la supervision.<br> Sélectionnez la ligne que vous allez effectuer.
					</p>
				</div>

				<div class="col s12 m12 l4">
					<p class="imp">Etape 3</p>
					<div class="material-placeholder"><img src="/images/fr/driver_manuel_affectation.png" alt="" class="greyBorder smaller responsive-img materialboxed initialized" data-caption="Zenbus tente d'affecter votre véhicule à la ligne que vous venez de déclarer."></div>
					<p>
						Zenbus va tenter d'affecter votre véhicule à la ligne que vous venez de déclarer ou appuyez sur Finir.<br> L'affectation à la ligne déclarée nécessite que le véhicule soit physiquement proche de celle-ci.<br> Tant que votre véhicule n'est pas affecté à la ligne, vous n'êtes visible que de la supervision.
					</p>
				</div>
			</div>
		</div>
		<div id="driver-comptage-cat4" class="section scrollspy">
			<h2>En service</h2>
			<div class="row">
				<div class="col s12 m12 l4">
					<p class="imp">Navigation</p>
					<div class="material-placeholder"><img src="/images/fr/driver_count_navigation.png" alt="" class="greyBorder smaller responsive-img materialboxed initialized" data-caption="L'interface de l'application affiche l'avancement de votre véhicule sur la ligne."></div>
					<p>
						Une fois l'association effectuée, vous êtes visible des voyageurs sur la ligne déclarée.<br> L'interface de l'application affiche l'avancement de votre véhicule sur la ligne.
					</p>
				</div>
				<div class="col s12 m12 l4">
					<p class="imp">Comptage</p>
					<div class="material-placeholder"><img src="/images/fr/driver_count_count.png" alt="" class="greyBorder smaller responsive-img materialboxed initialized" data-caption="Vous pouvez compter le nombre de montées / descentes par arrêt."></div>
					<p>
						Pour l'arrêt concerné, vous pouvez compter le nombre de montées / descentes (ici avec une découpe par entreprise).<br> Une fois le comptage effectué, cliquez sur "J'ai terminé" pour retourner à l'écran de navigation.
					</p>
				</div>
				<div class="col s12 m12 l4">
					<p class="imp">Fin de mission</p>
					<div class="material-placeholder"><img src="/images/fr/driver_count_endmission.png" alt="" class="greyBorder smaller responsive-img materialboxed initialized" data-caption="Pour déclarer une nouvelle ligne, appuyez sur la flèche."></div>
					<p>
						Au terminus de la ligne, par défaut, l'application va continuer de tenter de vous associer à la ligne précédemment déclarée.<br> Pour déclarer une nouvelle ligne, appuyez sur la flèche (placée à gauche du nom de la ligne).
					</p>
				</div>
			</div>
		</div>
	</div>
	<div class="col hide-on-small-only m3 l2 articleNav">
		<ul class="section table-of-contents">
			<li><a href="#driver-comptage-cat1">Contexte</a></li>
			<li><a href="#driver-comptage-cat2">Démarrage de l'application</a></li>
			<li><a href="#driver-comptage-cat3">Prise de service</a></li>
			<li><a href="#driver-comptage-cat4">En service</a></li>
		</ul>
	</div>
</div>
</article>{:/nomarkdown}