
var sites = [
    {
        indexPath:"#",
        name:"Audio Player",
        description:"Two different components for playing audio files on your website.",
        tags:[
            "component",
            "audio"
        ]
    },
    {
        indexPath:"#",
        name:"Video Player",
        description:"Two different components for playing video files on your website.",
        tags:[
            "component",
            "video"
        ]
    },
    {
        indexPath:"#",
        name:"Code",
        description:"Elegantly display code on your website.",
        tags:[
            "component",
            "code"
        ]
    },
    {
        indexPath:"#",
        name:"Navigation",
        description:"Useful examples of navigation bars.",
        tags:[
            "component",
            "navigation"
        ]
    },
    {
        indexPath:"#",
        name:"Image Scaling",
        description:"Adjusts images to fit in a container.",
        tags:[
            "component",
            "image"
        ]
    },
    {
        indexPath:"#",
        name:"Image Grid",
        description:"Image grid for displaying many images at once.",
        tags:[
            "component",
            "image"
        ]
    },
    {
        indexPath:"#",
        name:"Color Picker",
        description:"Pick colors from a variety of predefined color palettes.",
        tags:[
            "tool",
            "color"
        ]
    },
    {
        indexPath:"#",
        name:"WebP Compression Comparison",
        description:"Compare different levels of WebP compression.",
        tags:[
            "tool",
            "image"
        ]
    },
    {
        indexPath:"#",
        name:"Bootstrap Grid",
        description:"Explore how the bootstrap grid functions.",
        tags:[
            "tool",
            "bootstrap"
        ]
    },
    {
        indexPath:"#",
        name:"BMI Calculator",
        description:"Calculate your BMI with your input height and weight and vice versa. The capability to calculate in all directions make this special.",
        tags:[
            "tool",
            "Ogo Design"
        ]
    },
    {
        indexPath:"#",
        name:"Number System Converter",
        description:"Convert binary to decimal or hexadecimal and vice versa.",
        tags:[
            "tool",
            "number"
        ]
    },
    {
        indexPath:"#",
        name:"Pie/Doughnut Charts",
        description:"Component for pie and doughnut charts.",
        tags:[
            "tool",
            "chart"
        ]
    }
]

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

