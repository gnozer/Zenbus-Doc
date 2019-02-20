{::nomarkdown}
<article class="article">
<div class="row">
	<div class="section col s12 m12 l10 bodybox">
		<a class="btn-floating btn-large waves-effect waves-light printButton" onclick="setArticleView()"><i class="material-icons">remove_red_eye</i></a>
		<h1>Application Web</h1>
		<p>Zenbus networks are also accessible from a browser. </p>
		<div id="traveller-web-cat1" class="section scrollspy">
			<h2>Network selection </h2>
			<p> The list of Zenbus networks is available on <a href="https://zenbus.fr/"> https://zenbus.fr </a>
			<div class="row valign-wrapper">
				<div class="col s12 m12 l4">                
               <div class="material-placeholder">
                	<img src="/images/en/traveller_select_network_web.png" alt="" class="greyBorder responsive-img materialboxed" data-caption="Network selection">
           		</div>
				</div>
				<div class="col s12 m12 l8">
					<ul class="collection">
						<p> On the home page of our website, click on "view the network map".
						<br> In this map, click on "Network search" and type the name of the desired network or city.
						<br><br> In the case of a private network, you will be asked for a code. Please ask your network operator.
						</p>
					</ul>
				</div>
			</div>
		</div>
		<div id="traveller-web-cat2" class="section scrollspy">
			<h2>Map</h2>
			<p>Visualization on a map of the network routes. 
            <br>The position of the vehicles appears in real time in the color of the route on which they are assigned.</p>
			<div class="row valign-wrapper">
				<div class="col s12 m12 l4">
					<div class="material-placeholder">
                	   <img src="/images/en/traveller_map_web.png" alt="" class="greyBorder responsive-img materialboxed" data-caption="Network map">
           		    </div>
				</div>
				<div class="col s12 m12 l8">
					<ul class="collection">
						<li class="collection-item avatar"><span class="number-icon circle cyan lighten-5">1</span> <span class="title">Icon my position</span>
							<p>The <a href="#position-icon">position</a> icon indicates your current location.</p></li>
						<li class="collection-item avatar"><span class="number-icon circle cyan lighten-5">2</span> <span class="title">Toward my position</span>
							<p>Click the <a href="#zoom-icon">arrow</a> button, the zoom map to your current location.</p></li>
						<li class="collection-item avatar"><span class="number-icon circle cyan lighten-5">3</span> <span class="title">Plan / Satellite</span>
							<p>Allows you to modify the visualization of the map and reciprocally show a Plan view or a Satellite view.</p></li>
						<li class="collection-item avatar"><span class="number-icon circle cyan lighten-5">4</span> <span class="title">Route</span>
							<p>Click a route on the map to change the <a href="#line-view">route</a>.</p></li>
						<li class="collection-item avatar"><span class="number-icon circle cyan lighten-5">5</span> <span class="title">Stop</span>
							<p>Click on a stop to get more information about the routes passing at the stop.</p></li>
						<li class="collection-item avatar"><span class="number-icon circle cyan lighten-5">6</span> <span class="title">Vehicle</span>
							<p>Click on a vehicle to select the vehicle on the <a href="#line-view">route</a>.</p></li>
					</ul>
				</div>
			</div>
		</div>
		<div id="traveller-web-cat3" class="section scrollspy">
			<h2>Search</h2>
			<p>All the network routes are displayed.</p>
			<div class="row valign-wrapper">
				<div class="col s12 m12 l4">
					<div class="material-placeholder">
                	<img src="/images/en/traveller_search.png" alt="" class="smaller greyBorder responsive-img materialboxed" data-caption="Research section">
           		</div>
				</div>
				<div class="col s12 m12 l8">
					<ul class="collection">
						<li class="collection-item avatar"><span class="number-icon circle cyan lighten-5">1</span> <span class="title">Less</span>
							<p>Click the <u>less</u> link to display the number of the route.</p></li>
						<li class="collection-item avatar"><span class="number-icon circle cyan lighten-5">2</span> <span class="title">More</span>
							<p>Click on the <u>more</u> link to display all the route directions.</p></li>
						<li class="collection-item avatar"><span class="number-icon circle cyan lighten-5">3</span> <span class="title">Route</span>
							<p>Click a route to display and select the <a href="#line_view">route</a> on the map.</p></li>
					</ul>
				</div>
			</div>
			<blockquote class="gold">
                <span>Search and filter possible with auto completion by:</span>
				<ul class="browser-default">
					<li>Network name: The list of matching networks is displayed.</li>
					<li>Stop name: The list of matching network stops is displayed.</li>
					<li>Route name: The list of matching routes is displayed.</li>
				</ul>
			</blockquote>
		</div>
		<div id="traveller-web-cat4" class="section scrollspy">
			<h2 id="line-view">Routes</h2>
			<div class="row valign-wrapper">
				<div class="col s12 m12 l4">
					<div class="material-placeholder">
                	<img src="/images/en/traveller_web_lines.png" alt="" class="smaller greyBorder responsive-img materialboxed" data-caption="Routes">
           		</div>
				</div>
				<div class="col s12 m12 l8">
					<ul class="collection">
						<li class="collection-item avatar"><span class="number-icon circle cyan lighten-5">1</span> <span class="title">Name</span>
							<p>Route name.</p></li>
						<li class="collection-item avatar"><span class="number-icon circle cyan lighten-5">2</span> <span class="title">Direction</span>
							<p>Route directions.</p></li>
						<li class="collection-item avatar"><span class="number-icon circle cyan lighten-5">3</span> <span class="title">Help</span>
							<p>Click on the <a href="#question-mark-icon">question mark</a> icon, to display <a href="#help-id">Help</a>.</p></li>
						<li class="collection-item avatar"><span class="number-icon circle cyan lighten-5">4</span> <span class="title">Close</span>
							<p>Click on the <a href="#cross-icon">cross</a> icon, to close the route information displayed. A route selection on the map makes it reappear.</p></li>
						<li class="collection-item avatar"><span class="number-icon circle cyan lighten-5">5</span> <span class="title">Stop</span>
							<p>For each stop is indicated:</p>
								<ul class="browser-default">
									<li>The remaining distance to be traveled by the next one or two vehicles before the stop.</li>
									<li>The departure time of the next departure.</li>
									<li>The routes icons matching to the stops are present.</li>
								</ul>
							</li>
					</ul>
				</div>
			</div>
			<blockquote class="gold">
				If a vehicle or a stop is selected, it is highlighted in the list. <br>
                In the case of a selected stop, the list of all the next stops is indicated.
            </blockquote>
		</div>
		<div id="traveller-web-cat5" class="section scrollspy">
			<h2 id="help-id">Aide</h2>
			<div class="row valign-wrapper">
				<div class="col s12 m12 l4">
					<div class="material-placeholder">
                	<img src="/images/en/traveller_web_help.png" alt="" class="smaller greyBorder responsive-img materialboxed" data-caption="Help">
           		</div>
				</div>
				<div class="col s12 m12 l8">
					<p>The Help shows the description of the icons used in the Route area. <br>
                       Click the <a href="#cross-icon">cross</a> to close this Help.</p>
				</div>
			</div>
		</div>
		<div id="traveller-web-cat6" class="section scrollspy">
			<h2>Messages</h2>
			<div class="row valign-wrapper">
				<div class="col s12 m12 l4">
					<div class="material-placeholder">
                	<img src="/images/en/traveller_web_messages.png" alt="" class="smaller greyBorder responsive-img materialboxed" data-caption="Messages">
           		</div>
				</div>
				<div class="col s12 m12 l8">
					<p>
						By clicking the <a href="#message-icon">message</a> icon above the network name, you will get messages from your network operator.
                        They can inform about traffic problems, deviations, demonstrations, etc ... <br>
                        <br>
                        In italics are specified, if known, the dates of the beginning and the end of the message. <br>
                        A flashing blue dot will appear after the label if it is a new message.
					</p>
				</div>
			</div>
		</div>
		<div id="traveller-web-cat7" class="section scrollspy">
			<h2>Icons legend</h2>
			<ul class="collection icon-list">
				<li class="nopadding collection-item ">
					<span class="icon-logozenbus"></span>
					<span class="title">Redirect to <a href="https://zenbus.fr"> https://zenbus.fr </a></span>
				</li>
				<li class="nopadding collection-item ">
					<span class="icon-messageactive" id="message-icon"></span>
					<span class="title">Message icon: Access to new message(s).</span>
				</li>
				<li class="nopadding collection-item ">
					<span class="icon-message"></span>
					<span class="title">Message icon: Access to messages - When there is no new message.</span>
				</li>
				<li class="nopadding collection-item ">
					<span class="icon-vehicleactive"></span>
					<span class="title">Selected vehicle.</span>
				</li>
				<li class="nopadding collection-item ">
					<span class="icon-vehicle"></span>
					<span class="title">Unselected vehicle</span>
				</li>
				<li class="nopadding collection-item ">
					<span class="icon-zoom" id="zoom-icon"></span>
					<span class="title">Arrow button: Map zoom on your current position.</span>
				</li>
				<li class="nopadding collection-item ">
					<span class="icon-zoomactive" id="zoomactive-icon"></span>
					<span class="title">The map is zoomed to your current location.</span>
				</li>
				<li class="nopadding collection-item ">
					<span class="icon-help" id="question-mark-icon"></span>
					<span class="title">Question mark icon: Open Help.</span>
				</li>
				<li class="nopadding collection-item ">
					<span class="icon-cross" id="cross-icon"></span>
					<span class="title">Cross icon: Close help or route information.</span>
				</li>
				<li class="nopadding collection-item ">
					<span class="icon-direction"></span>
					<span class="title">A route direction</span>
				</li>
				<li class="nopadding collection-item ">
					<span class="icon-search"></span>
					<span class="title">Research</span>
				</li>
				<li class="nopadding collection-item ">
					<span class="icon-position" id="position-icon" ></span>
					<span class="title">Position icon: Your location on the map.</span>
				</li>
				<li class="nopadding collection-item ">
					<span class="icon-realtime"></span>
					<span class="title">Real Time: The bus is live and visible. Zenbus is constantly computing and updating ETAs for the trip.</span>
				</li>
				<li class="nopadding collection-item ">
					<span class="icon-estimatedtime"></span>
					<span class="title">Estimated schedule: There is no live bus servicing the trip yet, but zenbus has estimated times of arrival and departure, using all available information.</span>
				</li>
				<li class="nopadding collection-item ">
					<span class="icon-officialtime"></span>
					<span class="title">Theoretical schedule: There are no live bus servicing the trip yet, all times of arrival and departure are published in the official schedule.</span>
				</li>
				<li class="nopadding collection-item ">
					<span class="icon-notime"></span>
					<span class="title">No ETAs: There is no live bus servicing the trip yet, and no available achedule (at the stop, in the given direction).</span>
				</li>
				<li class="nopadding collection-item ">
					<span class="icon-endservice"></span>
					<span class="title">End of Service: No more buses are scheduled today (at the stop in the given direction).</span>
				</li>
				<li class="nopadding collection-item ">
					<span class="icon-tomorrow"></span>
					<span class="title">Next day: Earliest scheduled times of arrival and departure (at the stop in the given direction).</span>
				</li>
			</ul>
		</div>
	</div>
	<div class="col hide-on-small-only m3 l2 articleNav">
		<ul class="section table-of-contents" style="position: fixed; top: 65px;">
			<li><a href="#traveller-web-cat1">Network Selection</a></li>
			<li><a href="#traveller-web-cat2">Map</a></li>
			<li><a href="#traveller-web-cat3">Research</a></li>
			<li><a href="#traveller-web-cat4">Routes</a></li>
			<li><a href="#traveller-web-cat5">Help</a></li>
			<li><a href="#traveller-web-cat6">Messages</a></li>
			<li><a href="#traveller-web-cat7">Icons legend</a></li>
		</ul>
	</div>
</div>
</article>
{:/nomarkdown}