import { WeightAnswers } from 'types';

/** An object represent props of AnswerListener Component. */
export interface IAnswerListener {
  /**
   * Functions save current state of answers weights in firebase.
   *
   * @param answers - {@link WeightAnswers}
   */
  onWeightUpdate: ( answers: WeightAnswers ) => void;
}
