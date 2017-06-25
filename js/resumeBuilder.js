$("#main").append(["Ashish"]);
var formattedName= HTMLheaderName.replace("%data%","ashish");


var formattedRole= HTMLheaderRole.replace("%data%","web developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var skills = ["awesomeness","programming"];
$("#main").append(skills);
$("#main").append(skills[0]);
$("#main").append(skills.lenght);