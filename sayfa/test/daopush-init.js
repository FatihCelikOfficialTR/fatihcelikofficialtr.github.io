(function(){
	var s = document.createElement('script');
	s.setAttribute('defer', '');
	s.setAttribute('src', "/push-wrap.js");
	s.onload = init;
	document.body.appendChild(s);

    function init() {
        var userLang = navigator.language || navigator.userLanguage,
            language = userLang.substr(0, 2).toLowerCase(),
            existLanguages = ['be', 'bg', 'cs', 'de', 'el', 'en', 'es', 'fr', 'hr', 'hu', 'id', 'it', 'kk', 'ms', 'pl', 'pt', 'ro', 'ru', 'sk', 'sl', 'th', 'uk', 'vi'];
            
            if(existLanguages.indexOf(language) == -1)
                language = 'en';
            
        var obj = new PushKaWrapper({
                "pid": 31507,
                "vapidPublicKey": 'BC15R6KLnpnzvcQIhcr1ebZ9nmX6g3qknF7PYJMxe28P_AVrPvAgvtMltHcfenR7AGel_9YhsQ9sbGua3Rc7GS0',
                "sourceId": '46681',
                "landingId": 1,
                "marks": {"utm_source":null,"utm_medium":null,"utm_campaign":null,"utm_term":null,"utm_content":null},
                "popupUrl": 'https://notyfried.info/rs/46681?count=5&declCount=10&fullScreenMode=disabled',
                "pushKaScript": 'https://feelmyfly.info/push.js?b=43',
                "iCalScript": 'https://feelmyfly.info/i-cal.js?b=12',
                "languages": {[language]:[]}
            });
        
        obj.start(1, 60);
    }
})();