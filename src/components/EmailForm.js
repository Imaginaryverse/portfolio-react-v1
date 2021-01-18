import React, { useState, useEffect } from 'react';
import copyKeys, { useCopy } from '../utils/CopyService';
import Input from './Input';
import '../styles/layouts/emailform.scss';
import Text from './Text';
import {
  createRandomNum,
  randomFromArray,
  performOperation,
} from '../utils/MathUtils';
import { sendMessage } from '../utils/clientAPI';

const EmailForm = () => {
  const copy = useCopy();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [question, setQuestion] = useState(undefined);
  const [answer, setAnswer] = useState('');
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [messageSent, setMessageSent] = useState(false);
  const [messageError, setMessageError] = useState(false);

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
      /* setMessageSent(true); */

      const data = {
        name,
        email,
        subject,
        message,
      };
      sendMessage(data).then((res) => {
        res?.status === 200 ? setMessageSent(true) : setMessageError(true);

        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        createQuestion();
        setAnswer('');
      });
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
            className="ok-btn clr-disabled-btn"
            onClick={() => setMessageSent(false)}
          >
            <Text copyKey={copyKeys.ContactFormOK} />
          </button>
        </div>
      ) : messageError ? (
        <div className="msg-sent-wrapper">
          <Text
            copyKey={copyKeys.ContactFormError}
            className="msg-sent-prompt"
          />
          <button
            className="ok-btn clr-disabled-btn"
            onClick={() => setMessageError(false)}
          >
            <Text copyKey={copyKeys.ContactFormOK} />
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
            type="text"
            name="field-subject"
            id="field-subject"
            className="input-text"
            placeholderCopyKey={copyKeys.ContactFormSubject}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
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
            className="input-submit clr-disabled-btn"
            valueCopyKey={copyKeys.ContactFormSubmit}
            disabled={disableSubmit}
          />
        </form>
      )}
    </div>
  );
};

export default EmailForm;
