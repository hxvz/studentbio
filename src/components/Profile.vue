<template>
	<div id="profile">
		<member-header></member-header>
		Student Profile.
	</div>
</template>

<script>
import memberheader from '@/components/_support/member-head'
	export default {
		name: 'profile',
		components: {
			'member-header': memberheader
		}
	}
</script>