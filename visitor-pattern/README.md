# Visitor Pattern
- a way of separating an algorithm from an object structure on which it operates
- A practical result of this separation is the ability to add new operations to existing object structures without modifying the structures
- In essence, the visitor allows adding new virtual functions to a family of classes, without modifying the classes
-  Instead, a visitor class is created that implements all of the appropriate specializations of the virtual function. 
- The visitor takes the instance reference as input, and implements the goal through double dispatch.

![](https://upload.wikimedia.org/wikipedia/commons/0/00/W3sDesign_Visitor_Design_Pattern_UML.jpg)