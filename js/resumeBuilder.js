$("#main").append(["Ashish"]);
var formattedName= HTMLheaderName.replace("%data%","ashish");


var formattedRole= HTMLheaderRole.replace("%data%","web developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);