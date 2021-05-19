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
            if (bolean) console.log("https://www.linkedin.com/in/jorgehenriqueaf/"); 
        }

        var exibirGitHub = function (bolean) {
            if (bolean) console.log("https://github.com/jorgehaf");
        }

        var exibirInstagram = function (bolean) {
            if (bolean) console.log("https://www.instagram.com/jorgehaf/");
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