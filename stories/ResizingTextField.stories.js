import { storiesOf } from '@storybook/vue';
import ResizingTextField from '@/components/ResizingTextField.vue';

storiesOf( 'ResizingTextField', module )
	.addParameters( {
		component: ResizingTextField,
		docs: {
			extractComponentDescription: () => {
				// eslint-disable-next-line
				return 'Please note this case shows just the plain version of the component and has to be styled by its parent.';
			},
		},
	} )
	.add( 'plain', () => ( {
		data() { return { value: 'value' }; },
		components: { ResizingTextField },
		template: '<ResizingTextField v-model="value" />',
	} ) );
