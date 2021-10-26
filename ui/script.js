var container;

window.onload = function() {
    container = document.getElementsByClassName("container")[0];

    window.addEventListener('message', function (event){
        var action = event.data.action;    

        switch (action) {
            case "setLevel":
                container.children[0].src = "img/" + event.data.image;
                container.style.display = "block";
            break;
        }
            
    });
};