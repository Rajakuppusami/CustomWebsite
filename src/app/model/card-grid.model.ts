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