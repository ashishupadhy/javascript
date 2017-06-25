
//var formattedName= HTMLheaderName.replace("%data%",name);
//var name = "ashish";
//var role="webdeveloper"
//var formattedRole= HTMLheaderRole.replace("%data%",role);
//$("#header").append(formattedRole);
//$("#header").prepend(formattedName);
var skills = ["awesomeness","programming"];
$("#main").append(skills);
$("#main").append(skills[0]);
$("#main").append(skills.lenght);

var bio={
  "name":"ashish",
  "role":"webdeveloper",
  "contacts":{
    "mobile":"0123456789","email":john@example.com,"location":"india"
  },
  "welcomemessage":"shagagjglshlfka",
  "skills":["awesomeness","programming"],
}
//$("#main").append(bio.name)
var work ={};
work.position="course developer";
work.employer = "udacity";
work.years=0.3;
var education = {};
education ["name"]="mumbai university";
education["years"]="2005-2006"
education["city"]= "mumbai";
$("#main").append (work["position"]);
