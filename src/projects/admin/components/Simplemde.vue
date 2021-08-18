<template>
  <div>
    <textarea id="editor"></textarea>
    <!-- <div @click="handleClick">btn</div> -->
    <!-- <div class="markdown-body" v-html="content"></div> -->
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

</style>
