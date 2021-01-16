import React, { useState, useEffect } from 'react';
import copyKeys, { useCopy } from '../utils/CopyService';
import Input from './Input';
import '../styles/emailform.scss';
import Text from './Text';
import {
  createRandomNum,
  randomFromArray,
  performOperation,
} from '../utils/MathUtils';

const EmailForm = () => {
  const copy = useCopy();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [question, setQuestion] = useState(undefined);
  const [answer, setAnswer] = useState('');
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [messageSent, setMessageSent] = useState(false);

  const isValidAnswer = () =>
    question &&
    performOperation(
      question.valueOne,
      question.valueTwo,
      question.operator
    ) === Number(answer);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValidAnswer()) {
      console.log({ name, email, message });

      setMessageSent(true);

      setName('');
      setEmail('');
      setMessage('');
      createQuestion();
      setAnswer('');
    } else {
      alert('Please try again');
      createQuestion();
      setAnswer('');
    }
  };

  const createQuestion = () => {
    const q = {
      valueOne: createRandomNum(2, 10),
      valueTwo: createRandomNum(2, 10),
      operator: randomFromArray(['+', '-', '*']),
    };

    setQuestion(q);
  };

  useEffect(() => {
    const shouldSendMessage = () => {
      const validFields =
        !!name?.length && !!email?.length && !!message?.length;
      return validFields;
    };

    !question && createQuestion();
    setDisableSubmit(!shouldSendMessage());
  }, [question, name, email, message]);

  return (
    <div className="form-wrapper">
      {messageSent ? (
        <div className="msg-sent-wrapper">
          <Text
            copyKey={copyKeys.ContactFormSentMessage}
            className="msg-sent-prompt"
          />
          <button
            className="send-another-btn"
            onClick={() => setMessageSent(false)}
          >
            <Text copyKey={copyKeys.ContactFormAnotherMessage} />
          </button>
        </div>
      ) : (
        <form
          action="submit"
          className="form-content"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h1 className="form-h1">
            <Text copyKey={copyKeys.ContactFormH1} />
          </h1>

          <Input
            type="text"
            name="field-name"
            id="field-name"
            className="input-text"
            placeholderCopyKey={copyKeys.ContactFormName}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="email"
            name="field-email"
            id="field-email"
            className="input-text"
            placeholderCopyKey={copyKeys.ContactFormEmail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="textarea"
            name="field-msg"
            id="field-msg"
            className="input-msg"
            placeholderCopyKey={copyKeys.ContactFormMessage}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <Input
            type="text"
            name="field-calculate"
            id="field-calculate"
            className="input-calculate"
            placeholderCopy={`${copy[copyKeys.ContactFormCalculate]} ${
              question?.valueOne
            } ${question?.operator} ${question?.valueTwo}`}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          />

          <label htmlFor="field-validation-info">
            <Text
              copyKey={copyKeys.ContactFormValidationInfo}
              className="form-validation-info"
            />
          </label>

          <Input
            type="submit"
            className="input-submit"
            valueCopyKey={copyKeys.ContactFormSubmit}
            disabled={disableSubmit}
          />
        </form>
      )}
    </div>
  );
};

export default EmailForm;
