window.addEventListener("load", function () {
    var _view = view.getInstance();
    _view.start();
});

var view = (function () {
    var instance;

    function init() {
        var start = function () {
            exibirRedesSociais(true, true, true);
        };

        var exibirRedesSociais = function (linkedin, github, instagram) {
            exibirLinkedin(linkedin);
            exibirGitHub(github);
            exibirInstagram(instagram);
        }

        var exibirLinkedin = function (bolean) {
            bolean ? console.log("https://www.linkedin.com/in/jorgehenriqueaf/") : null;  
        }

        var exibirGitHub = function (bolean) {
            bolean ? console.log("https://github.com/jorgehaf") : null;  
        }

        var exibirInstagram = function (bolean) {
            bolean ? console.log("https://www.instagram.com/jorgehaf/") : null;  
        }

        return {
            start
        };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }

            return instance;
        },
    };
})();