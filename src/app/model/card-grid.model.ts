export interface CardGridModel {
    title: string;
    column: number;
    columnClass?: string;
    cardDetails?: CardDetailModel[];
}

export interface CardDetailModel {
    id: number;
    text: string;
}

export class CardGridColumnSelect {
    value: number;
    valueView: string;
}

export class FontFamilySelectModel {
    viewName: string;
    name: string;
}

export class FontSizeSelectModel {
    fontSizeValue: string;
    fontSizeViewValue: String;
}

export enum TextAlignEnum {
    left = 'left',
    right = 'right',
    center = 'center',
    justify = 'justify'
}

export namespace TextAlignEnum{
    export function values() :any {
        return Object.keys(TextAlignEnum).filter(
            (type) => isNaN(<any>type) && type !== 'values'
          );
    }
}

export interface TextStyle {
    fontWeight?: string;
    fontStyle?: string;
    textDecoration?: string;
}