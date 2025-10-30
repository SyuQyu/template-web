import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Button from 'components/Button';
import Input from 'components/Input';
import { useLanguage } from 'contexts/language.context';
import { media } from 'utils/media';

interface EmailPayload {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

export default function FormSection() {
  const { t } = useLanguage();
  const { register, handleSubmit, formState } = useForm();
  const { isSubmitting, errors } = formState;


  function handleMailto(payload: EmailPayload) {
    const subject = encodeURIComponent(
      `Equipment Rental Inquiry from ${payload.name} - ${payload.company}`
    );

    const body = encodeURIComponent(payload.message);

    const mailtoLink = `mailto:info@mk-bersama.com?cc=darren@mk-bersama.com&subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  }

  const isSubmitDisabled = Object.keys(errors).length > 0 || isSubmitting;

  return (
    <Wrapper>
      <FormTitle>{t('contact.form.title')}</FormTitle>
      <FormSubtitle>{t('contact.form.subtitle')}</FormSubtitle>

      <Form onSubmit={handleSubmit(handleMailto)}>
        {/* Personal Information */}
        <InputGroup>
          <InputStack>
            {errors.name && <ErrorMessage>{t('contact.form.name')} is required</ErrorMessage>}
            <Input
              placeholder={t('contact.form.name')}
              id="name"
              disabled={isSubmitting}
              {...register('name', { required: true })}
            />
          </InputStack>
          <InputStack>
            {errors.company && <ErrorMessage>{t('contact.form.company')} is required</ErrorMessage>}
            <Input
              placeholder={t('contact.form.company')}
              id="company"
              disabled={isSubmitting}
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
              disabled={isSubmitting}
              {...register('email', { required: true })}
            />
          </InputStack>
          <InputStack>
            {errors.phone && <ErrorMessage>{t('contact.form.phone')} is required</ErrorMessage>}
            <Input
              placeholder={t('contact.form.phone')}
              id="phone"
              type="tel"
              disabled={isSubmitting}
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
            disabled={isSubmitting}
            rows={5}
            {...register('message', { required: true })}
          />
        </InputStack>

        <Button as="button" type="submit" disabled={isSubmitDisabled}>
          {isSubmitting ? 'Loading...' : t('contact.form.submit')}
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
