<template>
  <div>
    <textarea id="editor"></textarea>
    <!-- <div @click="handleClick">btn</div>
    <div class="markdown-body" v-html="content"></div> -->
  </div>
</template>
<script>
import SimpleMDE from "simplemde";
import "simplemde/dist/simplemde.min.css";
import highlight from "highlight.js";
import marked from "marked";
import { addCodeBtn } from "../utils/linenum";
import markdown from "../utils/markdown";
export default {
  name: "simplemde",
  data() {
    return {
      smde: null,
      content: [],
      str: "",
    };
  },
  methods: {
    handleClick() {
      this.str = this.smde.value();
      const article = markdown.marked(this.str);
      article.then((res) => {
        this.content = res.content;
        this.$nextTick(() => {
          addCodeBtn();
        });
      });
    },
  },
  mounted() {
    const smde = new SimpleMDE({
      element: this.editorDiv,
      autofocus: true,
      autosave: true,
      spellChecker: false,
      placeholder: "请输入内容",
      previewRender: (plainText) => {
        return marked(plainText, {
          renderer: new marked.Renderer(),
          gfm: true,
          pedantic: false,
          sanitize: false,
          tables: true,
          breaks: true,
          smartLists: true,
          smartypants: true,
          highlight: function (code) {
            return highlight.highlightAuto(code).value;
          },
        });
      },
    });
    this.smde = smde;
  },
};
</script>
<style lang="scss">
.editor-preview pre,
.editor-preview-side pre {
  padding: 10px;
  margin: 10px 0;
  font-size: 14px;
  line-height: 1.4;
  color: #fff;
  background-color: #283646;
  border-radius: 4px;
}
p img {
  margin: 0 auto;
  display: flex;
}

.CodeMirror,
.CodeMirror-scroll {
  min-height: 300px;
}
.CodeMirror {
  height: 300px;
}
.markdown-body pre.code{
    padding: 30px 0 10px 0;
}
pre.code {
  position: relative;
  border-radius: 5px;
  /* border: 1px solid #c3ccd0; */
  color: #fff;
  background-color: #283646;
  overflow: hidden;
  padding-left: 60px !important;
  code {
    line-height: 1.4 !important;
  }
  ol.pre-numbering {
    position: absolute;
    top: 0;
    left: 5px;
    line-height: 1.4;
    padding: 30px 0 10px 0;
    list-style-type: none;
    counter-reset: sectioncounter;
    margin-bottom: 0;
    li {
      margin-top: 0 !important;
      &:before {
        content: counter(sectioncounter) "";
        counter-increment: sectioncounter;
        display: inline-block;
        width: 40px;
        text-align: center;
        border-right: solid 1px rgba(255, 255, 255, 0.53);
      }
    }
  }
  i.code-copy {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #464d5e;
    padding: 3px;
    height: 12px;
    width: 10px;
    /* margin: 3px 3px 0 0; */
    font-size: 11px;
    border-radius: inherit;
    color: #f1f1f1;
    cursor: pointer;
    display: none;
  }
  &:hover i.code-copy {
    display: block;
  }
}
pre.code::before {
  content: "";
  position: absolute;
  border-radius: 50%;
  background-color: #fc625d;
  width: 11px;
  height: 11px;
  left: 10px;
  top: 10px;
  box-shadow: 20px 0 #fdbc40, 40px 0 #35cd4b;
  z-index: 2;
}
.edit-title {
  z-index: 10;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  line-height: 30px;
  display: none;
}
.markdown-body pre.code:hover .edit-title {
  display: block;
}
</style>
