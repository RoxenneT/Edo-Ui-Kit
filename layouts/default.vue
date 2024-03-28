<template>
  <div>
    <Header />
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<style lang="scss" scoped>
  div {
    width: 100vw;
    height: 100vh;
    overflow: auto;
  }
</style>