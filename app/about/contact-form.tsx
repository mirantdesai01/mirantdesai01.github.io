"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mpqgabab");

  const inputClasses =
    "mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-base text-white outline-none transition placeholder:text-slate-400 focus:border-[#d3bd87] focus:ring-2 focus:ring-[#d3bd87]/25";

  if (state.succeeded) {
    return (
      <div
        className="mt-10 rounded-2xl border border-emerald-300/30 bg-emerald-300/10 px-5 py-6 text-emerald-100"
        role="status"
      >
        <p className="font-semibold">Thank you. Your message has been sent.</p>
        <p className="mt-1 text-sm text-emerald-100/80">
          I will respond as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 border-t border-white/15 pt-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-200">
          Name
          <input
            className={inputClasses}
            type="text"
            name="name"
            autoComplete="name"
            maxLength={120}
            required
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
            className="mt-2 block text-sm text-rose-200"
          />
        </label>
        <label className="text-sm font-medium text-slate-200">
          Email
          <input
            className={inputClasses}
            type="email"
            name="email"
            autoComplete="email"
            maxLength={254}
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="mt-2 block text-sm text-rose-200"
          />
        </label>
      </div>
      <label className="mt-5 block text-sm font-medium text-slate-200">
        Company <span className="font-normal text-slate-400">(optional)</span>
        <input
          className={inputClasses}
          type="text"
          name="company"
          autoComplete="organization"
          maxLength={160}
        />
        <ValidationError
          prefix="Company"
          field="company"
          errors={state.errors}
          className="mt-2 block text-sm text-rose-200"
        />
      </label>
      <label className="mt-5 block text-sm font-medium text-slate-200">
        How can I help?
        <textarea
          className={`${inputClasses} min-h-36 resize-y`}
          name="message"
          minLength={10}
          maxLength={5000}
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="mt-2 block text-sm text-rose-200"
        />
      </label>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={state.submitting}
          className="rounded-full bg-[#d3bd87] px-6 py-3.5 text-sm font-semibold text-[#10202a] transition hover:bg-[#e0cfaa] disabled:cursor-wait disabled:opacity-70"
        >
          {state.submitting ? "Sending…" : "Send message"}
        </button>
        <ValidationError
          errors={state.errors}
          className="text-sm text-rose-200"
        />
      </div>
    </form>
  );
}
