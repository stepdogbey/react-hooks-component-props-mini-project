import React from "react";
import blogData from "../data/blog";
import Article from "./Article";

function ArticleList() {
  return (
    <main>
      {/* <Article
        title={blogData.posts[0].title}
        preview={blogData.posts[0].preview}
        date={blogData.posts[0].date}
      />
      <Article
        title={blogData.posts[1].title}
        preview={blogData.posts[1].preview}
        date={blogData.posts[1].date}
      />
      <Article
        title={blogData.posts[2].title}
        preview={blogData.posts[2].preview}
        date={blogData.posts[2].date}
      /> */}
      {blogData.posts.map((postDetails) => {
        return (
          <React.Fragment key={postDetails.id}>
            <Article
              title={postDetails.title}
              preview={postDetails.preview}
              date={postDetails.date}
            />
          </React.Fragment>
        );
      })}
    </main>
  );
}

export default ArticleList;
