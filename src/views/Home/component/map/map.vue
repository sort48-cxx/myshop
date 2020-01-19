<template>
  <div class="test">
    <baidu-map
      :center="center"
      :zoom="zoom"
      @ready="handler"
      style="height:300px"
      @click="getClickInfo"
    >
      <bm-marker
        :position="{lng: 113.823785, lat: 22.639007}"
        :dragging="true"
        animation="BMAP_ANIMATION_BOUNCE"
        @click="getinfo"
      ></bm-marker>
      <bm-marker
        :position="{lng: 113.882714, lat: 22.614722}"
        :dragging="true"
        animation="BMAP_ANIMATION_BOUNCE"
        @click="getinfo"
      ></bm-marker>
    </baidu-map>
    <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
    <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
    <bm-geolocation anchor="BMAP_ANCHOR_TOP_LEFT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
    <!-- <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list> -->
  </div>
</template>

<script>
import BaiduMap from 'vue-baidu-map'
import Vue from 'vue'

Vue.use(BaiduMap, {
  ak: '3bVHdeo2ZZaZO4QczC63d0kMsbA55ZSD'
})

export default {
  data () {
    return {
      center: {
        lng: 0,
        lat: 0
      },
      zoom: 13
    }
  },
  methods: {
    handler ({ BMap, map }) {
      console.log(BMap, map)
      this.center.lng = 113.822348
      this.center.lat = 22.635538
      this.zoom = this.zoom
    },
    getClickInfo (e) {
      console.log(e)
      console.log(e.point.lng)
      console.log(e.point.lat)
      this.center.lng = e.point.lng
      this.center.lat = e.point.lat
      var point = new BMap.Point(e.point.lng, e.point.lat)
      var gc = new BMap.Geocoder()
      let _this = this
      gc.getLocation ( point, function(rs) {
        var addComp = rs.addressComponents
        console.log(rs.surroundingPois[0].title)
      })
    },
    getinfo (e) {
      console.log(e.target.point.lat, e.target.point.lng)
    }
  }
}
</script>

<style scoped>
.map {
  width: 100%;
  height: 300px;
}
.bm-view {
  width: 100%;
  height: 300px;
}
</style>
