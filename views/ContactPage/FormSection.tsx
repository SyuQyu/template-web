import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Button from 'components/Button';
import Input from 'components/Input';
import { useLanguage } from 'contexts/language.context';
import { media } from 'utils/media';
import MailSentState from '../../components/MailSentState';

interface EmailPayload {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

export default function FormSection() {
  const { t } = useLanguage();
  const [hasSuccessfullySentMail, setHasSuccessfullySentMail] = useState(false);
  const [hasErrored, setHasErrored] = useState(false);
  const { register, handleSubmit, formState } = useForm();
  const { isSubmitSuccessful, isSubmitting, isSubmitted, errors } = formState;

  async function onSubmit(payload: EmailPayload) {
    try {
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          subject: `Equipment Rental Inquiry from ${payload.name} - ${payload.company}`, 
          ...payload 
        }),
      });

      if (res.status !== 204) {
        setHasErrored(true);
      }
    } catch {
      setHasErrored(true);
      return;
    }

    setHasSuccessfullySentMail(true);
  }

  const isSent = isSubmitSuccessful && isSubmitted;
  const isDisabled = isSubmitting || isSent;
  const isSubmitDisabled = Object.keys(errors).length > 0 || isDisabled;

  if (hasSuccessfullySentMail) {
    return <MailSentState />;
  }

  return (
    <Wrapper>
      <FormTitle>{t('contact.form.title')}</FormTitle>
      <FormSubtitle>{t('contact.form.subtitle')}</FormSubtitle>
      
      <Form onSubmit={handleSubmit(onSubmit)}>
        {hasErrored && <ErrorMessage>Couldn&apos;t send email. Please try again.</ErrorMessage>}
        
        {/* Personal Information */}
        <InputGroup>
          <InputStack>
            {errors.name && <ErrorMessage>{t('contact.form.name')} is required</ErrorMessage>}
            <Input 
              placeholder={t('contact.form.name')} 
              id="name" 
              disabled={isDisabled} 
              {...register('name', { required: true })} 
            />
          </InputStack>
          <InputStack>
            {errors.company && <ErrorMessage>{t('contact.form.company')} is required</ErrorMessage>}
            <Input 
              placeholder={t('contact.form.company')} 
              id="company" 
              disabled={isDisabled} 
              {...register('company', { required: true })} 
            />
          </InputStack>
        </InputGroup>
        
        <InputGroup>
          <InputStack>
            {errors.email && <ErrorMessage>{t('contact.form.email')} is required</ErrorMessage>}
            <Input 
              placeholder={t('contact.form.email')} 
              id="email" 
              type="email"
              disabled={isDisabled} 
              {...register('email', { required: true })} 
            />
          </InputStack>
          <InputStack>
            {errors.phone && <ErrorMessage>{t('contact.form.phone')} is required</ErrorMessage>}
            <Input 
              placeholder={t('contact.form.phone')} 
              id="phone" 
              type="tel"
              disabled={isDisabled} 
              {...register('phone', { required: true })} 
            />
          </InputStack>
        </InputGroup>

        <InputStack>
          {errors.message && <ErrorMessage>{t('contact.form.message')} is required</ErrorMessage>}
          <Textarea
            as="textarea"
            placeholder={t('contact.form.message')}
            id="message"
            disabled={isDisabled}
            rows={5}
            {...register('message', { required: true })}
          />
        </InputStack>

        <Button as="button" type="submit" disabled={isSubmitDisabled}>
          {isSubmitting ? 'Sending...' : t('contact.form.submit')}
        </Button>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 2;
`;

const FormTitle = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: rgba(var(--text), 1);
  font-weight: bold;
  
  ${media('<=tablet')} {
    font-size: 2rem;
  }
`;

const FormSubtitle = styled.p`
  font-size: 1.6rem;
  color: rgba(var(--text), 0.7);
  margin-bottom: 3rem;
  line-height: 1.5;
`;

const Form = styled.form`
  & > * {
    margin-bottom: 2rem;
  }
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;

  & > *:first-child {
    margin-right: 2rem;
  }

  & > * {
    flex: 1;
  }

  ${media('<=tablet')} {
    flex-direction: column;
    & > *:first-child {
      margin-right: 0rem;
      margin-bottom: 2rem;
    }
  }
`;

const InputStack = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:first-child) {
    margin-top: 0.5rem;
  }
`;

const ErrorMessage = styled.p`
  color: rgb(var(--errorColor));
  font-size: 1.5rem;
`;

const Textarea = styled(Input)`
  width: 100%;
  min-height: 20rem;
  resize: vertical;
`;
