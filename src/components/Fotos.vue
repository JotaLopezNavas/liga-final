<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd">
      <b-carousel-slide img-src="https://static.guiainfantil.com/uploads/salud/nino-juega-futbol-pelota-brazo-p.jpg"></b-carousel-slide>
      <b-carousel-slide img-src="https://www.acadef.es/wp-content/uploads/2019/12/como-ser-un-buen-entrenador-infantil.jpg"></b-carousel-slide>
      <b-carousel-slide img-src="https://media.istockphoto.com/photos/soccer-field-picture-id1022594986?k=6&m=1022594986&s=612x612&w=0&h=dEvbqACPFWMmMKlMJrnHeSUeJx0QZOL2i8bBybVHp3c="></b-carousel-slide>
    </b-carousel>
  </div>
</template>