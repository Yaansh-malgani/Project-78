var images = ["me.jpg", "father.jpg", "mother.jpg", "brother.jpg" ];
var names = ["Yaansh Malgani", "Rakesh Malgani", "Simran Malgani", "Vishesh Malgani"]

var i = 0;
function next() 
{
    i++;
    var no_of_member = 3
    if(i > no_of_member){
        i=0;
    }
        var updateimage = images[i];
        var updatename = names[i];
        document.getElementById("image").src = updateimage;
        document.getElementById("names").innerHTML = updatename;
    
}