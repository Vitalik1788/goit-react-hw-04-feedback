import { useState } from 'react';
import css from './App/App.module.css';
import Statistic from './Statistic/Statistic';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const stateKeys = { good, neutral, bad };

  const leaveFeedback = event => {
    switch (event.target.dataset.action) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
     return Math.round(good / (countTotalFeedback() / 100));
   }

  return (
    <div className={css.container}>
      <Section title={'Please leave youre feedback about our service'}>
        <FeedbackOptions
          options={Object.keys(stateKeys)}
          onLeaveFeedback={leaveFeedback}
        />
      </Section>

      <Section title={'Our Statistics'}>
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
};

export default App;
