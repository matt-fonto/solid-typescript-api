# SOLID:

It is an acronym for 5 principles of OOP that allow us to develop softwares that are:

- easy to maintain
- easy to extend
- easy to understand
- easy to test
- easy to scale

# Single Responsibility Principle:

Each class should have a single responsibility, and that responsibility should be entirely encapsulated by the class.

```typescript
class Calculator {
  public sum(a: number, b: number) {
    return a + b;
  }

  public subtract(a: number, b: number) {
    return a - b;
  }
}

// We can split the class into two classes, each one with a single responsibility
class SumCalculator {
  public sum(a: number, b: number) {
    return a + b;
  }
}

class SubtractCalculator {
  public subtract(a: number, b: number) {
    return a - b;
  }
}
```

# Open-Closed Principle:

A class should be open for extension but closed for modification. This means that we should be able to extend the behavior of a class without modifying its source code.

```typescript
class Shape {
  public area() {
    // default implementation
  }
}

class Rectangle extends Shape {
  public area() {
    // calculate the area of the rectangle
  }
}

class Circle extends Shape {
  public area() {
    // calculate the area of the circle
  }
}
```

Here, we have a `Shape` class with a default implementation of the `area()` method. We can extend it to calculate the area of a rectangle and a circle without modifying the `Shape` class.

# Liskov Substitution Principle:

Objects of a superclass should be replaceable with objects of its subclasses without breaking the application.

```typescript
class Animal {
  public makeSound() {
    // default implementation
  }
}

class Dog extends Animal {
  public makeSound() {
    // bark
  }
}

class Cat extends Animal {
  public makeSound() {
    // meow
  }
}
```

The `Animal` class has a default implementation of the `makeSound()` method. We can replace it with a `Dog` or a `Cat` object without breaking the application.

# Interface Segregation Principle

Our classes should not be forced to implement methods they do not use. This means that we should crate small, specific interfaces instead of having a single, large interface.

```typescript
interface Printer {
  printDocument(document: Document): void;
  scanDocument(): void;
  faxDocument(): void;
}

// Our printer class implements all the methods of the Printer interface
class MultiFunctionPrinter implements Printer {
  public printDocument(document: Document): void {
    // print the document
  }

  public scanDocument(): void {
    // scan the document
  }

  public faxDocument(): void {
    // fax the document
  }
}

// Our old printer class implements only the printDocument method of the Printer interface
class OldPrinter implements Printer {
  public printDocument(document: Document): void {
    // print the document
    //
  }

  public scanDocument(): void {
    //old printer does not support scanning documents
  }

  public faxDocument(): void {
    // old printer does not support faxing documents
  }
}
```

Here, we have a `Printer` interface with 3 methods. The `MultiFunctionPrinter` class implements all the methods of the `Printer` interface, while the `OldPrinter` class implements only the `printDocument()` method. This is an example of the Interface Segregation Principle.

# Dependency Inversion Principle:

High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details, but details should depend on abstractions.

Wha we want is to reduce the coupling between classes and improve their flexibility, reusability, and maintainability.

```typescript
// Abstraction
interface PaymentProcessor {
  processPayment(): void;
}

// High-level module
class Order {
  private items: Item[];
  private paymentProcesor: PaymentProcessor;

  // our constructor receives a PaymentProcessor object
  constructor(paymentProcessor: PaymentProcessor) {
    this.paymentProcesor = paymentProcessor;
    this.items = [];
  }

  public addItem(item: Item): void {
    this.items.push(item);
  }

  public checkout(): void {
    this.paymentProcesor.processPayment();
  }
}

// Low-level module
class PayPalPaymentProcessor implements PaymentProcessor {
  public processPayment(): void {
    // process payment using PayPal
  }
}
```

In this example, `Order` is the high-level module, which depends on an abstraction `PaymentProcessor`, instead of a concrete implementation.

The `PayPalPaymentProcessor` class is the low-level module that implements the `PaymentProcessor` interface.

By depending on an abstraction, we can easily change the implementation of the `PaymentProcessor` without breaking the `Order` class. For example, we can create a `StripePaymentProcessor` class.

This way we achieve loose coupling between classes. The `Order` class does not depend on the `PayPalPaymentProcessor` class, but on the `PaymentProcessor` abstraction. This allows us to easily change the implementation of the `PaymentProcessor` without breaking the `Order` class.
