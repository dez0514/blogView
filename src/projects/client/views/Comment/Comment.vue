<template>
  <div class="comment">
    <banner></banner>
    <div class="comment-wrap">
      <div class="flag-wrap">
        <div class="flag-con">
          <div class="flag-desc">
            <svg class="icon">
            <svg viewBox="0 0 1024 1024">
              <path
                d="M952.106167 322.081707l-28.044757 0 0 308.259173c0 47.995837-27.944835 91.395264-83.967734 91.395264L291.222482 721.736144l0 14.655217c0 42.433515 48.262295 85.266719 97.823575 85.266719l419.638824 0 160.541244 94.392922L945.944314 821.65808l6.161853 0c49.527973 0 71.877179-42.733281 71.877179-85.266719L1023.983346 395.257871C1023.983346 352.824356 1001.63414 322.081707 952.106167 322.081707z"
              ></path>
              <path
                d="M758.157689 107.915691 120.655738 107.915691C64.566224 107.915691 0.016654 157.74343 0.016654 205.772574l0 386.364819c0 44.23211 54.690606 76.173823 107.149623 81.103305l-34.139995 129.598751L291.788707 674.139995l466.368983 0c56.089513 0 107.849076-34.006766 107.849076-82.002602L866.006766 279.54827 866.006766 205.772574C866.006766 157.74343 814.213895 107.915691 758.157689 107.915691zM217.913089 434.06089c-31.808483 0-57.588342-25.779859-57.588342-57.588342s25.779859-57.588342 57.588342-57.588342c31.775176 0 57.588342 25.779859 57.588342 57.588342S249.688264 434.06089 217.913089 434.06089zM433.01171 434.06089c-31.808483 0-57.588342-25.779859-57.588342-57.588342S401.203227 318.884205 433.01171 318.884205s57.588342 25.779859 57.588342 57.588342S464.820193 434.06089 433.01171 434.06089zM648.143638 434.06089c-31.808483 0-57.62165-25.779859-57.62165-57.588342s25.813167-57.588342 57.62165-57.588342c31.741868 0 57.588342 25.779859 57.588342 57.588342S679.885506 434.06089 648.143638 434.06089z"
              ></path>
            </svg>
          </svg>
          <div class="count">0条留言</div>
          </div>
        </div>
      </div>
      <div class="comment-main">
        <text-editor></text-editor>
        <comments></comments>
      </div>
    </div>
  </div>
</template>
<script>
import banner from "../../components/Banner.vue";
import textEditor from "../../components/TextEditor.vue";
import comments from '../../components/CommentsList.vue';
export default {
  data() {
    return {};
  },
  components: {
    banner,
    textEditor,
    comments
  },
};
</script>
<style lang="scss" scoped>
.comment-wrap {
  position: relative;
  padding: 100px 0 50px;
  margin: 20px auto 0;
  width: 100%;
  border-radius: 13px;
  box-shadow: 0 13px 15px rgba(31, 45, 61, 0.1);
  background-color: #fff;
}
.comment-main {
  padding: 0 40px;
}
.flag-wrap {
  filter: drop-shadow(5px 6px 5px rgba(32, 160, 255, 0.3));
  position: absolute;
  top: 30px;
  left: -10px;
}
.flag-wrap::before {
  content: "";
  position: absolute;
  left: 0;
  top: -10px;
  border-color: transparent #008bc9 #008bc9 transparent;
  border-style: solid;
  border-width: 5px;
  transform-origin: bottom;
  transform: scaleY(0.75);
}
.flag-wrap::after {
  content: "";
  position: absolute;
  right: -16px;
  top: 0;
  border-color: #0394ff transparent transparent #0394ff;
  border-style: solid;
  border-width: 20px 8px;
  vertical-align: bottom;
}
.flag-con {
  display: flex;
  justify-content: center;
  padding-left: 10px;
  background: linear-gradient(90deg, #76d5ff, #20baff 6px, #0394ff);
  border-bottom-left-radius: 5px;
  height: 40px;
  font-size: 16px;
}
.flag-desc {
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  .count {
    margin-left: 10px;
  }
}
.icon {
  width: 18px;
  height: 18px;
  fill: currentColor;
  overflow: hidden;
  font-size: 14px;
}
@media screen and (max-width: 990px) {
  .comment-wrap {
    border-radius: 0;
    margin: 10px auto 0;
    padding: 70px 0 15px;
  }
  .comment-main {
    padding: 0 12px;
  }
  .flag-wrap {
    top: 15px;
  }
}
</style>
