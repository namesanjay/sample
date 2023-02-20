const stat=require("prompt-sync")()
let day=stat("Enter day:");
switch(day){
    case "Sunday":
        console.log("7 AM");
        break
    case "Monday":
        console.log("6 AM");
        break
    case "Tuesday":
        console.log("6:30 AM");
        break
    case "Wednesday":
        console.log("6:45 AM");
        break
    case "Thursday":
        console.log("7:10 AM");
        break 
    case "Friday":
        console.log("7:15 AM");
        break  
    case "Saturday":
        console.log("10 AM")
        break;
    default:
        console.log("Muji din pani tha xaina")

}