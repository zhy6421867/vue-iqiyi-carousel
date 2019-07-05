<template>
  <section class="m-carousel">
    <div class="carousel-box">
      <ul name="m-focus" class="list-carousel" id="mSwipe">
        <li
          v-for="(item, index) in data"
          :key="index"
          :class="{ 'selected': index === 0 }"
          :style="getStyle(index)"
        >
          <router-link
            tag="a"
            :to="`/detail?id=${item.id}`"
            class="content-box"
            :style="{ 'background-image': `url(${item.cover})` }"
          >
            <div class="c-lb">
              <span class="c-title">
                {{ item.name }}
              </span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexCarousel',

  data () {
    return {
      data: [
        {
          cover: 'http://demo.sc.chinaz.com/Files/DownLoad/webjs1/201812/jiaoben6415/images/bimg1.jpg',
          name: '图片一',
          id: 1
        },
        {
          cover: 'http://demo.sc.chinaz.com/Files/DownLoad/webjs1/201812/jiaoben6415/images/bimg2.jpg',
          name: '图片一',
          id: 2
        },
        {
          cover: 'http://demo.sc.chinaz.com/Files/DownLoad/webjs1/201812/jiaoben6415/images/bimg3.jpg',
          name: '图片一',
          id: 3
        }
      ],
      mSwipe: null
    }
  },

  methods: {
    getStyle (t) {
      return t === 0 ? 'transform:translate(3.6%, 0px);position: absolute;' : t === 1 ? 'transform:translate(110%, 0px);position:absolute;' : t === 2 ? 'transform:translate(-96%, 0px);position:absolute;' : 'visibility:hidden;position:absolute;'
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.mSwipe = Swipe(document.getElementById('mSwipe'), {
        direction: 'left',
        delay: 2600,
        speed: 400,
        disableScroll: !1,
        stopPropagation: !0,
        startSlide: 0,
        start: 1
      })
    })
  }
}
</script>

<style lang="scss">
// 回到顶部样式
.z-go-top {
  position: fixed;
  width: 60px;
  height: 60px;
  line-height: 60px;
  right: 0;
  bottom: 50px;
  background-color: #1ab394;
  color: #fff;
  font-size: 30px;
  text-align: center;
  cursor: pointer;
  display: none;
}
</style>
