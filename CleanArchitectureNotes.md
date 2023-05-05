![The Clean Architeture](https://cdn-media-1.freecodecamp.org/images/oVVbTLR5gXHgP8Ehlz1qzRm5LLjX9kv2Zri6)

![The Clean Architecture Cone](https://cdn-media-1.freecodecamp.org/images/YsN6twE3-4Q4OYpgxoModmx29I8zthQ3f0OR)

## The Clean Architecture

- Software design philosophy that emphasizes the separation of concerns and the use of loosely coupled elements to make software modular, scalable and maintainable.

- Organizes software into distinct layers, each with a clear and well-defined responsibility. The layers are organized in a hierarchical structure.

- High-level: Policies, low-level: details. Policies mean the business rules of the application. Details mean the implementation of the business rules.

- Layers include: Entities, Use Cases, Interface Adapters, Frameworks and Drivers.

### Entities

- Core business logic of the applications, representing the data and behaviors that are central to the applicatoin's purpose. They should be ENTIRELY INDEPENDENT of other layers.

- Entities are the most abstract layer of the application. They are the most general and reusable part of the application.

- Entities are the most stable part of the application. They are the least likely to change when something external changes.

### Use Cases

- Represent high-level actions that the user can perform in the application and are closely tied to the application's business logic.

- The should operate on entities and should not be dependent on the UI or external services.

### Interface Adapters

- Components that connect the application to the outside world, such as databases, web services, or user interfaces. They should adapt the application's internal data structures to the external interfaces, and vice versa

### Frameworks and Drivers

- Provide the infrastructure and tech-specific details that the application needs to run.
- They should be kept as separate as possible fro mthe business logic of the application
