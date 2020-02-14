# What problems can the Composite design pattern solve?
- It solves recursive design problems
- Define `Part`
- Define `Whole`
- `Part` and `Whole` should be represented as tree structure
- `Whole` is acting as container for `Part`
# What solution does the Composite design pattern describe?
- Define a unified `Component` interface for both part (`Leaf`) object and whole (`Composite`) object
- Individual `Leaf` objects implement the `Component` interface directly
- `Composite` objects forward requests to their child components.

![](https://upload.wikimedia.org/wikipedia/commons/6/65/W3sDesign_Composite_Design_Pattern_UML.jpg)

