'use client';

import { useId, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type Field = 'firstName' | 'lastName' | 'email' | 'phone' | 'zip';

const initial: Record<Field, string> = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  zip: '',
};

const fields: {
  name: Field;
  label: string;
  type: string;
  autoComplete: string;
  placeholder: string;
  half?: boolean;
}[] = [
  {
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    autoComplete: 'given-name',
    placeholder: 'Jane…',
    half: true,
  },
  {
    name: 'lastName',
    label: 'Last Name',
    type: 'text',
    autoComplete: 'family-name',
    placeholder: 'Doe…',
    half: true,
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    autoComplete: 'email',
    placeholder: 'jane@example.com…',
  },
  {
    name: 'phone',
    label: 'Phone',
    type: 'tel',
    autoComplete: 'tel',
    placeholder: '(512) 555-0134…',
    half: true,
  },
  {
    name: 'zip',
    label: 'Zip Code',
    type: 'text',
    autoComplete: 'postal-code',
    placeholder: '78701…',
    half: true,
  },
];

/**
 * Take Action lead capture. Fields match the legacy Everest Forms form:
 * First Name, Last Name, Email, Phone, Zip Code — all required.
 *
 * NOTE FOR HANDOFF: not wired to a backend. `onSubmit` is where the POST to
 * the client's advocacy platform / CRM goes. Validation, inline errors, and
 * focus-first-error are complete.
 */
export function ActionForm() {
  const id = useId();
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const next: Partial<Record<Field, string>> = {};
    if (!values.firstName.trim())
      next.firstName = 'Enter your first name so we know who to thank.';
    if (!values.lastName.trim()) next.lastName = 'Enter your last name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = 'Enter a valid email address, like jane@example.com.';
    if (values.phone.replace(/\D/g, '').length < 10)
      next.phone = 'Enter a 10-digit phone number, including area code.';
    if (!/^\d{5}(-\d{4})?$/.test(values.zip.trim()))
      next.zip =
        'Enter a 5-digit ZIP code so we can match you to your district.';
    return next;
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      document.getElementById(`${id}-${Object.keys(next)[0]}`)?.focus();
      return;
    }
    // TODO(handoff): POST `values` to the client's advocacy platform / CRM.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-lg border border-verify-200 bg-verify-50 p-8"
      >
        <p className="font-heading text-xl font-bold text-positive">
          Thank you — your voice has been counted.
        </p>
        <p className="mt-3 leading-relaxed text-foreground">
          We&apos;ll keep you posted on what happens next in Austin.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-describedby={`${id}-required-note`}
      className="grid gap-5 sm:grid-cols-2"
    >
      {fields.map((field) => {
        const fieldId = `${id}-${field.name}`;
        const errorId = `${fieldId}-error`;
        const error = errors[field.name];
        return (
          <div
            key={field.name}
            className={field.half ? 'grid gap-2' : 'grid gap-2 sm:col-span-2'}
          >
            <Label htmlFor={fieldId}>
              {field.label}{' '}
              <span aria-hidden="true" className="text-destructive">
                *
              </span>
              <span className="sr-only">(required)</span>
            </Label>
            <Input
              id={fieldId}
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              placeholder={field.placeholder}
              spellCheck={field.type === 'email' ? false : undefined}
              inputMode={
                field.name === 'zip'
                  ? 'numeric'
                  : field.type === 'tel'
                    ? 'tel'
                    : undefined
              }
              required
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? errorId : undefined}
              value={values[field.name]}
              onChange={(event) =>
                setValues((prev) => ({
                  ...prev,
                  [field.name]: event.target.value,
                }))
              }
              className="h-11 bg-background"
            />
            {error ? (
              <p
                id={errorId}
                aria-live="polite"
                className="text-sm text-destructive"
              >
                {error}
              </p>
            ) : null}
          </div>
        );
      })}
      <p
        id={`${id}-required-note`}
        className="text-sm text-muted-foreground sm:col-span-2"
      >
        All fields are required.
      </p>
      <div className="sm:col-span-2">
        <Button
          type="submit"
          size="lg"
          className="w-full tracking-wide sm:w-auto"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
