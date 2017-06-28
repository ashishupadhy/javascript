$("#main").append(["Ashish"]);
var formattedName= HTMLheaderName.replace("%data%","Ashish");


var formattedRole= HTMLheaderRole.replace("%data%","web developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var skills = ["awesomeness","programming","singing"];
$("#main").append(skills);
$("#main").append(skills[0]);
$("#main").append(skills.lenght);
var bio={
 "name":"ashish",
 "role":"webdeveloper",
  "contacts":{
    "mobile":"0123456789","email":"john@example.com","location":"india"
  },
  "welcomemessage":"shagagjglshlfka",
  "skills":["awesomeness","programming","singing"],
  "bioPic":"images/fry.jpg"
}
$("#header").append(JSON.stringify(bio));
var work ={};
work.position="course developer";
work.employer = "udacity";
work.years=0.3;
var education = {};
education ["name"]="mumbai university";
education["years"]="2005-2006"
education["city"]= "mumbai";
$("#main").append (work["position"]);
$("#main").append (education.name);


var education={
  "schools":[
    {
     "name":"Mumbai university",
   "location":"Mumabi India",
      "degree":"Masters",
     "majors":["CS"],
      "dates":2013,
     "url":"http//example.com"
    },
   {
     "name":"Gujrat university",
      "location":"Gujrat India",
   "degree":"Masters",
      "majors":["CS"],
    "dates":2016,
     "url":"http//example.com"
  }
],


"online courses":[
 {
 "title":"Javascript Syntax",
 "school":"Udacity",
  "dates":"2017",
  "url":"http//udacity.com"
}
  ]
}



var work={
  "jobs":[
   {
    "employeer":"Planet Express",
      "title":"Delivery Boy",
      "dates":"January 3000-failure",
     "description":"lorem epsun dhfjd moebd svey aftde ahsu awfst eddhdh sjeids"
},
    {
     "employeer":"Panucii,s Pizza",
      "title":"Delivery Boy",
     "dates":"1998 -December 31,1999",
     "description":"lorem epsun dhfjd moebd svey aftde ahsu awfst eddhdh sjeids"
  }
  ]
}

var projects={
  "projects":[
 {
  "title":"Sample Project 1",
    "dates":"2014",
   "Description":"Lorem epsum shsji ahsgg sftqtas.",
   "images":[
      "http//husidp.com",
     "http//jdhd.in"
    ]
  }
]
}

if ( bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);
  var formattedSkill=HTMLskills.replace("%data%",bio.skills[0]);
  $("#skills").append(formattedSkill);
  var formattedSkill=HTMLskills.replace("%data%",bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill=HTMLskills.replace("%data%",bio.skills[2]);
  $("skills").append(formattedSkill);

}
function displayWork(){
for (job in work.jobs){
$("#workExperience").append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace
  ("%data%", work.jobs[job].employer);
  var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer +  formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);
  var formattedDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
  $(".work-entry:last").append(formattedDates);

  var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
  $(".work-entry:last").append(formattedDescription);

}
}
displayWork();

$(document).click(function(loc){
  var x=loc.pageX;
  var y=loc.pageY;
  logClicks(x,y);


});
