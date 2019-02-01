<article id="zenbox" class="article">
	
<div class="row">
	<div class="section col s12 m12 l10 bodybox">
		<a class="btn-floating btn-large waves-effect waves-light printButton" onclick="setArticleView()"><i class="material-icons">remove_red_eye</i></a>
		<h1><span class="imp">NEW: </span>Zenbus Box</h1>
		<div id="driver-zenbox-cat1" class="section scrollspy">
			<h2>Introduction</h2>
			<div class="row valign-wrapper">
				<div class="col s2 m2 l2">
					<img src="/images/driver_zenbox_box.png" alt="" class="circle responsive-img">
				</div>
				<div class="col s10 m10 l10">
					<p>
						Afin de s'affranchir des problématiques que peuvent causer les smartphones (organisation, manipulations, etc…), une solution alternative est désormais possible : <span class="imp2">Zenbus Box</span>. Il s’agit d’un boîtier GPS connecté qui, une fois alimenté, se charge de transmettre des positions du véhicule en temps-réel. 
					</p>
				</div>
			</div>
		</div>
		<div id="driver-zenbox-cat2" class="section scrollspy">
			<h2>Contraintes</h2>
			<p>
				Le déploiement de la solution boîtier est équivalent à un fonctionnement Zenbus Driver en mode automatique. Les mêmes contraintes sont alors à prendre en compte. Ainsi, un réseau est compatible boîtier si :
			</p>
			<ul class="browser-default">
				<li>il n’y a pas de tronçons communs entre les lignes aux départs de celles-ci</li>
				<li>il y a des tronçons communs au départ de ligne mais pas d’horaires de départ identiques ou proches</li>
				<li>il n’y a pas de tronçons communs entre la ligne et un trajet HLP (Haut-le-pied)</li>
			</ul>
			<blockquote>Une analyse topologique de votre réseau sera nécessaire avant toute contractualisation d'une solution Zenbus Box.</blockquote>
		</div>
		<div id="driver-zenbox-cat3" class="section scrollspy">
			<h2>Installation du boîtier</h2>
			<h3>Emplacement</h3>
			<p>
				Le boîtier peut-être placé « n'importe où », il faut simplement qu'il soit fixé (avec des colliers de serrage par exemple). <br>
				L'antenne déportée doit être face au ciel si possible, et est positionnée avec le support magnétique ou adhésif double face. <br>
				Vous trouverez dans l'image ci-dessous des photos du boitier installés dans un bus :
			</p>
			<img src="/images/fr/driver_zenbox_installation.png" alt="" class="greyBorder responsive-img materialboxed">
			<br>
			<h3>Alimentation</h3>
			<p>Le boîtier doit être alimenté en <span class="imp2">12V/24V</span> avant contact par le connecteur avec raccordement à la masse (coffre électrique). <br>
			Protection si possible par un fusible <span class="imp2">5A</span>.
			</p>
			<br>
			<h3>Consommation électrique</h3><br>
			<ul class="browser-default">
				<li>Véhicule en déplacement: 12 V / 200mA </li>
				<li>Véhicule à l'arrêt: 12 V / 2mA </li>
			</ul>
		 	<p>Zenbus box est conçu pour consommer un minimum d'energie. Même dans le cas d'une alimentation avant-contact (système alimenté en permanence), la consommation électrique est négligeable: par rapport aux capacités standard des batteries de bus / car</p>
			<h3>Schéma de câblage</h3><br>
			<p>La solution matérielle Zenbus Box est unqiquement utilisée pour du tracking pure (mode auto). Ainsi, seul le raccordement des câbles d'alimentation est nécessaire (fil rouge et fil noir). </p>
			<img src="/images/driver_zenbox_scheme.png" alt="" class="responsive-img">
			<table style="width:300px" class="highlight">
				<thead>
					<tr>
						<th>Numéro</th>
						<th>Descriptif</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>RS232 TX</td>
					 </tr>
					 <tr>
						<td>2</td>
						<td>RS232 RTS</td>
					 </tr>
					 <tr>
						<td>3</td>
						<td>Digital Output 3</td>
					 </tr>
					 <tr>
						<td>4</td>
						<td>Digital Output 2</td>
					 </tr>
					 <tr>
						<td>5</td>
						<td>Analog (0-36v) input</td>
					 </tr>
					 <tr>
						<td>6</td>
						<td>Digital Input 4</td>
					 </tr>
					 <tr>
						<td>7</td>
						<td>Digital Input 3</td>
					 </tr>
					 <tr>
						<td>8</td>
						<td>Digital Input 2</td>
					 </tr>
					 <tr>
						<td>9</td>
						<td><strong>Power (-) GROUND</strong></td>
					 </tr>
					 <tr>
						<td>10</td>
						<td><strong>Power (+) 12/24v</strong></td>
					 </tr>
					 <tr>
						<td>11</td>
						<td>Digital (Button) Input [0-3.3v]</td>
					 </tr>
					 <tr>
						<td>12</td>
						<td>RS232 RX</td>
					 </tr>
					 <tr>
						<td>13</td>
						<td>RS232 CTS</td>
					 </tr>
					 <tr>
						<td>14</td>
						<td>Digital Output 1</td>
					 </tr>
					 <tr>
						<td>15</td>
						<td>Power (5v) output</td>
					 </tr>
					 <tr>
						<td>16</td>
						<td>CAN2 HIGH</td>
					 </tr>
					 <tr>
						<td>17</td>
						<td>CAN2 LOW</td>
					 </tr>
					 <tr>
						<td>18</td>
						<td>CAN1 HIGH</td>
					 </tr>
					 <tr>
						<td>19</td>
						<td>CAN1 LOW</td>
					 </tr>
					 <tr>
						<td>20</td>
						<td>Digital Input 1</td>
					 </tr>
				</tbody>
			</table>
			
		</div>
	</div>
	<div class="col hide-on-small-only m3 l2 articleNav">
		<ul class="section table-of-contents">
			<li><a href="#driver-zenbox-cat1">Introduction</a></li>
			<li><a href="#driver-zenbox-cat2">Contraintes</a></li>
			<li><a href="#driver-zenbox-cat3">Installation des boîtiers</a></li>
		</ul>
	</div>
</div>
</article>