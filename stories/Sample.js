import { storiesOf } from '@storybook/vue';

import Sample from '@/components/Sample';

storiesOf( 'Sample', module )
	.add( 'base view', () => ( {
		components: { Sample },
		template: '<Sample />',
	} ), { info: true } );
