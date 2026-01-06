"use client";

import { useEffect, useMemo, useState } from "react";
import {
    User,
    Phone,
    Mail,
    MapPin,
    Home,
    MessageSquare,
    CalendarClock,
    Sparkles,
    CalendarIcon,
    CalendarDays
} from "lucide-react";
import { LuxuryDatePicker, LuxurySelect } from "@/components/FormControls";
import emailjs from "@emailjs/browser";

function Field({ label, icon: Icon, children }) {
    return (
        <label className="block">
            <div className="mb-2 flex items-center gap-2 text-xs tracking-[0.22em] uppercase text-white/55">
                <span className="grid h-7 w-7 place-items-center rounded-xl border border-white/10 bg-black/35">
                    <Icon className="h-4 w-4 text-brand-gold" />
                </span>
                <span>{label}</span>
            </div>
            {children}
        </label>
    );
}

export default function ContactForm() {
    const [status, setStatus] = useState("idle"); // idle | submitting | success
    const [spaceType, setSpaceType] = useState("Living Room");
    const [preferredDate, setPreferredDate] = useState(null);
    const [details, setDetails] = useState("");

    const inputBase =
        "w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/85 placeholder:text-white/35 outline-none transition focus:border-brand-gold/45 focus:ring-1 focus:ring-brand-gold/25";

    const selectBase =
        "w-full appearance-none rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/85 outline-none transition focus:border-brand-gold/45 focus:ring-1 focus:ring-brand-gold/25";

    const [today, setToday] = useState("");

    useEffect(() => {
        const d = new Date();
        const pad = (n) => String(n).padStart(2, "0");
        setToday(`${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`);
    }, []);

    async function onSubmit(e) {
        e.preventDefault();
        const formEl = e.currentTarget;
        setStatus("submitting");

        const form = new FormData(e.currentTarget);

        // Honeypot
        const hp = (form.get("company_website") || "").toString().trim();
        if (hp) {
            setStatus("success");
            return;
        }

        const params = {
            name: form.get("name"),
            phone: form.get("phone"),
            email: form.get("email"),
            city: form.get("city"),
            space_type: spaceType,
            preferred_date: preferredDate ? preferredDate.toDateString() : "Not selected",
            project_details: form.get("message") || "—",
        };

        try {
            // 1) Send to Exquisite (admin)
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                params,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );

            // 2) Send confirmation to customer
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_CONFIRM_TEMPLATE_ID,
                params,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );

            setStatus("success");
            formEl.reset();
            setSpaceType("Living Room");
            setPreferredDate(null);
        } catch (err) {
            console.error(err);
            setStatus("idle");
            alert("Something went wrong. Please try again or call us directly.");
        }
    }


    if (status === "success") {
        return (
            <div className="rounded-3xl border border-brand-gold/25 bg-black/30 p-6 md:p-7 shadow-glow">
                <div className="flex items-start gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl border border-brand-gold/25 bg-black/40">
                        <Sparkles className="h-5 w-5 text-brand-gold" />
                    </div>
                    <div>
                        <div className="font-serif text-2xl text-white">
                            Request received
                        </div>
                        <p className="mt-2 text-sm text-white/75 leading-relaxed">
                            Thanks — we’ll reach out within 24 hours to schedule your discovery
                            call. If it’s urgent, call us directly.
                        </p>

                        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                            <a
                                href="tel:+919885668317"
                                className="inline-flex items-center justify-center rounded-full border border-brand-gold/55 bg-black/35 px-6 py-3 text-sm text-white hover:border-brand-gold hover:shadow-glow transition"
                            >
                                Call: +91 988 5668 317
                            </a>

                            <button
                                onClick={() => setStatus("idle")}
                                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white/85 hover:text-white hover:border-white/25 transition"
                            >
                                Send another request
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={onSubmit} className="grid gap-5">
            <div className="grid gap-5 md:grid-cols-2">
                <Field label="Full Name" icon={User}>
                    <input
                        className={inputBase}
                        name="name"
                        placeholder="Your name"
                        required
                    />
                </Field>

                <Field label="Phone" icon={Phone}>
                    <input
                        className={inputBase}
                        name="phone"
                        placeholder="+91 9XXXXXXXXX"
                        required
                    />
                </Field>

                <Field label="Email" icon={Mail}>
                    <input
                        className={inputBase}
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                    />
                </Field>

                <Field label="City" icon={MapPin}>
                    <input
                        className={inputBase}
                        name="city"
                        placeholder="Hyderabad, Bengaluru, etc."
                        required
                    />
                </Field>

                <LuxurySelect
                    label="Space Type"
                    icon={Home}
                    value={spaceType}
                    onChange={setSpaceType}
                    options={["Living Room", "Bedroom", "Kitchen", "Wardrobe", "Bathroom", "Full Home"]}
                />

                <LuxuryDatePicker
                    label="Preferred Date"
                    icon={CalendarDays}
                    value={preferredDate}
                    onChange={setPreferredDate}
                />
            </div>

            <Field label="Project Details" icon={MessageSquare}>
                <textarea
                    className={[inputBase, "min-h-[120px] resize-none"].join(" ")}
                    name="message"
                    placeholder="Share your goals, size of space, budget range (optional), and timeline."
                />
            </Field>

            <input
                type="text"
                name="company_website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
            />

            {/* Elegant bottom bar */}
            <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-black/25 p-4 sm:flex-row sm:items-center">
                <div className="text-xs text-white/55">
                    By submitting, you agree to be contacted via phone/email for this
                    request.
                </div>

                <button
                    type="submit"
                    disabled={status === "submitting"}
                    className={[
                        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm transition",
                        "border border-brand-gold/55 bg-black/35 text-white hover:border-brand-gold hover:shadow-glow",
                        status === "submitting" ? "opacity-70 cursor-not-allowed" : "",
                    ].join(" ")}
                >
                    {status === "submitting" ? "Submitting..." : "Request Consultation"}
                </button>
            </div>
        </form>
    );
}
