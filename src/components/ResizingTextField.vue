<template>
	<textarea
		:value="value"
		@input="setValue"
		@keydown.enter.prevent
		:maxlength="maxlength"
	/>
</template>

<script lang="ts">
import debounce from 'lodash/debounce';
import Component from 'vue-class-component';
import Vue from 'vue';
import { Prop } from 'vue-property-decorator';

interface InputEvent {
	target: InputEventTarget;
}

interface InputEventTarget {
	value: string;
}

@Component
export default class ResizingTextField extends Vue {
	@Prop()
	public value!: string;

	@Prop( { type: Number, default: null } )
	public maxlength!: number;

	private windowResizeHandler: ( ( this: Window, event: UIEvent ) => void ) | undefined = undefined;

	public mounted(): void {
		this.windowResizeHandler = debounce( () => this.resizeTextField(), 100 );
		window.addEventListener( 'resize', this.windowResizeHandler );
		this.resizeTextField();
	}

	public unmounted(): void {
		if ( this.windowResizeHandler !== undefined ) {
			window.removeEventListener( 'resize', this.windowResizeHandler );
			this.windowResizeHandler = undefined;
		}
	}

	public setValue( event: InputEvent ): void {
		this.$emit( 'input', this.removeNewlines( event.target.value ) );

		// make sure that even nodiff changes to the state will update our textarea
		// a nodiff could be caused by pasting newlines only
		this.$forceUpdate();
		this.$nextTick().then( () => {
			this.resizeTextField();
		} );
	}

	private removeNewlines( value: string ): string {
		return value.replace( /\r?\n/g, '' );
	}

	public resizeTextField(): void {
		const textarea = this.$el as HTMLTextAreaElement;

		textarea.style.height = '0';
		const border = this.getPropertyValueInPx( textarea, 'border-top-width' )
			+ this.getPropertyValueInPx( textarea, 'border-bottom-width' );
		textarea.style.height = `${this.$el.scrollHeight + border}px`;
	}

	private getPropertyValueInPx( element: HTMLElement, property: string ): number {
		return parseInt( window.getComputedStyle( element ).getPropertyValue( property ) );
	}

}
</script>
