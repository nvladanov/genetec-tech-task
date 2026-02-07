import { useRef, useEffect } from 'react';
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
                    {initialValues ? 'Edit Event' : 'Add New Event'}
                </FormTitle>
                <FormDescription>
                    Fill in the details below to {initialValues ? 'update the' : 'create a new'} event.
                </FormDescription>
            </FormHeader>

            {status === SubmitStatus.SUCCESS && (
                <SuccessMessage role="alert">
                    <CheckCircle size={20} />
                    <span>Event saved successfully!</span>
                </SuccessMessage>
            )}

            {status === SubmitStatus.ERROR && (
                <FormErrorSummary role="alert">
                    <AlertCircle size={20} />
                    <span>Failed to save event. Please try again.</span>
                </FormErrorSummary>
            )}

            <FormGroup>
                <Label htmlFor="title">Title *</Label>
                <Input
                    ref={titleRef}
                    id="title"
                    name="title"
                    type="text"
                    value={values.title}
                    onChange={(e) => handleChange('title', e.target.value)}
                    placeholder="e.g. Client Meeting"
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
                <Label htmlFor="date">Date *</Label>
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
                <Label htmlFor="description">Description</Label>
                <TextArea
                    ref={descriptionRef}
                    id="description"
                    name="description"
                    value={values.description}
                    onChange={(e) => handleChange('description', e.target.value)}
                    placeholder="Enter event details..."
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
                    Cancel
                </Button>
                <Button
                    type="submit"
                    $variant="primary"
                    disabled={status === SubmitStatus.SUBMITTING}
                >
                    {status === SubmitStatus.SUBMITTING ? 'Saving...' : 'Save Event'}
                </Button>
            </ButtonGroup>
        </FormContainer>
    );
};
