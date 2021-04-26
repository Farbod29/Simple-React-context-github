# Getting Started with REACT context

https://reactjs.org/docs/context.html

In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language. For example, in the code below we manually thread through a “theme” prop in order to style the Button component:

## DIagram of this app

![abstract](https://user-images.githubusercontent.com/17232450/116130410-7c5d6700-a6cb-11eb-8a2a-2950437b7530.jpg)


![Screenshot 2021-02-26 at 09 40 02](https://user-images.githubusercontent.com/17232450/116130330-6059c580-a6cb-11eb-9832-8aa595a8960d.jpg)
![full](https://user-images.githubusercontent.com/17232450/116130416-7ebfc100-a6cb-11eb-9185-69f11b98d721.jpg)


## How to use this package 

```
$ npm install

$ npm start
