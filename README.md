<h1>Welcome to the YoutubePlaylist application!</h1>

<h2>Instructions to run the application:</h2>

<ul>
	<li>Download the repo as zip.</li>
	<li>Extract the zip folder.</li>
	<li>Open terminal and change directory ('cd') into the downloaded folder.</li>
	<li>Run command 'node app.js' and wait until you see the message 'listening on *:3000. Good to go and check out the app now!'.</li>
	<li>Open your browser (chrome prefered) and type 'http://localhost:3000/' into the address bar.</li>
	<li>You should see videos from my favorite band - Boyce Avenue! Go ahead and select any artist from the dropdown.</li>
</ul>

<h2>Design Decisions:</h2>

<ul>
	<li>The application is based on NodeJS.</li>
	<li>The client or the browser calls a function on page load to load top five videos for the default artist.</li>
	<li>When the user makes any changes to the selection in the dropdown menu, the application calls the same function to load top five videos for the newly selected artist.</li>
	<li>This function makes a post request to the server and passes an encoded version of the artist name selected. The name is encoded so that it is directly usable in the search query.</li>
	<li>The server then calls the YouTube API and the response is sent back to the browser.</li>
	<li>The browser loops through the response to extract the videos and displays them with their respective titles.</li>
</ul>
