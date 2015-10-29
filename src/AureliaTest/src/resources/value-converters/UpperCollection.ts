export class UppercollectionValueConverter {
    toView(value: string[]) {
        return value && value.map(s=> s.toUpperCase());
    }
}