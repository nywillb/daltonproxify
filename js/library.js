$(function () {
    $('[data-toggle="tooltip"]').tooltip()

    $("#bookmarklet").click(function () {
        bootbox.alert({
            title: "Psst!",
            message: "Drag the button to the bookmarks bar, rather than clicking it.",
        })
        return false;
    })
})