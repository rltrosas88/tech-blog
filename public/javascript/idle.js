let idle = function () {
    let time;

    window.onload = resetTimer;

    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;

    function logUserOut() {
        logout();
    }

    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(logUserOut, 440000);
    }
};

window.onload = function () {
    idle();
};