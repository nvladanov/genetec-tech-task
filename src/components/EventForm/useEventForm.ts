import { useState, useCallback, type FormEvent } from 'react';

export interface EventFormValues {
    title: string;
    date: string;
    description: string;
}

export interface EventFormErrors {
    title?: string;
    date?: string;
}

export enum SubmitStatus {
    IDLE = 'idle',
    SUBMITTING = 'submitting',
    SUCCESS = 'success',
    ERROR = 'error',
}

interface UseEventFormProps {
    initialValues?: EventFormValues;
    onSubmit: (values: EventFormValues) => Promise<void>;
}

export const useEventForm = ({ initialValues, onSubmit }: UseEventFormProps) => {
    const [values, setValues] = useState<EventFormValues>(
        initialValues || {
            title: '',
            date: '',
            description: '',
        }
    );
    const [errors, setErrors] = useState<EventFormErrors>({});
    const [status, setStatus] = useState<SubmitStatus>(SubmitStatus.IDLE);

    const validate = useCallback((values: EventFormValues): EventFormErrors => {
        const newErrors: EventFormErrors = {};

        if (!values.title.trim()) {
            newErrors.title = 'Title is required';
        }

        if (!values.date) {
            newErrors.date = 'Date is required';
        } else {
            const date = new Date(values.date);
            if (isNaN(date.getTime())) {
                newErrors.date = 'Invalid date format';
            }
        }

        return newErrors;
    }, []);

    const handleChange = useCallback((field: keyof EventFormValues, value: string) => {
        setValues((prev) => ({ ...prev, [field]: value }));

        setErrors((prev) => {
            const newErrors = Object.fromEntries(
                Object.entries(prev).filter(([key]) => key !== field)
            );
            return newErrors as EventFormErrors;
        });
    }, []);

    const handleSubmit = useCallback(
        (e: FormEvent) => {
            e.preventDefault();
            const validationErrors = validate(values);

            if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
                return;
            }

            setStatus(SubmitStatus.SUBMITTING);

            Promise.resolve(onSubmit(values))
                .then(() => {
                    setStatus(SubmitStatus.SUCCESS);
                })
                .catch((_err) => {
                    setStatus(SubmitStatus.ERROR);
                });
        },
        [onSubmit, validate, values]
    );

    const reset = useCallback(() => {
        setValues(
            initialValues || {
                title: '',
                date: '',
                description: '',
            }
        );
        setErrors({});
        setStatus(SubmitStatus.IDLE);
    }, [initialValues]);

    return {
        values,
        errors,
        status,
        handleChange,
        handleSubmit,
        reset,
    };
};
