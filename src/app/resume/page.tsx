export default function Resume() {
  return (
    <main className="py-10" style={{ minHeight: "calc(100dvh - 64px)" }}>
      <section className="max-w-4xl mx-auto px-4">
        {/* Title */}
        <h2
          className="text-2xl mb-4"
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 700,
            color: "var(--hh-text)",
          }}
        >
          Resume
        </h2>

        {/* Buttons */}
        <div className="mt-4 flex gap-3">
          <a
            href="/resume.pdf"
            className="btn-accent"
            style={{
              backgroundColor: "var(--hh-accent)",
              color: "#fff",
            }}
          >
            Download PDF
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="btn-outline"
            style={{
              borderColor: "var(--hh-border)",
              color: "var(--hh-text)",
            }}
          >
            Open in new tab
          </a>
        </div>

        {/* PDF Preview */}
        <object
          data="/resume.pdf"
          type="application/pdf"
          className="mt-6 w-full h-[80vh] hidden md:block"
          style={{
            border: "1px solid var(--hh-border)",
            backgroundColor: "#fffffe",
          }}
        >
          <p style={{ color: "var(--hh-text)" }}>
            PDF preview not supported.{" "}
            <a
              className="underline"
              href="/resume.pdf"
              style={{ color: "#3da9fc" }}
            >
              Download
            </a>
          </p>
        </object>
      </section>
    </main>
  );
}
