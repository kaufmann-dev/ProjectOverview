$(document).ready(function() {
    $('.postBtn').click(function() {
        $.post(
            "listFiles.php",
            { name: $(this).data('name') },
            function(result) {
                alert('successfully posted key1=value1&key2=value2 to foo.php')
            }
        )
    });
});
