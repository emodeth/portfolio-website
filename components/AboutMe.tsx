import {
  IoIosDocument,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMdBusiness,
  IoMdMail,
} from "react-icons/io";
import type { IconType } from "react-icons";
import type { AboutMe } from "@/lib/queries";

const InlineLink = ({
  href,
  icon: Icon,
  children,
}: {
  href: string;
  icon: IconType;
  children: React.ReactNode;
}) => {
  const isExternal = href.startsWith("http") || href.endsWith(".pdf");

  return (
    <a
      className="inline-flex items-baseline gap-1 font-semibold text-foreground underline decoration-foreground/40 underline-offset-4 transition-colors hover:decoration-foreground focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      href={href}
      {...(isExternal && { target: "_blank", rel: "noreferrer" })}
    >
      <Icon className="relative top-[2px] shrink-0" aria-hidden="true" />
      {children}
    </a>
  );
};

const AboutMe = ({ data }: { data: AboutMe }) => {
  return (
    <section className="flex max-w-full flex-col font-sans">
      <header className="flex flex-col">
        <h1 className="text-wrap-balance text-[16px] font-semibold leading-[22px] tracking-tight text-foreground">
          {data.name}
        </h1>
        <p className="text-[16px] font-normal leading-[22px] text-muted-foreground">
          {data.role}
        </p>
      </header>

      <div className="mt-5 space-y-4 text-pretty text-sm font-normal leading-6 text-muted-foreground">
        <p>
          Frontend-focused Software Engineer at{" "}
          <InlineLink href="https://sevenapps.co" icon={IoMdBusiness}>
            SevenApps
          </InlineLink>
          , based in Istanbul, Türkiye. I build end-to-end applications with
          React, Next.js, and modern backend stacks, with a focus on clean
          architecture and fast, polished user experiences.
        </p>

        <p>
          Reach me via{" "}
          <InlineLink href={`mailto:${data.email}`} icon={IoMdMail}>
            email
          </InlineLink>
{" "}
          or{" "}
          <InlineLink
            href="https://www.linkedin.com/in/emirhan-keskin-dev/"
            icon={IoLogoLinkedin}
          >
            LinkedIn
          </InlineLink>
          , see my code on{" "}
          <InlineLink href={data.githubUrl} icon={IoLogoGithub}>
            GitHub
          </InlineLink>
          , or view my{" "}
          <InlineLink href={data.resumeUrl} icon={IoIosDocument}>
            resume
          </InlineLink>
          .
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
