// Athenticate database
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8hV1vntQT9bXICwqW2nk0WZ5L5keKtWE",
  authDomain: "view-counter-1652d.firebaseapp.com",
  projectId: "view-counter-1652d",
  storageBucket: "view-counter-1652d.appspot.com",
  messagingSenderId: "845982910115",
  appId: "1:845982910115:web:07d397b65b23008216a116",
  measurementId: "G-B3L4D3BJQ8"
};
// Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        console.log(firebase.database());
    

// Main Function
	function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }

        function getCookie(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }
        var track = (xx) => {

            var userStatusDatabaseRef = firebase.database().ref('/pages/id/' + xx);

            var isOfflineForDatabase = {
              id: xx,
              url: '#',
              value: 0,
                state: 'offline',
                last_changed: firebase.database.ServerValue.TIMESTAMP,
            };

            var isOnlineForDatabase = {
              id: xx,
              url: '#',
              value: 0,
                state: 'online',
                last_changed: firebase.database.ServerValue.TIMESTAMP,
            };

            firebase.database().ref('.info/connected').on('value', function (snapshot) {
                if (snapshot.val() == false) {
                    return;
                };

                userStatusDatabaseRef.onDisconnect().set(isOfflineForDatabase).then(function () {
                    userStatusDatabaseRef.set(isOnlineForDatabase);
                });
            });
            checkOnline()

        }
        var user = getCookie("tracking");
        if (user != "") {
            console.log("Welcome again " + user);
            track(user)
        } else {
            user = Date.now().toString(16);
            if (user != "" && user != null) {
                console.log("Welcome new user " + user);
                setCookie("tracking", user, 365);
                track(user)
            }
        }

        function checkOnline() {
            firebase.database().ref('/pages/id/').orderByChild('state').equalTo("online").on("value", (data => {
                var liveVisitorCounter = data.numChildren();
                console.log(liveVisitorCounter);
                var root = document.getElementById('root');
                root.innerText = liveVisitorCounter;

            }))
        }