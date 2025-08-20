// src/app/projects/page.tsx
import Link from "next/link";

function Card({
  title,
  subtitle,
  org,
  location,
  dates,
  roleType,
  children,
  links,
}: {
  title: string;
  subtitle?: string;
  org?: string;
  location?: string;
  dates?: string;
  roleType?: string;
  children: React.ReactNode;
  links?: { href: string; label: string }[];
}) {
  return (
    <article
      className="rounded-2xl p-5 shadow-sm border"
      style={{
    backgroundColor: "#fffffe",           // <-- updated background
    borderColor: "var(--hh-border)",
  }}
    >
      <div className="flex flex-col gap-1">
        <h3
          className="leading-tight"
          style={{ fontFamily: "var(--font-syne)", fontWeight: 700, color: "var(--hh-text)" }}
        >
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm" style={{ color: "var(--hh-muted)" }}>
            {subtitle}
          </p>
        )}
        {(org || location || dates || roleType) && (
          <p className="text-xs" style={{ color: "var(--hh-muted)" }}>
            {[org, location].filter(Boolean).join(" · ")}
            {dates ? (org || location ? " · " : "") + dates : ""}
            {roleType ? (org || location || dates ? " · " : "") + roleType : ""}
          </p>
        )}
      </div>

      <div className="mt-3 text-sm" style={{ color: "var(--hh-text)" }}>
        {children}
      </div>

      {links && links.length > 0 && (
        <div className="mt-3 flex gap-3 text-sm">
          {links.map((l) => (
              <a
                  key={l.href}
                  className="link-accent font-medium"
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
              >
                {l.label}
              </a>
          ))}
        </div>
      )}
    </article>
  );
}

export default function ProjectsPage() {
  return (
      <main className="py-10" style={{ minHeight: "calc(100dvh - 64px)" }}>
      <section className="max-w-6xl mx-auto px-4">
        {/* Work Experience */}
        <h2
          className="text-2xl mb-4"
          style={{ fontFamily: "var(--font-syne)", fontWeight: 700, color: "var(--hh-text)" }}
        >
          Work Experience
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          <Card
            title="Software Developer Intern"
            subtitle="CACI"
            org="CACI"
            location="Ashburn, VA, USA"
            dates="May 2025 – Present"
            roleType="Internship"
          >
            <ul className="list-disc ms-5 space-y-1">
              <li>
                Revamped legacy Angular forms by implementing 40+ dynamic fields and reusable
                components, reducing frontend tech debt.
              </li>
              <li>
                Built and tested RESTful APIs using Spring Boot, Postman, and Swagger; authored
                100+ JUnit tests to validate API functionality and improve backend reliability.
              </li>
              <li>
                Collaborated in Agile sprints on planning, backlog refinement, and feature demos for
                stakeholders.
              </li>
            </ul>
            <p className="mt-2 text-xs" style={{ color: "var(--hh-muted)" }}>
              Tools: PostgreSQL, Java, Spring Boot, Maven, Angular (JavaScript), JUnit, Swagger,
              Docker, Kubernetes, GitLab, Jira
            </p>
          </Card>

          <Card
            title="Software Engineering Teaching Assistant"
            subtitle="University of Virginia"
            org="University of Virginia"
            location="Charlottesville, VA, USA"
            dates="Aug 2024 – Present"
            roleType="Part-Time"
          >
            <ul className="list-disc ms-5 space-y-1">
              <li>
                Mentored two Agile teams (5 students each) through weekly sprint checks and office
                hours; debugging complex full-stack issues.
              </li>
              <li>
                Guided Django models, Google OAuth, PostgreSQL schema, AWS S3 integration; ensured
                milestones and Heroku deployments.
              </li>
            </ul>
            <p className="mt-2 text-xs" style={{ color: "var(--hh-muted)" }}>
              Tools: Django, PostgreSQL, AWS S3, Google OAuth, Heroku, Python, HTML, CSS
            </p>
          </Card>

          <Card
            title="ML Developer"
            subtitle="Business and AI Institute"
            org="Business and AI Institute"
            location="Charlottesville, VA, USA"
            dates="Jan 2025 – May 2025"
            roleType="Full-Time"
          >
            <ul className="list-disc ms-5 space-y-1">
              <li>
                Built a Slackbot (LangGraph + Together AI / Mistral) to auto-answer FAQs for 35,000+
                members.
              </li>
              <li>
                Stored context in PostgreSQL (EC2) + ChromaDB (Docker) for real-time vector search;
                developed a React admin tool for non-technical staff.
              </li>
              <li>
                Integrated Slack reaction feedback loop; pilot testing showed ~85% positive response
                satisfaction.
              </li>
            </ul>
            <p className="mt-2 text-xs" style={{ color: "var(--hh-muted)" }}>
              Tools: Python, LangGraph, LLM, Mistral, TogetherAI, PostgreSQL, AWS EC2, Docker,
              ChromaDB, Slack API, Ngrok
            </p>
          </Card>

          <Card
            title="AI/CV Intern"
            subtitle="Centrifuge LLC"
            org="Centrifuge LLC"
            location="Reston, VA, USA"
            dates="Jun 2024 – Aug 2024"
            roleType="Internship"
          >
            <ul className="list-disc ms-5 space-y-1">
              <li>
                Developed real-time object detection with YOLOv8 on AWS EC2, processing thousands of
                IP camera frames daily.
              </li>
              <li>
                Implemented multithreaded processing for 5× throughput; cut delays across 100k+
                tracked events.
              </li>
              <li>
                Stored detections in PostgreSQL and S3; containerized with Docker and Kafka to
                streamline pipelines and response efficiency.
              </li>
            </ul>
            <p className="mt-2 text-xs" style={{ color: "var(--hh-muted)" }}>
              Tools: Python 3.x, YOLOv8, AWS EC2, AWS S3, PostgreSQL, Docker, GitHub, Bash, DBeaver,
              Kafka, Colab
            </p>
          </Card>

          <Card
            title="API Security Intern"
            subtitle="Corsha"
            org="Corsha"
            location="Tysons Corner, VA, USA"
            dates="Jul 2019 – Aug 2020"
            roleType="Internship"
          >
            <ul className="list-disc ms-5 space-y-1">
              <li>
                Streamlined automation for security vulnerability testing for federal contracts using
                Jenkins, Kubernetes, and Docker in Linux.
              </li>
              <li>
                Collaborated with stakeholders on detection strategies; managed lifecycle with Jira
                in Agile sprints.
              </li>
              <li>
                Implemented 40+ automated test routines in Shell; packaged via Docker; deployed on
                Kubernetes for robust load simulation.
              </li>
            </ul>
            <p className="mt-2 text-xs" style={{ color: "var(--hh-muted)" }}>
              Tools: Linux Ubuntu, Bash, Shell Script, Kubernetes, Jenkins, GitHub
            </p>
          </Card>
        </div>

        {/* Education */}
        <h2
          className="text-2xl mt-10 mb-4"
          style={{ fontFamily: "var(--font-syne)", fontWeight: 700, color: "var(--hh-text)" }}
        >
          Education
        </h2>
        <div className="grid gap-5">
          <Card
            title="University of Virginia"
            subtitle="Bachelor's, Computer Science"
            org="University of Virginia"
            dates="May 2022 – May 2026"
          >
            <p>GPA: 3.87</p>
          </Card>
        </div>

        {/* Projects & Outside Experience */}
        <h2
          className="text-2xl mt-10 mb-4"
          style={{ fontFamily: "var(--font-syne)", fontWeight: 700, color: "var(--hh-text)" }}
        >
          Projects &amp; Outside Experience
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          <Card
            title="ML4VA — NOVA Car Crash Hotspot Severity Prediction"
            subtitle="ML Developer"
            location="Charlottesville, VA, USA"
            dates="Aug 2024 – Dec 2024"
            links={[
              {
                href: "https://github.com/emilyzyzhou/ML4VA_CrashHotspotDetection",
                label: "GitHub",
              },
            ]}
          >
            <ul className="list-disc ms-5 space-y-1">
              <li>
                Co-developed an ML pipeline to identify high-risk roadways in Northern Virginia
                (VDOT data) for safety/infrastructure planning.
              </li>
              <li>
                Trained/optimized Random Forest models to predict crash severity (RMSE: 0.94) and
                classify road defects (F1: 0.96), beating a NN baseline.
              </li>
            </ul>
            <p className="mt-2 text-xs" style={{ color: "var(--hh-muted)" }}>
              Tools: Python, Pandas, scikit-learn, TensorFlow, Random Forest (Classifier/Regressor),
              Matplotlib, Seaborn
            </p>
          </Card>

          <Card
            title="Hoos Reporting Honor"
            subtitle="Scrum Master, Lead Dev"
            location="Charlottesville, VA, USA"
            dates="Jan 2024 – May 2024"
            links={[
              { href: "https://github.com/emilyzyzhou/HoosReportingHonor", label: "GitHub" },
            ]}
          >
            <ul className="list-disc ms-5 space-y-1">
              <li>Led a 5-person Agile team to build a Django-based honor reporting app (Heroku).</li>
              <li>Designed PostgreSQL models, Bootstrap UI; integrated AWS S3 for scalable storage.</li>
              <li>Automated CI/CD on Heroku with GitHub integration.</li>
            </ul>
            <p className="mt-2 text-xs" style={{ color: "var(--hh-muted)" }}>
              Tools: Python, Django, Heroku, AWS S3, PostgreSQL, Bootstrap, GitHub, Figma
            </p>
          </Card>
        </div>

        {/* CTA row */}
        <div className="mt-10 flex gap-3">
          <Link href="/resume" className="btn-accent">
            View Resume
          </Link>
          {/*<Link href="/contact" className="btn-outline">*/}
          {/*  Contact*/}
          {/*</Link>*/}
        </div>
      </section>
    </main>
  );
}
