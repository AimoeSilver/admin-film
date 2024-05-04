<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h3>Installed CLI Plugins</h3>
    <p class="democolor">测试文本</p>
    <el-button type="primary">This is ele</el-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.democolor
{
  color: $warning;
  font-size: 40px;
}
</style>
