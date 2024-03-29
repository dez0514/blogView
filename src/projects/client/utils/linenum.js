import $ from 'jquery'
import { ElNotification } from 'element-plus'
export const addCodeBtn = _ => {
	//markdown代码存放在pre code 标签对中
  $('pre code').each(function () {
    let lines = $(this).text().split('\n').length - 1
    let title = $(this)[0].className.slice('language-'.length) // language-vue
    // console.log(title)
    //添加有序列表
    let $numbering = $('<ol/>').addClass('pre-numbering')
    //添加复制按钮，此处使用的是element-ui icon 图标
    let $copy = $('<i>copy</i>').addClass('code-copy')
    let $title = $('<span>' + title + '</span>').addClass('edit-title')
    $(this)
      .parent()
      .addClass('code')
      .append($numbering)
      .append($copy)
      .append($title)
    for (let i = 0; i < lines; i++) {
      $numbering.append($('<li/>'))
    }
  })
  //监听复制按钮点击事件
  $('pre.code i.code-copy').click(e => {
    let text = $(e.target).siblings('code').text()
    let element = $('<textarea>' + text + '</textarea>')
    $('body').append(element)
    element[0].select()
    document.execCommand('Copy')
    element.remove()
    //这里是自定义的消息通知组件
    ElNotification({
      title: '提示',
      message: '代码复制成功',
      type: 'success',
      position: 'bottom-right'
    })
  })
}