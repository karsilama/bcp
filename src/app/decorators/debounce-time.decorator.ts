export function DebounceTime(milliseconds: number = 0): MethodDecorator {
	return function (
		target: Object,
		propertyKey: any,
		descriptor: PropertyDescriptor
	) {
		const timeoutKey = Symbol();
		const originalDescriptorValue = descriptor.value;

		descriptor.value = function (...args) {
			clearTimeout(this[timeoutKey]);
			this[timeoutKey] = setTimeout(() => originalDescriptorValue.apply(this, args), milliseconds)
		}

		return descriptor;
	}
}