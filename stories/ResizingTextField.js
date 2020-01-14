import { storiesOf } from '@storybook/vue';
import ResizingTextField from '@/components/ResizingTextField.vue';

storiesOf( 'ResizingTextField', module )
	.add( 'plain', () => ( {
		data() { return { value: 'value' }; },
		components: { ResizingTextField },
		template: '<ResizingTextField v-model="value" />',
	} ) );
