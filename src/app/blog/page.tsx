// src/app/blog/page.tsx
import React from "react";
import { Column, Heading, Schema } from "@once-ui-system/core";
import { blog, person, baseURL } from "@/resources";
import { Posts } from "@/components/blog/Posts";

export default function Blog() {
  return (
    <Column maxWidth="s">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="display-strong-s">{blog.title}</Heading>
      <Posts range={[1, 1]} thumbnail direction="column" />
      <Posts range={[2, 3]} thumbnail />
      <Posts range={[4]} columns="2" />
    </Column>
  );
}
