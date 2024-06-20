import React from "react";
import Image, { StaticImageData } from "next/image";
import author_img from "../../assets/category6.png";
import tech1 from "../../assets/tech1.jpg";
import tech2 from "../../assets/tech2.jpg";

// const blogdata = [
//     {
//         tag: ["DIY", "Technology", "Food"],
//         title: "Technology and Technology Services",
//         author: {
//             image: author_img,
//             name: "John Doe",
//             date: new Date().toLocaleDateString(), // Converting the date to a string representation
//         },
//         postImage: [tech1, tech2], // Store the post images in an array
//         postDescription:
//             "A dummy is a type of doll that looks like a person. Entertainers called ventriloquists can make dummies appear to talk. The automobile industry uses dummies in cars to study how safe cars are during a crash. A dummy can also be anything that looks real but doesn’t work: a fake. Actors in a play might use certain props that are dummies, such as a dummy laptop. Dummy is also an insult used to mean “an ignorant person”.A dummy is a type of doll that looks like a person. Entertainers called ventriloquists can make dummies appear to  talk. \n \n \n  The automobile industry uses dummies in cars to study how safe cars are during a crash. A dummy can also be anything that looks real but doesn’t work: a fake. Actors in a play might use certain props that are dummies, such as a dummy laptop. Dummy is also an insult used to mean “an ignorant person”.A dummy is a type of doll that looks like a person. Entertainers called ventriloquists can make dummies appear to talk. The automobile industry uses dummies in cars to study how safe cars are during a crash. A dummy can also be anything that looks real but doesn’t work: a fake. Actors in a play might use certain props that are dummies, such as a dummy laptop. Dummy is also an insult used to mean “an ignorant person”. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
//     },
// ];

const blogdata = [
    {
        tag: ["Technology", "Web Development"],
        title: "Introduction to ReactJS",
        author: {
            image: author_img,
            name: "John Smith",
            date: "2023-08-05", // Date in YYYY-MM-DD format
        },
        postImage: [tech1],
        postDescription: `
        <div style="font-family: 'Arial', sans-serif;">
          <h1 style="font-size: 2.5rem; color: #333; margin-bottom: 1rem;">Introduction to ReactJS</h1>
          <p style="font-size: 1.2rem; color: #555; line-height: 1.6;">
            ReactJS is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently manage the state of the application.
          </p>
          <img src="https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png" alt="React Image 1" style="width: 100%; max-height: 400px; object-fit: cover; margin: 1rem 0; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);" />
          <h2 style="font-size: 2rem; color: #333; margin: 2rem 0;">Getting Started</h2>
          <p style="font-size: 1.2rem; color: #555; line-height: 1.6;">
            To get started with ReactJS, you need to have Node.js installed on your machine. You can create a new React project using create-react-app:
          </p>
          <pre style="background-color: #f5f5f5; padding: 1rem; font-size: 1rem; color: #333; border-radius: 4px; white-space: pre-wrap;">
            <code>npx create-react-app my-app</code>
          </pre>
          <h2 style="font-size: 2rem; color: #333; margin: 2rem 0;">Components</h2>
          <p style="font-size: 1.2rem; color: #555; line-height: 1.6;">
            React components are the building blocks of a React application. Components can be functional or class-based. Here's an example of a functional component:
          </p>
          <pre style="background-color: #f5f5f5; padding: 1rem; font-size: 1rem; color: #333; border-radius: 4px; white-space: pre-wrap;">
            <code>
              const MyComponent = () => {
                return <>Hello, World!</>;
              };
            </code>
          </pre>
          <p style="font-size: 1.2rem; color: #555; line-height: 1.6;">
            And here's an example of a class-based component:
          </p>
          <pre style="background-color: #f5f5f5; padding: 1rem; font-size: 1rem; color: #333; border-radius: 4px; white-space: pre-wrap;">
            <code>
              class MyComponent extends React.Component {
                render() {
                  return Hello, World!;
                }
              }
            </code>
          </pre>
          <img src="https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png" alt="React Image 2" style="width: 100%; max-height: 400px; object-fit: cover; margin: 1rem 0; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);" />
          <h2 style="font-size: 2rem; color: #333; margin: 2rem 0;">State Management</h2>
          <p style="font-size: 1.2rem; color: #555; line-height: 1.6;">
            React allows you to manage the state of your application using the built-in state and setState methods. Here's an example of a stateful component:
          </p>
          <pre style="background-color: #f5f5f5; padding: 1rem; font-size: 1rem; color: #333; border-radius: 4px; white-space: pre-wrap;">
            <code>
              class Counter extends React.Component {
                constructor() {
                  super();
                  this.state = { count: 0 };
                }
    
                increment() {
                  this.setState({ count: this.state.count + 1 });
                }
    
                render() {
                  return (
                    <div>
                      <p>Count: {this.state.count}</p>
                      <button onClick={() => this.increment()} style="background-color: #007BFF; color: #fff; border: none; border-radius: 4px; padding: 0.75rem 1rem; cursor: pointer;">
                        Increment
                      </button>
                    </div>
                  );
                }
              }
            </code>
          </pre>
        </div>
      `,
    },
];

const BlogDetailsPage = () => {
    return (
        <div className="mt-32 px-8 font-garamond">
            {blogdata.map((post, index) => {
                return (
                    <div key={index} className="mb-8">
                        {/* Tags */}
                        <div className="flex gap-2">
                            {post.tag.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-primaryColor text-white px-2 py-1 rounded text-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl lg:text-6xl font-bold mt-4">
                            {post.title}
                        </h1>

                        {/* Author Info */}
                        <div className="flex items-center my-4">
                            <Image
                                src={post.author.image}
                                alt={post.author.name}
                                className="w-10 h-10 rounded-full mr-3 lg:mr-4 object-cover"
                            />
                            <div className="flex gap-2 items-center font-roboto">
                                <p className="text-secondaryColor font-normal">
                                    {post.author.name}
                                </p>
                                <p className="text-secondaryColor text-sm">
                                    {post.author.date}
                                </p>
                            </div>
                        </div>

                        {/* Post Images */}
                        {/* {post.postImage.map((image, imageIndex) => (
                            <img
                                key={imageIndex}
                                src={image}
                                alt={`Post${imageIndex + 1}`}
                                className="mt-8 w-full h-full object-cover rounded-lg"
                            />
                        ))} */}

                        {/* Post Description */}
                        <div
                            className="mt-4 lg:mt-16 text-xl lg:text-2xl font-semibold leading-normal"
                            dangerouslySetInnerHTML={{
                                __html: post.postDescription,
                            }}
                        ></div>
                    </div>
                );
            })}
        </div>
    );
};

export default BlogDetailsPage;
