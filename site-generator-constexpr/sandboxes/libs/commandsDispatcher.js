
var con = new SimpleConsole({
	handleCommand: handle_command,
	placeholder: "Enter Algebrite commands (or JS terminating with ';')",
	storageID: "simple-console demo"
});
document.body.appendChild(con.element);

var welcomeMessage = "Algebrite v";
welcomeMessage += algebriteVersionToBeLoaded;
if (algebriteVersionToBeLoaded === latestStableAlgebriteVersion){
  welcomeMessage += " (latest-stable)";
}
welcomeMessage += " sandbox (both Algebrite scripting and Algebrite JS API modes)<br/>";
welcomeMessage += "&nbsp;• end a line with ';' to indicate you are using JS API mode, otherwise input<br/>";
welcomeMessage += "&nbsp;&nbsp;&nbsp;&nbsp;will be interpreted as an Algebrite script.<br/>";
welcomeMessage += "&nbsp;• hit shift-enter for multiple lines (works for Algebrite scripts better)<br/>";
welcomeMessage += "<br/>";
welcomeMessage += "type 'help' for help.<br/>";
welcomeMessage += "--------------------------------------------------------------------------------<br/>";
// welcomeMessage += --------------------------------------------------------------------------------<br/>--                   THIS IS NOT THE LATEST VERSION                           --<br/>--------------------------------------------------------------------------------<br/>",

con.logHTML(welcomeMessage);

function handle_command(command){

    if (command == 'help') {
        con.log('\nExamples:\n  a+a # a comment in scripting mode\n  100!\n  integral(x^2)\n  Algebrite.expand("(x+1)^4"); // js API mode\n');
        con.log('Hints:\n  if you use the js API a lot, you might be better off just using the js console of your browser\n');
        return;
    }

    if (command == 'clearall') {
        Algebrite.clearall();
        con.clear();
        return;
    }

    try {
      var algebriteCommand;


      if (/Algebrite\.[a-z]/.test(command) || /;[ \t]*$/.test(command)) {
        	algebriteCommand = command;
      	} else {
      		console.log("command: " + command);
        	command = command.replace(/[\r]*\n/g,"\\n");
        	algebriteCommand = "Algebrite.run('" + command + "');";
      }

      console.log("algebriteCommand: " + algebriteCommand);
      var result = eval.call(window, algebriteCommand);
      console.log("result: " + result);

    } catch(error) {
      console.log("error: " + error);
    }
    if (/Stop/.test(result) || /Error/.test(result)) {
    	con.error(result);
    } else {
    	con.log(result);    	
    }




};
