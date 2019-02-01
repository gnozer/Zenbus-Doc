{::nomarkdown}
<article id="providers" class="article">
<div class="row">
	<div class="section col s12 m12 l10 bodybox">
		<a class="btn-floating btn-large waves-effect waves-light printButton" onclick="setArticleView()"><i class="material-icons">remove_red_eye</i></a>
		<h1>Terminaux</h1>
		<div id="supervision-providers-cat1" class="section scrollspy">
			Gestion de la liste des terminaux autorisés sur votre secteur. Un terminal est un smartphone, un boîtier ou un autre type de provider pour un véhicule. Les terminaux doivent être déclarés ici pour pouvoir les voir apparaître dans l’app voyageur ou dans l’application web Zenbus.
			<div class="row valign-wrapper">
				<div class="col s12 m12 l12">
					<div class="material-placeholder"><img src="/images/fr/supervision_providers.png" alt="" class="greyBorder responsive-img materialboxed" data-caption="Interface Terminaux de la supervision"></div>
				</div>
			</div>
			<ul class="collection">
				<li class="collection-item avatar"><span class="number-icon circle cyan lighten-5">1</span> <span class="title">Liste des smartphones/boitiers/autre autorisés</span>
					<p>Vous pouvez consulter et modifier la liste des terminaux autorisés. Pour chaque terminal est indiqué : 
							<ul class="browser-default">
								<li>Son IMEI, l’identifiant unique du terminal. <br>
								<blockquote>Chaque smartphone possède un identifiant unique, l'IMEI. Pour le connaitre, il suffit de taper *#06# lors de la composition d'un numéro.</blockquote>
								<blockquote>Dans le cadre de boîtiers ou d’autres types de providers, merci de contacter au préalable votre référent Zenbus pour connaitre l’identifiant unique de votre terminal.</blockquote></li>
								<li>Son nom. C’est ce nom qui apparaît dans l’App voyageur ou sur l’application web Zenbus. Par défaut, le nom d'un terminal est son IMEI.<blockquote>Cliquez sur le nom du terminal pour le modifier.</blockquote></li>
								<li>La version de Zenbus Driver installé sur le terminal. Cette information, disponible uniquement dans le cas des smartphones, est reçue du smartphone lui-même. </li>
								<li>La date de synchronisation du terminal. Cette information, disponible uniquement dans le cas des smartphones, est reçue du smartphone lui-même. </li>
								<li>L’identifiant privé du terminal, qui correspond à l’identifiant interne Zenbus.</li>
							</ul>
					Lors de la déclaration des terminaux (Voir Nouveau terminal), les terminaux apparaissent “<em>En attente</em>”.  Les terminaux apparaissent synchronisé “<em>Synchronisé(s)</em>”, dans le cas des smartphones uniquement, lorsque Zenbus Driver est déployé et a communiqué avec Zenbus. <br>
					Les terminaux indiqués comme “<em>Appareil(s) sans IMEI disponible(s)</em>”  sont les providers de type zenbox ou tablette sans carte SIM.
				</p></li>
			</ul>
		</div>
	</div>
	<div class="col hide-on-small-only m3 l2 articleNav">
		<ul class="section table-of-contents">
			<li><a href="#supervision-providers-cat1">Terminaux</a></li>
		</ul>
	</div>
</div>
</article>{:/nomarkdown}