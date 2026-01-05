"use client";

import { Fragment, useEffect, useMemo, useState, useRef } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

function cn(...c) {
  return c.filter(Boolean).join(" ");
}

export function LuxurySelect({ label, icon: Icon, value, onChange, options }) {
  const isScrollable = options.length > 8;
  return (
    <div className="w-full">
      <div className="mb-2 flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5">
          <Icon className="h-5 w-5 text-white/80 transition-transform duration-200 group-focus-within:scale-110 group-hover:scale-110" />
        </div>
        <div className="text-xs tracking-[0.28em] uppercase text-white/55">
          {label}
        </div>
      </div>

      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          <Listbox.Button className="group relative w-full rounded-3xl border border-white/10 bg-black/35 px-5 py-4 text-left text-white shadow-glow transition hover:border-brand-gold/25 focus:outline-none focus:ring-2 focus:ring-brand-gold/30">
            <span className="block text-base">{value}</span>
            <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-white/60 transition group-hover:text-white">
              ▾
            </span>
          </Listbox.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-150"
            enterFrom="opacity-0 translate-y-1 scale-[0.98]"
            enterTo="opacity-100 translate-y-0 scale-100"
            leave="transition ease-in duration-120"
            leaveFrom="opacity-100 translate-y-0 scale-100"
            leaveTo="opacity-0 translate-y-1 scale-[0.98]"
          >
            <Listbox.Options
              modal={false}
              className={[
                "absolute z-50 mt-2 w-full rounded-3xl border border-white/10 bg-[#0b0b0b]/95 p-2",
                "shadow-[0_18px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl focus:outline-none",
                isScrollable ? "max-h-72 overflow-y-auto" : "overflow-visible",
              ].join(" ")}
              style={{ overscrollBehavior: "auto" }}
            >
              {options.map((opt) => (
                <Listbox.Option key={opt} value={opt}>
                  {({ active, selected }) => (
                    <div
                      className={cn(
                        "cursor-pointer rounded-2xl px-4 py-3 text-sm transition",
                        active
                          ? "bg-white/5 border border-brand-gold/25"
                          : "border border-transparent",
                        selected ? "text-white" : "text-white/80"
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <span>{opt}</span>
                        {selected ? (
                          <span className="text-brand-gold">✓</span>
                        ) : null}
                      </div>
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export function LuxuryDatePicker({ label, icon: Icon, value, onChange }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        open &&
        containerRef.current &&
        !containerRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const display = useMemo(() => {
    if (!value) return "Select a date";
    try {
      return format(value, "dd MMM yyyy");
    } catch {
      return "Select a date";
    }
  }, [value]);

  return (
    <div ref={containerRef} className="w-full">
      <div className="mb-2 flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-black/35">
          <Icon className="h-5 w-5 text-white/80" />
        </div>
        <div className="text-xs tracking-[0.28em] uppercase text-white/55">
          {label}
        </div>
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={() => mounted && setOpen((v) => !v)}
          className="group relative w-full rounded-3xl border border-white/10 bg-black/35 px-5 py-4 text-left text-white shadow-glow transition hover:border-brand-gold/25 focus:outline-none focus:ring-2 focus:ring-brand-gold/30"
        >
          <span className={cn("block", value ? "text-white" : "text-white/55")}>
            {display}
          </span>

          <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-white/60 transition group-hover:text-white">
            📅
          </span>
        </button>

        {mounted && (
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-150"
            enterFrom="opacity-0 translate-y-1 scale-[0.98]"
            enterTo="opacity-100 translate-y-0 scale-100"
            leave="transition ease-in duration-120"
            leaveFrom="opacity-100 translate-y-0 scale-100"
            leaveTo="opacity-0 translate-y-1 scale-[0.98]"
          >
            <div className="absolute right-0 z-50 mt-2 w-[340px] max-w-[90vw] overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b]/95 p-3 shadow-[0_18px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl">
              <div className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full bg-brand-gold/10 blur-3xl" />

              <div className="relative">
                <DayPicker
                  mode="single"
                  selected={value}
                  onSelect={(d) => {
                    onChange(d || null);
                    setOpen(false);
                  }}
                  fromDate={new Date()}
                  className="lux-daypicker"
                />

                <div className="mt-2 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onChange(null)}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/75 hover:text-white hover:border-white/20 transition"
                  >
                    Clear
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      onChange(new Date());
                      setOpen(false);
                    }}
                    className="rounded-full border border-brand-gold/40 bg-black/30 px-4 py-2 text-xs text-white hover:border-brand-gold hover:shadow-glow transition"
                  >
                    Today
                  </button>
                </div>
              </div>
            </div>
          </Transition>
        )}
      </div>
    </div>
  );
}
