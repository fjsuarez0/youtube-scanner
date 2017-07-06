/* 
 *
 * Firebase Auth 
 * Firebase meths for authencicator ;) 
 *
 * 
*/
	/*

		 function buttonSignIn() {

		 apiKey: apiKeyValue,
		 discoveryDocs: [discoveryDocsValue],
		 clientId: clientIdValue,
		 scopes: scopesValue,
	"*/	
//console.log(gapi)
//							
//
var apiKeyValue =	 "AIzaSyByEs52_P--XiS4yKtX_QRfgMiEXjHNb8U" 
var	discoveryDocsValue = "https://www.googleapis.com/discovery/v1/apis/youtubeAnalytics/v1/rest"
var	clientIdValue = "122389199276-ut2naq56p7gnf14qrjlsml5mhbs5djm5.apps.googleusercontent.com"
var	scopesValue =  ["https://www.googleapis.com/auth/youtube.readonly", "https://www.googleapis.com/auth/yt-analytics.readonly"]
var url = "AIzaSyByEs52_P--XiS4yKtX_QRfgMiEXjHNb8U"
/*
function start() {

	console.log(config.google.scope)
	gapi.client.init({
    'apiKey': apiKeyValue,

    'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtubeAnalytics/v1/rest'],

    'clientId': '122389199276-ut2naq56p7gnf14qrjlsml5mhbs5djm5.apps.googleusercontent.com',
    'scope': config.google.scope,
  }).then(function() {
	}).then(function(response) {
    console.log(response.result);
  }, function(reason, a) {
    console.log('Error: ' + reason.result);
		console.log(a)
  });
};
*/
/*
function start(){
	gapi.client.init({
   	 client_id: clientIdValue,
//		 apiKey: apiKeyValue,
//		 discoveryDocs: [discoveryDocsValue],
		 scopes: scopesValue,
	º}).then(function(){
		console.log("Hey, all it`s fine")
	}).catch(function(){
		console.log("Somethings it`s bad")
	})
}
*/
/*
 *
 * 	scopes: "https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/yt-analytics.readonly"
*/ 

gapi.load("client:auth2", initApp)


    function onSignIn(googleUser) {
      console.log('Google Auth Response', googleUser);
      // We need to register an Observer on Firebase Auth to make sure auth is initialized.
      var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!isUserEqual(googleUser, firebaseUser)) {
          // Build Firebase credential with the Google ID token.
          // [START googlecredential]
          var credential = firebase.auth.GoogleAuthProvider.credential(
              googleUser.getAuthResponse().id_token);
          // [END googlecredential]
          // Sign in with credential from the Google user.
          // [START authwithcred]
          firebase.auth().signInWithCredential(credential).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // [START_EXCLUDE]
            if (errorCode === 'auth/account-exists-with-different-credential') {
              alert('You have already signed up with a different auth provider for that email.');
              // If you are using multiple auth providers on your app you should handle linking
              // the user's accounts here.
            } else {
              console.error(error);
            }
            // [END_EXCLUDE]
          });
          // [END authwithcred]
        } else {
          console.log('User already signed-in Firebase.');
        }
      });
    }
    // [END googlecallback]
    /**
     * Check that the given Google user is equals to the given Firebase user.
     */
    // [START checksameuser]
    function isUserEqual(googleUser, firebaseUser) {
      if (firebaseUser) {
        var providerData = firebaseUser.providerData;
        for (var i = 0; i < providerData.length; i++) {
          if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
              providerData[i].uid === googleUser.getBasicProfile().getId()) {
            // We don't need to reauth the Firebase connection.
            return true;
          }
        }
      }
      return false;
    }
    // [END checksameuser]
    /**
     * Handle the sign out button press.
     */

//		var googleAuth = gapi.auth2.getAuthInstance();

		function handleSignOut() {
      var googleAuth = gapi.auth2.getAuthInstance();
			if(!googleAuth){
				console.log("usuario pelao")
			}
			googleAuth.signOut().then(function() {
        firebase.auth().signOut().then(function(){
					location.reload()
				})
      });
    }


function initApp() {
		firebase.auth().onAuthStateChanged(function (user){
			if(user) {
				console.log(user.displayName)
		    document.getElementById('name').textContent = user.displayName;				
    // 		$("#quickstart-sign-in").prop("disabled", true)    	
	  //			$("#quickstart-sign-out").prop("disabled", false) 
			} else {
				console.log("Sign-Out")
	  // 		$("#quickstart-sign-out").prop("disabled", true) 
		//	$("#quickstart-sign-in").prop("disabled", false) 
			}
		})
	}
	
	$("#quickstart-sign-in").click(function() {		
  	$("#quickstart-sign-in").prop("disabled", true)    	
		$("#quickstart-sign-out").prop("disabled", false) 
		onSignIn()
	})
	
	$("#quickstart-sign-out").click(function() {		
	  $("#quickstart-sign-out").prop("disabled", true) 
		$("#quickstart-sign-in").prop("disabled", false) 
		handleSignOut()
	})

    window.onload = function() {
      initApp();
    };
var client_id = "122389199276-ut2naq56p7gnf14qrjlsml5mhbs5djm5.apps.googleusercontent.com"















// bind this to your single page app...
