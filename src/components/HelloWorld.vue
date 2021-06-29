<template>
  <button type="button" @click="submitForm(1)">123</button>
</template>

<script lang="ts">
import { ref,reactive, defineComponent, getCurrentInstance } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
    }
  },
  setup: () => {
    const count = ref(0)
	const { ctx } = getCurrentInstance();
	 let state = reactive({
	  ruleForm: {
		username: "fur",
		password: "123",
	  }
	});
	interface Animal {
	   color: string;
	   height: number;
	}
	const labelVal: Animal = {
	   color:[123],
	   height: 56
	}
	function submitForm(data:Object) {
		console.log(data)
		console.log(state.ruleForm)
	  this.$http.post("/login", state.ruleForm).then((res) => {
		//请求成功
	  });
	}
    return { count,submitForm ,state}
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
