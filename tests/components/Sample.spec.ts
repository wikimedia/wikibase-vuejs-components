import Sample from '@/components/Sample.vue';
import { shallowMount } from '@vue/test-utils';

describe( 'Sample', () => {
	it( 'renders correctly', () => {
		const wrapper = shallowMount( Sample );
		expect( wrapper.element ).toMatchSnapshot();
	} );

	it( 'mounted correctly', () => {
		const wrapper = shallowMount( Sample );
		expect( wrapper.isVueInstance() ).toBe( true );
	} );
} );
