<script>
export default {
  name: "GuestLayout",
};
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-xl-10 col-lg-12 col-md-9">
      <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-0">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
