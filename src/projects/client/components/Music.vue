<template>
  <div class="music">
    <div id="aplayer" ref="ap"></div>
  </div>
</template>
<script>
import APlayer from "aplayer";
export default {
  data() {
    return {
      ap: null,
    };
  },
  methods: {
    initAplayer() {
      const ap = new APlayer({
        container: this.$refs.ap,
        fixed: true,
        lrcType: 1,
        audio: [
          {
            name: "如果当时",
            artist: "许嵩",
            url: 'https://music.163.com/song/media/outer/url?id=167870.mp3',
            cover: 'https://p2.music.126.net/KyBR4ZDYFlzQJE_uyvfjpA==/109951166118671647.jpg?param=130y130',
            lrc: "[00:00.000] 作词 : 许嵩\n[00:01.000] 作曲 : 许嵩\n[00:14.819]为什么 你当时对我好\n[00:19.958]又为什么 现在变得冷淡了\n[00:26.018]我知道 爱要走难阻挠\n[00:31.879]反正不是我的 我也不该要\n[00:37.859]你和我 曾经有共同爱好\n[00:44.090]谁的耳边 总有绝句在萦绕\n[00:51.700]我们俩 用文言文对话真的很搞笑\n[00:57.290]还笑那曹操贪慕着小乔\n[01:03.698]天灰了 雨坠了\n[01:06.539]视线要模糊了\n[01:09.908]此时感觉到你的重要\n[01:16.689]爱走了 心走了\n[01:20.299]你说你要走了\n[01:24.089]我为你唱最后的古谣\n[01:30.689]红雨瓢泼泛起了回忆怎么潜\n[01:36.768]你美目如当年\n[01:39.669]流转我心间\n[01:42.669]渡口边最后一面洒下了句点\n[01:49.018]与你若只如初见\n[01:52.690]何须感伤离别\n[02:21.756]你和我 曾经有共同爱好\n[02:27.786]谁的耳边 总有绝句在萦绕\n[02:34.575]我们俩 用文言文对话真的很搞笑\n[02:41.270]还笑那曹操贪慕着小乔\n[02:47.797]天灰了 雨坠了\n[02:50.736]视线要模糊了\n[02:53.956]此时感觉到你的重要\n[03:00.778]爱走了 心走了\n[03:03.526]你说你要走了\n[03:06.756]我为你唱最后的古谣\n[03:13.006]红雨瓢泼泛起了回忆怎么潜\n[03:19.968]你美目如当年\n[03:22.468]流转我心间\n[03:26.979]渡口边最后一面洒下了句点\n[03:31.657]与你若只如初见\n[03:34.717]何须感伤离别\n[03:38.556]红雨瓢泼泛起了回忆怎么潜\n[03:44.726]你美目如当年\n[03:47.396]流转我心间\n[03:50.586]渡口边最后一面洒下了句点\n[03:56.907]与你若只如初见\n[03:59.916]何须感伤离别\n[04:28.968]红雨瓢泼泛起了回忆怎么潜\n[04:35.898]你美目如当年\n[04:37.898]流转我心间\n[04:41.557]渡口边最后一面洒下了句点\n[04:47.677]与你若只如初见\n[04:50.598]何须感伤离别\n"
          },
          {
            name: "庐州月",
            artist: "许嵩",
            url: 'https://music.163.com/song/media/outer/url?id=167850.mp3',
            cover: 'https://p1.music.126.net/3hqcQrXZ39kDCCzV7QbZjA==/34084860473122.jpg?param=130y130',
            lrc: "[00:00.000] 作词 : 许嵩\n[00:01.000] 作曲 : 许嵩\n[00:02.000] 编曲 : 许嵩\n[00:20.209]儿时凿壁偷了谁家的光\n[00:23.610]宿昔不梳 一苦十年寒窗\n[00:27.499]如今灯下闲读 红袖添香\n[00:31.259]半生浮名只是虚妄\n[00:35.119]三月 一路烟霞 莺飞草长\n[00:38.799]柳絮纷飞里看见了故乡\n[00:42.659]不知心上的你是否还在庐阳\n[00:47.159]一缕青丝一生珍藏\n[00:51.099]桥上的恋人入对出双\n[00:54.389]桥边红药叹夜太漫长\n[00:58.190]月也摇晃 人也彷徨\n[01:01.709]乌蓬里传来了一曲离殇\n[01:07.899]庐州月光 洒在心上\n[01:11.249]月下的你不复当年模样\n[01:15.199]太多的伤 难诉衷肠\n[01:18.819]叹一句当时只道是寻常\n[01:23.899]庐州月光 梨花雨凉\n[01:27.099]如今的你又在谁的身旁\n[01:30.788]家乡月光 深深烙在我心上\n[01:35.299]却流不出当年泪光\n[01:56.057]三月 一路烟霞 莺飞草长\n[01:59.729]柳絮纷飞里看见了故乡\n[02:03.489]不知心上的你是否还在庐阳\n[02:08.010]一缕青丝一生珍藏\n[02:12.100]桥上的恋人入对出双\n[02:15.169]桥边红药叹夜太漫长\n[02:19.700]月也摇晃 人也彷徨\n[02:22.579]乌蓬里传来了一曲离殇\n[02:28.290]庐州月光 洒在心上\n[02:32.179]月下的你不复当年模样\n[02:36.390]太多的伤 难诉衷肠\n[02:39.689]叹一句当时只道是寻常\n[02:43.499]庐州月光 梨花雨凉\n[02:47.799]如今的你又在谁的身旁\n[02:51.119]家乡月光 深深烙在我心上\n[02:55.619]却流不出当年泪光\n[03:02.000]庐州的月光 在我心上\n[03:05.419]太多的伤 难诉衷肠\n[03:09.259]如今的你在谁的身旁\n[03:12.699]我流不出当年泪光\n[03:16.690]庐州月光 洒在心上\n[03:19.699]月下的你不复当年模样\n[03:23.509]太多的伤 难诉衷肠\n[03:27.600]叹一句当时只道是寻常\n[03:31.100]庐州月光 梨花雨凉\n[03:35.190]如今的你又在谁的身旁\n[03:38.769]家乡月光 深深烙在我心上\n[03:43.529]却流不出当年泪光\n"
          },
          {
            name: "庞贝",
            artist: "许嵩",
            url: 'https://music.163.com/song/media/outer/url?id=1842802205.mp3',
            cover: 'https://p2.music.126.net/EepVxZ_7Z0qAiW_UYcC7EA==/109951165954048759.jpg?param=130y130',
            lrc: "[00:00.000] 作词 : 许嵩\n[00:01.000] 作曲 : 许嵩\n[00:02.000] 编曲 : 郑楠\n[00:03.000] 制作人 : 许嵩\n[00:16.652]如果火山喷发 是灾难还是壮美\n[00:23.818]静静看着你 就好像没想过防卫\n[00:31.218]崩塌的瞬间我还攥着新鲜玫瑰\n[00:37.735]在掌纹中间划开一道事与愿违\n[00:44.687]\n[00:45.902]那些远去的事 没有人会再提起\n[00:53.285]昨夜的梦里 你面目难辨得无稽\n[01:00.869]我奋力说话可惜被压住了声音\n[01:07.130]你说时间到了 就要辞行\n[01:14.347]\n[01:17.930]如果有天兜兜转转再一次相遇\n[01:25.097]我一定会不顾一切紧紧抱着你\n[01:32.530]启程回到人物饱满情节丰沛我们的堡垒\n[01:40.446]你说回不去了 你在庞贝\n[01:48.146]你不要忘了 我也在庞贝\n[01:54.847]\n[02:16.445]那些远去的事 没有人会再提起\n[02:23.744]昨夜的梦里 你面目难辨得无稽\n[02:31.127]我奋力说话可惜被压住了声音\n[02:37.595]你说时间到了 就要辞行\n[02:47.695]\n[02:48.309]如果有天兜兜转转再一次相遇\n[02:55.542]我一定会不顾一切紧紧抱着你\n[03:02.992]启程回到人物饱满情节丰沛我们的堡垒\n[03:10.942]你说回不去了 你在庞贝\n[03:17.586]\n[03:17.903]如果有天兜兜转转再一次相遇\n[03:25.069]我一定会不顾一切紧紧抱着你\n[03:32.521]启程回到人物饱满情节丰沛我们的堡垒\n[03:40.402]你说回不去了 你在庞贝\n[03:48.119]你不要忘了 我也在庞贝\n[03:58.986]\n[04:01.419] 爱尔兰笛：丁晓逵\n[04:03.852] 和音编写/和音：许嵩\n[04:06.285] 录音师：许嵩\n[04:08.718] 录音室：Vae Studio\n[04:11.151] 混音师：Simon Li\n[04:13.584] 混音室：nOiz Studio\n[04:16.017] 母带处理：许嵩\n"
          },
          {
            name: "人生海海",
            artist: "五月天",
            url: 'https://music.163.com/song/media/outer/url?id=386717.mp3',
            cover: 'http://p2.music.126.net/X79dz2556bKOt59JdQj5yA==/109951163188731559.jpg?param=130y130',
            lrc: "[00:00.000] 作词 : 阿信\n[00:01.000] 作曲 : 阿信\n[00:17.38]有一天我在想\n[00:22.96]我到底\n[00:24.35]算是个什么东西\n[00:26.73]还是我会不会\n[00:29.63]根本就不算东西\n[00:32.00]天天都漫无目的\n[00:34.28]偏偏又想要证明真理\n[00:37.63]别人从屁股放屁\n[00:39.50]我却每天每天\n[00:41.02]都说要革命\n[00:42.53]就算是整个世界\n[00:45.21]把我抛弃\n[00:48.62]而至少快乐伤心\n[00:51.83]我自己决定\n[00:54.10]所以我说就让他去\n[00:59.20]我知道潮落之后\n[01:02.43]一定有潮起\n[01:04.66]有什么了不起\n[01:07.98]常常我豁出去\n[01:18.84]拼了命\n[01:20.20]走过却没有痕迹\n[01:22.53]可是我从不怕\n[01:25.43]挖出我火热的心\n[01:27.85]手上有一个硬币\n[01:30.06]反面就决定放弃\n[01:32.65]嗝屁\n[01:33.40]但是啊在我心底却\n[01:35.65]完完全全不想放弃\n[01:38.29]就算是整个世界\n[01:41.14]把我抛弃\n[01:44.64]而至少快乐伤心\n[01:47.53]我自己决定\n[01:49.81]所以我说就让他去\n[01:54.84]我知道潮落之后\n[01:58.00]一定有潮起\n[02:00.09]有什么了不起\n[02:14.61]常常我闭上眼睛\n[02:32.12]听到了海的呼吸\n[02:34.71]是你\n[02:35.40]温柔的蓝色潮汐\n[02:37.20]告诉我没有关系\n[02:39.96]就算真的整个世界\n[02:42.95]把我抛弃\n[02:46.60]而至少快乐伤心\n[02:49.73]我自己决定\n[02:52.07]所以我说就让他去\n[02:57.13]我知道潮落之后\n[03:00.13]一定有潮起\n[03:02.46]我不能忘记无论是\n[03:05.71]我的明天要去哪里\n[03:10.17]而至少快乐伤心\n[03:13.53]我自己决定\n[03:15.89]所以我说就让他去\n[03:20.75]我知道潮落之后\n[03:24.11]一定有潮起\n[03:26.55]有什么了不起\n[03:36.10]啦啦啦啦啦啦\n[03:48.70]明天我在哪里\n"
          },
          {
            name: "一颗苹果",
            artist: "五月天",
            url: 'https://music.163.com/song/media/outer/url?id=386691.mp3',
            cover: 'http://p2.music.126.net/X79dz2556bKOt59JdQj5yA==/109951163188731559.jpg?param=130y130',
            lrc: "[00:20.80]经过了漫长的等候 梦想是梦想 我还是一个我\n[00:27.96]那时间忘记挽留 最美时候 不经意匆匆的放过\n[00:35.32]曾经想拥抱的彩虹 盛开的花朵 那纯真的笑容\n[00:42.69]突然有风吹过 那一转眼只剩我\n[00:50.02]我不懂 人世间的那些愁 他为什么要缠着我\n[00:54.93]到底这会是谁的错 还是我不放手\n[00:58.57]喔 人世间的那些愁 这世界给我的幽默\n[01:02.13]这是不是要告诉我 潮起终究潮落\n[01:06.53]总要有人来陪我 咽下苦果 喔 再尝一点美梦\n[01:14.12]要等你先开口 那冬天才会走\n[01:21.47]有些人经过我身旁 住在我脑中 在我心里钻洞\n[01:28.69]有些人变成相片 堆在角落 灰尘像雪一般冰冻\n[01:51.15]时间如果可以倒流 我想我还是 会卯起来蹉跎\n[01:58.19]反正就这样吧 我知道我 努力过\n[02:05.64]我想到 遥远遥远的以后 会不会有人知道我\n[02:10.32]在这个寂寞的星球 曾这样的活过\n[02:14.11]喔 遥远遥远的以后 天长和地久的尽头\n[02:17.85]应该没有人能抢走 我永远的感动\n[02:22.05]总要有一首我的歌 大声唱过 喔 再看天地辽阔\n[02:29.71]活着不多不少 幸福刚好够用\n[02:37.16]活着其实很好 再吃一颗苹果\n"
          },
          {
            name: "纯真",
            artist: "五月天",
            url: 'https://music.163.com/song/media/outer/url?id=386715.mp3',
            cover: 'http://p2.music.126.net/X79dz2556bKOt59JdQj5yA==/109951163188731559.jpg?param=130y130',
            // lrc: 'https://music.163.com/api/song/lyric?id=386715&lv=1&kv=1&tv=-1'
            lrc: "[00:00.000] 作词 : 阿信\n[00:01.000] 作曲 : 阿信\n[00:13.700]长长的路上 我想我们是朋友\n[00:20.30]如果有期待我想最好是不说\n[00:26.650]你总是微笑的 你总是不开口\n[00:32.150]世界被你掌握\n[00:37.520]\n[00:39.420]月亮绕地球 地球绕着太阳走\n[00:45.600]我以为世界是座宁静的宇宙\n[00:51.840]今晚的天空有一颗流星划过\n[00:57.460]在预言着什么\n[01:06.600]\n[01:08.120]在无声之中你拉起了我的手\n[01:14.340]我怎么感觉整个黑夜在震动\n[01:20.360]耳朵里我听到了心跳的节奏\n[01:26.50]星星在闪烁 你怎么说\n[01:33.840]\n[01:46.370]你心中一定有座浓雾的湖泊\n[01:52.620]任凭月光再皎洁照也照不透\n[01:58.880]你眼中闪烁湖面无边的温柔\n[02:04.570]那波光在诱惑\n[02:10.560]\n[02:11.520]在无声之中你拉起了我的手\n[02:18.310]我怎么感觉整个黑夜在震动\n[02:24.720]耳朵里我听到了心跳的节奏\n[02:30.210]星星在闪烁 你会怎么说\n[02:37.400]\n[03:03.590]在无声之中你拉起了我的手\n[03:10.50]我怎么感觉整个黑夜在震动\n[03:16.280]耳朵里我听到了心跳的节奏\n[03:22.100]星星在闪烁 你会怎么说\n[03:28.570]\n[03:29.220]你已经有他就不应该再有我\n[03:35.540]世界的纯真此刻为你有迷惑\n[03:41.850]我想我应该轻轻放开你的手\n[03:47.280]我却没有力气这么做\n[03:52.930]\n"
          }
        ],
      });
      this.ap = ap;
      this.ap.lrc.hide()
    }
  },
  mounted() {
    this.initAplayer();
  },
};
</script>
<style lang="scss" scoped>
:deep(.aplayer.aplayer-fixed) {
    bottom: 138px!important;
}
:deep(.aplayer.aplayer-fixed .aplayer-body), :deep(.aplayer .aplayer-miniswitcher) {
    bottom: 138px!important;
}
:deep(.aplayer.aplayer-fixed .aplayer-lrc) {
    bottom: 148px!important;
}
</style>