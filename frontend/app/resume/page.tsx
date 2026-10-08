"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Download, FileText, Printer } from "lucide-react";
import styles from "../page.module.css";

type ResumeDocument = {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  summary: string;
  experience: {
    role: string;
    company: string;
    dates: string;
    description: string;
  }[];
  education: { degree: string; school: string; dates: string }[];
  skills: string;
  accent: string;
  template: string;
  fontSize: number;
};

export default function FinishedResumePage() {
  const [resume, setResume] = useState<ResumeDocument | null>(null);
  const [notFound, setNotFound] = useState(false);
  const autoPrint = useRef(false);
  const hasPrinted = useRef(false);

  useEffect(() => {
    autoPrint.current =
      new URLSearchParams(window.location.search).get("print") === "1";
    const raw = localStorage.getItem("folio-resume");
    if (!raw) {
      setNotFound(true);
      return;
    }
    try {
      const data = JSON.parse(raw);
      setResume({
        name: data.name || "Your Name",
        role: data.role || "Professional Title",
        email: data.email || "",
        phone: data.phone || "",
        location: data.location || "",
        website: data.website || "",
        summary: data.summary || "",
        experience: Array.isArray(data.experience) ? data.experience : [],
        education: Array.isArray(data.education) ? data.education : [],
        skills: data.skills || "",
        accent: data.accent || "#6044c8",
        template: data.template || "signature-01",
        fontSize: Number(data.fontSize) || 12,
      });
    } catch {
      setNotFound(true);
    }
  }, []);

  useEffect(() => {
    if (!resume || !autoPrint.current || hasPrinted.current) return;
    hasPrinted.current = true;
    const timer = window.setTimeout(() => window.print(), 650);
    return () => window.clearTimeout(timer);
  }, [resume]);

  if (!resume) {
    return (
      <main className={styles.finishedScreen}>
        <div className={styles.finishedToolbar}>
          <a className={styles.finishedBrand} href="/">
            <span className={styles.brandMark}>
              <FileText size={18} />
            </span>
            folio<span className={styles.brandDot}>.</span>
          </a>
        </div>
        <section className={styles.finishedEmpty}>
          <h1>
            {notFound ? "No finished resume yet" : "Preparing your resume…"}
          </h1>
          <p>
            Build and save your resume first, then come back to see the
            print-ready copy.
          </p>
          <a className={styles.finishedAction} href="/">
            {" "}
            <ArrowLeft size={16} /> Back to the builder
          </a>
        </section>
      </main>
    );
  }

  return (
    <main
      className={styles.finishedScreen}
      data-app-root
      style={{ "--accent": resume.accent } as React.CSSProperties}
    >
      <header className={styles.finishedToolbar} data-print-hide>
        <a
          className={styles.finishedBrand}
          href="/"
          aria-label="Back to folio resume builder"
        >
          <span className={styles.brandMark}>
            <FileText size={18} />
          </span>
          folio<span className={styles.brandDot}>.</span>
        </a>
        <div className={styles.finishedActions}>
          <a className={styles.finishedAction} href="/">
            <ArrowLeft size={15} /> Edit resume
          </a>
          <button
            className={styles.finishedPrint}
            onClick={() => window.print()}
          >
            <Printer size={16} /> Print / Save PDF <Download size={15} />
          </button>
        </div>
      </header>
      <div className={styles.finishedCanvas} data-app-layout>
        <section className={styles.finishedPreview} data-app-preview>
          <div className={styles.finishedHint} data-print-hide>
            <strong>Your finished resume</strong>
            <span>Print preview · The PDF contains only this page</span>
          </div>
          <div className={styles.paperWrap} data-paper-wrap>
            <article
              className={`${styles.paper} ${styles.resumePaper}`}
              data-design={resume.template}
              data-print-paper
              style={{ fontSize: `${resume.fontSize}px` }}
            >
              <header className={styles.paperHeader}>
                <div className={styles.paperAccent} />
                <div className={styles.paperName}>{resume.name}</div>
                <div className={styles.paperRole}>{resume.role}</div>
                <div className={styles.paperContact}>
                  {[resume.email, resume.phone, resume.location, resume.website]
                    .filter(Boolean)
                    .join("  ·  ")}
                </div>
              </header>
              {resume.summary && (
                <section className={styles.paperSection}>
                  <h3>PROFILE</h3>
                  <p>{resume.summary}</p>
                </section>
              )}
              {resume.experience.length > 0 && (
                <section className={styles.paperSection}>
                  <h3>EXPERIENCE</h3>
                  {resume.experience.map((item, index) => (
                    <div
                      className={styles.paperEntry}
                      key={`${item.company}-${index}`}
                    >
                      <div className={styles.paperEntryTitle}>
                        {item.role}
                        <span>{item.dates}</span>
                      </div>
                      <div className={styles.paperCompany}>{item.company}</div>
                      <ul>
                        {item.description
                          .split("\n")
                          .filter(Boolean)
                          .map((line, lineIndex) => (
                            <li key={lineIndex}>{line}</li>
                          ))}
                      </ul>
                    </div>
                  ))}
                </section>
              )}
              {resume.education.length > 0 && (
                <section className={styles.paperSection}>
                  <h3>EDUCATION</h3>
                  {resume.education.map((item, index) => (
                    <div
                      className={styles.paperEntry}
                      key={`${item.school}-${index}`}
                    >
                      <div className={styles.paperEntryTitle}>
                        {item.degree}
                        <span>{item.dates}</span>
                      </div>
                      <div className={styles.paperCompany}>{item.school}</div>
                    </div>
                  ))}
                </section>
              )}
              {resume.skills && (
                <section className={styles.paperSection}>
                  <h3>CORE SKILLS</h3>
                  <p>
                    {resume.skills
                      .split(/[·,]/)
                      .map((skill) => skill.trim())
                      .filter(Boolean)
                      .join("  ·  ")}
                  </p>
                </section>
              )}
              <div className={styles.paperFoot}>
                {resume.name}
                <span>·</span>
                {resume.role}
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
