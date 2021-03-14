export declare class BM {
    private title;
    private author;
    private emailAuthor;
    private keywords;
    private abstract;
    private publicationDate;
    private editorial;
    private countCitations;
    constructor(title: String, author: () => string[], emailAuthor: () => string[], keywords: () => string[], abstract: String, publicationDate: (day: number, month: number, year: number) => number[], editorial: String, countCitations: number);
    getTitle(): String;
    getAuthor(): void;
}
