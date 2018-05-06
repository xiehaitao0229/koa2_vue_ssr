<style src="./Test.css"></style>
<template>
	<div class="test">
		Test Components
	</div>
</template>
<script>
export default {
	mounted() {
		import("./Test.js").then(res => {
			res.default();
		});
	}
};
</script>
