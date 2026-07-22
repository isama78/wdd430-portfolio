// app/projects/create/create-project-form.tsx
'use client';

import { useActionState } from 'react';
import { createProject, type State } from '@/lib/actions';

const initialState: State = { message: null, errors: {} };

export default function CreateProjectForm() {
  const [state, formAction, isPending] = useActionState(createProject, initialState);

  return (
    <form action={formAction} className="p-6 rounded-lg space-y-4 border border-slate-200 shadow-sm text-white">
      <div>
        <label htmlFor="title" className="mb-2 block text-sm font-medium">
          Project Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
          aria-describedby="title-error"
          required
        />
        <div id="title-error" aria-live="polite" aria-atomic="true">
          {state.errors?.title?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="description" className="mb-2 block text-sm font-medium">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
          aria-describedby="description-error"
          required
        />
        <div id="description-error" aria-live="polite" aria-atomic="true">
          {state.errors?.description?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="technologies" className="mb-2 block text-sm font-medium">
          Technologies (comma-separated)
        </label>
        <input
          id="technologies"
          name="technologies"
          type="text"
          className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
          aria-describedby="technologies-error"
          required
        />
        <div id="technologies-error" aria-live="polite" aria-atomic="true">
          {state.errors?.technologies?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="year_completed" className="mb-2 block text-sm font-medium">
          Year Completed
        </label>
        <input
          id="year_completed"
          name="year_completed"
          type="number"
          min="2000"
          max="2099"
          className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
          aria-describedby="year_completed-error"
        />
        <div id="year_completed-error" aria-live="polite" aria-atomic="true">
          {state.errors?.year_completed?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="link" className="mb-2 block text-sm font-medium">
          Link
        </label>
        <input
          id="link"
          name="link"
          type="url"
          className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
          aria-describedby="link-error"
        />
        <div id="link-error" aria-live="polite" aria-atomic="true">
          {state.errors?.link?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      {state.message ? <p className="text-sm text-red-600">{state.message}</p> : null}

      <button
        type="submit"
        disabled={isPending}
        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? 'Saving...' : 'Save Project'}
      </button>
    </form>
  );
}