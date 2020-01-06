<template>
	<div
		class="wb-ui-radio-input"
	>
		<input
			:name="name"
			:value="htmlValue"
			type="radio"
			:id="id"
			:checked="initiallyChecked"
			:disabled="disabled"
			@input="$emit('input', $event.target.value)"
		>
		<span />
		<label :for="id">
			<span class="wb-ui-radio-input__main-label">
				<!-- @slot This slot is required. It expects the label text -->
				<slot name="label" />
			</span>
			<span class="wb-ui-radio-input__description">
				<!-- @slot This slot is optional. It can hold additional help text -->
				<slot name="description" />
			</span>
		</label>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class RadioInput extends Vue {
	// see:https://github.com/vuejs/vue/issues/5886
	public readonly id = `wb-ui-radio-input-${Math.floor( Math.random() * 1000000 )}`;

	@Prop( { type: String, required: true } )
	public name!: string;

	/**
	 * This is the actual (both technical and conceptual) value of the radio input
	 */
	@Prop( { type: String, required: true } )
	public htmlValue!: string;

	@Prop( { type: Boolean, default: false } )
	public disabled!: boolean;

	/**
	 * Set this to the same as htmlValue to have the radio input initially checked
	 */
	@Prop( { type: String, default: '' } )
	public value!: string;

	public get initiallyChecked(): boolean {
		return this.value === this.htmlValue;
	}
}
</script>

<style lang="scss">
.wb-ui-radio-input {
	// Create a stacking context, so that we can use `z-index` below without leaking out
	z-index: 0;
	position: relative;
	// Prevent the fake span from jumping to the next line of text
	white-space: nowrap;
	display: flex;
	align-items: flex-start;

	// `<input type=radio>` element is visually replaced by `span` that follows
	input[ type='radio' ] {
		position: relative;
		// Support: Firefox mobile to override user-agent stylesheet, see T73750
		max-width: none;

		/**
		* Ensure the invisible input takes up the required width
		*
		* Using min-width because otherwise the browser starts to get funny ideas
		* if there doesn't seem to be enough horizontal space for the label
		*/
		min-width: $size-input-binary;
		height: $size-input-binary;
		// Having margin would offset the input from where the span is absolutely positioned,
		// making only the overlap region receive events
		margin: 0;
		// Use opacity so that VoiceOver can still identify it
		opacity: 0;
		// Render "on top of" the span, so that it's still clickable
		z-index: 1;

		& + span {
			background-color: $background-color-base;
			position: absolute;
			left: 0;
			box-sizing: border-box;
			width: $size-input-binary;
			height: $size-input-binary;
			border: $border-width-base $border-style-base $border-color-input-binary;
			border-radius: 100%;

			// Needed for `:focus` state's inner white circle
			&:before {
				content: ' ';
				position: absolute;

				/**
					$focusCirclePosition describes where the :before is positioned
					relative to the edge of the inner white circle
					negative values mean "outside of"
				*/
				$focusCirclePosition: -5px;
				top: $focusCirclePosition;
				left: $focusCirclePosition;
				right: $focusCirclePosition;
				bottom: $focusCirclePosition;
				border: $border-width-base $border-style-base transparent;
				border-radius: 100%;
			}
		}

		&:disabled {
			& + span {
				background-color: $background-color-filled--disabled;
				border-color: $border-color-base--disabled;
			}

			&:checked + span {
				background-color: $background-color-base;
			}
		}

		&:checked {
			& + span,
			&:hover + span,
			&:focus:hover + span {
				border-width: $border-width-radio--checked;
			}
		}

		&:not( :disabled ) {
			cursor: pointer;

			& + span {
				cursor: pointer;
				/* stylelint-disable value-list-comma-newline-after  */
				transition: background-color $transition-base,
					border-color $transition-base,
					border-width $transition-base;
				/* stylelint-enable */
			}

			&:hover + span {
				border-color: $border-color-input-binary--hover;
			}

			&:active + span {
				background-color: $background-color-input-binary--active;
				border-color: $border-color-input-binary--active;
			}

			&:checked {
				& + span {
					border-color: $border-color-input-binary--checked;
				}

				// `:focus` has to come first, otherwise a specificity race with `:hover:focus` etc is necessary
				&:focus + span {
					&:before {
						border-color: $background-color-base;
					}
				}

				&:hover + span {
					border-color: $border-color-input-binary--hover;
				}

				&:active + span {
					border-color: $border-color-input-binary--active;
					box-shadow: $box-shadow-input-binary--active;

					&:before {
						border-color: $border-color-input-binary--active;
					}
				}
			}
		}
	}

	label {
		padding-left: $base-spacing-unit;
		display: flex;
		flex-direction: column;
		white-space: normal;
		padding-top: 0.1em; // minor adjustment for vertical alignment

		.wb-ui-radio-input__main-label {
			font-size: $font-size-label-input-binary;
			line-height: 157%;
		}

		.wb-ui-radio-input__description {
			font-size: $font-size-description-input-binary;
			line-height: 167%;
		}
	}

	input[ type='radio' ]:disabled ~ label {
		color: $color-base--disabled;
	}
}
</style>
