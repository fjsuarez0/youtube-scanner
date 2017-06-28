/* 
 *
 * Firebase Auth 
 * Firebase meths for authencicator ;) 
 *
 * 
*/
	/*

		 function buttonSignIn() {
	*/	
console.log("Hello World!")
    function buttonSignIn() {
      if (!firebase.auth().currentUser) {
        // [START createprovider]
        var provider = new firebase.auth.GoogleAuthProvider();
        // [END createprovider]
        // [START addscopes]
				provider.addScope('https://www.googleapis.com/auth/youtube.readonly');
				provider.addScope('https://www.googleapis.com/auth/yt-analytics.readonly');
        // [END addscopes]
        // [START signin]
        firebase.auth().signInWithPopup(provider).then(function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // [START_EXCLUDE]
       //   document.getElementById('quickstart-oauthtoken').textContent = token;
          // [END_EXCLUDE]
        }).catch(function(error) {
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
        // [END signin]
      } else {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
      }
      // [START_EXCLUDE]
      document.getElementById('quickstart-sign-in').disabled = true;
      // [END_EXCLUDE]
    }

		function buttonSignOut(){
    	firebase.auth().signOut().then(()=>{
//      	$('#sing-out').disabled = true;
         location.reload();
       }).catch((error)=>{
         console.log(error)
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
		buttonSignIn()
	})
	
	$("#quickstart-sign-out").click(function() {		
	  $("#quickstart-sign-out").prop("disabled", true) 
		$("#quickstart-sign-in").prop("disabled", false) 
		buttonSignOut()
	})

    window.onload = function() {
      initApp();
    };
var client_id = "122389199276-ut2naq56p7gnf14qrjlsml5mhbs5djm5.apps.googleusercontent.com"















// bind this to your single page app...
