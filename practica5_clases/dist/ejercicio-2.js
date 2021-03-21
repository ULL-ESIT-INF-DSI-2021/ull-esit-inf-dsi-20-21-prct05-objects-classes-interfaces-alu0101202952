"use strict";
/*export class BM{
    private title: String;
    private author = new Array();
    private emailAuthor = new Array();
    private keywords = new Array();
    private abstract: String;
    private publicationDate = new Array(3);
    private editorial: String;
    private countCitations: number;
  
      constructor(title: String, author =new Array(), emailAuthor = new Array(), keywords = new Array(), abstract: String, publicationDate= new Array(3), editorial: String, countCitations: number) {
        this.title = title;
        this.author = author;
        this.emailAuthor = emailAuthor;
        this.keywords = keywords;
        this.abstract = abstract;
        this.publicationDate = publicationDate;
        this.editorial = editorial;
        this.countCitations = countCitations;
      }
  
      getTitle(){
        return this.title;
      }
  
      getAuthor(){
        var aux: string = '';
        for (var i = 0; i < this.author.length; i++) {
          aux += this.author[i] + ', ';
        } console.log(`Authors: ${aux}`);
      }
  
      getEmailAuthor(){
        var aux: string = '';
        for (var i = 0; i < this.emailAuthor.length; i++) {
          aux += this.emailAuthor[i] + ', ';
        } console.log(`Contact (email): ${aux}`);
      }
  
      getKeywords(){
        var aux: string = '';
        for (var i = 0; i < this.keywords.length; i++) {
          aux += this.keywords[i] + ', ';
        } console.log(`Keywords: ${aux}`);
      }
  
      getAbstract(){
        return this.abstract;
      }
  
      getPublicationDate(){
        var aux: string = '';
        for (var i = 0; i < this.publicationDate.length; i++) {
          aux += this.publicationDate[i] + ', ';
        } console.log(`Publication Date of article: ${aux}`);
      }
  
      getEditorial(){
        return this.editorial;
      }
  
      getCitations(){
        return this.countCitations;
      }
      
      public referenceAPAWDOI() {
        console.log(`Dahmani, I., Hifi, M., ${article1.getTitle()}, Ann Oper Res 298, 125–147 (2021). https://doi.org/10.1007/s10479-019-03290-3`);
      }
  
      // Mostrar por la consola la información incluida en la base de datos en formato tabla
      public articleTable(title: String, author =new Array(), emailAuthor = new Array(), keywords = new Array(), abstract: String, publicationDate= new Array(3), editorial: String, countCitations: number){
        this.title = title;
        this.author = author;
        this.emailAuthor = emailAuthor;
        this.keywords = keywords;
        this.abstract = abstract;
        this.publicationDate = publicationDate;
        this.editorial = editorial;
        this.countCitations = countCitations;
      }
  
    } //class BM ends
  
  
    let article1 = new BM("A modified descent method-based heuristic for binary quadratic knapsack problems with conflict graphs", ["Isma Dahmani", "Mhand Hifi"], ["IsmaDahmani@gmail.com", "MhandHifi@gmail.com"], ["Descent", "Heuristic", "Knapsack", "Optimization"], "The knapsack problem arises in a variety of real world applications, including flexible manufacturing systems, railway stations, hydrological studies and others. In this paper, we propose a descent method-based heuristic for tackling a special knapsack problem: the binary quadratic knapsack with conflict graphs. The proposed method combines (i) an intensification search with a descent method for enhancing the accuracy of the solutions and (ii) a diversification strategy which is used for enlarging the search space. The method uses degrading and re-optimization strategies in order to reach a series of diversified solutions. The performance of the proposed method is evaluated on benchmark instances taken from the literature, where its achieved results are compared to those reached by both GLPK solver and the best method available in the literature. The method seems very competitive, where it is able to achieve 37 new lower bounds.", [17, 7, 2019], "Springer Nature" , 2);
  
    let article2 = new BM("On exact solution approaches for bilevel quadratic 0–1 knapsack problem", ["Gabriel Lopez Zenarosa", "Oleg A. Prokopyev", "Eduardo L. Pasiliao "], ["GabrielLopezZenarosa@gmail.com", "OlegAProkopyev@gmail.com", "EduardoLPasiliao@gmail.com"], ["Bilevel programming", "Bilevel knapsack problem","Quadratic knapsack problem", "Dynamic programming"], "We consider the bilevel quadratic knapsack problem (BQKP) that model settings where a leader appropriates a budget for a follower, who solves a quadratic 0–1 knapsack problem. BQKP generalizes the bilevel knapsack problem introduced by Dempe and Richter (Cent Eur J Oper Res 8(2):93–107, 2000), where the follower solves a linear 0–1 knapsack problem. We present an exact-solution approach for BQKP based on extensions of dynamic programs for QKP bounds and the branch-and-backtrack algorithm. We compare our approach against a two-phase method computed using an optimization solver in both phases: it first computes the follower’s value function for all feasible leader’s decisions, and then solves a single-level, value-function reformulation of BQKP as a mixed-integer quadratically constrained program. Our computational experiments show that our approach for solving BQKP outperforms the two-phase method computed by a commercial state-of-the-art optimization software package.",[4, 8, 2018], "Springer Nature" , 1);
  
  
    let databaseArticles = [article1, article2];
  
    console.log(`********************************************************************\n`);
    databaseArticles.forEach((article) => {
      console.log(`Title: "${article.getTitle()}"\n`);
      console.log(`${article.getAuthor()}\n`);
      console.log(`${article.getEmailAuthor()}\n`);
      console.log(`${article.getKeywords()}\n`);
      console.log(`Abstract: ${article.getAbstract()}\n`);
      console.log(`${article.getPublicationDate()}\n`);
      console.log(`Editorial: ${article.getEditorial()}\n`);
      console.log(`Citations: ${article.getCitations()}\n`);
      console.log(`\nReference APA formar without DOI: ${article.referenceAPAWDOI()}\n`);
  
      console.log(`********************************************************************\n`);
      console.log(`${article.articleTable(article.getTitle(), [article.getAuthor()], [article.getEmailAuthor()], [article.getKeywords()], article.getAbstract(), [article.getPublicationDate()], article.getEditorial() , article.getCitations())}\n`);
  
      console.table(article1);
  
      console.log(`\n********************************************************************\n`);
      
   });
   */ 
