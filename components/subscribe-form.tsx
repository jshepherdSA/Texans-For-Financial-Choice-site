'use client';

import { useId, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type Field = 'name' | 'email' | 'zip' | 'phone';

const initial: Record<Field, string> = {
  name: '',
  email: '',
  zip: '',
  phone: '',
};

/**
 * Newsletter signup. Fields match the legacy Everest Forms form exactly:
 * Name, Email, Zip Code, Phone — all required.
 *
 * NOTE FOR HANDOFF: submission is not wired to a backend. There is no endpoint
 * yet — the client's legacy form was an Everest Forms (WordPress) plugin, which
 * does not exist in this stack. `onSubmit` below is where the POST to their ESP
 * or CRM goes. Validation and accessible error handling are complete.
 */
export function SubscribeForm() {
  const id = useId();
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const fields: {
    name: Field;
    label: string;
    type: string;
    autoComplete: string;
  }[] = [
    { name: 'name', label: 'Name', type: 'text', autoComplete: 'name' },
    { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
    {
      name: 'zip',
      label: 'Zip Code',
      type: 'text',
      autoComplete: 'postal-code',
    },
    { name: 'phone', label: 'Phone', type: 'tel', autoComplete: 'tel' },
  ];

  function validate() {
    const next: Partial<Record<Field, string>> = {};
    if (!values.name.trim()) next.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = 'Please enter a valid email address.';
    if (!/^\d{5}(-\d{4})?$/.test(values.zip.trim()))
      next.zip = 'Please enter a 5-digit ZIP code.';
    if (values.phone.replace(/\D/g, '').length < 10)
      next.phone = 'Please enter a 10-digit phone number.';
    return next;
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      const first = document.getElementById(`${id}-${Object.keys(next)[0]}`);
      first?.focus();
      return;
    }
    // TODO(handoff): POST `values` to the client's email service / CRM here.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-lg border border-verify-200 bg-verify-50 p-6"
      >
        <p className="font-heading text-lg font-semibold text-positive">
          Thanks — you&apos;re on the list.
        </p>
        <p className="mt-2 text-sm text-foreground">
          We&apos;ll send the latest news and updates straight to your inbox.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      {fields.map((field) => {
        const fieldId = `${id}-${field.name}`;
        const errorId = `${fieldId}-error`;
        const error = errors[field.name];
        return (
          <div key={field.name} className="grid gap-2">
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
              <p id={errorId} className="text-sm text-destructive">
                {error}
              </p>
            ) : null}
          </div>
        );
      })}
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Submit
        </Button>
      </div>
    </form>
  );
}
