import React from "react";
import "./Home.css";
import Renderdata from "./Renderdata";

function BlockInfo(props) {
  switch (props.value) {
    case "dropdown1":
      return (
        <Renderdata
          name={props.value}
          value="React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time. Lots of people use React as the V in MVC. React abstracts away the DOM from you, offering a simpler programming model and better performance. React can also render on the server using Node, and it can power native apps using React Native. React implements one-way reactive data flow, which reduces the boilerplate and is easier to reason about than traditional data binding.Our first component in the following example is App. This component is owner of Header and Content. We are creating Header and Content separately and just adding it inside JSX tree in our App component. Only App component needs to be exported."
        />
      );
    case "dropdown2":
      return (
        <Renderdata
          name={props.value}
          value="Redux is a predictable state container for JavaScript apps. As the application grows, it becomes difficult to keep it organized and maintain data flow. Redux solves this problem by managing application’s state with a single global object called Store. Redux fundamental principles help in maintaining consistency throughout your application, which makes debugging and testing easier.Before you start proceeding with this tutorial, we assume that you have a prior exposure to JavaScript, React, and ES6. If you are novice to any of these subjects or concepts, we strongly suggest you go through tutorials based on these, before you start your journey with this tutorial. useSelector reads a value from the store state and subscribes to updates, while useDispatch returns the store's dispatch method to let you dispatch actions."
        />
      );
    case "dropdown3":
      return (
        <Renderdata
          name={props.value}
          value="JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.Nowadays almost all web pages contain JavaScript, a scripting programming language that runs on visitor's web browser. It makes web pages functional for specific purposes and if disabled for some reason, the content or the functionality of the web page can be limited or unavailable.JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced"
        />
      );
    default:
      return <p className="info">Select any dropdown</p>;
  }
}

export default BlockInfo;
