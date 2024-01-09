import React from "react";
import 'assets/scss/pages/blog.scss';
import {Diamond, Badge} from "components/common";
import {NavLink} from "react-router-dom";
import BlogListItem from "components/blog/BlogListItem";

const BlogListPage = () => {
  let list = [];
  let tagItems = [];

  dummyTag();
  dummyList();

  function dummyList() {
    for (let i = 0; i < 10; i++) {
      list.push({
        id: i,
        title: "한글 제목을 주로 입력하겠죠. 영문은 CODA체로 나오게 하려 했는데, 통일을 휘해 한글폰트로.",
        desc: "한글 제목을 주로 입력하겠죠. 영문은 CODA체로 나올 것 이고요.",
        tags: tagItems,
        date: new Date(),
        content: "한글 제목을 주로 입력하겠죠. 영문은 CODA체로 나올 것 이고요. Post의 내용을 노출시킬 것인가? 노출 시킨다면 왜 노출시킬 것인가. 글 내용의 흥미를 유발시키기 위하여? 아마도 그렇지 않을까? .... 태그도 넣고 싶은데 태그를 어디다 붙이는지 좋을지 좀 고민해봐야겠어요. 댓글 기능은 사용할 것인가? YES"
      })
    }
  }
  function dummyTag() {
    for (let i = 0; i < 10; i++) {
      tagItems.push('tag' + i);
    }
  }

  return (
    <>
      <div className="section content">
        <div className="section-header">
          <h1 className="section-header-title">Blog</h1>
          <Diamond></Diamond>
          <span className="section-header-desc">차근차근 만들어가는 지식들</span>
          <div className="spacer"></div>
          <NavLink to="edit" className="btn-text-link">Write</NavLink>
        </div>
        <ul className="tag-list">
          {
            tagItems.map((item, index) => (
              <li className="tag-item" key={index}>
                <Badge>{item}</Badge>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="section content">
        <ul className="blog-list">
          {
            list.map((item) => (
              <li className="blog-item" key={item.id}>
                <BlogListItem item={item}></BlogListItem>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default BlogListPage;