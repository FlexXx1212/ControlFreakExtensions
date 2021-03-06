function play() {
    if (clickBtn("button-nfplayerPlay")) {
        return true;
    }
    return false;
}

function pause() {
    if (clickBtn("button-nfplayerPause")) {
        return true;
    }
    return false;
}

function skip() {
    clickBtn("button-nfplayerFastForward");
}

function back() {
    clickBtn("button-nfplayerBackTen");
}

function clickBtn(s) {
    var btns = document.getElementsByClassName(s);
    if (btns.length > 0) {
        btns[0].click();
        return true;
    }
    return false;
}

document.onkeyup = function(e) {
    if (e.which == 65) {
        back();
    } else if (e.which == 83) {
        if (!play()) {
            pause();
        }
    } else if (e.which == 68) {
        skip();
    }
};