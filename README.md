# design-pattern
https://sourcemaking.com/design_patterns

# Why inheritance is bad?
- Inheritance is static i.e. you can't alter behavir of existing object at run time. 
- You can only replace the whole object with another one that's created from a different subclass
- Subclass can have just one parent class. In  most languages, inheritance doesn't let a class inherit behaviors of multiple classes at the same time.

# Aggregation or Compositions instead of Inheritance
- Both aggregation and compositions work in same ways, i.e. one object has reference to another and delegate it some work
- With inheritance, the object itself is able to do that work, inheriting the behavior from parent class.
