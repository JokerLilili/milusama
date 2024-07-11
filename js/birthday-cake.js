// loadAudioFile('music/2.mp3');
$('#showForm').on('click', function () {
    const somedialog = document.getElementById("somedialog"),
      dlg = new DialogFx(somedialog);

    dlg.toggle.bind(dlg);
    dlg.toggle();
    loadScript("/js/index_button.js");
})

function loadScript(url) {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    document.body.appendChild(script);
}

$('#toMain').on('click', function () {
    const inputValue = document.getElementById("input-6").value
    if (inputValue === 'lovemilu') {
        document.getElementById("input-6").value = ''
        location.href="MainPage.html";
    }
})