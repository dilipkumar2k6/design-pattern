# Command Design Pattern
- Is a behavioral design pattern that turns a request into a stand-alone object that contains all information about the request.
- This transformation lets you parameterize methods with different requests, delay or queue a request’s execution, and support undoable operations.
- Command design pattern is used to implement loose coupling in a request-response model
- In command pattern, the request is send to the `invoker` and `invoker` pass it to the encapsulated `command` object.
- `Command` object passes the request to the appropriate method of `Receiver` to perform the specific action.
- The client program create the receiver object and then attach it to the Command. 
- Then it creates the invoker object and attach the command object to perform an action.
- Now when client program executes the action, it’s processed based on the command and receiver object.


