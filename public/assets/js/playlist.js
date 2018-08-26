// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    // TODO
    // document.getElementById("TBD").focus();

    // update playlist
    $(".change-playlist").on("click", function(event) {

        // playlist
        var id = $(this).data("id");
        var newName = $(this).data("newPlaylistName");

        //TODO only update the playlist name if it changes... eval something fron the UI to determine

        var newPlaylistState = {
            playlist_name: newName,
        };

        // Send the PUT request to add the playlist
        $.ajax("/api/playlists/" + id, {
            type: "PUT",
            data: newPlaylistState
        }).then(
            function() {
                console.log("changed state to", newPlaylistState);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    //delete the playlist
    $(".delete-playlist").on("click", function(event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/playlists/" + id, {
            type: "DELETE"
        }).then(
        function() {
            console.log("deleted playlist", id);
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });

    //////////////////////////////////////////////////////////////////////////////
    // can do this here or as form submit on the page as an alternate method ...
    //////////////////////////////////////////////////////////////////////////////

    //create playlist
    $(".create-playlist-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        console.log("on post submit playlist");

        var newPlaylistInfo = {
            playlist_name: 'TEST'   //$("#TBD").val().trim()        TODO
        };

        // Send the POST request.
        $.ajax("/api/playlists", {
            type: "POST",
            data: newPlayListInfo
        }).then(
        function() {
            console.log("created new playlist");
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });

});