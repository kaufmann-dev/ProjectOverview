$(document).ready(function(){


function compare(a, b) {
    if (a.name.toUpperCase() < b.name.toUpperCase() ){
      return -1;
    }
    if ( a.name.toUpperCase() > b.name.toUpperCase() ){
      return 1;
    }
    return 0;
  }

var orderedSites = sites.sort(compare);

var htmlString = "";

orderedSites.forEach(site => {
    htmlString += "<div class='site' data-src='" + site.indexPath + "'>";
    htmlString += "<h3>" + site.name + "</h3>";
    htmlString += "<p>" + site.description + "</p>";
    site.tags.forEach(tag => {
        htmlString += "<span class='tag'>" + tag + "</span>";
    });
    htmlString += "</div>";
});

document.getElementById("sitesWrapper").innerHTML = htmlString;

$('.site').click(function() {
    window.open($(this).data('src'));
});

// NAVIGATION BAR
window.onscroll = function() {
    if (window.pageYOffset >= $('header').outerHeight()) {
        
        document.getElementById("searchBox").classList.add("sticky");
        $("#searchBox").css("width", $('body').width());
    } else {
        document.getElementById("searchBox").classList.remove("sticky");
    }
};

// INPUT SEARCH
$("#searchInput").on("change paste keyup", function() {
    $(".site").each(function () {
        if($(this).text().toLowerCase().indexOf($("#searchInput").val().toLowerCase()) >= 0){
            $(this).css("display", "block");
        } else {
            $(this).css("display", "none");
        }
    });
});
var amount = 0;
$(".site").each(function () {
    amount++;
});
$('#searchInput').attr("placeholder", "Search (" + amount + ")");
});