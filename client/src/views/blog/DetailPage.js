import React from "react";
import {NavLink} from "react-router-dom";
import {Badge, Diamond} from "components/common";
import ToastEditor from "../../components/plugin/ToastEditor";
import BlogListItem from "../../components/blog/BlogListItem";

const BlogDetailPage = () => {
  let initContent = '';
  let list = [];
  let tagItems = [];

  dummyTag();
  dummyList();

  function dummyList() {
    for (let i = 0; i < 4; i++) {
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
    for (let i = 0; i < 4; i++) {
      tagItems.push('tag' + i);
    }
  }

  return (
    <div className="section content content-blog-detail">
      <div className="blog-detail-header">
        <div className="blog-detail-deco">
          <Diamond thickness="thin"></Diamond>
        </div>
        <div className="blog-detail-action">
          <div className="blog-date">2023.11.09</div>
          <div className="spacer"></div>
          <button className="btn-text-link">Cancel</button>
          <NavLink to="/blog/create" className="btn-text-link">Save</NavLink>
        </div>
        <h1 className="blog-detail-title">한글 제목을 주로 입력하겠죠. 영문은 CODA체로 입력 안 해요.</h1>
        <p className="blog-detail-desc">한글 제목을 주로 입력하겠죠. 영문은 CODA체로 입력 안 해요.</p>
        <div className="tag-list">
          <div className="tag-item">
            <Badge view>React</Badge>
          </div>
        </div>
      </div>
      <div className="editor-viewer-wrap fresh-editor">
        <ToastEditor
          viewer
          content={initContent}
        ></ToastEditor>
      </div>
      <div className="blog-detail-footer">
        <div className="blog-detail-deco">
          <Diamond thickness="thin"></Diamond>
        </div>
        <h2 className="bdf-title">블로그 다른 글</h2>
        <ul className="blog-list">
          {
            list.map((item) => (
              <li className="blog-item" key={item.id}>
                <BlogListItem item={item} smallType></BlogListItem>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default BlogDetailPage;