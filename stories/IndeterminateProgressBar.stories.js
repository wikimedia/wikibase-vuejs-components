import { storiesOf } from '@storybook/vue';
import IndeterminateProgressBar from '@/components/IndeterminateProgressBar.vue';

storiesOf( 'IndeterminateProgressBar', module )
	.addParameters( { component: IndeterminateProgressBar } )
	.add( 'default', () => ( {
		components: { IndeterminateProgressBar },
		template:
			`<div>
				<IndeterminateProgressBar />
			</div>`,
	} ) );
