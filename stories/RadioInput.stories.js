import { storiesOf } from '@storybook/vue';
import RadioInput from '@/components/RadioInput.vue';

storiesOf( 'RadioInput', module )
	.addParameters( { component: RadioInput } )
	.add( 'default', () => ( {
		components: { RadioInput },
		template:
				`
			<div>
				<RadioInput
						name="input name"
						htmlValue="input value"
				>
					<template slot="label">Option 1</template>
				</RadioInput>
			</div>`,
	} ) )
	.add( 'default checked', () => ( {
		components: { RadioInput },
		template:
				`
			<div>
				<RadioInput
						name="input name"
						htmlValue="input value"
						value="input value"
				>
					<template slot="label">Option 1</template>
				</RadioInput>
			</div>`,
	} ) )
	.add( 'disabled', () => ( {
		components: { RadioInput },
		template:
				`
			<div>
				<RadioInput
						name="input name"
						htmlValue="input value"
						:disabled="true"
				>
					<template slot="label">Option 1</template>
				</RadioInput>
			</div>`,
	} ) )
	.add( 'disabled checked', () => ( {
		components: { RadioInput },
		template:
				`
			<div>
				<RadioInput
						name="input name"
						htmlValue="input value"
						value="input value"
						:disabled="true"
				>
					<template slot="label">Option 1</template>
				</RadioInput>
			</div>`,
	} ) )
	.add( 'with description', () => ( {
		components: { RadioInput },
		template:
				`
			<div>
				<RadioInput
						name="input name"
						htmlValue="input value"
				>
					<template slot="label">Option 1</template>
					<template slot="description">Some additional text</template>
				</RadioInput>
			</div>`,
	} ) )
	.add( 'with long label and description', () => ( {
		components: { RadioInput },
		template:
				`
			<div style="max-width: 40em;">
				<RadioInput
						name="input name"
						htmlValue="input value"
				>
					<template slot="label"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam eu viverra ante. Sed eget quam mi. Duis at turpis eget odio cursus tincidunt.</template>
					<template slot="description"><strong>Donec blandit</strong> lorem vel eros ullamcorper laoreet. Pellentesque in dignissim nisl. Fusce pharetra, magna quis aliquet pellentesque, enim mi laoreet sapien, fermentum blandit magna metus sed lacus.</template>
				</RadioInput>
			</div>`,
	} ) )
	.add( 'multiple inputs', () => ( {
		components: { RadioInput },
		data() {
			return {
				picked: 'none',
			};
		},
		template:
				`
			<div>
				<p>Picked: {{ picked }}</p>
				<RadioInput
						name="input name"
						htmlValue="input value 1"
						v-model="picked"
				>
					<template slot="label">Option 1</template>
				</RadioInput>

				<RadioInput
						name="input name"
						htmlValue="input value 2"
						v-model="picked"
				>
					<template slot="label">Option 2</template>
					<template slot="description">Some description text</template>
				</RadioInput>

				<RadioInput
						name="input name"
						htmlValue="input value 3"
						v-model="picked"
				>
					<template slot="label">Option 3</template>
				</RadioInput>

				<RadioInput
						name="input name"
						htmlValue="input value 4"
						:disabled="true"
						v-model="picked"
				>
					<template slot="label">Option 4 (disabled)</template>
				</RadioInput>

				<br>
				<p><small>(vertical spacing must be handled by the client application)</small></p>
			</div>`,
	} ) )
	.add( 'with links in label and description', () => ( {
		components: { RadioInput },
		template:
				`
			<div>
				<RadioInput
						name="input name"
						htmlValue="input value"
				>
					<template slot="label">Option 1 (<a href="https://example.com">details</a>)</template>
					<template slot="description">Some additional text (<a href="https://example.com" target="_blank">more details</a>)
					</template>
				</RadioInput>
			</div>`,
	} ) );
