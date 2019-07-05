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

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Swipe from './swipe'

@Component({
  components: {}
})
export default class IndexCarousel extends Vue {
  data: Array<any> = [
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
  ]
  mSwipe: any
  getStyle (t: Number) {
    return t === 0 ? 'transform:translate(3.6%, 0px);position: absolute;' : t === 1 ? 'transform:translate(110%, 0px);position:absolute;' : t === 2 ? 'transform:translate(-96%, 0px);position:absolute;' : 'visibility:hidden;position:absolute;'
  }
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

<style lang="less" scoped>
.m-carousel {
  position: relative;
  padding-top: 10px;
  z-index: 9;
  background-image: #fff;
}
.m-carousel .carousel-box {
  position: relative;
  width: 100%;
  overflow: hidden;
  transform-origin: 0 0 0;
  transform: scale(1, 1);
  opacity: 1;
  // -webkit-transform-origin: 0 0 0;
  // -webkit-transform: scale(1, 1);
  padding-top: 50%;
}
.m-carousel .list-carousel {
  position: absolute;
  left: 0;
  top: 0;
  letter-spacing: 5px;
  white-space: nowrap;
  float: left;
  transition-property: transform;
  transition-duration: 0ms;
  transform-origin: 0 0 0;
  // -webkit-transition-property: transform;
  // -webkit-transition-duration:0ms;
  // -webkit-transform-origin: 0 0 0;
  width: 100%;
  height: 100%;
}
.m-carousel .list-carousel li {
  position: relative;
  display: inline-block;
  vertical-align: top;
  letter-spacing: 0;
  width: 88%;
  height: 100%;
  padding: 5px;
  box-sizing: border-box;
}
.m-carousel .list-carousel li .content-box {
  display: block;
  position: relative;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 6px;
}
.m-carousel .list-carousel li .content-box:before {
  content: "";
  padding-top: 50%;
  display: block;
}
.m-carousel .list-carousel li .content-box:after {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  content: '';
  height: 50px;
  z-index:1;
  background-image:-webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.5) 100%);
  background-image:-o-linear-gradient(top, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.5) 100%);
  background-image:linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.5) 100%);
  background-repeat:repeat-x;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}
.m-carousel .list-carousel li.selected {
  width: 93.335%;
  height: 100%;
  margin-top: -5px;
}
.m-carousel.m-carousel-titleB .carousel-box {
  padding-top: 56.2%;
}
.m-carousel .list-carousel li .c-lb {
  width: 100%;
  bottom: 4px;
  position: absolute;
  z-index: 5;
  overflow: hidden;
}
.m-carousel .list-carousel li .c-title {
  color: #fff;
  display: block;
  line-height: 36px;
  padding-left: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: bold;
}
</style>
