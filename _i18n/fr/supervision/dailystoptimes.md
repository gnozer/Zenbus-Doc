{::nomarkdown}
<article id="dailystoptimes" class="article">
<div class="row">
	<div class="section col s12 m12 l10 bodybox">
		<a class="btn-floating btn-large waves-effect waves-light printButton" onclick="setArticleView()"><i class="material-icons">remove_red_eye</i></a>
		<h1>Temps de passage</h1>
        <blockquote>Les temps de passage constatés sont disponibles à J+1</blockquote>
		<div id="supervision-dailystoptimes-cat1" class="section scrollspy">
			Visualisation de l’historique, disponible à J+1, des horaires de passages constatés.
			<div class="row valign-wrapper">
				<div class="col s12 m12 l12">
					<div class="material-placeholder"><img src="/images/fr/supervision_dailystoptimes.png" alt="" class="greyBorder responsive-img materialboxed" data-caption="Interface Temps de passage de la supervision"></div>
				</div>
			</div>
			<ul class="collection">
				<li class="collection-item avatar"><span class="number-icon circle cyan lighten-5">1</span> <span class="title">Date</span>
					<p>Sélectionnez la date pour laquelle vous souhaitez consulter les temps de passages constatés aux arrêts</p></li>
				<li class="collection-item avatar"><span class="number-icon circle cyan lighten-5">2</span> <span class="title">Liste des lignes</span>
					<p>Sélectionnez la ligne à consulter parmi les lignes de votre réseau.</p></li>
				<li class="collection-item avatar"><span class="number-icon circle cyan lighten-5">3</span> <span class="title">Liste des missions regroupées par direction</span>
					<p>Sélectionnez la direction à consulter parmi les mission de la ligne sélectionnée. <br>A côté du nom de la mission, le nombre de course officielle est indiqué / le nombre de course réellement effectuée. Ce nombre est présenté : 
					<ul class="browser-default">
								<li>En vert : nombre de course officielle =  nombre de course réellement effectuée. </li>
								<li>En orange : nombre de course officielle > nombre de course réellement effectuée.</li>
							</ul>
					</p></li>
				<li class="collection-item avatar"><span class="number-icon circle cyan lighten-5">4</span> <span class="title">Temps de passages constatés</span>
					<p>Vous pouvez visualiser ici la totalité des courses effectuées. Pour chaque course, et par arrêt, vous pouvez consulter l'heure d'arrivée et l'heure de départ constatée du véhicule.
					<ul class="browser-default">
								<li>“???” indique que le passage à l’arrêt n’a pas été détecté par Zenbus pour ce trajet et cet arrêt.</li>
								<li>“N/A” indique un arrêt non prévu officiellement.</li>
							</ul>
							Au survol le temps passé (en seconde) à l’arrêt est affiché.
							Les terminaux (partiel ou non) sont indiqués par un rond blanc dans la liste des arrêts. 
					</p></li>
				<li class="collection-item avatar"><span class="number-icon circle cyan lighten-5">5</span> <span class="title">Exports</span>
					<p>Pour effectuer vos propres analyses, vous pouvez exporter les temps de passages au format Excel ou CSV.</p></li>
			</ul>
		</div>
	</div>
	<div class="col hide-on-small-only m3 l2 articleNav">
		<ul class="section table-of-contents">
			<li><a href="#supervision-dailystoptimes-cat1">Temps de passage</a></li>
		</ul>
	</div>
</div>
</article>
{:/nomarkdown}