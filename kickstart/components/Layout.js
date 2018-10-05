import React from "react";
import { Container } from "semantic-ui-react"; // The container will constrain
// all content into a container, no longer makes all text flow all the way
// to the edge of the screen
import Head from "next/head"; // Head is a component that ensures that everything
// inside the head tags is moved up to the head tag of the HTML document
import Header from "./Header";

// all the interior JSX in the index.js is passed into the 'children' of
// props.children. Basically everything between the two <Layout></Layout>
// components in the render() method.
// ALSO, the <link/> tag that is placed inside this container is b/c it is used
// in every page, so adding it to the Layout.js will ensure the css is used
// in every component.
export default props => {
  return (
    <Container>
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"
        />
      </Head>
      <Header />
      {props.children}
    </Container>
  );
};
