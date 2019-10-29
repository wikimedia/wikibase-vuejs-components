import { storiesOf } from '@storybook/vue';
import ResizingTextField from '@/components/ResizingTextField.vue';

storiesOf( 'ResizingTextField', module )
	.add( 'plain', () => ( {
		data() { return { value: 'value' }; },
		components: { ResizingTextField },
		template: '<ResizingTextField v-model="value" />',
	} ),
	{
		info: {
			// eslint-disable-next-line max-len
			summary: 'Please note this case shows just the plain version of the component and have to be styled by his parent.',
		},
	} );
