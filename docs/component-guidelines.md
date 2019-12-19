# Guidelines for developing system components

Special attention should be paid to code quality, reusability, interface specification and performance of system components.

1. Follow the [official style guide](https://vuejs.org/v2/style-guide/) for writing Vue components.
2. Do not bind system components to the store. Shared components cannot assume anything about the context in which they are going to be used. Specifically, they cannot know anything about the Vuex store interface of the application they live in. Props and events should be the only public interface of a system component.
