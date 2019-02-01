<article id="configuration" class="article">
<div class="row">
	<div class="col s12 m9 l10 bodybox">
		<a class="btn-floating btn-large waves-effect waves-light printButton" onclick="setArticleView()"><i class="material-icons">remove_red_eye</i></a>
		<h1>Configuration</h1>
		<div id="driver-configuration-cat1" class="section scrollspy">
			<h2>Etape 1. Désactivation du Wifi</h2>
			<p>
				Il est nécessaire de <span class="imp2">désactiver</span> le Wifi sur le terminal pour éviter un décrochage régulier de la connexion 3G/4G (ainsi qu'une économie de batterie en évitant un scan permanent des réseaux à proximité). <br> Pour cela dans les options réseau du terminal, il faut <span class="imp2">désactiver</span> le Wifi. <br> Il y a aussi, selon les versions d'Android, des <span class="imp2">paramètres avancés</span> qu'il est préférable de désactiver :
			</p>
			<ul class="collection">
				<li class="collection-item avatar"><i class="material-icons circle red hide-on-med-and-down">network_check</i>
					<span class="title">Notification réseau</span>
					<p>A désactiver</p></li>
				<li class="collection-item avatar"><i class="material-icons circle red hide-on-med-and-down">signal_wifi_off</i>
					<span class="title">Wifi activé en mode veille</span>
					<p>Jamais (augmente l'utilisation des données)</p></li>
				<li class="collection-item avatar"><i class="material-icons circle green hide-on-med-and-down">signal_cellular_connected_no_internet_4_bar</i>
					<span class="title">Eviter les connexions instables</span>
					<p>A activer</p></li>
				<li class="collection-item avatar"><i class="material-icons circle green hide-on-med-and-down">wifi_tethering</i>
					<span class="title">Recherche toujours disponible</span>
					<p>A activer</p></li>
			</ul>
		</div>
		<div id="driver-configuration-cat2" class="section scrollspy">
			<h2>Etape 2. Localisation</h2>
			<p>
				Sous Android, vous pouvez paramétrer le mode de localisation. Nous recommandons de sélectionner le mode <span class="imp">GPS uniquement</span>. Ci-dessous, le "workflow" de configuration :
			</p>
			<figure>
				<div class="material-placeholder"><img class="materialboxed responsive-img " data-caption="Marche à suivre pour le paramétrage du mode de localisation" width="650" src="/images/fr/localisation_screenshots.png"></div>
			</figure>
			<blockquote>Les libellés "Haute précision" / "Appareil uniquement" / ... peuvent varier en fonction de la version d'Android.
			</blockquote>
		</div>
		<div id="driver-configuration-cat3" class="section scrollspy">
			<h2>Etape 3. Amélioration précision</h2>
			<p>
				Sur les dernières versions d'Android, le paramètre "Analyse Wi-Fi" de l'option "Amélioration de précision" peut être activé. Ce paramètre vient forcer l'acquisition de positions via wifi (même si GPS/appareil uniquement est sélectionné). <br> Il faut impérativement le désactiver.
			</p>
			<figure>
				<div class="material-placeholder"><img class="materialboxed responsive-img " data-caption="Marche à suivre pour la désactivation de l'amélioration de précision" width="450" src="/images/fr/precision.png"></div>
			</figure>
		</div>
        <div id="driver-configuration-cat4" class="section scrollspy">         
            <h2>Options de Zenbus Driver</h2>
            <table class="striped">
            <thead>
              <tr>
                  <th>Option</th>
                  <th>Description</th>
                  <th>Par défaut</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Seuil de batterie minimum</td>
                <td>Cette option permet de définir le seuil de batterie minimal que doit avoir le terminal pour continuer à utiliser Zenbus Driver. Le but est de préserver la batterie du smartphone pour des usages d'urgence par exemple. </td>
                <td>5%</td>
              </tr>
              <tr>
                <td>Ignorer la batterie si branché</td>
                  <td>Permet d'ignorer le niveau de batterie (cf. option ci-dessus) lorsque le terminal est alimenté.</td>
                  <td>Active</td>
              </tr>
                <tr>
                <td>Démarrage automatique</td>
                <td>Zenbus Driver démarre l'envoi de positions en mode automatique si le terminal est alimenté et la stoppe lorsqu'il ne l'est plus.</td>
                    <td>Inactive</td>
              </tr>
              <tr>
                <td>Application au démarrage</td>
                <td>Android lancera automatiquement Zenbus Driver à l'allumage de votre terminal. Cette option permet de limiter les actions conducteurs à la pise de service voire d'automatiser l'utilisation de Zenbus lorsqu'elle est couplée à l'option "Démarrage automatique".</td><td>Inactive</td>
              </tr>
             <tr>
                <td>Shape matching</td>
                <td>Par défaut, l'association d'un véhicule à une ligne se faire côté serveur. Pour optimiser ce mécanisme, il est possible de le faire aussi depuis Zenbus Driver. Cette option est particulièrement pertinente quand Zenbus Driver est utilisé comme aide à la conduite (par exemple quand l'option avance/retard est activée). </td><td>Inactive</td>
              </tr>    
            <tr>
                <td>Garder l'écran allumé</td>
                <td>Force le terminal à garder l'écran allumé lorsque Zenbus est au premier plan.  Cette option est particulièrement pertinente quand Zenbus Driver est utilisé comme aide à la conduite (par exemple quand l'option avance/retard est activée).</td><td>Inactive</td>
              </tr>
            <tr>
                <td>Activer les animations</td>
                <td>Permet d'activer ou non les animations de l'application. Utile pour préserver la batterie ou pour les terminaux peu "performants". </td><td>Active</td>
              </tr>
            </tbody>
            </table>
        </div>
	</div>
	<div class="col hide-on-small-only m3 l2">
		<ul id="driverRightMenu" class="section table-of-contents">
			<li><a href="#driver-configuration-cat1">Etape 1. Désactivation du Wifi</a></li>
			<li><a href="#driver-configuration-cat2">Etape 2. Localisation</a></li>
			<li><a href="#driver-configuration-cat3">Etape 3. Amélioration précision</a></li>
            <li><a href="#driver-configuration-cat4">Options de Zenbus Driver</a></li>
		</ul>
	</div>
</div>
</article>