
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
