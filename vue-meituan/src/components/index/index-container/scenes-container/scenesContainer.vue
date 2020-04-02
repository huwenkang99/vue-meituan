<template>
  <div class="scenes">
    <QualityContainer />
    <OfferContainer/>
  </div>
</template>

<script>
import QualityContainer from './qualityContainer'
import OfferContainer from './offerContainer'
export default {
  components: {
    QualityContainer,
    OfferContainer
  }
}
</script>

<style>
.scenes{
  width: 1190px;
  margin: 40px auto;
}
</style>