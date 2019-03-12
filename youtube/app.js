jQuery(function() {
    var node = document.createElement("a");
    var menuBar = document.getElementsByClassName("title style-scope ytd-video-primary-info-renderer");
    node.href = "https://img.youtube.com/vi/" + location.href.substr(32) + "/maxresdefault.jpg";
    node.innerHTML = "Thumb";
    node.classList.add("customButtons");
    menuBar[0].appendChild(node);

    var node2 = document.createElement("a");
    node2.classList.add("customButtons");
    node2.href = "javascript:hideEndcards()";
    node2.innerHTML = "Cards";
    menuBar[0].appendChild(node2);
});

function hideEndcards() {
    var cards = document.getElementsByClassName("ytp-ce-element");
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.visibility = "hidden";
    }
}