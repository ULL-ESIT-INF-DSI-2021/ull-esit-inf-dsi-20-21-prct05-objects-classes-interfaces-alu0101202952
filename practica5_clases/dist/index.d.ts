export declare class BM {
    private title;
    private author;
    private emailAuthor;
    private keywords;
    private abstract;
    private publicationDate;
    private editorial;
    private countCitations;
    constructor(title: String, author: any[] | undefined, emailAuthor: any[] | undefined, keywords: any[] | undefined, abstract: String, publicationDate: any[] | undefined, editorial: String, countCitations: number);
    getTitle(): String;
    getAuthor(): void;
    getEmailAuthor(): void;
    getKeywords(): void;
    getAbstract(): String;
    getPublicationDate(): void;
    getEditorial(): String;
    getCitations(): number;
}
