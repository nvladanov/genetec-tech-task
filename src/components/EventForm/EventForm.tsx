import { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useEventForm, type EventFormValues, SubmitStatus } from './useEventForm';
import {
    Button,
    ButtonGroup,
    ErrorMessage,
    FormContainer,
    FormDescription,
    FormErrorSummary,
    FormGroup,
    FormHeader,
    FormTitle,
    Input,
    Label,
    SuccessMessage,
    TextArea,
} from './styles';
import { CheckCircle, AlertCircle } from 'lucide-react';

interface EventFormProps {
    initialValues?: EventFormValues;
    onSubmit: (values: EventFormValues) => Promise<void>;
    onCancel: () => void;
}

export const EventForm = ({ initialValues, onSubmit, onCancel }: EventFormProps) => {
    const { t } = useTranslation();
    const { values, errors, status, handleChange, handleSubmit, reset } = useEventForm({
        initialValues,
        onSubmit,
    });

    const titleRef = useRef<HTMLInputElement>(null);
    const dateRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (status === SubmitStatus.SUBMITTING) return;

        if (Object.keys(errors).length > 0) {
            if (errors.title && titleRef.current) {
                titleRef.current.focus();
            } else if (errors.date && dateRef.current) {
                dateRef.current.focus();
            }
        }
    }, [errors, status]);

    return (
        <FormContainer onSubmit={handleSubmit} noValidate aria-labelledby="form-title">
            <FormHeader>
                <FormTitle id="form-title">
                    {initialValues ? t('eventForm.title.edit') : t('eventForm.title.add')}
                </FormTitle>
                <FormDescription>
                    {t('eventForm.title.description', {
                        action: initialValues
                            ? t('eventForm.title.description_edit')
                            : t('eventForm.title.description_add'),
                    })}
                </FormDescription>
            </FormHeader>

            {status === SubmitStatus.SUCCESS && (
                <SuccessMessage role="alert">
                    <CheckCircle size={20} />
                    <span>{t('eventForm.feedback.success')}</span>
                </SuccessMessage>
            )}

            {status === SubmitStatus.ERROR && (
                <FormErrorSummary role="alert">
                    <AlertCircle size={20} />
                    <span>{t('eventForm.feedback.error')}</span>
                </FormErrorSummary>
            )}

            <FormGroup>
                <Label htmlFor="title">{t('eventForm.labels.title')} *</Label>
                <Input
                    ref={titleRef}
                    id="title"
                    name="title"
                    type="text"
                    value={values.title}
                    onChange={(e) => handleChange('title', e.target.value)}
                    placeholder={t('eventForm.placeholders.title')}
                    $hasError={!!errors.title}
                    aria-invalid={!!errors.title}
                    aria-describedby={errors.title ? 'title-error' : undefined}
                    disabled={status === SubmitStatus.SUBMITTING}
                />
                {errors.title && (
                    <ErrorMessage id="title-error" role="alert">
                        {errors.title}
                    </ErrorMessage>
                )}
            </FormGroup>

            <FormGroup>
                <Label htmlFor="date">{t('eventForm.labels.date')} *</Label>
                <Input
                    ref={dateRef}
                    id="date"
                    name="date"
                    type="datetime-local"
                    value={values.date}
                    onChange={(e) => handleChange('date', e.target.value)}
                    $hasError={!!errors.date}
                    aria-invalid={!!errors.date}
                    aria-describedby={errors.date ? 'date-error' : undefined}
                    disabled={status === SubmitStatus.SUBMITTING}
                />
                {errors.date && (
                    <ErrorMessage id="date-error" role="alert">
                        {errors.date}
                    </ErrorMessage>
                )}
            </FormGroup>

            <FormGroup>
                <Label htmlFor="description">{t('eventForm.labels.description')}</Label>
                <TextArea
                    ref={descriptionRef}
                    id="description"
                    name="description"
                    value={values.description}
                    onChange={(e) => handleChange('description', e.target.value)}
                    placeholder={t('eventForm.placeholders.description')}
                    disabled={status === SubmitStatus.SUBMITTING}
                />
            </FormGroup>

            <ButtonGroup>
                <Button
                    type="button"
                    $variant="secondary"
                    onClick={() => {
                        reset();
                        onCancel();
                    }}
                    disabled={status === SubmitStatus.SUBMITTING}
                >
                    {t('eventForm.buttons.cancel')}
                </Button>
                <Button
                    type="submit"
                    $variant="primary"
                    disabled={status === SubmitStatus.SUBMITTING}
                >
                    {status === SubmitStatus.SUBMITTING
                        ? t('eventForm.buttons.saving')
                        : t('eventForm.buttons.save')}
                </Button>
            </ButtonGroup>
        </FormContainer>
    );
};
