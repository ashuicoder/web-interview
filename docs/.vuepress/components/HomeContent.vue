<template>
  <div>
    <img :src="$withBase('/svg/home.svg')" alt="" srcset="" />
    <p class="tip">
      不管生活多么的艰难，我们依然要满怀希望、健康乐观地活着、努力着。
    </p>

    <div class="btn-box">
      <button class="btn" @click="jumptoHtml">开始刷题</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const router = useRouter()
    const jumptoHtml = () => {
      router.push('/html')
    }

    return {
      jumptoHtml
    }
  }
})
</script>

<style lang="scss" scoped>
.tip {
  font-size: 20px;
  text-align: center;
}

.btn-box {
  display: flex;
  justify-content: center;
  margin: 40px;
  .btn {
    font-size: 1.2rem;
    padding: 0.8rem 1.6rem;
    border-width: 2px;
    border-style: solid;
    border-radius: 4px;
    transition: background-color var(--t-color);
    box-sizing: border-box;
    color: var(--c-bg);
    background-color: var(--c-brand);
    border-color: var(--c-brand);
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
