import 'mocha';
import {expect} from 'chai';
import {BM} from '../src/index';

let article1 = new BM("A modified descent method-based heuristic for binary quadratic knapsack problems with conflict graphs", () =>["Isma Dahmani", "Mhand Hifi]"], ()=> ["Isma Dahmani", "Mhand Hifi"], () =>["Descent", "Heuristic", "Knapsack", "Optimization"], "The knapsack problem arises in a variety of real world applications, including flexible manufacturing systems, railway stations, hydrological studies and others. In this paper, we propose a descent method-based heuristic for tackling a special knapsack problem: the binary quadratic knapsack with conflict graphs. The proposed method combines (i) an intensification search with a descent method for enhancing the accuracy of the solutions and (ii) a diversification strategy which is used for enlarging the search space. The method uses degrading and re-optimization strategies in order to reach a series of diversified solutions. The performance of the proposed method is evaluated on benchmark instances taken from the literature, where its achieved results are compared to those reached by both GLPK solver and the best method available in the literature. The method seems very competitive, where it is able to achieve 37 new lower bounds.", (day, month, year) => [17, 7, 2019], "Springer Nature" , 2)


describe('BM (Bibliographic Manager)', () => {
    it('article1.getTitle() returns title of article1', () => {
      return expect(article1.getTitle()).to.be.equal("A modified descent method-based heuristic for binary quadratic knapsack problems with conflict graphs");
    })

    it('article1.getAuthor() returns authors of article1', () => {
        return expect(article1.getAuthor()).to.be.equal(() =>["Isma Dahmani", "Mhand Hifi]"]);
      })
});

