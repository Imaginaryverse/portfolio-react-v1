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
import EmailStatus from './EmailStatus';

const EmailForm = () => {
  const copy = useCopy();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [question, setQuestion] = useState(undefined);
  const [answer, setAnswer] = useState('');
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [messagePending, setMessagePending] = useState(false);
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
      setMessagePending(true);

      const data = {
        name,
        email,
        subject,
        message,
      };
      sendMessage(data).then((res) => {
        setMessagePending(false);

        res?.status === 200 ? setMessageSent(true) : setMessageError(true);

        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        createQuestion();
        setAnswer('');
      });
    } else {
      setWrongAnswer(true);
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
      {wrongAnswer ? (
        <EmailStatus
          textCopy={copyKeys.ContactFormWrongAnswer}
          buttonCopy={copyKeys.ContactFormOK}
          onClick={() => setWrongAnswer(false)}
        />
      ) : messageSent ? (
        <EmailStatus
          textCopy={copyKeys.ContactFormSentMessage}
          buttonCopy={copyKeys.ContactFormOK}
          onClick={() => setMessageSent(false)}
        />
      ) : messageError ? (
        <EmailStatus
          textCopy={copyKeys.ContactFormError}
          buttonCopy={copyKeys.ContactFormOK}
          onClick={() => setMessageError(false)}
        />
      ) : messagePending ? (
        <EmailStatus textCopy={copyKeys.ContactFormPending} />
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
