import 'mocha';
import {expect} from 'chai';
import {BM} from '../src/index';

let article1 = new BM("A modified descent method-based heuristic for binary quadratic knapsack problems with conflict graphs", ["Isma Dahmani", "Mhand Hifi"], ["Isma Dahmani", "Mhand Hifi"], ["Descent", "Heuristic", "Knapsack", "Optimization"], "The knapsack problem arises in a variety of real world applications, including flexible manufacturing systems, railway stations, hydrological studies and others. In this paper, we propose a descent method-based heuristic for tackling a special knapsack problem: the binary quadratic knapsack with conflict graphs. The proposed method combines (i) an intensification search with a descent method for enhancing the accuracy of the solutions and (ii) a diversification strategy which is used for enlarging the search space. The method uses degrading and re-optimization strategies in order to reach a series of diversified solutions. The performance of the proposed method is evaluated on benchmark instances taken from the literature, where its achieved results are compared to those reached by both GLPK solver and the best method available in the literature. The method seems very competitive, where it is able to achieve 37 new lower bounds.", [17, 7, 2019], "Springer Nature" , 2)


describe('BM (Bibliographic Manager)', () => {
    it('article1.getTitle() returns title of article1', () => {
      return expect(article1.getTitle()).to.be.equal("A modified descent method-based heuristic for binary quadratic knapsack problems with conflict graphs");
    })

    it('article1.getAuthor() returns authors of article1', () => {
        return expect(article1.getAuthor()).to.be.equal(undefined);
    })

    it('article1.getEmailAuthor() returns email of authors of article1', () => {
        return expect(article1.getEmailAuthor()).to.be.equal(undefined);
    })

    it('article1.getKeywords() returns keywords of article1', () => {
        return expect(article1.getKeywords()).to.be.equal(undefined);
    })

    it('article1.getAbstract() returns abstract of article1', () => {
        return expect(article1.getAbstract()).to.be.equal("The knapsack problem arises in a variety of real world applications, including flexible manufacturing systems, railway stations, hydrological studies and others. In this paper, we propose a descent method-based heuristic for tackling a special knapsack problem: the binary quadratic knapsack with conflict graphs. The proposed method combines (i) an intensification search with a descent method for enhancing the accuracy of the solutions and (ii) a diversification strategy which is used for enlarging the search space. The method uses degrading and re-optimization strategies in order to reach a series of diversified solutions. The performance of the proposed method is evaluated on benchmark instances taken from the literature, where its achieved results are compared to those reached by both GLPK solver and the best method available in the literature. The method seems very competitive, where it is able to achieve 37 new lower bounds.");
    })

    it('article1.getPublicationDate() returns publicationDate of article1', () => {
        return expect(article1.getPublicationDate()).to.be.equal(undefined);
    })

    it('article1.getEditorial() returns editorial of article1', () => {
        return expect(article1.getEditorial()).to.be.equal("Springer Nature");
    })

    it('article1.getCitations() returns citations of article1', () => {
        return expect(article1.getCitations()).to.be.equal(2);
    })

    it('article1.referenceAPAWDOI() returns reference of article1 in APA format for electronic journal without DOI.', () => {
        return expect(article1.referenceAPAWDOI()).to.be.equal(undefined);
    })
});

